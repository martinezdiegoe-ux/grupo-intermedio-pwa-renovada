const assert = require('node:assert/strict');
const { test } = require('node:test');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const { validateBackup } = require('../js/mis-datos.js');

test('acepta una copia válida sin alterar sus datos', () => {
  const data = { version: 1, plan: { 1: '2026-01-01', 365: '2026-12-31' }, note: 'Una nota privada', playlist: ['himno_1'] };
  assert.equal(validateBackup(data), data);
});

test('rechaza datos que podrían reemplazar el estado local con valores inválidos', () => {
  const base = { version: 1, plan: {}, note: '', playlist: [] };
  assert.throws(() => validateBackup({ ...base, plan: { 366: '2026-01-01' } }));
  assert.throws(() => validateBackup({ ...base, plan: { 1: '2026-02-30' } }));
  assert.throws(() => validateBackup({ ...base, note: {} }));
  assert.throws(() => validateBackup({ ...base, playlist: ['uno', 'uno'] }));
  assert.throws(() => validateBackup({ ...base, version: 2 }));
});

test('restaura los datos anteriores si falla el guardado', async () => {
  const saved = new Map([
    ['voz-juvenil-plan-anual-pdf-v1', '{"1":"2026-01-01"}'],
    ['voz-juvenil-oracion', 'Nota anterior'],
    ['conectados-playlist-v1', '["alabanza1"]']
  ]);
  const handlers = {};
  let failOnce = true;
  const elements = Object.fromEntries(['backup-status', 'backup-export', 'backup-import-trigger', 'backup-import'].map(id =>
    [id, { textContent: '', addEventListener: (name, handler) => { handlers[id + ':' + name] = handler; } }]));
  vm.runInNewContext(readFileSync(require.resolve('../js/mis-datos.js'), 'utf8'), {
    document: { getElementById: id => elements[id] },
    localStorage: {
      getItem: key => saved.get(key) ?? null,
      setItem: (key, value) => {
        if (key === 'voz-juvenil-oracion' && failOnce) { failOnce = false; throw new Error('Sin espacio'); }
        saved.set(key, value);
      },
      removeItem: key => saved.delete(key)
    },
    confirm: () => true,
    window: { parent: { postMessage() {} } },
    location: { origin: 'https://example.test' }
  });
  const file = { size: 100, text: async () => JSON.stringify({ version: 1, plan: { 2: '2026-01-02' }, note: 'Nueva nota', playlist: [] }) };
  await handlers['backup-import:change']({ target: { files: [file], value: 'backup.json' } });
  assert.equal(saved.get('voz-juvenil-plan-anual-pdf-v1'), '{"1":"2026-01-01"}');
  assert.equal(saved.get('voz-juvenil-oracion'), 'Nota anterior');
  assert.equal(saved.get('conectados-playlist-v1'), '["alabanza1"]');
});
