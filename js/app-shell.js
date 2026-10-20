(() => {
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(() => {}));
  if (document.querySelector('.topbar')) return;
  document.body.classList.add('legacy-page');
  const header=document.createElement('header');header.className='topbar app-header';
  header.innerHTML='<a class="brand" href="index.html"><span class="brand-mark">✦</span><span><strong>VOZ JUVENIL</strong><small>GRUPO INTERMEDIO</small></span></a><a class="top-link" href="index.html">← Inicio</a>';
  document.body.prepend(header);
  const nav=document.createElement('nav');nav.className='bottom-nav';nav.setAttribute('aria-label','Navegación principal');
  const links=[['index.html','⌂','Inicio'],['palabra.html','✦','Meditar'],['alabanzas.html','♫','Música'],['juegos.html','◈','Juegos'],['novedades.html','◉','Novedades']];
  const name=location.pathname.split('/').pop();
  links.forEach(([href,icon,label])=>{const a=document.createElement('a');a.href=href;a.innerHTML='<span aria-hidden="true">'+icon+'</span>'+label;if(name===href||name==='alabanza.html'&&href==='alabanzas.html')a.className='selected';nav.append(a)});
  document.body.append(nav);
})();
