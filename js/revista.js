(() => {
  'use strict';

  const items = (window.VOZ_REVISTAS || []).slice().sort((a, b) => b.numero - a.numero);
  const ocr = window.VOZ_REVISTA_OCR || {};
  const $ = id => document.getElementById(id);
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const year = $('revista-anio');
  const list = $('revista-lista');
  const searchIndex = new Map(items.map(item => [item.numero, {
    metadata: norm([item.numero, item.anio, item.periodo, ...(item.temas || []), ...(item.articulos || [])].join(' ')),
    pages: (ocr[item.numero] || []).map(norm)
  }]));

  [...new Set(items.map(item => item.anio))].sort((a, b) => b - a).forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    year.append(option);
  });

  function render() {
    const number = norm($('revista-numero').value.trim());
    const topic = norm($('revista-tema').value.trim());
    const words = norm($('revista-palabras').value.trim()).split(/\s+/).filter(Boolean);
    const selectedYear = year.value;
    const matches = items.map(item => {
      const index = searchIndex.get(item.numero);
      const pages = words.length ? index.pages.flatMap((text, position) => words.every(word => text.includes(word)) ? [position + 1] : []) : [];
      const metadataMatch = words.length === 0 || words.every(word => index.metadata.includes(word));
      return { item, pages, metadataMatch };
    }).filter(({item, pages, metadataMatch}) =>
      (!number || String(item.numero).includes(number)) &&
      (!selectedYear || String(item.anio) === selectedYear) &&
      (!topic || norm((item.temas || []).join(' ')).includes(topic)) &&
      (metadataMatch || pages.length > 0)
    );
    list.replaceChildren();

    for (const {item, pages} of matches) {
      const card = document.createElement('article');
      card.className = 'resource-card revista-card';

      const cover = document.createElement('img');
      cover.className = 'revista-cover';
      cover.src = item.portada;
      cover.alt = '';
      cover.width = 453;
      cover.height = 650;
      cover.loading = 'lazy';

      const copy = document.createElement('div');
      copy.className = 'revista-copy';
      const title = document.createElement('strong');
      title.textContent = 'Edición Nº ' + item.numero;
      const period = document.createElement('p');
      period.textContent = item.periodo || item.anio;
      const topics = document.createElement('small');
      topics.textContent = (item.temas || []).join(' · ');
      const link = document.createElement('a');
      link.className = 'action-link primary';
      link.href = item.pdf;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Abrir PDF ↗';
      link.setAttribute('aria-label', 'Abrir edición Nº ' + item.numero + ' en PDF');

      copy.append(title, period, topics);
      if (pages.length) {
        const pageMatches = document.createElement('div');
        pageMatches.className = 'revista-pages';
        const label = document.createElement('span');
        label.textContent = 'Coincidencias en páginas:';
        pageMatches.append(label);
        pages.slice(0, 8).forEach(page => {
          const pageLink = document.createElement('a');
          pageLink.href = item.pdf + '#page=' + page;
          pageLink.target = '_blank';
          pageLink.rel = 'noopener noreferrer';
          pageLink.textContent = String(page);
          pageLink.setAttribute('aria-label', 'Abrir página ' + page + ' de la edición Nº ' + item.numero);
          pageMatches.append(pageLink);
        });
        if (pages.length > 8) {
          const more = document.createElement('span');
          more.textContent = '+' + (pages.length - 8);
          pageMatches.append(more);
        }
        copy.append(pageMatches);
      }
      copy.append(link);
      card.append(cover, copy);
      list.append(card);
    }

    $('revista-vacio').hidden = matches.length > 0 || items.length === 0;
    if (!items.length) {
      const note = document.createElement('p');
      note.className = 'empty-note';
      note.textContent = 'Próximamente estarán disponibles las ediciones desde el Nº 50, una vez que se incorporen los PDF.';
      list.append(note);
    }
  }

  ['revista-palabras', 'revista-numero', 'revista-tema', 'revista-anio'].forEach(id => $(id).addEventListener('input', render));
  render();
})();
