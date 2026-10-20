(function () {
  'use strict';
  const days = window.PLAN_365;
  const key = 'voz-juvenil-plan-365-v1';
  const blockSize = 30;
  const blocks = Math.ceil(days.length / blockSize);
  const $ = id => document.getElementById(id);
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
    const from = block * blockSize + 1, to = Math.min(days.length, from + blockSize - 1);
    const option = document.createElement('option');
    option.value = String(block);
    option.textContent = `Días ${from}–${to}`;
    selector.append(option);
  }
  const firstPending = () => days.find(day => !completed[day.day]);
  let currentBlock = Math.floor(((firstPending() || days[days.length - 1]).day - 1) / blockSize);

  function updateSummary() {
    const count = Object.keys(completed).length;
    const percent = Math.round(count / days.length * 1000) / 10;
    $('porcentaje-lectura').textContent = `${percent}%`;
    $('dias-completados').textContent = count;
    $('racha-lectura').textContent = streak();
    $('dias-pendientes').textContent = days.length - count;
    $('barra-progreso').setAttribute('aria-valuenow', String(count));
    $('relleno-progreso').style.width = `${percent}%`;
    $('ir-pendiente').textContent = firstPending() ? `Ir al día ${firstPending().day}` : 'Plan completado';
    $('ir-pendiente').disabled = !firstPending();
  }
  function render() {
    selector.value = String(currentBlock);
    $('bloque-anterior').disabled = currentBlock === 0;
    $('bloque-siguiente').disabled = currentBlock === blocks - 1;
    const slice = days.slice(currentBlock * blockSize, (currentBlock + 1) * blockSize);
    const count = slice.filter(day => completed[day.day]).length;
    $('bloque-resumen').textContent = `Días ${slice[0].day}–${slice[slice.length - 1].day} · ${count} de ${slice.length} completados`;
    const fragment = document.createDocumentFragment();
    for (const day of slice) {
      const card = document.createElement('label');
      card.className = 'reading-card' + (completed[day.day] ? ' is-complete' : '');
      const top = document.createElement('span'); top.className = 'reading-card-top';
      const number = document.createElement('span'); number.className = 'reading-day'; number.textContent = `DÍA ${day.day}`;
      const check = document.createElement('input'); check.type = 'checkbox'; check.checked = Boolean(completed[day.day]);
      check.setAttribute('aria-label', `Día ${day.day}: ${day.passage}. Marcar lectura completada`);
      check.addEventListener('change', () => {
        if (check.checked) completed[day.day] = dateKey(new Date()); else delete completed[day.day];
        save(); updateSummary(); render();
        $('dias-lectura').children[(day.day - 1) % blockSize]?.querySelector('input')?.focus();
        $('progreso-lectura').textContent = `Día ${day.day} ${check.checked ? 'completado' : 'pendiente'}. ${Object.keys(completed).length} de 365 días completados.`;
      });
      const passage = document.createElement('strong'); passage.textContent = day.passage;
      const theme = document.createElement('small'); theme.textContent = day.theme;
      const status = document.createElement('span'); status.className = 'reading-status'; status.textContent = completed[day.day] ? '✓ Completado' : 'Marcar como leído';
      top.append(number, check); card.append(top, passage, theme, status); fragment.append(card);
    }
    $('dias-lectura').replaceChildren(fragment);
  }
  selector.addEventListener('change', () => { currentBlock = Number(selector.value); render(); });
  $('bloque-anterior').addEventListener('click', () => { currentBlock--; render(); });
  $('bloque-siguiente').addEventListener('click', () => { currentBlock++; render(); });
  $('ir-pendiente').addEventListener('click', () => {
    const pending = firstPending(); if (!pending) return;
    currentBlock = Math.floor((pending.day - 1) / blockSize); render();
    const card = $('dias-lectura').children[(pending.day - 1) % blockSize];
    card?.querySelector('input')?.focus();
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  updateSummary(); render();
})();
