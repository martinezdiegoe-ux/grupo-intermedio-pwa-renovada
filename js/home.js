(() => {
  const days = window.PLAN_365 || [];
  const today = new Date();
  const current = days.find(day => day.month === today.getMonth() + 1 && day.date === today.getDate());
  let completed = {};
  try { completed = JSON.parse(localStorage.getItem('voz-juvenil-plan-anual-pdf-v1') || '{}'); } catch (_) {}
  if (!completed || typeof completed !== 'object' || Array.isArray(completed)) completed = {};
  const start = current?.day || days.find(day => day.month === today.getMonth() + 1)?.day || 1;
  const next = days.find(day => day.day >= start && !completed[day.day]) || days.find(day => !completed[day.day]);
  document.getElementById('home-reading-day').textContent = next ? String(next.day) : 'Plan completado';
  if (next) document.getElementById('home-reading-link').href = `lectura.html?dia=${next.day}`;
})();
