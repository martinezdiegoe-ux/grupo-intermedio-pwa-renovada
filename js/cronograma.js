// Agregá eventos vigentes aquí con fecha ISO YYYY-MM-DD.
const proximos=[];
const archivo=[
 {fecha:'2026-02-21',hora:'19:00',titulo:'Culto Juvenil Arroyo Leyes',comentario:'Culto de jóvenes y momento de camaradería cristiana.'},
 {fecha:'2026-02-27',hora:'20:00',titulo:'Noche de jóvenes',comentario:'Encuentro en el terreno de la iglesia, con juegos y palabra.'},
 {fecha:'2026-02-28',hora:'18:30',titulo:'Ensayo de alabanza',comentario:'Ensayo general del Grupo Intermedio.'}
];
const agenda=document.getElementById('agenda');
const hoy=new Date().toLocaleDateString('en-CA',{timeZone:'America/Argentina/Cordoba'});
const vigentes=[...proximos,...archivo].filter(e=>e.fecha>=hoy).sort((a,b)=>a.fecha.localeCompare(b.fecha));
function pintar(e,contenedor){
 const card=document.createElement('article');card.className='evento panel';
 const fecha=document.createElement('div');fecha.className='evento-fecha';fecha.textContent='📅 '+new Date(e.fecha+'T12:00:00').toLocaleDateString('es-AR',{day:'numeric',month:'long',year:'numeric'});
 const hora=document.createElement('div');hora.className='evento-hora';hora.textContent='⏰ '+e.hora+' hs';
 const titulo=document.createElement('div');titulo.className='evento-titulo';titulo.textContent=e.titulo;
 const nota=document.createElement('div');nota.className='evento-comentario';nota.textContent=e.comentario;
 card.append(fecha,hora,titulo,nota);contenedor.append(card);
}
if(vigentes.length)vigentes.forEach(e=>pintar(e,agenda));
else{const p=document.createElement('p');p.className='panel empty-note';p.textContent='Pronto compartiremos las próximas actividades.';agenda.append(p)}
const anteriores=archivo.filter(e=>e.fecha<hoy);
if(anteriores.length){const h=document.createElement('h2');h.textContent='Actividades anteriores';agenda.append(h);anteriores.reverse().forEach(e=>pintar(e,agenda))}
