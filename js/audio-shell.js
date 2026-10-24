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
  const playlistControls = document.getElementById('playlist-controls');
  const playlistPrevious = document.getElementById('playlist-previous');
  const playlistNext = document.getElementById('playlist-next');
  const playlistPosition = document.getElementById('playlist-position');
  const songs = window.VOZ_ALABANZAS || [];
  const playlistKey = 'conectados-playlist-v1';
  const speech = window.speechSynthesis;
  const bibleBar = document.getElementById('bible-audio-bar');
  const bibleTitle = document.getElementById('bible-audio-title');
  const bibleStatus = document.getElementById('bible-audio-status');
  const bibleToggle = document.getElementById('bible-audio-toggle');
  const bibleStop = document.getElementById('bible-audio-stop');
  const installDialog = document.getElementById('install-dialog');
  const installEyebrow = document.getElementById('install-eyebrow');
  const installTitle = document.getElementById('install-title');
  const installDescription = document.getElementById('install-description');
  const installHelp = document.getElementById('install-help');
  const installAction = document.getElementById('install-action');
  const installLater = document.getElementById('install-later');
  let bibleReading = null;
  let bibleGeneration = 0;
  let checkDeferredReload = () => {};
  let installPromptEvent = null;
  let installHelpVisible = false;
  let installOfferShown = false;
  const installDismissKey = 'voz-app-install-dismissed-until';
  const installDoneKey = 'voz-app-installed';
  const sourceButtons = [...document.querySelectorAll('[data-audio-source]')];
  const meditation = (window.VOZ_MEDITACIONES || []).filter(item => item.audio)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))[0];
  const sources = {
    radio: { title: 'Radio en vivo', url: 'https://servidor18-2.brlogic.com:7106/live' },
    meditation: { title: meditation?.title || 'Meditación', url: meditation?.audio || '' }
  };
  const labels = {
    es: { panel: 'Audio de Conectados a Cristo', close: 'Cerrar reproductor', radio: 'Radio en vivo', meditation: 'Audio de meditación', playlist: 'Mi playlist', worship: 'ALABANZA', previous: 'Alabanza anterior', next: 'Alabanza siguiente', live: 'EN VIVO', reflection: 'MEDITACIÓN', fab: 'Audio', open: 'Abrir reproductor de audio', pause: 'Pausar audio', resume: 'Reanudar audio', start: 'Tocá reproducir para comenzar.', error: 'No se pudo reproducir el audio. Intentá nuevamente.', reconnecting: 'Conexión inestable. Reconectando a la radio…', alternative: 'Reproductor alternativo ↗', choose: 'Elegir audio', liveNote: 'Transmisión en vivo. No se puede adelantar ni retroceder.' },
    pt: { panel: 'Áudio do Conectados a Cristo', close: 'Fechar reprodutor', radio: 'Rádio ao vivo', meditation: 'Áudio de meditação', playlist: 'Minha playlist', worship: 'LOUVOR', previous: 'Louvor anterior', next: 'Próximo louvor', live: 'AO VIVO', reflection: 'MEDITAÇÃO', fab: 'Áudio', open: 'Abrir reprodutor de áudio', pause: 'Pausar áudio', resume: 'Retomar áudio', start: 'Toque em reproduzir para começar.', error: 'Não foi possível reproduzir o áudio. Tente novamente.', reconnecting: 'Conexão instável. Reconectando ao rádio…', alternative: 'Reproductor alternativo ↗', choose: 'Escolher áudio', liveNote: 'Transmissão ao vivo. Não é possível avançar nem retroceder.' },
    it: { panel: 'Audio di Conectados a Cristo', close: 'Chiudi lettore', radio: 'Radio in diretta', meditation: 'Audio della meditazione', playlist: 'La mia playlist', worship: 'CANTO', previous: 'Canto precedente', next: 'Prossimo canto', live: 'IN DIRETTA', reflection: 'MEDITAZIONE', fab: 'Audio', open: 'Apri il lettore audio', pause: 'Metti in pausa l’audio', resume: 'Riprendi l’audio', start: 'Tocca riproduci per iniziare.', error: 'Impossibile riprodurre l’audio. Riprova.', reconnecting: 'Connessione instabile. Riconnessione alla radio…', alternative: 'Lettore alternativo ↗', choose: 'Scegli l’audio', liveNote: 'Trasmissione in diretta. Non è possibile andare avanti o indietro.' },
    uk: { panel: 'Аудіо Conectados a Cristo', close: 'Закрити програвач', radio: 'Радіо наживо', meditation: 'Аудіороздуми', playlist: 'Мій плейлист', worship: 'ХВАЛА', previous: 'Попередня пісня', next: 'Наступна пісня', live: 'НАЖИВО', reflection: 'РОЗДУМИ', fab: 'Аудіо', open: 'Відкрити аудіопрогравач', pause: 'Призупинити аудіо', resume: 'Відновити аудіо', start: 'Натисніть відтворення, щоб почати.', error: 'Не вдалося відтворити аудіо. Спробуйте ще раз.', reconnecting: 'З’єднання нестабільне. Повторне підключення до радіо…', alternative: 'Інший програвач ↗', choose: 'Вибрати аудіо', liveNote: 'Прямий ефір. Перемотування вперед і назад недоступне.' }
  };
  const installCopy = {
    es: {
      eyebrow: 'INSTALÁ LA APP', title: 'Conectados a Cristo, a un toque',
      description: 'Tocá “Instalar app” y confirmá en el aviso del navegador. Si no se puede abrir el aviso, te mostramos los pasos para agregarla desde el menú.',
      install: 'Instalar app', how: 'Instalar app', later: 'Ahora no', done: 'Entendido',
      ios: 'En Safari, tocá Compartir → Agregar a pantalla de inicio → Agregar.',
      android: 'En Android, abrí ⋮ → Instalar app (o Agregar a pantalla principal) → Instalar.',
      desktop: 'En la barra de direcciones, tocá el ícono Instalar o abrí el menú del navegador → Instalar Conectados a Cristo → Instalar.',
      other: 'Abrí el menú del navegador y elegí “Instalar app” o “Agregar a pantalla de inicio”; después confirmá.'
    },
    pt: {
      eyebrow: 'INSTALE O APLICATIVO', title: 'Conectados a Cristo, a um toque',
      description: 'Toque em “Instalar aplicativo” e confirme no aviso do navegador. Se o aviso não puder ser aberto, mostraremos como adicionar pelo menu.',
      install: 'Instalar aplicativo', how: 'Ver como instalar', later: 'Agora não', done: 'Entendi',
      ios: 'No Safari, toque em Compartilhar → Adicionar à Tela de Início → Adicionar.',
      android: 'No Android, abra ⋮ → Instalar aplicativo (ou Adicionar à tela inicial) → Instalar.',
      desktop: 'Na barra de endereço, toque no ícone Instalar ou abra o menu do navegador → Instalar Conectados a Cristo → Instalar.',
      other: 'Abra o menu do navegador e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”; depois confirme.'
    },
    it: {
      eyebrow: 'INSTALLA L’APP', title: 'Conectados a Cristo, a portata di mano',
      description: 'Tocca “Installa app” e conferma nell’avviso del browser. Se non è possibile aprirlo, ti mostreremo come aggiungerla dal menu.',
      install: 'Installa app', how: 'Come installarla', later: 'Non ora', done: 'Ho capito',
      ios: 'In Safari, tocca Condividi → Aggiungi alla schermata Home → Aggiungi.',
      android: 'Su Android, apri ⋮ → Installa app (o Aggiungi alla schermata Home) → Installa.',
      desktop: 'Nella barra degli indirizzi, tocca l’icona Installa o apri il menu del browser → Installa Conectados a Cristo → Installa.',
      other: 'Apri il menu del browser e scegli “Installa app” o “Aggiungi alla schermata Home”; poi conferma.'
    },
    uk: {
      eyebrow: 'ВСТАНОВІТЬ ЗАСТОСУНОК', title: 'Conectados a Cristo завжди поруч',
      description: 'Натисніть «Встановити застосунок» і підтвердьте у вікні браузера. Якщо вікно не відкривається, покажемо кроки в меню.',
      install: 'Встановити застосунок', how: 'Як встановити', later: 'Не зараз', done: 'Зрозуміло',
      ios: 'У Safari натисніть «Поділитися» → «На початковий екран» → «Додати».',
      android: 'На Android відкрийте ⋮ → «Встановити застосунок» (або «Додати на головний екран») → «Встановити».',
      desktop: 'В адресному рядку натисніть значок встановлення або відкрийте меню браузера → «Встановити Conectados a Cristo» → «Встановити».',
      other: 'Відкрийте меню браузера, виберіть «Встановити застосунок» або «Додати на головний екран» і підтвердьте.'
    }
  };

  function installInstructions(copy) {
    const userAgent = navigator.userAgent || '';
    const isAppleTouch = /iPhone|iPad|iPod/i.test(userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isAppleTouch) return copy.ios;
    if (/Android/i.test(userAgent)) return copy.android;
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 700) return copy.desktop;
    return copy.other;
  }

  function renderInstallCopy() {
    const copy = installCopy[language] || installCopy.es;
    installEyebrow.textContent = copy.eyebrow;
    installTitle.textContent = copy.title;
    installDescription.textContent = copy.description;
    installLater.textContent = copy.later;
    installAction.textContent = installHelpVisible ? copy.done : copy.install;
    if (installHelpVisible) installHelp.textContent = installInstructions(copy);
  }

  function showInstallOffer() {
    if (installOfferShown || navigator.standalone === true
        || (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)) return;
    try {
      if (localStorage.getItem(installDoneKey) === 'true') return;
      if (Number(localStorage.getItem(installDismissKey)) > Date.now()) return;
    } catch (_) { /* The install offer remains available when storage is blocked. */ }
    installOfferShown = true;
    if (typeof installDialog.show === 'function') installDialog.show();
    else installDialog.setAttribute('open', '');
  }

  function dismissInstallOffer() {
    try { localStorage.setItem(installDismissKey, String(Date.now() + 7 * 24 * 60 * 60 * 1000)); } catch (_) {}
    if (installDialog.open) installDialog.close();
    else installDialog.removeAttribute('open');
  }

  installAction.addEventListener('click', async () => {
    if (!installPromptEvent) {
      if (installHelpVisible) {
        dismissInstallOffer();
        return;
      }
      installHelpVisible = true;
      installHelp.textContent = installInstructions(installCopy[language] || installCopy.es);
      installHelp.hidden = false;
      renderInstallCopy();
      return;
    }
    const promptEvent = installPromptEvent;
    installPromptEvent = null;
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice?.outcome === 'accepted') {
        try { localStorage.setItem(installDoneKey, 'true'); } catch (_) {}
        if (installDialog.open) installDialog.close();
        else installDialog.removeAttribute('open');
      } else dismissInstallOffer();
    } catch (_) {
      installHelpVisible = true;
      installHelp.hidden = false;
      renderInstallCopy();
    }
  });
  installLater.addEventListener('click', dismissInstallOffer);
  installDialog.addEventListener('cancel', event => {
    event.preventDefault();
    dismissInstallOffer();
  });
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPromptEvent = event;
    if (installHelpVisible) {
      installHelpVisible = false;
      installHelp.hidden = true;
    }
    renderInstallCopy();
  });
  window.addEventListener('appinstalled', () => {
    installPromptEvent = null;
    try {
      localStorage.setItem(installDoneKey, 'true');
      localStorage.removeItem(installDismissKey);
    } catch (_) {}
    if (installDialog.open) installDialog.close();
    else installDialog.removeAttribute('open');
  });
  let language = 'es';
  let currentSource = 'radio';
  let started = false;
  let radioPlaybackRequested = false;
  let radioRetrying = false;
  let radioRetryCount = 0;
  let radioRetryTimer = 0;
  let radioStallTimer = 0;
  let queue = [];
  let trackIndex = -1;

  function selectedSongs() {
    try {
      const ids = JSON.parse(localStorage.getItem(playlistKey) || '[]');
      if (Array.isArray(ids)) return [...new Set(ids)].filter(id => songs.some(song => song.id === id && song.audio));
    } catch (_) {}
    return [];
  }

  function activeTrack() { return songs.find(song => song.id === queue[trackIndex]); }

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
      sendBibleState();
    } catch (_) {}
    showInstallOffer();
  });
  frame.src = pageUrl(new URLSearchParams(location.search).get('page')).href;
  window.setTimeout(showInstallOffer, 1200);

  function sendBibleState(message = '') {
    frame.contentWindow?.postMessage({ type: 'voz-bible-reading-state', active: Boolean(bibleReading),
      key: bibleReading?.key, reference: bibleReading?.reference, paused: bibleReading?.paused, message }, location.origin);
  }
  function renderBibleReading(message = '') {
    bibleBar.hidden = !bibleReading;
    if (bibleReading) {
      bibleTitle.textContent = bibleReading.reference;
      bibleStatus.textContent = message || (bibleReading.paused ? 'En pausa' : 'Reproduciendo mientras navegás');
      bibleToggle.textContent = bibleReading.paused ? '▶' : '⏸';
      bibleToggle.setAttribute('aria-label', bibleReading.paused ? 'Continuar lectura' : 'Pausar lectura');
    }
    sendBibleState(message);
  }
  function stopBibleReading(message = '') {
    if (!bibleReading) return;
    bibleGeneration++;
    bibleReading = null;
    speech?.cancel();
    renderBibleReading(message);
    checkDeferredReload();
  }
  function speakBibleVerse(generation) {
    if (generation !== bibleGeneration || !bibleReading || bibleReading.paused) return;
    if (bibleReading.index >= bibleReading.verses.length) {
      const reference = bibleReading.reference;
      stopBibleReading(`Terminó la lectura de ${reference}.`);
      return;
    }
    const verse = bibleReading.verses[bibleReading.index++];
    const utterance = new SpeechSynthesisUtterance(verse.text);
    utterance.lang = 'es-AR';
    const voices = speech.getVoices();
    utterance.voice = voices.find(voice => voice.lang.toLowerCase() === 'es-ar')
      || voices.find(voice => voice.lang.toLowerCase().startsWith('es')) || null;
    utterance.onend = () => {
      if (generation !== bibleGeneration) return;
      renderBibleReading(`Capítulo ${verse.chapter}, versículo ${verse.verse} · ${bibleReading.index} de ${bibleReading.verses.length}`);
      speakBibleVerse(generation);
    };
    utterance.onerror = event => {
      if (generation === bibleGeneration && event.error !== 'interrupted' && event.error !== 'canceled') {
        stopBibleReading('No se pudo continuar la lectura en voz alta.');
      }
    };
    speech.speak(utterance);
  }
  function startBibleReading(data) {
    if (!speech || typeof SpeechSynthesisUtterance === 'undefined') {
      sendBibleState('Este navegador no ofrece lectura en voz alta.');
      return;
    }
    if (typeof data.key !== 'string' || typeof data.reference !== 'string' ||
        !Array.isArray(data.verses) || data.verses.length < 1 || data.verses.length > 500 ||
        !data.verses.every(verse => typeof verse.text === 'string' && verse.text.length < 3000 && Number.isInteger(verse.chapter) && Number.isInteger(verse.verse))) return;
    stopBibleReading();
    stopRadioRecovery();
    audio.pause();
    speech.cancel();
    const generation = ++bibleGeneration;
    bibleReading = { key: data.key, reference: data.reference, verses: data.verses, index: 0, paused: false };
    renderBibleReading(`Leyendo ${data.verses.length} versículos. Podés abrir la Biblia.`);
    speakBibleVerse(generation);
  }
  function toggleBibleReading() {
    if (!bibleReading) return;
    bibleReading.paused = !bibleReading.paused;
    if (bibleReading.paused) speech.pause();
    else {
      speech.resume();
      if (!speech.speaking) speakBibleVerse(bibleGeneration);
    }
    renderBibleReading();
  }
  bibleToggle.addEventListener('click', toggleBibleReading);
  bibleStop.addEventListener('click', () => stopBibleReading('Lectura detenida.'));

  function localizedTitle() {
    if (currentSource === 'radio') return window.VOZ_TRANSLATIONS?.[language]?.[sources.radio.title] || sources.radio.title;
    if (currentSource === 'playlist') return activeTrack()?.titulo || labels[language].playlist;
    return window.VOZ_TRANSLATIONS?.[language]?.[sources.meditation.title] || sources.meditation.title;
  }

  function renderPlaylistControls() {
    const isPlaylist = currentSource === 'playlist';
    playlistControls.hidden = !isPlaylist;
    if (!isPlaylist) return;
    playlistPosition.textContent = `${Math.max(0, trackIndex + 1)} / ${queue.length}`;
    playlistPrevious.disabled = trackIndex < 1;
    playlistNext.disabled = trackIndex >= queue.length - 1;
    playlistPrevious.setAttribute('aria-label', labels[language].previous);
    playlistNext.setAttribute('aria-label', labels[language].next);
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
    sourceButtons[2].textContent = copy.playlist;
    document.getElementById('audio-fab-label').textContent = copy.fab;
    fab.setAttribute('aria-label', copy.open);
    toggle.setAttribute('aria-label', audio.paused ? copy.resume : copy.pause);
    kind.textContent = currentSource === 'radio' ? copy.live : currentSource === 'playlist' ? copy.worship : copy.reflection;
    title.textContent = localizedTitle();
    title.hidden = currentSource === 'radio';
    startHint.textContent = copy.start;
    error.textContent = radioRetrying ? copy.reconnecting : copy.error;
    alternative.textContent = copy.alternative;
    liveNote.textContent = copy.liveNote;
    renderPlaylistControls();
    renderInstallCopy();
  }

  function updateMediaSession() {
    if (!('mediaSession' in navigator)) return;
    if (typeof MediaMetadata === 'function') {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title.textContent,
        artist: 'Conectados a Cristo · Asamblea Cristiana',
        artwork: [
          { src: new URL('assets/icon-192-v2.png', base).href, sizes: '192x192', type: 'image/png' },
          { src: new URL('assets/icon-512-v2.png', base).href, sizes: '512x512', type: 'image/png' }
        ]
      });
    }
    navigator.mediaSession.playbackState = (currentSource === 'radio' ? radioPlaybackRequested : !audio.paused) ? 'playing' : 'paused';
  }

  function renderPlayback() {
    const playing = currentSource === 'radio' ? radioPlaybackRequested : !audio.paused && !audio.ended;
    fab.classList.toggle('is-playing', playing);
    toggle.hidden = currentSource !== 'radio' && !started;
    toggle.textContent = playing ? '⏸' : '▶';
    toggle.setAttribute('aria-label', playing ? labels[language].pause : labels[language].resume);
    updateMediaSession();
  }

  function showError() {
    radioRetrying = false;
    error.textContent = labels[language].error;
    error.hidden = false;
    alternative.hidden = currentSource !== 'radio';
    renderPlayback();
  }

  function stopRadioRecovery() {
    radioPlaybackRequested = false;
    radioRetrying = false;
    radioRetryCount = 0;
    clearTimeout(radioRetryTimer);
    clearTimeout(radioStallTimer);
    radioRetryTimer = 0;
    radioStallTimer = 0;
  }

  function retryRadio() {
    if (currentSource !== 'radio' || !radioPlaybackRequested || radioRetryTimer) return;
    clearTimeout(radioStallTimer);
    radioStallTimer = 0;
    if (audio.readyState >= 3 && !audio.paused && !audio.error) {
      radioRetrying = false;
      error.hidden = true;
      alternative.hidden = true;
      return;
    }

    radioRetrying = true;
    error.textContent = labels[language].reconnecting;
    error.hidden = false;
    alternative.hidden = navigator.onLine && radioRetryCount < 5;
    renderPlayback();
    if (!navigator.onLine) return;

    const delay = Math.min(1000 * (2 ** Math.min(radioRetryCount, 5)), 30000);
    radioRetryCount += 1;
    radioRetryTimer = window.setTimeout(() => {
      radioRetryTimer = 0;
      if (currentSource !== 'radio' || !radioPlaybackRequested || !navigator.onLine) return;
      audio.src = sources.radio.url;
      audio.load();
      audio.play().catch(reason => {
        if (reason?.name === 'NotAllowedError') {
          stopRadioRecovery();
          audio.pause();
          startHint.hidden = false;
          showError();
        } else if (reason?.name !== 'AbortError') retryRadio();
      });
    }, delay);
  }

  function watchRadioBuffer() {
    if (currentSource !== 'radio' || !radioPlaybackRequested || radioRetryTimer || radioStallTimer) return;
    radioStallTimer = window.setTimeout(() => {
      radioStallTimer = 0;
      if (currentSource === 'radio' && radioPlaybackRequested && audio.readyState < 3) retryRadio();
    }, 10000);
  }

  function pauseAudio() {
    stopRadioRecovery();
    if (!error.hidden && currentSource === 'radio') error.hidden = true;
    audio.pause();
    renderPlayback();
  }

  function play() {
    stopBibleReading('Lectura detenida al iniciar otro audio.');
    if (currentSource === 'radio') {
      stopRadioRecovery();
      radioPlaybackRequested = true;
      error.hidden = true;
      alternative.hidden = true;
    }
    audio.play().catch(reason => {
      if (reason?.name === 'NotAllowedError') {
        if (currentSource === 'radio') stopRadioRecovery();
        startHint.hidden = false;
        if (currentSource === 'radio') showError();
      } else if (reason?.name !== 'AbortError') {
        if (currentSource === 'radio' && radioPlaybackRequested) retryRadio();
        else showError();
      }
    });
  }

  function updateSeekActions() {
    if (!('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.setActionHandler('seekbackward', currentSource !== 'radio' ? details => {
        audio.currentTime = Math.max(0, audio.currentTime - (details.seekOffset || 10));
      } : null);
      navigator.mediaSession.setActionHandler('seekforward', currentSource !== 'radio' ? details => {
        audio.currentTime = Math.min(Number.isFinite(audio.duration) ? audio.duration : Infinity, audio.currentTime + (details.seekOffset || 10));
      } : null);
    } catch (_) { /* Some browsers do not expose these media actions. */ }
    try {
      navigator.mediaSession.setActionHandler('previoustrack', currentSource === 'playlist' ? previousTrack : null);
      navigator.mediaSession.setActionHandler('nexttrack', currentSource === 'playlist' ? nextTrack : null);
    } catch (_) { /* Some browsers do not expose track actions. */ }
  }

  function loadTrack(index, playNow = false) {
    const track = songs.find(song => song.id === queue[index]);
    if (!track?.audio) return;
    stopRadioRecovery();
    audio.pause();
    currentSource = 'playlist';
    trackIndex = index;
    audio.controls = true;
    audio.hidden = false;
    liveNote.hidden = true;
    audio.src = new URL(track.audio, base).href;
    audio.load();
    sourceButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.audioSource === 'playlist')));
    try { localStorage.setItem('voz-juvenil-audio-source', 'playlist'); } catch (_) {}
    error.hidden = true;
    startHint.hidden = true;
    alternative.hidden = true;
    renderLanguage();
    renderPlayback();
    updateSeekActions();
    if (playNow) play();
  }

  function startPlaylist(id, playNow = true) {
    const selected = selectedSongs();
    if (id && !songs.some(song => song.id === id && song.audio)) return;
    queue = id && !selected.includes(id) ? [id] : selected;
    if (!queue.length) return;
    loadTrack(id ? queue.indexOf(id) : 0, playNow);
  }

  function previousTrack() {
    if (currentSource !== 'playlist' || trackIndex < 1) return;
    loadTrack(trackIndex - 1, true);
  }

  function nextTrack() {
    if (currentSource !== 'playlist' || trackIndex >= queue.length - 1) return;
    loadTrack(trackIndex + 1, true);
  }

  function updateQueue() {
    if (currentSource !== 'playlist') return;
    const currentId = activeTrack()?.id;
    const selected = selectedSongs();
    // Finish the current track even if it was just removed from the saved list.
    queue = currentId && !selected.includes(currentId) ? [currentId, ...selected] : selected;
    trackIndex = queue.indexOf(currentId);
    renderPlaylistControls();
    updateSeekActions();
  }

  function selectSource(next, playNow = false) {
    if (next === 'playlist') { startPlaylist(null, playNow); return; }
    if (!sources[next]?.url) return;
    if (next !== currentSource || !audio.src) {
      const wasPlaying = radioPlaybackRequested || !audio.paused && !audio.ended;
      stopRadioRecovery();
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
  toggle.addEventListener('click', () => currentSource === 'radio'
    ? radioPlaybackRequested ? pauseAudio() : play()
    : audio.paused ? play() : pauseAudio());
  for (const button of sourceButtons) {
    if (button.dataset.audioSource === 'meditation' && !sources.meditation.url) button.disabled = true;
    if (button.dataset.audioSource === 'playlist' && !selectedSongs().length) button.disabled = true;
    button.addEventListener('click', () => selectSource(button.dataset.audioSource, true));
  }
  playlistPrevious.addEventListener('click', previousTrack);
  playlistNext.addEventListener('click', nextTrack);
  audio.addEventListener('play', () => {
    stopBibleReading('Lectura detenida al iniciar otro audio.');
    started = true;
    if (!radioRetrying) error.hidden = true;
    startHint.hidden = true;
    renderPlayback();
  });
  audio.addEventListener('playing', () => {
    if (currentSource === 'radio') {
      clearTimeout(radioRetryTimer);
      clearTimeout(radioStallTimer);
      radioRetryTimer = 0;
      radioStallTimer = 0;
      radioRetryCount = 0;
      radioRetrying = false;
      error.hidden = true;
      alternative.hidden = true;
    }
    renderPlayback();
  });
  audio.addEventListener('pause', renderPlayback);
  audio.addEventListener('ended', () => {
    if (currentSource === 'playlist' && trackIndex < queue.length - 1) nextTrack();
    else if (currentSource === 'radio' && radioPlaybackRequested) retryRadio();
    else renderPlayback();
  });
  audio.addEventListener('waiting', watchRadioBuffer);
  audio.addEventListener('stalled', watchRadioBuffer);
  audio.addEventListener('error', () => {
    if (currentSource === 'radio' && radioPlaybackRequested) retryRadio();
    else showError();
  });
  window.addEventListener('online', () => {
    if (currentSource === 'radio' && radioPlaybackRequested) {
      clearTimeout(radioRetryTimer);
      radioRetryTimer = 0;
      radioRetryCount = 0;
      retryRadio();
    }
  });
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
    if (event.data?.type === 'voz-bible-reading-start') { startBibleReading(event.data); return; }
    if (event.data?.type === 'voz-bible-reading-stop') { stopBibleReading('Lectura detenida.'); return; }
    if (event.data?.type === 'voz-bible-reading-toggle') { toggleBibleReading(); return; }
    if (event.data?.type === 'voz-bible-reading-state-request') { sendBibleState(); return; }
    if (event.data?.type === 'voz-playlist-updated') {
      sourceButtons[2].disabled = !selectedSongs().length;
      updateQueue();
      return;
    }
    if (event.data?.type === 'voz-audio-playlist') { openPanel(); startPlaylist(); return; }
    if (event.data?.type === 'voz-audio-track' && typeof event.data.id === 'string') {
      openPanel(); startPlaylist(event.data.id); return;
    }
    if (event.data?.type !== 'voz-audio-select') return;
    openPanel();
    selectSource(event.data.source, true);
  });
  window.addEventListener('storage', event => {
    if (event.key === playlistKey) {
      sourceButtons[2].disabled = !selectedSongs().length;
      updateQueue();
    }
    if (event.key === 'voz-juvenil-idioma' || event.key === 'voz-juvenil-modo') {
      renderLanguage();
      updateMediaSession();
    }
  });
  if ('mediaSession' in navigator) {
    const actions = {
      play,
      pause: pauseAudio
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
  selectSource(initialSource === 'playlist' && selectedSongs().length ? 'playlist' : sources[initialSource]?.url ? initialSource : 'radio');
  renderLanguage();
  if ('serviceWorker' in navigator) {
    const serviceWorkers = navigator.serviceWorker;
    const hadController = Boolean(serviceWorkers.controller);
    let updateReady = false;
    let reloadTimer;

    function reloadWhenAudioStops() {
      clearTimeout(reloadTimer);
      if (!updateReady || bibleReading || radioPlaybackRequested || (!audio.paused && !audio.ended)) return;
      // Changing sources briefly pauses the player; wait for playback to resume.
      reloadTimer = setTimeout(() => {
        if (updateReady && !bibleReading && !radioPlaybackRequested && (audio.paused || audio.ended)) location.reload();
      }, 1000);
    }
    checkDeferredReload = reloadWhenAudioStops;

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

