const BASE_HIMNARIO='https://prog-collab.github.io/Himnario/';
const alabanzas=[
  {id:'alabanza1',titulo:'Te lo debo a Ti',pdf:'pdf/Te-lo-debo-a-Ti.pdf',video:'https://youtu.be/58pJyGiIjeM'},
  {id:'alabanza2',titulo:'Necesito de Ti',pdf:'pdf/Necesito-de-Ti.pdf',video:'https://youtu.be/t2x339dtz9w'},
  {id:'alabanza3',titulo:'Un Milagro',pdf:'pdf/Un-Milagro.pdf',video:'https://youtu.be/PndoQfL6eps'}
];
const historias=[
  {n:3,titulo:'¡Santo! ¡Santo! ¡Santo!',autor:'Reginald Heber · versión castellana asociada a Juan Bautista Cabrera',historia:'Heber escribió el himno para la celebración de la Trinidad. La primera impresión conocida data de 1825; su texto evoca la visión de adoración de Apocalipsis 4.',fuente:'https://hymnary.org/text/santo_santo_santo_senor_omnipotente'},
  {n:169,titulo:'Lluvias de gracia',autor:'Relacionado con el himno de Daniel W. Whittle',historia:'El canto en inglés “There Shall Be Showers of Blessing”, atribuido a Whittle en 1883, toma su imagen de Ezequiel 34:26. La ficha del himnario conserva la versión castellana que canta la congregación.',fuente:'https://hymnary.org/text/there_shall_be_showers_of_blessing_this'}
];
const lista=document.getElementById('lista-alabanzas');
alabanzas.forEach((item,i)=>{
  const card=document.createElement('article');card.className='resource-card';
  const over=document.createElement('span');over.className='overline';over.textContent='ALABANZA '+String(i+1).padStart(2,'0');
  const title=document.createElement('strong');title.textContent=item.titulo;
  const actions=document.createElement('div');actions.className='button-row';
  [['Ver letra y detalles','alabanza.html?id='+encodeURIComponent(item.id)],['PDF',item.pdf],['Video ↗',item.video]].forEach(([label,url],j)=>{
    const a=document.createElement('a');a.className='action-link'+(j===0?' primary':'');a.href=url;a.textContent=label;
    if(j>0){a.target='_blank';a.rel='noopener noreferrer'}actions.append(a)
  });
  card.append(over,title,actions);lista.append(card);
});
const select=document.getElementById('tema-himno');
CATALOGO_TEMAS.forEach((t,i)=>{const option=document.createElement('option');option.value=String(i);option.textContent=t.nombre;select.append(option)});
const caja=document.getElementById('lista-himnos'),cantidad=document.getElementById('cantidad-himnos'),mas=document.getElementById('mas-himnos');
const normalizar=s=>s.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
let visibles=32,filtrados=[];
function crearTarjeta(h){
  const card=document.createElement('article');card.className='resource-card';
  const over=document.createElement('span');over.className='overline';over.textContent='HIMNO '+String(h.n).padStart(3,'0');
  const title=document.createElement('strong');title.textContent=h.t;
  const a=document.createElement('a');a.className='action-link primary';a.href=BASE_HIMNARIO+'#'+h.n;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Abrir himno ↗';
  card.append(over,title,a);return card;
}
function pintar(){
  caja.replaceChildren();
  const frag=document.createDocumentFragment();
  filtrados.slice(0,visibles).forEach(h=>frag.append(crearTarjeta(h)));
  caja.append(frag);
  cantidad.textContent=filtrados.length+' himnos encontrados · mostrando '+Math.min(visibles,filtrados.length)+'.';
  mas.hidden=visibles>=filtrados.length;
  if(!filtrados.length){const p=document.createElement('p');p.className='empty-note';p.textContent='No encontramos un himno con esa búsqueda.';caja.append(p)}
}
function filtrar(){
  visibles=32;
  const q=normalizar(document.getElementById('buscar-himno').value.trim());
  const tema=select.value===''?null:CATALOGO_TEMAS[Number(select.value)];
  filtrados=CATALOGO_HIMNOS.filter(h=>(!tema||tema.himnos.includes(h.n))&&(!q||String(h.n).startsWith(q)||normalizar(h.t).includes(q)));
  if(/^\d+$/.test(q))filtrados.sort((a,b)=>(a.n===Number(q)?-1:b.n===Number(q)?1:a.n-b.n));
  pintar();
}
document.getElementById('buscar-himno').addEventListener('input',filtrar);
select.addEventListener('change',filtrar);
mas.addEventListener('click',()=>{visibles+=32;pintar()});
filtrar();
historias.forEach(h=>{
  const card=document.createElement('article');card.className='resource-card';
  const over=document.createElement('span');over.className='overline';over.textContent='HIMNO '+String(h.n).padStart(3,'0');
  const title=document.createElement('strong');title.textContent=h.titulo;
  const author=document.createElement('small');author.textContent=h.autor;
  const p=document.createElement('p');p.className='empty-note';p.textContent=h.historia;
  const actions=document.createElement('div');actions.className='button-row';
  const source=document.createElement('a');source.className='action-link';source.href=h.fuente;source.target='_blank';source.rel='noopener noreferrer';source.textContent='Historia y fuente ↗';
  const hymn=document.createElement('a');hymn.className='action-link primary';hymn.href=BASE_HIMNARIO+'#'+h.n;hymn.target='_blank';hymn.rel='noopener noreferrer';hymn.textContent='Abrir himno ↗';
  actions.append(hymn,source);card.append(over,title,author,p,actions);document.getElementById('historias-himnos').append(card)
});
document.querySelectorAll('[role=tab]').forEach(tab=>tab.addEventListener('click',()=>{
  document.querySelectorAll('[role=tab]').forEach(t=>t.setAttribute('aria-selected',String(t===tab)));
  document.querySelectorAll('[role=tabpanel]').forEach(p=>p.hidden=p.id!==tab.getAttribute('aria-controls'))
}));
