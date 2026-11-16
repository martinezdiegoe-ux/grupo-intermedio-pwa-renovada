(() => {
  const links = '.home-main .feature-card[href], .home-main .module[href], .bottom-nav a[href]';
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let navigationPending = false;

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.detail === 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || motionPreference.matches) return;

    const link = event.target.closest(links);
    if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download') ||
        link.origin !== location.origin || typeof link.animate !== 'function') return;

    event.preventDefault();
    if (navigationPending) return;

    navigationPending = true;
    const destination = link.href;
    const bounce = link.animate([
      { scale: .975 },
      { scale: 1.008, offset: .7 },
      { scale: 1 }
    ], { duration: 145, easing: 'ease-out' });

    const navigate = () => {
      navigationPending = false;
      location.assign(destination);
    };
    bounce.finished.then(navigate, navigate);
  });
})();
