(() => {
  'use strict';

  window.name = 'voz-juvenil-audio';
  const audio = document.getElementById('persistent-audio');
  const title = document.getElementById('audio-title');
  const kind = document.getElementById('audio-kind');
  const error = document.getElementById('audio-error');
  const startHint = document.getElementById('audio-start-hint');
  const alternative = document.getElementById('audio-alternative');
  const sourceButtons = [...document.querySelectorAll('[data-audio-source]')];
  const pipButton = document.getElementById('audio-pip');
  const meditation = (window.VOZ_MEDITACIONES || []).filter(item => item.audio)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))[0];
  const sources = {
    radio: {
      title: 'Radio de la Asamblea Cristiana',
      url: 'https://servidor18-2.brlogic.com:7106/live',
      kind: 'EN VIVO'
    },
    meditation: {
      title: meditation?.title || 'Meditación',
      url: meditation?.audio || '',
      kind: 'MEDITACIÓN'
    }
  };
  const channel = 'BroadcastChannel' in window ? new BroadcastChannel('voz-juvenil-audio') : null;
  let currentSource = 'radio';
  let pipWindow = null;

  const currentState = () => ({ type: 'state', source: currentSource, playing: !audio.paused && !audio.ended });
  const broadcast = () => channel?.postMessage(currentState());
  const showError = () => {
    error.hidden = false;
    alternative.hidden = currentSource !== 'radio';
    broadcast();
  };
  const play = () => audio.play().catch(reason => {
    if (reason?.name === 'NotAllowedError') startHint.hidden = false;
    else if (reason?.name === 'AbortError') return;
    else showError();
  });

  function updateMediaSession() {
    if (!('mediaSession' in navigator)) return;
    if (typeof MediaMetadata === 'function') {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: sources[currentSource].title,
        artist: 'Voz Juvenil · Grupo Intermedio',
        artwork: [
          { src: new URL('assets/icon-192.png', location.href).href, sizes: '192x192', type: 'image/png' },
          { src: new URL('assets/icon-512.png', location.href).href, sizes: '512x512', type: 'image/png' }
        ]
      });
    }
    navigator.mediaSession.playbackState = audio.paused ? 'paused' : 'playing';
  }

  function updatePictureInPicture() {
    if (!pipWindow || pipWindow.closed) return;
    const pipDoc = pipWindow.document;
    const pipTitle = pipDoc.getElementById('pip-title');
    const pipPlay = pipDoc.getElementById('pip-play');
    if (!pipTitle || !pipPlay) return;
    pipTitle.textContent = title.textContent;
    pipPlay.textContent = audio.paused ? '▶' : '⏸';
    const lang = document.documentElement.lang;
    const labels = {
      es: ['Reproducir', 'Pausar', 'Radio', 'Meditación'],
      pt: ['Reproduzir', 'Pausar', 'Rádio', 'Meditação'],
      it: ['Riproduci', 'Pausa', 'Radio', 'Meditazione'],
      uk: ['Відтворити', 'Пауза', 'Радіо', 'Роздуми']
    }[lang] || ['Reproducir', 'Pausar', 'Radio', 'Meditación'];
    pipPlay.setAttribute('aria-label', audio.paused ? labels[0] : labels[1]);
    for (const button of sourceButtons) {
      const pipButton = pipDoc.querySelector(`[data-pip-source="${button.dataset.audioSource}"]`);
      if (pipButton) {
        pipButton.textContent = button.dataset.audioSource === 'radio' ? labels[2] : labels[3];
        pipButton.setAttribute('aria-pressed', String(button.dataset.audioSource === currentSource));
      }
    }
  }

  function selectSource(next, playNow = false) {
    if (!sources[next]?.url) return;
    if (next === currentSource && audio.src) {
      if (playNow) play();
      return;
    }
    const wasPlaying = !audio.paused && !audio.ended;
    audio.pause();
    currentSource = next;
    audio.src = sources[next].url;
    audio.load();
    title.textContent = sources[next].title;
    kind.textContent = sources[next].kind;
    error.hidden = true;
    startHint.hidden = true;
    alternative.hidden = true;
    sourceButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.audioSource === next)));
    try { localStorage.setItem('voz-juvenil-audio-source', next); } catch (_) {}
    updateMediaSession();
    updatePictureInPicture();
    broadcast();
    if (playNow || wasPlaying) play();
  }

  for (const button of sourceButtons) {
    if (button.dataset.audioSource === 'meditation' && !sources.meditation.url) button.disabled = true;
    button.addEventListener('click', () => selectSource(button.dataset.audioSource, true));
  }

  audio.addEventListener('play', () => { error.hidden = true; startHint.hidden = true; updateMediaSession(); updatePictureInPicture(); broadcast(); });
  audio.addEventListener('pause', () => { updateMediaSession(); updatePictureInPicture(); broadcast(); });
  audio.addEventListener('ended', () => { updateMediaSession(); updatePictureInPicture(); broadcast(); });
  audio.addEventListener('error', showError);

  if ('mediaSession' in navigator) {
    const actions = {
      play,
      pause: () => audio.pause(),
      seekbackward: details => {
        if (currentSource === 'meditation') audio.currentTime = Math.max(0, audio.currentTime - (details.seekOffset || 10));
      },
      seekforward: details => {
        if (currentSource === 'meditation') audio.currentTime = Math.min(Number.isFinite(audio.duration) ? audio.duration : Infinity, audio.currentTime + (details.seekOffset || 10));
      }
    };
    for (const [action, handler] of Object.entries(actions)) {
      try { navigator.mediaSession.setActionHandler(action, handler); } catch (_) {}
    }
  }

  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.data?.type !== 'select-audio') return;
    selectSource(event.data.source, true);
    window.focus();
  });
  if (channel) channel.onmessage = event => {
    if (event.data?.type === 'status-request') broadcast();
    if (event.data?.type === 'toggle') audio.paused ? play() : audio.pause();
  };
  window.addEventListener('pagehide', () => channel?.postMessage({ type: 'closed' }));

  fetch('https://public-player-widget.webradiosite.com/app/player/info/170874?hash=8c0bafb49b404f60df1b8095c255ddda1fcedcb0', { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(data => {
      if (!data.streamingUrl || new URL(data.streamingUrl).protocol !== 'https:') return;
      sources.radio.url = data.streamingUrl;
      if (currentSource === 'radio' && audio.paused) audio.src = data.streamingUrl;
    })
    .catch(() => {});

  if ('documentPictureInPicture' in window) {
    pipButton.hidden = false;
    pipButton.addEventListener('click', async () => {
      try {
        if (pipWindow && !pipWindow.closed) { pipWindow.focus(); return; }
        pipWindow = await documentPictureInPicture.requestWindow({ width: 330, height: 195 });
        pipWindow.document.head.innerHTML = '<title>Voz Juvenil</title><style>body{margin:0;background:#101b38;color:white;font:600 14px system-ui;padding:18px}strong{font-size:16px}p{min-height:20px;margin:9px 0 14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.controls{display:flex;gap:7px}button{border:0;border-radius:9px;background:#fff;color:#101b38;min-height:38px;padding:5px 10px;font:700 12px system-ui}button[aria-pressed=true]{background:#b8aafa}#pip-play{min-width:45px;font-size:19px}</style>';
        pipWindow.document.body.innerHTML = '<strong>Voz Juvenil</strong><p id="pip-title"></p><div class="controls"><button type="button" id="pip-play"></button><button type="button" data-pip-source="radio"></button><button type="button" data-pip-source="meditation"></button></div>';
        pipWindow.document.getElementById('pip-play').addEventListener('click', () => audio.paused ? play() : audio.pause());
        pipWindow.document.querySelector('[data-pip-source="radio"]').addEventListener('click', () => selectSource('radio', true));
        pipWindow.document.querySelector('[data-pip-source="meditation"]').addEventListener('click', () => selectSource('meditation', true));
        pipWindow.addEventListener('pagehide', () => { pipWindow = null; });
        updatePictureInPicture();
      } catch (_) { pipWindow = null; }
    });
  }

  let initialSource;
  try { initialSource = new URLSearchParams(location.search).get('source') || localStorage.getItem('voz-juvenil-audio-source'); } catch (_) {}
  selectSource(sources[initialSource]?.url ? initialSource : 'radio', new URLSearchParams(location.search).get('autoplay') === '1');
  broadcast();
})();
