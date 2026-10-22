(function () {
  'use strict';
  const days = window.PLAN_365;
  const key = 'voz-juvenil-plan-anual-pdf-v1';
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const groups = months.map((name, index) => days.filter(day => day.month === index + 1));
  const blocks = groups.length;
  const $ = id => document.getElementById(id);
  let biblePromise;
  let audio = null;
  let audioGeneration = 0;
  const audioStatus = $('lectura-audio-estado');
  const inShell = window.parent !== window && window.frameElement?.id === 'site-frame';

  function announceAudio(message) { audioStatus.textContent = message; }
  function updateAudioButtons() {
    document.querySelectorAll('[data-reading-audio]').forEach(button => {
      const active = audio?.key === button.dataset.readingAudio;
      button.textContent = active ? (audio.paused ? '▶ Continuar' : '⏸ Pausar') : '▶ Escuchar';
      button.setAttribute('aria-label', `${active ? (audio.paused ? 'Continuar' : 'Pausar') : 'Escuchar'} ${button.dataset.reference}`);
    });
    document.querySelectorAll('[data-reading-stop]').forEach(button => {
      button.hidden = audio?.key !== button.dataset.readingStop;
    });
  }
  function stopAudio(message = '') {
    audioGeneration++;
    audio = null;
    if (inShell) window.parent.postMessage({ type: 'voz-bible-reading-stop' }, location.origin);
    announceAudio(message);
    updateAudioButtons();
  }
  async function toggleAudio(reading, key) {
    if (audio?.key === key) {
      window.parent.postMessage({ type: 'voz-bible-reading-toggle' }, location.origin);
      return;
    }
    audioGeneration++;
    const generation = audioGeneration;
    announceAudio(`Preparando ${reading.reference}…`);
    try {
      biblePromise ||= fetch('datos/biblia-rv1960.json?v=23').then(response => {
        if (!response.ok) throw new Error('No se pudo cargar la Biblia');
        return response.json();
      }).catch(error => { biblePromise = null; throw error; });
      const bible = await biblePromise;
      if (generation !== audioGeneration) return;
      const verses = window.VOZ_LECTURA_AUDIO.versesForReading(reading, bible);
      if (inShell) window.parent.postMessage({ type: 'voz-bible-reading-start', key, reference: reading.reference, verses }, location.origin);
      else announceAudio('Abrí la app para escuchar la lectura.');
    } catch (_) {
      if (generation === audioGeneration) announceAudio(`No se pudo preparar ${reading.reference}. Comprobá la conexión e intentá otra vez.`);
    }
  }
  window.addEventListener('message', event => {
    if (!inShell || event.origin !== location.origin || event.source !== window.parent || event.data?.type !== 'voz-bible-reading-state') return;
    audio = event.data.active ? { key: event.data.key, reference: event.data.reference, paused: event.data.paused } : null;
    announceAudio(event.data.message || (audio ? `${audio.paused ? 'En pausa' : 'Leyendo'} ${audio.reference}.` : 'Podés escuchar cada pasaje con la voz de tu dispositivo.'));
    updateAudioButtons();
  });
  if (inShell) window.parent.postMessage({ type: 'voz-bible-reading-state-request' }, location.origin);
  let completed = {};
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      for (const [day, date] of Object.entries(parsed)) {
        if (/^\d+$/.test(day) && Number(day) >= 1 && Number(day) <= days.length && /^\d{4}-\d{2}-\d{2}$/.test(date)) completed[day] = date;
      }
    }
  } catch (_) { /* Storage may be unavailable; the plan remains usable. */ }

  const dateKey = date => {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  };
  function streak() {
    const dates = new Set(Object.values(completed));
    const cursor = new Date();
    if (!dates.has(dateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    let count = 0;
    while (dates.has(dateKey(cursor))) { count++; cursor.setDate(cursor.getDate() - 1); }
    return count;
  }
  function save() {
    try { localStorage.setItem(key, JSON.stringify(completed)); } catch (_) { /* In private browsing, state lasts for this visit. */ }
  }
  const selector = $('selector-bloque');
  for (let block = 0; block < blocks; block++) {
    const option = document.createElement('option');
    option.value = String(block);
    option.textContent = months[block];
    selector.append(option);
  }
  let calendarDate = new Date();
  let currentBlock = calendarDate.getMonth();
  const todayReading = () => groups[calendarDate.getMonth()].find(day => day.date === calendarDate.getDate());
  const nextPending = () => {
    const start = todayReading()?.day || groups[calendarDate.getMonth()][0].day;
    return days.find(day => day.day >= start && !completed[day.day]) || days.find(day => !completed[day.day]);
  };

  function updateSummary() {
    const count = Object.keys(completed).length;
    const percent = Math.round(count / days.length * 1000) / 10;
    $('porcentaje-lectura').textContent = `${percent}%`;
    $('dias-completados').textContent = count;
    $('racha-lectura').textContent = streak();
    $('dias-pendientes').textContent = days.length - count;
    $('barra-progreso').setAttribute('aria-valuenow', String(count));
    $('relleno-progreso').style.width = `${percent}%`;
    $('ir-pendiente').textContent = nextPending() ? `Ir al día ${nextPending().day}` : 'Plan completado';
    $('ir-pendiente').disabled = !nextPending();
  }
  function render() {
    selector.value = String(currentBlock);
    $('bloque-anterior').disabled = currentBlock === 0;
    $('bloque-siguiente').disabled = currentBlock === blocks - 1;
    const today = todayReading();
    $('calendario-actual').textContent = today
      ? `Mes en curso: ${months[calendarDate.getMonth()]}. Hoy, ${calendarDate.getDate()} de ${months[calendarDate.getMonth()].toLowerCase()}: día ${today.day} del plan.`
      : `Mes en curso: ${months[calendarDate.getMonth()]}. El plan de 365 días no tiene una lectura nueva para el ${calendarDate.getDate()} de ${months[calendarDate.getMonth()].toLowerCase()}.`;
    $('ir-hoy').textContent = today ? 'Ir a la lectura de hoy' : 'Ver el mes en curso';
    const slice = groups[currentBlock];
    const count = slice.filter(day => completed[day.day]).length;
    $('bloque-resumen').textContent = `Días ${slice[0].day}–${slice[slice.length - 1].day} · ${count} de ${slice.length} completados`;
    const fragment = document.createDocumentFragment();
    for (const day of slice) {
      const card = document.createElement('article');
      const isToday = day.day === today?.day;
      card.className = 'reading-card' + (completed[day.day] ? ' is-complete' : '') + (isToday ? ' is-today' : '');
      if (isToday) card.setAttribute('aria-current', 'date');
      const top = document.createElement('span'); top.className = 'reading-card-top';
      const number = document.createElement('span'); number.className = 'reading-day'; number.textContent = `DÍA ${day.day}`;
      if (isToday) { const badge = document.createElement('span'); badge.className = 'reading-today-badge'; badge.textContent = 'HOY'; top.append(number, badge); }
      else top.append(number);
      const check = document.createElement('input'); check.type = 'checkbox'; check.checked = Boolean(completed[day.day]);
      check.setAttribute('aria-label', `Día ${day.day}: ${day.passage}. Marcar lectura completada`);
      check.addEventListener('change', () => {
        if (check.checked) completed[day.day] = dateKey(new Date()); else delete completed[day.day];
        save(); updateSummary(); render();
        $('dias-lectura').querySelector(`[data-day="${day.day}"] input`)?.focus();
        $('progreso-lectura').textContent = `Día ${day.day} ${check.checked ? 'completado' : 'pendiente'}. ${Object.keys(completed).length} de 365 días completados.`;
      });
      card.dataset.day = String(day.day);
      const passage = document.createElement('div'); passage.className = 'reading-passages';
      day.readings.forEach((reading, index) => {
        const reference = document.createElement('strong'); reference.textContent = reading.reference;
        const chapters = document.createElement('div'); chapters.className = 'reading-chapter-links';
        const separator = reading.reference.search(/[–-]/);
        const firstColon = reading.reference.indexOf(':');
        const startPart = separator < 0 ? reading.reference : reading.reference.slice(0, separator);
        const startVerseMatch = (separator < 0 || (firstColon >= 0 && firstColon < separator)) ? startPart.match(/(\d+):(\d+)$/) : null;
        for (let chapter = reading.chapter; chapter <= reading.endChapter; chapter++) {
          const link = document.createElement('a');
          const params = new URLSearchParams({libro:String(reading.book), capitulo:String(chapter)});
          const targetVerse = startVerseMatch && chapter === reading.chapter ? Number(startVerseMatch[2]) : 1;
          params.set('versiculo', String(targetVerse));
          link.href = `biblia.html?${params}`;
          const prefix = document.createElement('span'); prefix.textContent = 'Ir a';
          link.append(prefix, document.createTextNode(` ${chapter}:${targetVerse} ↗`));
          chapters.append(link);
        }
        const key = `${day.day}-${index}`;
        const actions = document.createElement('div'); actions.className = 'reading-audio-actions';
        const listen = document.createElement('button'); listen.type = 'button'; listen.className = 'reading-audio-button';
        listen.dataset.readingAudio = key; listen.dataset.reference = reading.reference;
        listen.addEventListener('click', () => toggleAudio(reading, key));
        const stop = document.createElement('button'); stop.type = 'button'; stop.className = 'reading-audio-button';
        stop.dataset.readingStop = key; stop.textContent = '■ Detener'; stop.hidden = true;
        stop.addEventListener('click', () => stopAudio(`Lectura de ${reading.reference} detenida.`));
        actions.append(listen, stop);
        passage.append(reference, chapters, actions);
      });
      const theme = document.createElement('small'); theme.textContent = day.theme;
      const status = document.createElement('span'); status.className = 'reading-status'; status.textContent = completed[day.day] ? '✓ Completado' : 'Marcar como leído';
      const toggle = document.createElement('label'); toggle.className = 'reading-toggle'; toggle.append(check, status);
      card.append(top, theme, passage, toggle); fragment.append(card);
    }
    $('dias-lectura').replaceChildren(fragment);
    updateAudioButtons();
  }
  selector.addEventListener('change', () => { currentBlock = Number(selector.value); render(); });
  $('bloque-anterior').addEventListener('click', () => { currentBlock--; render(); });
  $('bloque-siguiente').addEventListener('click', () => { currentBlock++; render(); });
  $('ir-pendiente').addEventListener('click', () => {
    const pending = nextPending(); if (!pending) return;
    currentBlock = pending.month - 1; render();
    const card = $('dias-lectura').querySelector(`[data-day="${pending.day}"]`);
    card?.querySelector('input')?.focus();
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  $('ir-hoy').addEventListener('click', () => {
    refreshCalendar();
    currentBlock = calendarDate.getMonth(); render();
    const today = todayReading();
    const target = today ? $('dias-lectura').querySelector(`[data-day="${today.day}"]`) : $('plan-titulo');
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  function refreshCalendar() {
    const now = new Date();
    if (dateKey(now) === dateKey(calendarDate)) return;
    const wasCurrentMonth = currentBlock === calendarDate.getMonth();
    calendarDate = now;
    if (wasCurrentMonth) currentBlock = calendarDate.getMonth();
    updateSummary(); render();
  }
  setInterval(refreshCalendar, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshCalendar(); });
  updateSummary(); render();
})();

