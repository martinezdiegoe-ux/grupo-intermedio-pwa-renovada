// Agregá comunicados actuales con su fecha de publicación.
const comunicados=[];
const archivo=[
  'Este sábado nos reunimos a las 18:30 hs. ¡No faltes!',
  'Recordamos traer Biblia e Himnario para la próxima reunión.',
  'El grupo intermedio participará del culto especial el domingo; confirmar asistencia con Gabriel Salazar.',
  'El viernes 27/02 se realizará una juntada; confirmar asistencia con Matías Rosales.'
];
const chat=document.getElementById('chat');
if(!comunicados.length){const p=document.createElement('p');p.className='panel empty-note';p.textContent='No hay comunicados nuevos por ahora.';chat.append(p)}
comunicados.forEach(item=>{const div=document.createElement('article');div.className='mensaje';const p=document.createElement('p');p.textContent=item.texto;const fecha=document.createElement('small');fecha.textContent=item.fecha;div.append(p,fecha);chat.append(div)});
const h=document.createElement('h2');h.textContent='Comunicados anteriores · febrero 2026';chat.append(h);
archivo.forEach(texto=>{const div=document.createElement('article');div.className='mensaje';const p=document.createElement('p');p.textContent=texto;div.append(p);chat.append(div)});
