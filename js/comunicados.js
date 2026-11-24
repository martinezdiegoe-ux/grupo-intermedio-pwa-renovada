// Agregar comunicados con fecha ISO, filial y, si corresponde, fecha de vencimiento `hasta`.
const comunicados=[];
const archivo=[
 {fecha:'2026-02-21',filial:'',texto:'Este sábado nos reunimos a las 18:30 hs. ¡No faltes!'},
 {fecha:'2026-02-21',filial:'',texto:'Recordamos traer Biblia e Himnario para la próxima reunión.'},
 {fecha:'2026-02-22',filial:'',texto:'El grupo intermedio participará del culto especial el domingo; confirmar asistencia con Gabriel Salazar.'},
 {fecha:'2026-02-27',filial:'',texto:'El viernes 27/02 se realizará una juntada; confirmar asistencia con Matías Rosales.'}
];
const items=[...comunicados,...archivo].sort((a,b)=>b.fecha.localeCompare(a.fecha));
const $=id=>document.getElementById(id), filial=$('comunicados-filial');
[...new Set(items.map(x=>x.filial).filter(Boolean))].sort().forEach(name=>{const o=document.createElement('option');o.value=name;o.textContent=name;filial.append(o)});
function noticeCard(item) {
  const card = document.createElement('article');
  card.className = 'resource-card';
  const overline = document.createElement('span');
  overline.className = 'overline';
  overline.textContent = [
    new Date(item.fecha + 'T12:00:00').toLocaleDateString('es-AR'),
    item.filial || 'Comunicado general'
  ].join(' · ');
  const body = document.createElement('p');
  body.textContent = item.texto;
  card.append(overline, body);
  return card;
}

function render() {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Argentina/Buenos_Aires' });
  const from = $('comunicados-desde').value;
  const to = $('comunicados-hasta').value;
  const isCurrent = item => !archivo.includes(item) && (!item.hasta || item.hasta >= today);
  const published = items.filter(item => item.fecha <= today);
  const matches = published.filter(item =>
    (!filial.value || item.filial === filial.value || !item.filial) &&
    (!from || item.fecha >= from) && (!to || item.fecha <= to));
  const current = matches.filter(isCurrent);
  const past = matches.filter(item => !isCurrent(item));
  $('chat').replaceChildren(...current.map(noticeCard));
  $('comunicados-historial').replaceChildren(...past.map(noticeCard));
  $('comunicados-vacio').textContent = published.some(isCurrent)
    ? 'No hay comunicados vigentes para esos filtros.'
    : 'Por ahora no hay comunicados vigentes.';
  $('comunicados-vacio').hidden = current.length > 0;
  $('comunicados-historial-vacio').hidden = past.length > 0;
}
['comunicados-filial','comunicados-desde','comunicados-hasta'].forEach(id=>$(id).addEventListener('change',render));render();
