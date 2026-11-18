const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const assert = require('node:assert/strict');
const test = require('node:test');

test('la puntería suma puntos, descuenta vidas y permite reiniciar', () => {
  function element() {
    return {
      children: [],
      addEventListener(type, callback) { this[type] = callback; },
      append(child) { this.children.push(child); },
      replaceChildren() { this.children = []; },
      focus() {}
    };
  }

  const elements = Object.fromEntries(
    ['score', 'question', 'targets', 'feedback', 'continue'].map(id => [`#${id}`, element()])
  );
  const document = { querySelector: selector => elements[selector], createElement: element };
  runInNewContext(readFileSync(join(__dirname, '../js/punteria-biblica.js'), 'utf8'), { document });
  const next = elements['#continue'];
  const targets = elements['#targets'];
  const score = elements['#score'];

  next.click();
  assert.equal(targets.children.length, 4);
  targets.children.find(button => button.textContent === 'Vendía púrpura').click();
  assert.equal(score.textContent, 'Vidas: 3 · Puntos: 10');
  assert.equal(targets.children.length, 0);

  for (const answer of ['Nilo', 'Un cobrador romano', 'Febe']) {
    next.click();
    targets.children.find(button => button.textContent === answer).click();
  }
  assert.equal(score.textContent, 'Vidas: 0 · Puntos: 10');
  assert.equal(next.textContent, 'Volver a jugar');
  next.click();
  assert.equal(score.textContent, 'Vidas: 3 · Puntos: 0');
  assert.equal(targets.children.length, 4);
});
