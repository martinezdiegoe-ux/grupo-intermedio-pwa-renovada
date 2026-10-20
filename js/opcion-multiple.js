const respuestasCorrectas = {
  q1: "C",
  q2: "C",
  q3: "C",
  q4: "C",
  q5: "C",
  q6: "B",
  q7: "C",
  q8: "C",
  q9: "B",
  q10: "C"
};

function validar() {
  let aciertos = 0;
  const total = Object.keys(respuestasCorrectas).length;

  for (let key in respuestasCorrectas) {
    const seleccion = document.querySelector(`input[name="${key}"]:checked`);
    const bloque = document
      .querySelector(`input[name="${key}"]`)
      ?.closest(".pregunta");

    if (!bloque) continue;

    if (seleccion && seleccion.value === respuestasCorrectas[key]) {
      aciertos++;
      bloque.classList.add("ok");
      bloque.classList.remove("error");
    } else {
      bloque.classList.add("error");
      bloque.classList.remove("ok");
    }
  }

  let mensaje = "";

  if (aciertos <= 3) {
    mensaje = "📖 Seguí estudiando la Palabra, Dios siempre tiene más para enseñarte.";
  } else if (aciertos <= 6) {
    mensaje = "🙂 Buen comienzo, pero todavía hay espacio para crecer.";
  } else if (aciertos <= 8) {
    mensaje = "💪 Muy bien, estás firme en el conocimiento bíblico.";
  } else if (aciertos === 9) {
    mensaje = "🔥 ¡Sobresaliente! Gran manejo de la Palabra.";
  } else {
    mensaje = "🏆 ¡Excelente! Conocés muy bien la verdad bíblica.";
  }

  document.getElementById("texto-resultado").innerHTML = `
    <p><strong>Resultado:</strong> ${aciertos} / ${total}</p>
    <p>${mensaje}</p>
  `;

  document
    .getElementById("resultado")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
