(() => {
  'use strict';

  if (window.parent === window || window.frameElement?.id !== 'site-frame') {
    const shell = new URL('app.html', location.href);
    shell.searchParams.set('page', 'revista-leer.html' + location.search);
    location.replace(shell.href);
    return;
  }
  try {
    document.documentElement.dataset.theme = localStorage.getItem('voz-juvenil-modo') === 'dark' ? 'dark' : 'light';
  } catch (_) {}

  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const issue = (window.VOZ_REVISTAS || []).find(item => String(item.numero) === params.get('numero'));
  const stage = $('reader-stage');
  const image = $('reader-image');
  const pageInput = $('reader-page');
  const zoomButton = $('reader-zoom');
  let page = 1;
  let zoom = 1;
  let fitWidth = 0;
  let fitHeight = 0;
  let loadVersion = 0;
  let swipeStart = null;
  let pinchStart = null;

  if (!issue) {
    $('reader-status').hidden = true;
    $('reader-error').hidden = false;
    $('reader-error').firstChild.textContent = 'No se encontró esta edición. ';
    $('reader-pdf').textContent = 'Volver al archivo';
    $('reader-prev').disabled = true;
    $('reader-next').disabled = true;
    zoomButton.disabled = true;
    pageInput.disabled = true;
    return;
  }

  document.title = `Voz Juvenil Nº ${issue.numero} · Conectados a Cristo`;
  $('reader-title').textContent = `Voz Juvenil Nº ${issue.numero}`;
  $('reader-total').textContent = `de ${issue.paginas}`;
  pageInput.max = String(issue.paginas);
  $('reader-pdf').href = issue.pdf;

  function pageUrl(value) {
    return `assets/revista/paginas/${issue.numero}/${String(value).padStart(2, '0')}.webp`;
  }

  function setZoom(value, focusX, focusY) {
    if (image.hidden || !fitWidth || !fitHeight) return;
    const next = Math.max(1, Math.min(4, value));
    const stageRect = stage.getBoundingClientRect();
    const rect = image.getBoundingClientRect();
    const x = focusX ?? stageRect.left + stage.clientWidth / 2;
    const y = focusY ?? stageRect.top + stage.clientHeight / 2;
    const relativeX = (x - rect.left) / rect.width;
    const relativeY = (y - rect.top) / rect.height;
    zoom = next;
    stage.classList.toggle('is-zoomed', zoom > 1);
    image.style.width = `${Math.round(fitWidth * zoom)}px`;
    image.style.height = `${Math.round(fitHeight * zoom)}px`;
    stage.scrollLeft = Math.max(0, relativeX * fitWidth * zoom + 12 - (x - stageRect.left));
    stage.scrollTop = Math.max(0, relativeY * fitHeight * zoom + 12 - (y - stageRect.top));
    zoomButton.textContent = zoom > 1 ? 'Tamaño normal' : 'Ampliar';
    zoomButton.setAttribute('aria-label', zoom > 1 ? 'Mostrar página completa' : 'Ampliar página');
  }

  function fitPage() {
    if (!image.naturalWidth) return;
    const availableWidth = Math.max(1, stage.clientWidth - 24);
    const availableHeight = Math.max(1, stage.clientHeight - 24);
    const ratio = Math.min(availableWidth / image.naturalWidth, availableHeight / image.naturalHeight, 1);
    fitWidth = image.naturalWidth * ratio;
    fitHeight = image.naturalHeight * ratio;
    image.style.width = `${Math.round(fitWidth * zoom)}px`;
    image.style.height = `${Math.round(fitHeight * zoom)}px`;
  }

  function showPage(value) {
    const nextPage = Math.max(1, Math.min(issue.paginas, Math.trunc(Number(value) || 1)));
    if (nextPage === page && image.src && !image.hidden) { pageInput.value = String(page); return; }
    page = nextPage;
    pageInput.value = String(page);
    $('reader-prev').disabled = page === 1;
    $('reader-next').disabled = page === issue.paginas;
    $('reader-status').hidden = false;
    $('reader-error').hidden = true;
    image.hidden = true;
    zoomButton.disabled = true;
    zoom = 1;
    stage.classList.remove('is-zoomed');
    zoomButton.textContent = 'Ampliar';
    zoomButton.setAttribute('aria-label', 'Ampliar página');
    stage.scrollTo(0, 0);
    const url = new URL(location.href);
    url.searchParams.set('numero', issue.numero);
    url.searchParams.set('pagina', page);
    history.replaceState(null, '', url);
    try {
      if (window.parent !== window) window.parent.history.replaceState(null, '', url);
    } catch (_) {}
    const currentLoad = ++loadVersion;
    const source = pageUrl(page);
    image.onload = () => {
      if (currentLoad !== loadVersion) return;
      image.hidden = false;
      zoomButton.disabled = false;
      $('reader-status').hidden = true;
      fitPage();
      [page - 1, page + 1].filter(n => n >= 1 && n <= issue.paginas).forEach(n => {
        const adjacent = new Image();
        adjacent.src = pageUrl(n);
      });
    };
    image.onerror = () => {
      if (currentLoad !== loadVersion) return;
      $('reader-status').hidden = true;
      $('reader-error').hidden = false;
    };
    image.alt = `Página ${page} de la revista Voz Juvenil Nº ${issue.numero}`;
    image.src = source;
  }

  $('reader-prev').addEventListener('click', () => showPage(page - 1));
  $('reader-next').addEventListener('click', () => showPage(page + 1));
  pageInput.addEventListener('change', () => showPage(pageInput.value));
  zoomButton.addEventListener('click', () => setZoom(zoom > 1 ? 1 : 2));
  window.addEventListener('resize', fitPage);
  window.addEventListener('keydown', event => {
    if (event.target === pageInput) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPage(page - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPage(page + 1); }
  });

  const distance = touches => Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
  stage.addEventListener('touchstart', event => {
    if (event.touches.length === 2) {
      event.preventDefault();
      pinchStart = { distance: Math.max(1, distance(event.touches)), zoom };
      swipeStart = null;
    } else if (event.touches.length === 1 && !pinchStart) {
      swipeStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
  }, { passive: false });
  stage.addEventListener('touchmove', event => {
    if (!pinchStart || event.touches.length !== 2) return;
    event.preventDefault();
    const midpointX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
    const midpointY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
    setZoom(pinchStart.zoom * distance(event.touches) / pinchStart.distance, midpointX, midpointY);
  }, { passive: false });
  stage.addEventListener('touchend', event => {
    if (pinchStart) {
      if (event.touches.length < 2) pinchStart = null;
      return;
    }
    if (!swipeStart || event.changedTouches.length !== 1 || zoom > 1) return;
    const dx = event.changedTouches[0].clientX - swipeStart.x;
    const dy = event.changedTouches[0].clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.2) showPage(page + (dx < 0 ? 1 : -1));
  }, { passive: true });

  showPage(params.get('pagina'));
})();
