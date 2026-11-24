const assert = require('node:assert/strict');
const { test } = require('node:test');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');

test('la portada enlaza el próximo día pendiente', () => {
  const day = { textContent: '' };
  const link = { href: '' };
  const days = [
    { day: 319, month: 11, date: 15 },
    { day: 320, month: 11, date: 16 },
    { day: 321, month: 11, date: 17 }
  ];
  const FixedDate = class extends Date { constructor() { super('2026-11-16T12:00:00Z'); } };
  vm.runInNewContext(readFileSync(require.resolve('../js/home.js'), 'utf8'), {
    Date: FixedDate, window: { PLAN_365: days },
    localStorage: { getItem: () => '{"320":"2026-11-16"}' },
    document: { getElementById: id => id === 'home-reading-day' ? day : link }
  });
  assert.equal(day.textContent, '321');
  assert.equal(link.href, 'lectura.html?dia=321');
});

test('la portada muestra el plan completado sin anunciar una próxima lectura', () => {
  const elements = {
    'home-reading-day': { textContent: '' },
    'home-reading-prefix': { hidden: false }
  };
  vm.runInNewContext(readFileSync(require.resolve('../js/home.js'), 'utf8'), {
    window: { PLAN_365: [{ day: 1, month: 1, date: 1 }] },
    localStorage: { getItem: () => '{"1":"2026-01-01"}' },
    document: { getElementById: id => elements[id] }
  });
  assert.equal(elements['home-reading-day'].textContent, 'Plan completado');
  assert.equal(elements['home-reading-prefix'].hidden, true);
});
