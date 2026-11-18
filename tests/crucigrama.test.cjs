const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { runInNewContext } = require('node:vm');
const test = require('node:test');

test('las pistas llenan la grilla sin sobrescribir letras en los cruces', () => {
  const node = () => ({ appendChild() {}, classList: { add() {} } });
  const context = { document: { getElementById: node, createElement: node, createTextNode: node } };
  const source = readFileSync(join(__dirname, '../js/crucigrama.js'), 'utf8');
  const { grid, palabras } = runInNewContext(`${source}\n
    Object.values(palabras).forEach(colocarPalabra);
    ({ grid, palabras });
  `, context);

  for (const { fila, col, dir, texto } of Object.values(palabras)) {
    const filled = Array.from(texto, (_, offset) =>
      grid[fila - 1 + (dir === 'V' ? offset : 0)][col - 1 + (dir === 'H' ? offset : 0)]
    ).join('');
    assert.equal(filled, texto);
  }
});
