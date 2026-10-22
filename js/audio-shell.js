(() => {
  'use strict';

  const base = new URL('./', location.href);
  const frame = document.getElementById('site-frame');
  const panel = document.getElementById('audio-panel');
  const fab = document.getElementById('audio-fab');
  const toggle = document.getElementById('audio-toggle');
  const close = document.getElementById('audio-close');
  const audio = document.getElementById('persistent-audio');
  const liveNote = document.getElementById('audio-live-note');
  const title = document.getElementById('audio-title');
  const kind = document.getElementById('audio-kind');
  const startHint = document.getElementById('audio-start-hint');
  const error = document.getElementById('audio-error');
  const alternative = document.getElementById('audio-alternative');
  const sourceButtons = [...document.querySelectorAll('[data-audio-source]')];
  const meditation = (window.VOZ_MEDITACIONES || []).filter(item => item.audio)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))[0];
  const sources = {
    radio: { title: 'Radio de la Asamblea Cristiana', url: 'https://servidor18-2.brlogic.com:7106/live' },
    meditation: { title: meditation?.title || 'Meditación', url: meditation?.audio || '' }
  };
  const labels = {
    es: { panel: 'Audio de Conectados a Cristo', close: 'Cerrar reproductor', radio: 'Radio en vivo', meditation: 'Audio de meditación', live: 'EN VIVO', reflection: 'MEDITACIÓN', fab: 'Audio', open: 'Abrir reproductor de audio', pause: 'Pausar audio', resume: 'Reanudar audio', start: 'Tocá reproducir para comenzar.', error: 'No se pudo reproducir el audio. Intentá nuevamente.', alternative: 'Reproductor alternativo ↗', choose: 'Elegir audio', liveNote: 'Transmisión en vivo. No se puede adelantar ni retroceder.' },
    pt: { panel: 'Áudio do Conectados a Cristo', close: 'Fechar reprodutor', radio: 'Rádio ao vivo', meditation: 'Áudio de meditação', live: 'AO VIVO', reflection: 'MEDITAÇÃO', fab: 'Áudio', open: 'Abrir reprodutor de áudio', pause: 'Pausar áudio', resume: 'Retomar áudio', start: 'Toque em reproduzir para começar.', error: 'Não foi possível reproduzir o áudio. Tente novamente.', alternative: 'Reprodutor alternativo ↗', choose: 'Escolher áudio', liveNote: 'Transmissão ao vivo. Não é possível avançar nem retroceder.' },
    it: { panel: 'Audio di Conectados a Cristo', close: 'Chiudi lettore', radio: 'Radio in diretta', meditation: 'Audio della meditazione', live: 'IN DIRETTA', reflection: 'MEDITAZIONE', fab: 'Audio', open: 'Apri il lettore audio', pause: 'Metti in pausa l’audio', resume: 'Riprendi l’audio', start: 'Tocca riproduci per iniziare.', error: 'Impossibile riprodurre l’audio. Riprova.', alternative: 'Lettore alternativo ↗', choose: 'Scegli l’audio', liveNote: 'Trasmissione in diretta. Non è possibile andare avanti o indietro.' },
    uk: { panel: 'Аудіо Conectados a Cristo', close: 'Закрити програвач', radio: 'Радіо наживо', meditation: 'Аудіороздуми', live: 'НАЖИВО', reflection: 'РОЗДУМИ', fab: 'Аудіо', open: 'Відкрити аудіопрогравач', pause: 'Призупинити аудіо', resume: 'Відновити аудіо', start: 'Натисніть відтворення, щоб почати.', error: 'Не вдалося відтворити аудіо. Спробуйте ще раз.', alternative: 'Інший програвач ↗', choose: 'Вибрати аудіо', liveNote: 'Прямий ефір. Перемотування вперед і назад недоступне.' }
  };
  let language = 'es';
  let currentSource = 'radio';
  let started = false;

  function pageUrl(raw) {
    try {
      const url = new URL(raw || 'index.html', base);
      const name = url.pathname.slice(base.pathname.length);
      if (url.origin === base.origin && url.pathname.startsWith(base.pathname) && /^[a-z0-9-]+\.html$/i.test(name) && name !== 'app.html' && name !== 'reproductor.html') return url;
    } catch (_) {}
    return new URL('index.html', base);
  }

  frame.addEventListener('load', () => {
    try {
      const url = pageUrl(frame.contentWindow.location.href);
      if (url.href !== frame.contentWindow.location.href) return;
      history.replaceState(null, '', url.href);
      document.title = frame.contentDocument.title || 'Conectados a Cristo · Asamblea Cristiana';
    } catch (_) {}
  });
  frame.src = pageUrl(new URLSearchParams(location.search).get('page')).href;

  function localizedTitle() {
    if (currentSource === 'radio') return window.VOZ_TRANSLATIONS?.[language]?.[sources.radio.title] || sources.radio.title;
    return window.VOZ_TRANSLATIONS?.[language]?.[sources.meditation.title] || sources.meditation.title;
  }

  function renderLanguage() {
    let saved = null;
    let dark = false;
    try {
      saved = localStorage.getItem('voz-juvenil-idioma');
      dark = localStorage.getItem('voz-juvenil-modo') === 'dark';
    } catch (_) {}
    language = labels[saved] ? saved : 'es';
    const copy = labels[language];
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.getElementById('audio-panel-label').textContent = copy.panel;
    panel.setAttribute('aria-label', copy.panel);
    close.setAttribute('aria-label', copy.close);
    document.querySelector('.audio-source-tabs').setAttribute('aria-label', copy.choose);
    sourceButtons[0].textContent = copy.radio;
    sourceButtons[1].textContent = copy.meditation;
    document.getElementById('audio-fab-label').textContent = copy.fab;
    fab.setAttribute('aria-label', copy.open);
    toggle.setAttribute('aria-label', audio.paused ? copy.resume : copy.pause);
    kind.textContent = currentSource === 'radio' ? copy.live : copy.reflection;
    title.textContent = localizedTitle();
    startHint.textContent = copy.start;
    error.textContent = copy.error;
    alternative.textContent = copy.alternative;
    liveNote.textContent = copy.liveNote;
  }

  function updateMediaSession() {
    if (!('mediaSession' in navigator)) return;
    if (typeof MediaMetadata === 'function') {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title.textContent,
        artist: 'Conectados a Cristo · Asamblea Cristiana',
        artwork: [
          { src: new URL('assets/icon-192.png', base).href, sizes: '192x192', type: 'image/png' },
          { src: new URL('assets/icon-512.png', base).href, sizes: '512x512', type: 'image/png' }
        ]
      });
    }
    navigator.mediaSession.playbackState = audio.paused ? 'paused' : 'playing';
  }

  function renderPlayback() {
    const playing = !audio.paused && !audio.ended;
    fab.classList.toggle('is-playing', playing);
    toggle.hidden = currentSource !== 'radio' && !started;
    toggle.textContent = playing ? '⏸' : '▶';
    toggle.setAttribute('aria-label', playing ? labels[language].pause : labels[language].resume);
    updateMediaSession();
  }

  function showError() {
    error.hidden = false;
    alternative.hidden = currentSource !== 'radio';
    renderPlayback();
  }

  function play() {
    audio.play().catch(reason => {
      if (reason?.name === 'NotAllowedError') startHint.hidden = false;
      else if (reason?.name !== 'AbortError') showError();
    });
  }

  function updateSeekActions() {
    if (!('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.setActionHandler('seekbackward', currentSource === 'meditation' ? details => {
        audio.currentTime = Math.max(0, audio.currentTime - (details.seekOffset || 10));
      } : null);
      navigator.mediaSession.setActionHandler('seekforward', currentSource === 'meditation' ? details => {
        audio.currentTime = Math.min(Number.isFinite(audio.duration) ? audio.duration : Infinity, audio.currentTime + (details.seekOffset || 10));
      } : null);
    } catch (_) { /* Some browsers do not expose these media actions. */ }
  }

  function selectSource(next, playNow = false) {
    if (!sources[next]?.url) return;
    if (next !== currentSource || !audio.src) {
      const wasPlaying = !audio.paused && !audio.ended;
      audio.pause();
      currentSource = next;
      audio.controls = next === 'meditation';
      audio.hidden = next !== 'meditation';
      liveNote.hidden = next !== 'radio';
      audio.src = sources[next].url;
      audio.load();
      sourceButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.audioSource === next)));
      try { localStorage.setItem('voz-juvenil-audio-source', next); } catch (_) {}
      error.hidden = true;
      startHint.hidden = true;
      alternative.hidden = true;
      renderLanguage();
      renderPlayback();
      updateSeekActions();
      if (playNow || wasPlaying) play();
    } else if (playNow) play();
  }

  function openPanel() {
    panel.hidden = false;
    fab.setAttribute('aria-expanded', 'true');
  }

  fab.addEventListener('click', () => {
    openPanel();
    if (!started) play();
  });
  close.addEventListener('click', () => {
    panel.hidden = true;
    fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  });
  toggle.addEventListener('click', () => audio.paused ? play() : audio.pause());
  for (const button of sourceButtons) {
    if (button.dataset.audioSource === 'meditation' && !sources.meditation.url) button.disabled = true;
    button.addEventListener('click', () => selectSource(button.dataset.audioSource, true));
  }
  audio.addEventListener('play', () => { started = true; error.hidden = true; startHint.hidden = true; renderPlayback(); });
  audio.addEventListener('pause', renderPlayback);
  audio.addEventListener('ended', renderPlayback);
  audio.addEventListener('error', showError);
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.type !== 'voz-audio-select') return;
    openPanel();
    selectSource(event.data.source, true);
  });
  window.addEventListener('storage', event => {
    if (event.key === 'voz-juvenil-idioma' || event.key === 'voz-juvenil-modo') {
      renderLanguage();
      updateMediaSession();
    }
  });
  if ('mediaSession' in navigator) {
    const actions = {
      play,
      pause: () => audio.pause()
    };
    for (const [action, handler] of Object.entries(actions)) {
      try { navigator.mediaSession.setActionHandler(action, handler); } catch (_) {}
    }
    updateSeekActions();
  }

  fetch('https://public-player-widget.webradiosite.com/app/player/info/170874?hash=8c0bafb49b404f60df1b8095c255ddda1fcedcb0', { cache: 'no-store' })
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(data => {
      if (!data.streamingUrl || new URL(data.streamingUrl).protocol !== 'https:') return;
      sources.radio.url = data.streamingUrl;
      if (currentSource === 'radio' && audio.paused && !started) audio.src = data.streamingUrl;
    })
    .catch(() => {});

  let initialSource = 'radio';
  try { initialSource = localStorage.getItem('voz-juvenil-audio-source') || 'radio'; } catch (_) {}
  selectSource(sources[initialSource]?.url ? initialSource : 'radio');
  renderLanguage();
  if ('serviceWorker' in navigator) {
    const serviceWorkers = navigator.serviceWorker;
    const hadController = Boolean(serviceWorkers.controller);
    let updateReady = false;
    let reloadTimer;

    function reloadWhenAudioStops() {
      clearTimeout(reloadTimer);
      if (!updateReady || (!audio.paused && !audio.ended)) return;
      // Changing sources briefly pauses the player; wait for playback to resume.
      reloadTimer = setTimeout(() => {
        if (updateReady && (audio.paused || audio.ended)) location.reload();
      }, 1000);
    }

    audio.addEventListener('play', () => clearTimeout(reloadTimer));
    audio.addEventListener('pause', reloadWhenAudioStops);
    audio.addEventListener('ended', reloadWhenAudioStops);
    serviceWorkers.addEventListener('controllerchange', () => {
      if (!hadController) return; // The first offline installation needs no refresh.
      updateReady = true;
      reloadWhenAudioStops();
    });

    window.addEventListener('load', async () => {
      try {
        const registration = await serviceWorkers.register('service-worker.js', { updateViaCache: 'none' });
        let lastCheck = Date.now(); // Registration already checks the worker script.
        function checkForUpdates() {
          if (document.visibilityState !== 'visible' || !navigator.onLine || Date.now() - lastCheck < 60000) return;
          lastCheck = Date.now();
          registration.update().catch(() => {});
        }
        document.addEventListener('visibilitychange', checkForUpdates);
        window.addEventListener('online', checkForUpdates);
        window.addEventListener('pageshow', checkForUpdates);
        frame.addEventListener('load', checkForUpdates);
        setInterval(checkForUpdates, 15 * 60 * 1000);
      } catch (_) { /* The site remains usable when offline or unsupported. */ }
    });
  }
})();
