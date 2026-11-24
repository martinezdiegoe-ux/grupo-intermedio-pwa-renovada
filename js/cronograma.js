// Para la búsqueda por distancia agregar coordenadas verificadas: lat, lon. Para Maps, dirección o mapUrl.
const proximos=[];
const archivo=[
 {fecha:'2026-02-21',hora:'19:00',titulo:'Culto Juvenil Arroyo Leyes',comentario:'Culto de jóvenes y momento de camaradería cristiana.',filial:'Arroyo Leyes'},
 {fecha:'2026-02-27',hora:'20:00',titulo:'Noche de jóvenes',comentario:'Encuentro en el terreno de la iglesia, con juegos y palabra.',filial:''},
 {fecha:'2026-02-28',hora:'18:30',titulo:'Ensayo de alabanza',comentario:'Ensayo general del Grupo Intermedio.',filial:''}
];
const events=[...proximos,...archivo].sort((a,b)=>a.fecha.localeCompare(b.fecha));
const $=id=>document.getElementById(id),select=$('agenda-filial');let position=null, nearby=false;
[...new Set(events.map(e=>e.filial).filter(Boolean))].sort().forEach(name=>{const o=document.createElement('option');o.value=name;o.textContent=name;select.append(o)});
function distance(a,b,c,d){const rad=Math.PI/180,dl=(d-b)*rad,df=(c-a)*rad,z=Math.sin(df/2)**2+Math.cos(a*rad)*Math.cos(c*rad)*Math.sin(dl/2)**2;return 6371*2*Math.atan2(Math.sqrt(z),Math.sqrt(1-z))}
function eventCalendar(event, now = new Date()) {
  const escape = value => String(value || '').replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n')
    .replace(/[,;]/g, '\\$&');
  const format = date => date.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const start = new Date(event.fecha + 'T' + event.hora + ':00-03:00');
  const identity = encodeURIComponent(event.id || [event.fecha, event.hora, event.filial, event.titulo].join('|'));
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Conectados a Cristo//Cronograma//ES',
    'BEGIN:VEVENT', 'UID:' + identity + '@conectados-a-cristo', 'DTSTAMP:' + format(now), 'DTSTART:' + format(start),
    'SUMMARY:' + escape(event.titulo), 'DESCRIPTION:' + escape(event.comentario)];
  const location = [event.direccion, event.filial].filter(Boolean).join(' · ');
  if (location) lines.push('LOCATION:' + escape(location));
  if (event.mapUrl) lines.push('URL:' + event.mapUrl);
  lines.push('END:VEVENT', 'END:VCALENDAR');

  const encoder = new TextEncoder();
  return lines.map(line => {
    let output = '';
    let bytes = 0;
    for (const character of line) {
      const width = encoder.encode(character).length;
      if (bytes + width > 75) { output += '\r\n '; bytes = 1; }
      output += character;
      bytes += width;
    }
    return output;
  }).join('\r\n') + '\r\n';
}

function eventCard(event, includeCalendar = false) {
  const card = document.createElement('article');
  card.className = 'resource-card';
  const date = document.createElement('time');
  date.className = 'overline';
  date.dateTime = event.fecha + 'T' + event.hora;
  date.textContent = new Date(event.fecha + 'T12:00:00').toLocaleDateString('es-AR', {
    day: 'numeric', month: 'long', year: 'numeric'
  }) + ' · ' + event.hora + ' hs';
  const title = document.createElement('strong');
  title.textContent = event.titulo;
  const filial = document.createElement('small');
  filial.textContent = event.filial || 'Actividad general';
  const note = document.createElement('p');
  note.textContent = event.comentario;
  card.append(date, title, filial, note);
  const map = event.mapUrl || (event.direccion
    ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(event.direccion)
    : '');
  const actions = document.createElement('div');
  actions.className = 'button-row';
  if (map) {
    const link = document.createElement('a');
    link.className = 'action-link event-map';
    link.href = map;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Ver ubicación en Maps ↗';
    actions.append(link);
  }
  if (includeCalendar) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'action-link';
    button.textContent = 'Agregar al calendario';
    button.addEventListener('click', () => {
      const url = URL.createObjectURL(new Blob([eventCalendar(event)], { type: 'text/calendar;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'actividad-' + event.fecha + '.ics';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    });
    actions.append(button);
  }
  if (actions.childElementCount) card.append(actions);
  return card;
}

function render() {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Argentina/Buenos_Aires' });
  const from = $('agenda-desde').value;
  const to = $('agenda-hasta').value;
  const matches = events.filter(event =>
    (!select.value || event.filial === select.value) &&
    (!from || event.fecha >= from) && (!to || event.fecha <= to) &&
    (!nearby || (Number.isFinite(event.lat) && Number.isFinite(event.lon) &&
      distance(position.lat, position.lon, event.lat, event.lon) <= 100)));
  const upcoming = matches.filter(event => event.fecha >= today);
  const past = matches.filter(event => event.fecha < today).reverse();
  $('agenda').replaceChildren(...upcoming.map(event => eventCard(event, true)));
  $('agenda-historial').replaceChildren(...past.map(event => eventCard(event)));
  $('agenda-vacio').textContent = events.some(event => event.fecha >= today)
    ? 'No hay próximas actividades para esos filtros.'
    : 'Por ahora no hay próximas actividades confirmadas.';
  $('agenda-vacio').hidden = upcoming.length > 0;
  $('agenda-historial-vacio').hidden = past.length > 0;
}
['agenda-filial','agenda-desde','agenda-hasta'].forEach(id=>$(id).addEventListener('change',render));
$('agenda-cerca').addEventListener('click',()=>{if(!navigator.geolocation){$('agenda-ubicacion').textContent='Este navegador no ofrece ubicación.';return}if(!events.some(e=>Number.isFinite(e.lat)&&Number.isFinite(e.lon))){$('agenda-ubicacion').textContent='Aún no hay actividades con ubicación verificada para calcular la distancia.';return}navigator.geolocation.getCurrentPosition(p=>{position={lat:p.coords.latitude,lon:p.coords.longitude};nearby=true;$('agenda-todas').hidden=false;$('agenda-ubicacion').textContent='Mostrando actividades a hasta 100 km de tu ubicación.';render()},()=>{$('agenda-ubicacion').textContent='No se pudo obtener tu ubicación. Podés seguir filtrando por filial.'},{enableHighAccuracy:false,timeout:10000})});
$('agenda-todas').addEventListener('click',()=>{nearby=false;position=null;$('agenda-todas').hidden=true;$('agenda-ubicacion').textContent='';render()});render();
