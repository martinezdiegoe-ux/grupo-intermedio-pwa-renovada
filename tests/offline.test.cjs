const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');
const path = require('node:path');

test('los enlaces con parámetros conservan su página al navegar sin conexión', async () => {
  const base = new URL('https://example.test/conectados/');
  const handlers = {};
  const entries = new Set();
  const resolve = request => new URL(request.url || request, base).href;
  function add(request) {
    const url = new URL(resolve(request));
    const file = url.pathname.slice(base.pathname.length);
    assert.ok(existsSync(path.join(__dirname, '..', file)), file);
    entries.add(url.href);
  }

  vm.runInNewContext(readFileSync(require.resolve('../service-worker.js'), 'utf8'), {
    URL, Response,
    Request: class { constructor(file) { this.url = resolve(file); } },
    self: {
      location: base,
      addEventListener: (name, handler) => { handlers[name] = handler; },
      skipWaiting() {}
    },
    caches: {
      open: async () => ({ add, addAll: async requests => requests.forEach(add) }),
      match: async request => entries.has(resolve(request)) ? resolve(request) : undefined
    },
    fetch: async () => { throw new Error('Sin conexión'); }
  });
  let installation;
  handlers.install({ waitUntil: promise => { installation = promise; } });
  await installation;

  function navigate(file) {
    let response;
    handlers.fetch({
      request: { url: resolve(file), method: 'GET', mode: 'navigate' },
      respondWith: promise => { response = promise; }
    });
    return response;
  }

  assert.equal(await navigate('app.html?page=index.html'), resolve('app.html'));
  assert.equal(await navigate('biblia.html?libro=43&capitulo=3&versiculo=16'), resolve('biblia.html'));
  assert.equal(await navigate('lectura.html?dia=328'), resolve('lectura.html'));
  assert.ok(entries.has(resolve('js/cronograma.js?v=32')));
  assert.ok(entries.has(resolve('js/comunicados.js?v=32')));
  assert.equal((await navigate('sin-guardar.html?dia=1')).status, 503);
});
