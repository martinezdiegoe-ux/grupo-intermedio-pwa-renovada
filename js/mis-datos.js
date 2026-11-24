(() => {
  'use strict';
  const keys = { plan: 'voz-juvenil-plan-anual-pdf-v1', note: 'voz-juvenil-oracion', playlist: 'conectados-playlist-v1', bookmarks: 'conectados-biblia-marcadores-v1' };

  function validateBackup(data) {
    if (!data || data.version !== 1 || !data.plan || typeof data.plan !== 'object' || Array.isArray(data.plan) ||
        typeof data.note !== 'string' || !Array.isArray(data.playlist) || data.playlist.length > 100) throw new Error('Archivo de copia inválido.');
    for (const [day, date] of Object.entries(data.plan)) {
      if (!/^(?:[1-9]|[1-9]\d|[1-2]\d\d|3[0-5]\d|36[0-5])$/.test(day) || typeof date !== 'string' ||
          !/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) throw new Error('El plan contiene una fecha inválida.');
    }
    if (data.playlist.some(id => typeof id !== 'string' || !/^[a-zA-Z0-9_-]{1,80}$/.test(id)) ||
        new Set(data.playlist).size !== data.playlist.length) throw new Error('La playlist contiene datos inválidos.');
    if (data.bookmarks !== undefined &&
        (!Array.isArray(data.bookmarks) || data.bookmarks.length > 1000 ||
         data.bookmarks.some(value => typeof value !== 'string' || !/^(?:[1-9]|[1-5]\d|6[0-6]):[1-9]\d{0,2}:[1-9]\d{0,2}$/.test(value)) ||
         new Set(data.bookmarks).size !== data.bookmarks.length)) throw new Error('La copia contiene marcadores inválidos.');
    return data;
  }

  if (typeof module !== 'undefined') module.exports = { validateBackup };
  if (typeof document === 'undefined') return;

  const status = document.getElementById('backup-status');
  document.getElementById('backup-import-trigger').addEventListener('click', () => document.getElementById('backup-import').click());
  document.getElementById('backup-export').addEventListener('click', () => {
    try {
      const data = validateBackup({ version: 1, plan: JSON.parse(localStorage.getItem(keys.plan) || '{}'),
        note: localStorage.getItem(keys.note) || '', playlist: JSON.parse(localStorage.getItem(keys.playlist) || '[]'),
        bookmarks: JSON.parse(localStorage.getItem(keys.bookmarks) || '[]') });
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
      if (file.size > 32 * 1024 * 1024) throw new Error('El archivo supera 32 MB.');
      const data = validateBackup(JSON.parse(await file.text()));
      const question = data.bookmarks === undefined
        ? '¿Reemplazar tu progreso, notas y playlist actuales con los del archivo?'
        : '¿Reemplazar tu progreso, notas, playlist y marcadores con los del archivo?';
      let language = 'es';
      try { language = localStorage.getItem('voz-juvenil-idioma') || 'es'; } catch (_) {}
      if (!confirm(window.VOZ_TRANSLATIONS?.[language]?.[question] || question)) return;
      const incoming = [[keys.plan, JSON.stringify(data.plan)], [keys.note, data.note],
        [keys.playlist, JSON.stringify(data.playlist)]];
      if (data.bookmarks !== undefined) incoming.push([keys.bookmarks, JSON.stringify(data.bookmarks)]);
      const previous = incoming.map(([key]) => [key, localStorage.getItem(key)]);
      try {
        for (const [key] of previous) localStorage.removeItem(key);
        for (const [key, value] of incoming) localStorage.setItem(key, value);
      } catch (error) {
        for (const [key] of previous) localStorage.removeItem(key);
        for (const [key, value] of previous) {
          if (value !== null) localStorage.setItem(key, value);
        }
        throw error;
      }
      window.parent.postMessage({ type: 'voz-playlist-updated' }, location.origin);
      status.textContent = 'Datos recuperados.';
    } catch (error) { status.textContent = error.message || 'No se pudo recuperar el archivo.'; }
  });
})();
