const gridElement = document.getElementById("grid");

// MATRICES
const size = 11;
const statusElement = document.getElementById("crossword-status");
let solved = 0;
const grid = Array.from({ length: size }, () => Array(size).fill(""));
const celdasValidas = Array.from({ length: size }, () => Array(size).fill(false));
const numerosInicio = {};

// PALABRAS (SEGÚN PDF)
const palabras = {
  1:  { texto: "NOE",        fila: 6, col: 2, dir: "V" },
  2:  { texto: "JOB",        fila: 9, col: 1, dir: "V" },
  3:  { texto: "BELEN",      fila: 11, col: 1, dir: "H" },
  4:  { texto: "JERUSALEN",  fila: 2, col: 8, dir: "V" },
  5:  { texto: "FE",         fila: 3, col: 7, dir: "H" },
  6:  { texto: "SION",       fila: 6, col: 8, dir: "H" },
  7:  { texto: "ENOC",       fila: 8, col: 2, dir: "H" },
  8:  { texto: "SALVACION",  fila: 3, col: 5, dir: "V" },
  9:  { texto: "ARCA",       fila: 7, col: 5, dir: "H" },
  10: { texto: "AMOR",       fila: 2, col: 3, dir: "V" },
  11: { texto: "ORAR",       fila: 4, col: 3, dir: "H" },
  12: { texto: "PECADO",     fila: 1, col: 10, dir: "V" },
  13: { texto: "JESUS",      fila: 9, col: 7, dir: "H" }
};

// MARCAR CELDAS VALIDAS + NUMEROS
function marcarCeldasValidas() {
  Object.entries(palabras).forEach(([num, p]) => {
    let r = p.fila - 1;
    let c = p.col - 1;

    numerosInicio[`${r}-${c}`] = num;

    for (let i = 0; i < p.texto.length; i++) {
      celdasValidas[r][c] = true;
      if (p.dir === "H") c++;
      else r++;
    }
  });
}

// COLOCAR PALABRA
function colocarPalabra(p) {
  let r = p.fila - 1;
  let c = p.col - 1;

  for (let i = 0; i < p.texto.length; i++) {
    grid[r][c] = p.texto[i];
    if (p.dir === "H") c++;
    else r++;
  }
}

// VALIDAR
function validar(num) {
  const input = document.getElementById(`resp-${num}`);
  if (input.disabled) return;
  const boton = input.nextElementSibling;
  const valor = input.value.trim().toUpperCase().normalize("NFD").replace(/\p{M}/gu, "");
  const palabra = palabras[num];

  if (valor === palabra.texto || (num === 4 && valor === "JERUSALEM")) {
    colocarPalabra(palabra);
    renderGrid();
    input.disabled = true;
    input.removeAttribute("aria-invalid");
    boton.disabled = true;
    boton.textContent = "Resuelta";
    solved++;
    statusElement.textContent = `${solved} / ${Object.keys(palabras).length}`;
  } else {
    input.setAttribute("aria-invalid", "true");
    boton.textContent = "Reintentar";
    input.focus();
  }
}

// RENDER
function renderGrid() {
  gridElement.innerHTML = "";

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = document.createElement("div");
      cell.classList.add("celda");

      if (!celdasValidas[r][c]) {
        cell.classList.add("negra");
      } else {
        cell.classList.add("blanca");

        const key = `${r}-${c}`;
        if (numerosInicio[key]) {
          const num = document.createElement("span");
          num.className = "numero";
          num.textContent = numerosInicio[key];
          cell.appendChild(num);
        }

        if (grid[r][c]) {
          cell.classList.add("resuelta");
          cell.appendChild(document.createTextNode(grid[r][c]));
        }
      }

      gridElement.appendChild(cell);
    }
  }
}

// INIT
marcarCeldasValidas();
renderGrid();
