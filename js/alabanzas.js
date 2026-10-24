const alabanzas=window.VOZ_ALABANZAS||[];
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
  const play=document.createElement('button');play.type='button';play.className='action-link';play.textContent='▶ Escuchar audio';play.addEventListener('click',()=>{
    window.parent.postMessage({type:'voz-audio-track',id:item.id},location.origin);
  });actions.append(play);
  const pick=document.createElement('button');pick.type='button';pick.className='pill-button playlist-toggle';pick.dataset.id=item.id;pick.textContent='Agregar a mi playlist';card.append(over,title,actions,pick);lista.append(card);
});

