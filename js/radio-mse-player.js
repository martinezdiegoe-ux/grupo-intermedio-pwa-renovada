(() => {
  'use strict';

  const MIME_TYPE = 'audio/mpeg';
  const RETRY_BASE_MS = 2000;
  const RETRY_MAX_MS = 30000;
  const STALL_TIMEOUT_MS = 5000;
  const TRIM_INTERVAL_MS = 10000;
  const KEEP_PLAYED_SECONDS = 30;

  class RadioMSEPlayer {
    constructor(audio, onState = () => {}) {
      this.audio = audio;
      this.onState = onState;
      this.generation = 0;
      this.running = false;
      this.retryCount = 0;
      this.hasPlayed = false;
      this.mediaSource = null;
      this.sourceBuffer = null;
      this.objectUrl = '';
      this.abortController = null;
      this.reader = null;
      this.retryTimer = 0;
      this.wakeRetry = null;
      this.stallTimer = 0;
      this.trimTimer = 0;

      this.handleWaiting = () => {
        if (!this.running || this.stallTimer) return;
        this.stallTimer = window.setTimeout(() => {
          this.stallTimer = 0;
          if (this.running && this.audio.readyState < 3) {
            this.onState({ type: 'reconnecting', attempt: this.retryCount + 1, reason: 'buffer' });
            this.forceReconnect();
          }
        }, STALL_TIMEOUT_MS);
      };
      this.handlePlaying = () => {
        if (!this.running) return;
        this.hasPlayed = true;
        this.retryCount = 0;
        clearTimeout(this.stallTimer);
        this.stallTimer = 0;
        this.onState({ type: 'playing' });
      };
      this.handleMediaError = () => {
        if (this.running) this.onState({ type: 'fatal', error: this.audio.error });
      };

      this.audio.addEventListener('waiting', this.handleWaiting);
      this.audio.addEventListener('stalled', this.handleWaiting);
      this.audio.addEventListener('playing', this.handlePlaying);
      this.audio.addEventListener('error', this.handleMediaError);
    }

    isSupported() {
      return typeof MediaSource === 'function' && MediaSource.isTypeSupported(MIME_TYPE);
    }

    async start(url) {
      this.stop(false);
      if (!this.isSupported()) throw new Error('Media Source Extensions no admite audio/mpeg en este navegador.');
      if (!url) throw new Error('No hay una URL de radio disponible.');

      const generation = ++this.generation;
      this.running = true;
      this.retryCount = 0;
      this.hasPlayed = false;
      this.onState({ type: 'connecting' });

      try {
        const mediaSource = new MediaSource();
        this.mediaSource = mediaSource;
        this.objectUrl = URL.createObjectURL(mediaSource);
        this.audio.pause();
        this.audio.src = this.objectUrl;
        this.audio.load();

        // Request playback during the user's click, before awaiting sourceopen.
        // Some browsers reject play() if user activation expires during setup.
        let playError = null;
        const playPromise = Promise.resolve(this.audio.play()).catch(error => { playError = error; });

        await this.openPipeline(mediaSource, generation);
        if (!this.running || generation !== this.generation) return;

        this.trimTimer = window.setInterval(() => this.trimBuffer(generation), TRIM_INTERVAL_MS);
        this.streamPromise = this.streamLoop(url, generation);
        await playPromise;
        if (playError) throw playError;
      } catch (error) {
        if (generation === this.generation) this.stop(false);
        throw error;
      }
    }

    async openPipeline(mediaSource, generation) {
      await new Promise((resolve, reject) => {
        const timeout = window.setTimeout(() => reject(new Error('Tiempo agotado al iniciar MediaSource.')), 10000);
        mediaSource.addEventListener('sourceopen', () => {
          clearTimeout(timeout);
          if (!this.running || generation !== this.generation) {
            reject(new Error('La prueba del reproductor fue detenida.'));
            return;
          }
          try {
            this.sourceBuffer = mediaSource.addSourceBuffer(MIME_TYPE);
            this.sourceBuffer.mode = 'sequence';
            resolve();
          } catch (error) {
            reject(error);
          }
        }, { once: true });
        mediaSource.addEventListener('error', () => {
          clearTimeout(timeout);
          reject(new Error('No se pudo abrir MediaSource.'));
        }, { once: true });
      });
    }

    async streamLoop(url, generation) {
      while (this.running && generation === this.generation) {
        const connectedAt = Date.now();
        const controller = new AbortController();
        this.abortController = controller;

        try {
          const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-store',
            signal: controller.signal
          });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          if (!response.body) throw new Error('El stream no permite lectura progresiva.');

          this.reader = response.body.getReader();
          this.onState({ type: 'connected' });

          while (this.running && generation === this.generation) {
            const { done, value } = await this.reader.read();
            if (done) throw new Error('El stream cerró la conexión.');
            await this.appendChunk(value, generation);
          }
        } catch (error) {
          if (!this.running || generation !== this.generation) return;

          let delay = RETRY_BASE_MS;
          if (error?.name !== 'AbortError') {
            if (Date.now() - connectedAt >= 20000) this.retryCount = 0;
            this.retryCount += 1;
            delay = Math.min(RETRY_BASE_MS * (2 ** Math.min(this.retryCount - 1, 4)), RETRY_MAX_MS);
          }
          this.onState({ type: 'reconnecting', attempt: this.retryCount + 1, delay, error });
          await this.waitBeforeRetry(delay, generation);
        } finally {
          const reader = this.reader;
          this.reader = null;
          if (reader) reader.cancel().catch(() => {});
          this.abortController = null;
        }
      }
    }

    async appendChunk(chunk, generation) {
      const sourceBuffer = this.sourceBuffer;
      if (!sourceBuffer) throw new Error('SourceBuffer no está disponible.');

      while (sourceBuffer.updating && this.running && generation === this.generation) {
        await new Promise(resolve => sourceBuffer.addEventListener('updateend', resolve, { once: true }));
      }
      if (!this.running || generation !== this.generation) return;

      await new Promise((resolve, reject) => {
        const cleanup = () => {
          sourceBuffer.removeEventListener('updateend', onUpdateEnd);
          sourceBuffer.removeEventListener('error', onError);
        };
        const onUpdateEnd = () => { cleanup(); resolve(); };
        const onError = () => { cleanup(); reject(new Error('Error al agregar audio al búfer MSE.')); };
        sourceBuffer.addEventListener('updateend', onUpdateEnd, { once: true });
        sourceBuffer.addEventListener('error', onError, { once: true });
        try {
          sourceBuffer.appendBuffer(chunk);
        } catch (error) {
          cleanup();
          reject(error);
        }
      });
    }

    trimBuffer(generation) {
      const sourceBuffer = this.sourceBuffer;
      if (!this.running || generation !== this.generation || !sourceBuffer || sourceBuffer.updating) return;
      if (!sourceBuffer.buffered.length) return;

      const removeUntil = this.audio.currentTime - KEEP_PLAYED_SECONDS;
      const bufferedStart = sourceBuffer.buffered.start(0);
      if (removeUntil <= bufferedStart + 1) return;

      try { sourceBuffer.remove(bufferedStart, removeUntil); } catch (_) { /* Try again on the next trim interval. */ }
    }

    waitBeforeRetry(delay, generation) {
      return new Promise(resolve => {
        const finish = () => {
          this.retryTimer = 0;
          this.wakeRetry = null;
          resolve();
        };
        if (!this.running || generation !== this.generation) {
          resolve();
          return;
        }
        this.wakeRetry = finish;
        this.retryTimer = window.setTimeout(finish, delay);
      });
    }

    forceReconnect() {
      if (!this.running) return;
      if (this.abortController) this.abortController.abort();
      if (this.retryTimer) {
        clearTimeout(this.retryTimer);
        this.retryTimer = 0;
        const wake = this.wakeRetry;
        this.wakeRetry = null;
        wake?.();
      }
    }

    stop(notify = true) {
      const wasRunning = this.running;
      this.running = false;
      this.generation += 1;
      clearTimeout(this.stallTimer);
      clearTimeout(this.retryTimer);
      clearInterval(this.trimTimer);
      this.stallTimer = 0;
      this.retryTimer = 0;
      this.trimTimer = 0;
      this.wakeRetry?.();
      this.wakeRetry = null;
      this.abortController?.abort();
      this.abortController = null;

      const reader = this.reader;
      this.reader = null;
      if (reader) reader.cancel().catch(() => {});

      const sourceBuffer = this.sourceBuffer;
      const mediaSource = this.mediaSource;
      const objectUrl = this.objectUrl;
      this.sourceBuffer = null;
      this.mediaSource = null;
      this.objectUrl = '';

      try {
        if (sourceBuffer && mediaSource?.readyState === 'open') {
          if (sourceBuffer.updating) sourceBuffer.abort();
          mediaSource.removeSourceBuffer(sourceBuffer);
        }
        if (mediaSource?.readyState === 'open') mediaSource.endOfStream();
      } catch (_) { /* The browser may already have closed the source. */ }

      if (objectUrl && this.audio.src === objectUrl) {
        this.audio.pause();
        this.audio.removeAttribute('src');
        this.audio.load();
      }
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      if (notify && wasRunning) this.onState({ type: 'stopped' });
    }

    destroy() {
      this.stop(false);
      this.audio.removeEventListener('waiting', this.handleWaiting);
      this.audio.removeEventListener('stalled', this.handleWaiting);
      this.audio.removeEventListener('playing', this.handlePlaying);
      this.audio.removeEventListener('error', this.handleMediaError);
    }
  }

  window.RadioMSEPlayer = RadioMSEPlayer;
})();
