(() => {
  const key = 'conectados-playlist-v1';
  const items = window.VOZ_ALABANZAS || [];
  const list = document.getElementById('playlist-lista');
  const play = document.getElementById('playlist-play');
  let selected = [];
  try {
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(data)) selected = [...new Set(data)].filter(id => items.some(item => item.id === id));
  } catch (_) {}

  function save() {
    try { localStorage.setItem(key, JSON.stringify(selected)); } catch (_) {}
    window.parent.postMessage({ type: 'voz-playlist-updated' }, location.origin);
  }

  function render() {
    list.replaceChildren();
    play.disabled = selected.length === 0;
    document.querySelectorAll('.playlist-toggle').forEach(button => {
      const on = selected.includes(button.dataset.id);
      button.textContent = on ? 'Quitar de mi playlist' : 'Agregar a mi playlist';
      button.setAttribute('aria-pressed', String(on));
    });
    if (!selected.length) {
      const note = document.createElement('p');
      note.className = 'empty-note';
      note.textContent = 'Tu playlist está vacía. Elegí una o más alabanzas arriba.';
      list.append(note);
    }
    for (const id of selected) {
      const item = items.find(song => song.id === id);
      const card = document.createElement('article');
      card.className = 'resource-card';
      const title = document.createElement('strong');
      title.textContent = item.titulo;
      const actions = document.createElement('div');
      actions.className = 'button-row';
      const listen = document.createElement('button');
      listen.type = 'button';
      listen.className = 'action-link primary';
      listen.textContent = '▶ Escuchar desde aquí';
      listen.addEventListener('click', () => window.parent.postMessage({ type: 'voz-audio-track', id }, location.origin));
      const video = document.createElement('a');
      video.href = item.video;
      video.target = '_blank';
      video.rel = 'noopener noreferrer';
      video.className = 'action-link';
      video.textContent = 'Ver video ↗';
      actions.append(listen, video);
      card.append(title, actions);
      list.append(card);
    }
  }

  play.addEventListener('click', () => window.parent.postMessage({ type: 'voz-audio-playlist' }, location.origin));
  document.querySelectorAll('.playlist-toggle').forEach(button => button.addEventListener('click', () => {
    selected = selected.includes(button.dataset.id)
      ? selected.filter(id => id !== button.dataset.id)
      : [...selected, button.dataset.id];
    save();
    render();
  }));
  render();
})();
