const CACHE_NAME='conectados-a-cristo-v30';
const STATIC_ASSETS=[
  './','index.html','home.html','app.html','manifest.json','css/app.css','css/hero-bible.css','css/site-menu.css','css/theme.css','css/audio-shell.css','js/app-shell.js','js/audio-shell.js','js/i18n-data.js','reproductor.html',
  'palabra.html','js/palabra.js','alabanzas.html','alabanza.html','js/alabanzas.js','js/alabanza.js','js/playlist.js',
  'juegos.html','crucigramas.html','verdadero-falso.html','opcion-multiple.html',
  'cronograma.html','novedades.html','comunicados.html','mensajes.html','iglesia-perseguida.html','voz-juvenil.html','js/revista-data.js','js/revista.js',
  'lectura.html','js/plan-365.js?v=20','js/lectura.js?v=25','pdf/plan-biblia-un-ano.pdf','recursos.html','js/estudios-i18n.js','biblia.html','js/biblia.js?v=25','datos/biblia-rv1960.json?v=23','meditaciones.html','js/meditaciones.js','js/meditaciones-data.js','biblioteca.html','js/biblioteca.js','js/biblioteca-data.js','oracion.html','js/oracion.js','radio.html',
  'acerca.html','quienes.html','creemos.html','vision.html','donde.html','css/donde.css','js/filiales-data.js','js/donde.js',
  'assets/icon-192.png','assets/icon-512.png','assets/hero-biblia-abierta.png','assets/compartir-qr.svg'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(STATIC_ASSETS.map(path=>new Request(path,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})));
});

