(() => {
  const questions = [
    ['¿Qué oficio tenía Lidia?', 'Vendía púrpura', 'Hacía tiendas', 'Pescaba', 'Cuidaba ovejas', 'Hechos 16:14'],
    ['¿En qué río se lavó Naamán?', 'Jordán', 'Nilo', 'Éufrates', 'Tigris', '2 Reyes 5:14'],
    ['¿A quién encontró Felipe en el camino a Gaza?', 'Un funcionario etíope', 'Un cobrador romano', 'Un pescador galileo', 'Un pastor de Belén', 'Hechos 8:26-27'],
    ['¿Con qué nombre conocían a Tabita en griego?', 'Dorcas', 'Lidia', 'Priscila', 'Febe', 'Hechos 9:36'],
    ['¿A qué isla llegaron Pablo y los demás náufragos?', 'Malta', 'Creta', 'Chipre', 'Patmos', 'Hechos 28:1'],
    ['¿Quién encontró el libro de la ley en el templo?', 'Hilcías', 'Samuel', 'Natán', 'Esdras', '2 Reyes 22:8'],
    ['¿Qué instrumento tocaba David para aliviar a Saúl?', 'Arpa', 'Flauta', 'Trompeta', 'Pandero', '1 Samuel 16:23'],
    ['¿En qué ciudad llamaron cristianos por primera vez a los discípulos?', 'Antioquía', 'Corinto', 'Éfeso', 'Roma', 'Hechos 11:26']
  ];

  const score = document.querySelector('#score');
  const question = document.querySelector('#question');
  const targets = document.querySelector('#targets');
  const feedback = document.querySelector('#feedback');
  const next = document.querySelector('#continue');
  let index = -1;
  let lives = 3;
  let points = 0;

  function updateScore() {
    score.textContent = `Vidas: ${lives} · Puntos: ${points}`;
  }

  next.addEventListener('click', () => {
    if (lives === 0 || index === questions.length) {
      index = -1;
      lives = 3;
      points = 0;
    }
    index++;
    feedback.textContent = '';
    updateScore();
    if (index === questions.length) {
      question.textContent = '¡Completaste todas las preguntas!';
      next.textContent = 'Volver a jugar';
      question.focus();
      return;
    }

    const [prompt, correct, ...options] = questions[index];
    const reference = options.pop();
    options.splice(Math.floor(Math.random() * 4), 0, correct);
    question.textContent = prompt;
    for (const option of options) {
      const target = document.createElement('button');
      target.type = 'button';
      target.textContent = option;
      target.addEventListener('click', () => {
        const hit = option === correct;
        if (hit) points += 10;
        else lives--;
        updateScore();
        feedback.textContent = hit
          ? `¡Acertaste! ${reference}.`
          : `La respuesta era ${correct}. ${reference}.`;
        if (!lives) question.textContent = 'Se terminaron las vidas';
        next.textContent = !lives ? 'Volver a jugar' : index + 1 === questions.length ? 'Ver resultado' : 'Siguiente pregunta';
        next.hidden = false;
        next.focus();
        targets.replaceChildren();
      });
      targets.append(target);
    }
    next.hidden = true;
    question.focus();
  });

  updateScore();
})();
