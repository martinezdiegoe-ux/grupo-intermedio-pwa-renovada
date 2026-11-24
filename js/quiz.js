(() => {
  'use strict';
  const questions = [...document.querySelectorAll('#quiz .pregunta')];
  const correctAnswers = questions.map(question => {
    const answer = question.querySelector('[data-correct]');
    const feedback = question.querySelector('.quiz-feedback');
    feedback.querySelector('span').textContent = answer.labels[0].textContent.trim();
    return { question, answer, feedback };
  });

  document.getElementById('quiz-check').addEventListener('click', () => {
    let score = 0;
    for (const { question, answer, feedback } of correctAnswers) {
      if (answer.checked) score++;
      question.classList.toggle('ok', answer.checked);
      question.classList.toggle('error', !answer.checked);
      feedback.hidden = answer.checked;
    }

    let message;
    if (score <= 3) message = '📖 Seguí estudiando la Palabra, Dios siempre tiene más para enseñarte.';
    else if (score <= 6) message = '🙂 Buen comienzo, pero todavía hay espacio para crecer.';
    else if (score <= 8) message = '💪 Muy bien, estás firme en el conocimiento bíblico.';
    else if (score === 9) message = '🔥 ¡Sobresaliente! Gran manejo de la Palabra.';
    else message = '🏆 ¡Excelente! Conocés muy bien la verdad bíblica.';

    const summary = document.createElement('p');
    const label = document.createElement('strong');
    label.textContent = 'Resultado:';
    summary.append(label, ` ${score} / ${questions.length}`);
    const note = document.createElement('p');
    note.textContent = message;
    document.getElementById('texto-resultado').replaceChildren(summary, note);
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
