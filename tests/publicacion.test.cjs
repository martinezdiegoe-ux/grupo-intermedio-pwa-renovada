const assert = require('node:assert/strict');
const { readFileSync, readdirSync, statSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => readFileSync(path.join(root, file), 'utf8');
const site = new URL('https://example.test/app/');

function localFile(reference, source) {
  const value = reference.trim();
  if (!value || value.startsWith('#')) return;
  const url = new URL(value, new URL(source, site));
  if (url.origin !== site.origin || !url.pathname.startsWith(site.pathname)) return;
  const target = decodeURIComponent(url.pathname.slice(site.pathname.length)) || 'index.html';
  assert.ok(statSync(path.join(root, target), { throwIfNoEntry: false })?.isFile(),
    `${source} apunta a un archivo que falta: ${reference}`);
}

test('los enlaces internos y archivos de la app existen', () => {
  for (const file of readdirSync(root).filter(name => name.endsWith('.html'))) {
    const html = read(file).replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script>/gi, match => match.startsWith('<!--') ? '' : match.slice(0, match.indexOf('>') + 1));
    for (const [, reference] of html.matchAll(/<(?:a|link|script|img|audio|video|source|iframe)\b[^>]*?\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi)) {
      localFile(reference, file);
    }
  }
  for (const name of readdirSync(path.join(root, 'css')).filter(file => file.endsWith('.css'))) {
    const file = 'css/' + name;
    for (const [, reference] of read(file).matchAll(/url\(\s*["']?([^"'()]+)["']?\s*\)/gi)) localFile(reference, file);
  }
  const app = { window: {} };
  for (const file of ['js/alabanzas-data.js', 'js/biblioteca-data.js', 'js/revista-data.js', 'js/meditaciones-data.js']) {
    vm.runInNewContext(read(file), app);
  }
  for (const song of app.window.VOZ_ALABANZAS) {
    localFile(song.pdf, 'alabanzas.html');
    if (song.audio) localFile(song.audio, 'alabanzas.html');
  }
  for (const book of app.window.VOZ_BIBLIOTECA) localFile(book.file, 'biblioteca.html');
  for (const issue of app.window.VOZ_REVISTAS) {
    localFile(issue.portada, 'voz-juvenil.html');
    localFile(issue.pdf, 'voz-juvenil.html');
    for (let page = 1; page <= issue.paginas; page++) {
      localFile(app.window.VOZ_REVISTA_LECTURA.pagePath(issue, page), 'revista-leer.html');
    }
  }
  for (const item of app.window.VOZ_MEDITACIONES) {
    if (item.date != null) validDate(item.date, item.id);
    if (item.audio) localFile(item.audio, 'meditaciones.html');
  }
});

function validDate(date, title) {
  assert.match(date, /^\d{4}-\d{2}-\d{2}$/, title);
  const parsed = new Date(date);
  assert.ok(Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date, `Fecha inválida: ${title} (${date})`);
}

function loadEntries(file, expression) {
  const node = { append() {}, replaceChildren() {}, addEventListener() {} };
  const document = { getElementById: () => node, createElement: () => node };
  return vm.runInNewContext(read(file) + '\n' + expression, { document, TextEncoder });
}

test('la agenda y los avisos tienen fechas válidas', () => {
  const events = loadEntries('js/cronograma.js', 'events');
  for (const event of events) {
    validDate(event.fecha, event.titulo);
    assert.match(event.hora, /^(?:[01]\d|2[0-3]):[0-5]\d$/, event.titulo);
    if (event.mapUrl) assert.ok(['http:', 'https:'].includes(new URL(event.mapUrl).protocol), event.titulo);
  }
  for (const notice of loadEntries('js/comunicados.js', 'items')) {
    validDate(notice.fecha, notice.texto);
    if (notice.hasta != null) {
      validDate(notice.hasta, notice.texto);
      assert.ok(notice.hasta >= notice.fecha, notice.texto);
    }
  }
});

test('el calendario conserva la hora argentina y los caracteres del encuentro', () => {
  const calendar = loadEntries('js/cronograma.js', 'eventCalendar');
  const file = calendar({
    fecha: '2026-12-04', hora: '22:30', titulo: 'Reunión; jóvenes',
    comentario: 'Primera línea\nSegunda línea', direccion: 'San Martín, 56', filial: 'Santa Fe'
  }, new Date('2026-11-24T14:00:00Z'));
  assert.ok(file.includes('DTSTART:20261205T013000Z\r\n'));
  assert.ok(file.includes('SUMMARY:Reunión\\; jóvenes'));
  assert.ok(file.includes('DESCRIPTION:Primera línea\\nSegunda línea'));
  assert.ok(file.includes('LOCATION:San Martín\\, 56 · Santa Fe'));
});
