(() => {
  'use strict';
  const search = document.getElementById('persecution-search-input');
  const status = document.getElementById('persecution-search-status');
  const stories = [...document.querySelectorAll('.persecution-story')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  search.addEventListener('input', () => {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const story of stories) {
      const matches = terms.every(term => normalize(story.textContent).includes(term));
      story.hidden = !matches;
      if (matches) visible += 1;
    }
    status.textContent = !terms.length ? '' : visible
      ? `${visible} ${visible === 1 ? 'noticia encontrada' : 'noticias encontradas'}`
      : 'No hay noticias que coincidan.';
  });
})();
