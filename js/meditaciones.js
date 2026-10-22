(() => {
  'use strict';
  const items = (window.VOZ_MEDITACIONES || []).slice().sort((a,b) => (b.date || '').localeCompare(a.date || ''));
  const $ = id => document.getElementById(id);
  const normalized = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const dateLabel = value => value ? new Date(value + 'T12:00:00').toLocaleDateString('es-AR',{day:'numeric',month:'long',year:'numeric'}) : 'Meditación del archivo';
  let active = items.find(item => item.id === new URLSearchParams(location.search).get('id')) || items[0];
  function renderArticle() {
    if (!active) return;
    $('meditation-date').textContent = dateLabel(active.date);
    $('meditation-title').textContent = active.title;
    $('meditation-reference').textContent = active.reference;
    $('meditation-verse').textContent = active.verse || '';
    $('meditation-verse').hidden = !active.verse;
    $('meditation-body').textContent = active.text;
    const audio = $('meditation-audio'); audio.pause(); audio.removeAttribute('src');
    audio.hidden = !active.audio || active.audioStable === false;
    if (!audio.hidden) audio.src = active.audio;
    const url = new URL(location.href); url.searchParams.set('id', active.id); history.replaceState(null,'',url);
  }
  const topics = [...new Set(items.flatMap(item => item.topics || (item.topic ? [item.topic] : [])))].sort();
  for(const topic of topics){const option=document.createElement('option');option.value=topic;option.textContent=topic;$('meditation-topic').append(option)}
  function renderList() {
    const query = normalized($('meditation-search').value.trim());
    const topic=$('meditation-topic').value, from=$('meditation-from').value, to=$('meditation-to').value;
    const matches = items.filter(item => normalized([item.title,item.reference,item.summary,item.text].join(' ')).includes(query) && (!topic || (item.topics || [item.topic]).includes(topic)) && (!from || (item.date && item.date >= from)) && (!to || (item.date && item.date <= to)));
    $('meditation-count').textContent = `${items.length} ${items.length === 1 ? 'meditación disponible' : 'meditaciones disponibles'}`;
    $('meditation-empty').hidden = matches.length > 0;
    const list = $('meditation-list'); list.replaceChildren();
    for (const item of matches) {
      const link = document.createElement('a'); link.className = 'meditation-item'; link.href = `?id=${encodeURIComponent(item.id)}`;
      link.setAttribute('aria-current',String(item.id === active?.id));
      const date = document.createElement('span'); date.textContent = dateLabel(item.date);
      const name = document.createElement('strong'); name.textContent = item.title;
      const detail = document.createElement('small'); detail.textContent = item.reference;
      link.append(date,name,detail);
      link.addEventListener('click',event => { event.preventDefault(); active=item; renderArticle(); renderList(); $('meditation-title').scrollIntoView({behavior:'smooth',block:'start'}); });
      list.append(link);
    }
  }
  $('meditation-search').addEventListener('input',renderList);
  ['meditation-topic','meditation-from','meditation-to'].forEach(id=>$(id).addEventListener('change',renderList));
  if (active) {renderArticle();renderList();}
})();
