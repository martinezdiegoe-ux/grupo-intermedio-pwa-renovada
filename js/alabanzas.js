const alabanzas=[
  {id:'alabanza1',titulo:'Te lo debo a Ti',pdf:'pdf/Te-lo-debo-a-Ti.pdf',video:'https://youtu.be/58pJyGiIjeM'},
  {id:'alabanza2',titulo:'Necesito de Ti',pdf:'pdf/Necesito-de-Ti.pdf',video:'https://youtu.be/t2x339dtz9w'},
  {id:'alabanza3',titulo:'Un Milagro',pdf:'pdf/Un-Milagro.pdf',video:'https://youtu.be/PndoQfL6eps'}
];
window.VOZ_ALABANZAS=alabanzas;
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
  const pick=document.createElement('button');pick.type='button';pick.className='pill-button playlist-toggle';pick.dataset.id=item.id;pick.textContent='Agregar a mi playlist';card.append(over,title,actions,pick);lista.append(card);
});
