// Agregar comunicados vigentes con fecha ISO y filial: {fecha:'2026-11-01',filial:'Santa Fe',texto:'...'}.
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
function render(){const list=$('chat'), desde=$('comunicados-desde').value, hasta=$('comunicados-hasta').value;list.replaceChildren();const filtered=items.filter(x=>(!filial.value||x.filial===filial.value||!x.filial)&&(!desde||x.fecha>=desde)&&(!hasta||x.fecha<=hasta));$('comunicados-vacio').hidden=filtered.length>0;for(const item of filtered){const card=document.createElement('article');card.className='resource-card';const over=document.createElement('span');over.className='overline';over.textContent=[new Date(item.fecha+'T12:00:00').toLocaleDateString('es-AR'),item.filial||'Comunicado general'].join(' · ');const body=document.createElement('p');body.textContent=item.texto;card.append(over,body);list.append(card)}}
['comunicados-filial','comunicados-desde','comunicados-hasta'].forEach(id=>$(id).addEventListener('change',render));render();
