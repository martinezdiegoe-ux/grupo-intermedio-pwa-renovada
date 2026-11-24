const CACHE_NAME='conectados-a-cristo-v83';
const CORE_ASSETS=['./','index.html','app.html','manifest.json?v=2','css/app.css?v=33','css/home-cards.css?v=5','css/home-button-effects.css?v=1','js/home-button-effects.js?v=1','css/audio-shell.css?v=44','js/audio-shell.js?v=47','js/app-shell.js?v=43','js/meditaciones-data.js?v=32','js/i18n-data.js','js/alabanzas-data.js?v=1','js/radio-mse-player.js?v=1'];
const STATIC_ASSETS=[
  './','index.html','home.html','app.html','manifest.json','manifest.json?v=2','css/app.css?v=31','css/app.css?v=33','css/hero-bible.css?v=2','css/radio-compact.css?v=1','css/site-menu.css?v=41','css/theme.css','css/audio-shell.css?v=44','js/app-shell.js?v=42','js/app-shell.js?v=43','js/audio-shell.js?v=47','js/radio-mse-player.js?v=1','js/i18n-data.js','reproductor.html','js/home.js',
  'palabra.html','css/palabra.css','js/palabra.js?v=2','alabanzas.html','alabanza.html','js/alabanzas-data.js?v=1','js/alabanzas-i18n.js?v=1','js/alabanzas.js?v=44','js/alabanza.js?v=44','js/playlist.js?v=44',
  'juegos.html','css/juegos.css?v=4','assets/juegos/crucigramas.webp','assets/juegos/verdadero-falso.webp','assets/juegos/opcion-multiple.webp','assets/juegos/punteria-biblica.webp','crucigramas.html','js/crucigrama.js?v=2','verdadero-falso.html','opcion-multiple.html','js/quiz.js','punteria-biblica.html','js/punteria-biblica.js?v=2',
  'cronograma.html','js/cronograma.js?v=32','novedades.html','comunicados.html','js/comunicados.js?v=32','mensajes.html','iglesia-perseguida.html','css/iglesia-perseguida.css?v=2','js/iglesia-perseguida.js?v=1','voz-juvenil.html','revista-leer.html','css/revista-leer.css?v=39','js/revista-data.js?v=39','js/revista-ocr.js?v=37','js/revista.js?v=48','js/revista-leer.js?v=41','mis-datos.html','js/mis-datos.js',
  'lectura.html','js/plan-365.js?v=20','js/lectura-audio.js?v=34','js/lectura.js?v=36','pdf/plan-biblia-un-ano.pdf','recursos.html','js/estudios-i18n.js','biblia.html','js/biblia.js?v=33','datos/biblia-rv1960.json?v=23','meditaciones.html','js/meditaciones.js?v=32','js/meditaciones-data.js?v=32','biblioteca.html','js/biblioteca.js','js/biblioteca-data.js','oracion.html','js/oracion.js','radio.html',
  'acerca.html','donde.html','css/donde.css','js/filiales-data.js','js/donde.js',
  'assets/icon-192-v2.png','assets/icon-512-v2.png','assets/hero-biblia-abierta.webp','assets/compartir-qr.svg',
  'css/section-thumbnails.css?v=1','assets/descubri/meditacion.webp','assets/descubri/alabanzas.webp','assets/descubri/biblia.webp','assets/descubri/comunicados.webp','assets/descubri/mensajes.webp','assets/descubri/estudios.webp',
  'assets/descubri/juegos.webp','assets/descubri/lectura.webp','assets/descubri/novedades.webp','assets/descubri/cronograma.webp','assets/descubri/estudios-lampara.webp','assets/descubri/oracion.webp','assets/descubri/encontranos.webp','assets/descubri/nosotros.webp?v=2','assets/descubri/iglesia-perseguida.webp',
  'assets/revista/voz-juvenil-59.webp','assets/revista/voz-juvenil-60.webp','assets/revista/voz-juvenil-61.webp'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(async cache=>{
  await cache.addAll(CORE_ASSETS.map(path=>new Request(path,{cache:'reload'})));
  await Promise.allSettled(STATIC_ASSETS.filter(path=>!CORE_ASSETS.includes(path)).map(path=>cache.add(new Request(path,{cache:'reload'}))));
}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  // Let the browser make its own byte-range requests for MP3 seeking and playback.
  if(new URL(event.request.url).pathname.includes('/assets/audio/')&&new URL(event.request.url).pathname.endsWith('.mp3'))return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response}).catch(async () => {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      const page = new URL(event.request.url);
      if (page.search && page.pathname.endsWith('.html')) {
        // Navigation parameters identify what to render; the HTML file is the same.
        page.search = '';
        const document = await caches.match(page.href);
        if (document) return document;
      }
      return new Response('Esta página todavía no está disponible sin conexión.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})));
});


