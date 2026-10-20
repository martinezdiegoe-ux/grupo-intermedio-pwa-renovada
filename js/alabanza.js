document.addEventListener("DOMContentLoaded", function () {

const datosAlabanzas = {

  alabanza1: {
    titulo: "Te lo debo a Ti",
    letra: `
I
Si vivo es porque Tú Vives,
Soy Salvo pues Tú me Salvaste,
Si canto Tú me diste alegría,
Si ando Tú me Levantaste.
Y es que tengo mil razones
Que declaran Tu Grandeza,
Lo que soy y lo que tengo
Te lo Debo a Ti.
    `,
    pdf: "pdf/Te-lo-debo-a-Ti.pdf",
    youtube: "https://youtu.be/58pJyGiIjeM"
  },

  alabanza2: {
    titulo: "Necesito de Ti",
    letra: `
Necesito de Ti
Muchas veces me pregunte
¿Qué quieres de mi Señor?
Pero no pude Señor soy muy débil
Necesito de Ti.
    `,
    pdf: "pdf/Necesito-de-Ti.pdf",
    youtube: "https://youtu.be/t2x339dtz9w"
  },

  alabanza3: {
    titulo: "Un Milagro",
    letra: `
Un Milagro
Si tan solo tocare sus vestiduras
Un milagro hoy recibiría.
    `,
    pdf: "pdf/Un-Milagro.pdf",
    youtube: "https://youtu.be/PndoQfL6eps"
  }

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id || !datosAlabanzas[id]) return;

const data = datosAlabanzas[id];

document.getElementById("titulo-alabanza").textContent = data.titulo;
document.getElementById("texto-letra").innerText = data.letra;
document.getElementById("btn-pdf").href = data.pdf;
document.getElementById("btn-youtube").href = data.youtube;

});
