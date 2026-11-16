(() => {
  'use strict';
  const keys = { plan: 'voz-juvenil-plan-anual-pdf-v1', note: 'voz-juvenil-oracion', playlist: 'conectados-playlist-v1' };

  function validateBackup(data) {
    if (!data || data.version !== 1 || !data.plan || typeof data.plan !== 'object' || Array.isArray(data.plan) ||
        typeof data.note !== 'string' || data.note.length > 100000 || !Array.isArray(data.playlist) || data.playlist.length > 100) throw new Error('Archivo de copia inválido.');
    for (const [day, date] of Object.entries(data.plan)) {
      if (!/^(?:[1-9]|[1-9]\d|[1-2]\d\d|3[0-5]\d|36[0-5])$/.test(day) || typeof date !== 'string' ||
          !/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) throw new Error('El plan contiene una fecha inválida.');
    }
    if (data.playlist.some(id => typeof id !== 'string' || !/^[a-zA-Z0-9_-]{1,80}$/.test(id)) ||
        new Set(data.playlist).size !== data.playlist.length) throw new Error('La playlist contiene datos inválidos.');
    return data;
  }

  if (typeof module !== 'undefined') module.exports = { validateBackup };
  if (typeof document === 'undefined') return;

  const status = document.getElementById('backup-status');
  document.getElementById('backup-import-trigger').addEventListener('click', () => document.getElementById('backup-import').click());
  document.getElementById('backup-export').addEventListener('click', () => {
    try {
      const data = validateBackup({ version: 1, plan: JSON.parse(localStorage.getItem(keys.plan) || '{}'),
        note: localStorage.getItem(keys.note) || '', playlist: JSON.parse(localStorage.getItem(keys.playlist) || '[]') });
      const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'conectados-a-cristo-mis-datos.json';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      status.textContent = 'Se descargó tu copia de seguridad.';
    } catch (_) { status.textContent = 'No se pudieron leer tus datos guardados.'; }
  });

  document.getElementById('backup-import').addEventListener('change', async event => {
    const file = event.target.files[0];
    event.target.value = '';
    if (!file) return;
    try {
      if (file.size > 1024 * 1024) throw new Error('El archivo supera 1 MB.');
      const data = validateBackup(JSON.parse(await file.text()));
      const question = '¿Reemplazar tu progreso, notas y playlist actuales con los del archivo?';
      let language = 'es';
      try { language = localStorage.getItem('voz-juvenil-idioma') || 'es'; } catch (_) {}
      if (!confirm(window.VOZ_TRANSLATIONS?.[language]?.[question] || question)) return;
      const previous = Object.fromEntries(Object.entries(keys).map(([name, key]) => [name, localStorage.getItem(key)]));
      try {
        localStorage.setItem(keys.plan, JSON.stringify(data.plan));
        localStorage.setItem(keys.note, data.note);
        localStorage.setItem(keys.playlist, JSON.stringify(data.playlist));
      } catch (error) {
        for (const [name, key] of Object.entries(keys)) {
          if (previous[name] === null) localStorage.removeItem(key);
          else localStorage.setItem(key, previous[name]);
        }
        throw error;
      }
      window.parent.postMessage({ type: 'voz-playlist-updated' }, location.origin);
      status.textContent = 'Datos recuperados. Abrí el plan, la oración o la playlist para verlos.';
    } catch (error) { status.textContent = error.message || 'No se pudo recuperar el archivo.'; }
  });
})();
