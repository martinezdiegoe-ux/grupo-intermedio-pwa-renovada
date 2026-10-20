const CACHE_NAME='voz-juvenil-v14';
const STATIC_ASSETS=[
  './','index.html','home.html','manifest.json','css/app.css','css/hero-bible.css','css/site-menu.css','css/theme.css','js/app-shell.js','js/i18n-data.js',
  'palabra.html','js/palabra.js','alabanzas.html','alabanza.html','js/alabanzas.js','js/alabanza.js',
  'juegos.html','crucigramas.html','verdadero-falso.html','opcion-multiple.html',
  'cronograma.html','novedades.html','comunicados.html','mensajes.html',
  'lectura.html','js/plan-365.js','js/lectura.js','recursos.html','js/estudios-i18n.js','biblia.html','js/biblia.js','meditaciones.html','js/meditaciones.js','js/meditaciones-data.js','biblioteca.html','js/biblioteca.js','js/biblioteca-data.js','oracion.html','js/oracion.js','radio.html',
  'acerca.html','quienes.html','creemos.html','vision.html','donde.html','css/donde.css','js/filiales-data.js','js/donde.js',
  'assets/icon-192.png','assets/icon-512.png','assets/hero-biblia-abierta.png'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(STATIC_ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})));
});
