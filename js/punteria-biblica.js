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
  const timed = document.querySelector('#timed');
  const timedOption = document.querySelector('#timed-option');
  const clock = document.querySelector('#clock');
  const seconds = document.querySelector('#seconds');
  const timeLeft = document.querySelector('#time-left');
  const roundSeconds = 15;
  let index = -1;
  let lives = 3;
  let points = 0;
  let streak = 0;
  let timer;
  let deadline;

  function updateScore() {
    score.textContent = `Vidas: ${lives} · Puntos: ${points} · Racha: ${streak}`;
  }

  next.addEventListener('click', () => {
    if (lives === 0 || index === questions.length) {
      index = -1;
      lives = 3;
      points = 0;
      streak = 0;
    }
    index++;
    feedback.textContent = '';
    updateScore();
    if (index === questions.length) {
      question.textContent = '¡Completaste todas las preguntas!';
      next.textContent = 'Volver a jugar';
      timedOption.hidden = false;
      question.focus();
      return;
    }

    const [prompt, correct, ...options] = questions[index];
    const reference = options.pop();
    options.splice(Math.floor(Math.random() * 4), 0, correct);
    question.textContent = prompt;
    timedOption.hidden = true;
    next.hidden = true;

    function finish(option) {
      clearInterval(timer);
      clock.hidden = true;
      const hit = option === correct;
      if (hit) {
        points += 10;
        streak++;
      } else {
        lives--;
        streak = 0;
      }
      updateScore();
      feedback.dataset.result = hit ? 'hit' : 'miss';
      const result = hit ? '¡Acierto! +10 puntos.' : option ? '¡Fallaste!' : '¡Se acabó el tiempo!';
      feedback.textContent = hit ? `${result} ${reference}.` : `${result} La respuesta era ${correct}. ${reference}.`;
      if (!lives) {
        question.textContent = 'Se terminaron las vidas';
        timedOption.hidden = false;
      }
      next.textContent = !lives ? 'Volver a jugar' : index + 1 === questions.length ? 'Ver resultado' : 'Siguiente pregunta';
      next.hidden = false;
      next.focus();
      targets.replaceChildren();
    }

    for (const option of options) {
      const target = document.createElement('button');
      target.type = 'button';
      target.textContent = option;
      target.addEventListener('click', () => finish(!timed.checked || Date.now() < deadline ? option : undefined));
      targets.append(target);
    }
    if (timed.checked) {
      clock.hidden = false;
      deadline = Date.now() + roundSeconds * 1000;
      const tick = () => {
        const remaining = Math.max(0, (deadline - Date.now()) / 1000);
        timeLeft.value = remaining;
        seconds.textContent = `${Math.ceil(remaining)} s`;
        clock.toggleAttribute('data-urgent', remaining <= 5);
        if (remaining === 0) finish();
      };
      tick();
      timer = setInterval(tick, 100);
    }
    question.focus();
  });

  updateScore();
})();
