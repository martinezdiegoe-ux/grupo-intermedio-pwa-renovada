const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const assert = require('node:assert/strict');
const test = require('node:test');

test('la puntería suma puntos, descuenta vidas y permite reiniciar', () => {
  function element() {
    return {
      children: [],
      dataset: {},
      addEventListener(type, callback) { this[type] = callback; },
      append(child) { this.children.push(child); },
      replaceChildren() { this.children = []; },
      focus() {},
      toggleAttribute() {}
    };
  }

  const elements = Object.fromEntries(
    ['score', 'question', 'targets', 'feedback', 'continue', 'timed', 'timed-option', 'clock', 'seconds', 'time-left']
      .map(id => [`#${id}`, element()])
  );
  const document = { querySelector: selector => elements[selector], createElement: element };
  let now = 0;
  let tick;
  runInNewContext(readFileSync(join(__dirname, '../js/punteria-biblica.js'), 'utf8'), {
    document, Date: { now: () => now },
    setInterval: callback => { tick = callback; },
    clearInterval: () => { tick = undefined; }
  });
  const next = elements['#continue'];
  const targets = elements['#targets'];
  const score = elements['#score'];

  next.click();
  assert.equal(targets.children.length, 4);
  targets.children.find(button => button.textContent === 'Vendía púrpura').click();
  assert.equal(score.textContent, 'Vidas: 3 · Puntos: 10 · Racha: 1');
  assert.equal(targets.children.length, 0);

  for (const answer of ['Nilo', 'Un cobrador romano', 'Febe']) {
    next.click();
    targets.children.find(button => button.textContent === answer).click();
  }
  assert.equal(score.textContent, 'Vidas: 0 · Puntos: 10 · Racha: 0');
  assert.equal(next.textContent, 'Volver a jugar');
  elements['#timed'].checked = true;
  next.click();
  assert.equal(score.textContent, 'Vidas: 3 · Puntos: 0 · Racha: 0');
  assert.equal(targets.children.length, 4);
  assert.equal(elements['#time-left'].value, 15);
  now = 15_000;
  tick();
  assert.equal(score.textContent, 'Vidas: 2 · Puntos: 0 · Racha: 0');
  assert.match(elements['#feedback'].textContent, /se acabó el tiempo/i);
  assert.equal(tick, undefined);
});
