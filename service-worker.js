const CACHE_NAME='conectados-a-cristo-v64';
const STATIC_ASSETS=[
  './','index.html','home.html','app.html','manifest.json','manifest.json?v=2','css/app.css?v=31','css/hero-bible.css','css/radio-compact.css?v=1','css/site-menu.css?v=41','css/theme.css','css/audio-shell.css?v=44','js/app-shell.js?v=43','js/audio-shell.js?v=45','js/i18n-data.js','reproductor.html',
  'palabra.html','js/palabra.js','alabanzas.html','alabanza.html','js/alabanzas-data.js?v=1','js/alabanzas-i18n.js?v=1','js/alabanzas.js?v=44','js/alabanza.js?v=44','js/playlist.js?v=44',
  'juegos.html','crucigramas.html','verdadero-falso.html','opcion-multiple.html',
  'cronograma.html','novedades.html','comunicados.html','mensajes.html','iglesia-perseguida.html','css/iglesia-perseguida.css?v=1','voz-juvenil.html','revista-leer.html','css/revista-leer.css?v=39','js/revista-data.js?v=39','js/revista-ocr.js?v=37','js/revista.js?v=48','js/revista-leer.js?v=41',
  'lectura.html','js/plan-365.js?v=20','js/lectura-audio.js?v=34','js/lectura.js?v=36','pdf/plan-biblia-un-ano.pdf','recursos.html','js/estudios-i18n.js','biblia.html','js/biblia.js?v=32','datos/biblia-rv1960.json?v=23','meditaciones.html','js/meditaciones.js?v=31','js/meditaciones-data.js?v=31','biblioteca.html','js/biblioteca.js','js/biblioteca-data.js','oracion.html','js/oracion.js','radio.html',
  'acerca.html','quienes.html','creemos.html','vision.html','donde.html','css/donde.css','js/filiales-data.js','js/donde.js',
  'assets/icon-192.png','assets/icon-512.png','assets/icon-192-v2.png','assets/icon-512-v2.png','assets/hero-biblia-abierta.png','assets/compartir-qr.svg',
  'assets/revista/voz-juvenil-59.webp','assets/revista/voz-juvenil-60.webp','assets/revista/voz-juvenil-61.webp'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(STATIC_ASSETS.map(path=>new Request(path,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  // Let the browser make its own byte-range requests for MP3 seeking and playback.
  if(new URL(event.request.url).pathname.includes('/assets/audio/')&&new URL(event.request.url).pathname.endsWith('.mp3'))return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})));
});


