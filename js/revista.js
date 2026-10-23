(() => {
  'use strict';

  const items = (window.VOZ_REVISTAS || []).slice().sort((a, b) => b.numero - a.numero);
  const ocr = window.VOZ_REVISTA_OCR || {};
  const $ = id => document.getElementById(id);
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function pageExcerpt(text, words) {
    // Corrige uniones verificadas del OCR en los pasajes que aparecen como cita.
    const source = String(text || '')
      .replace(/\bdegozo\b/gi, match => `${match.slice(0, 2)} ${match.slice(2)}`)
      .replace(/\bysufe\b/gi, match => `${match.slice(0, 1)} ${match.slice(1, 3)} ${match.slice(3)}`)
      .replace(/\bnofingida\b/gi, match => `${match.slice(0, 2)} ${match.slice(2)}`)
      .replace(/\bgozoy\b/gi, match => `${match.slice(0, 4)} ${match.slice(4)}`);
    const tokens = [...source.matchAll(/[\p{L}\p{N}]+/gu)];
    if (!tokens.length) return '';
    const focusWords = words.map(word => word.replace(/[^\p{L}\p{N}]/gu, '')).filter(Boolean);
    const focusWord = focusWords.slice().sort((a, b) => b.length - a.length)
      .find(word => tokens.some(token => norm(token[0]).includes(word)));
    if (!focusWord) return '';
    const matchIndex = tokens.findIndex(token => norm(token[0]).includes(focusWord));
    const first = Math.max(0, matchIndex - 2);
    const last = Math.min(tokens.length - 1, matchIndex + 3);
    const start = tokens[first].index;
    const end = tokens[last].index + tokens[last][0].length;
    const excerpt = source.slice(start, end).replace(/\s+/g, ' ').trim();
    return `«${first > 0 ? '… ' : ''}${excerpt}${last < tokens.length - 1 ? ' …' : ''}»`;
  }
  const topicInput = $('revista-tema');
  const topicList = $('revista-temas-list');
  const topicPicker = topicInput.closest('.revista-topic-picker');
  const topicCollator = new Intl.Collator('es', { sensitivity: 'base' });
  const topics = [...new Set(items.flatMap(item => item.temas || []))].sort(topicCollator.compare);
  let topicSuggestions = [];
  let activeTopicIndex = -1;
  const year = $('revista-anio');
  const list = $('revista-lista');
  const searchForm = $('revista-search-form');
  const searchIndex = new Map(items.map(item => {
    const rawPages = ocr[item.numero] || [];
    return [item.numero, {
      metadata: norm([item.numero, item.anio, item.periodo, ...(item.temas || []), ...(item.articulos || [])].join(' ')),
      rawPages,
      pages: rawPages.map(norm)
    }];
  }));

  [...new Set(items.map(item => item.anio))].sort((a, b) => b - a).forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    year.append(option);
  });

  function currentCatalogUrl() {
    const params = new URLSearchParams();
    [['palabras', $('revista-palabras').value], ['numero', $('revista-numero').value],
      ['anio', year.value], ['tema', topicInput.value]].forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    if (window.scrollY > 0) params.set('scroll', String(Math.round(window.scrollY)));
    const query = params.toString();
    return 'voz-juvenil.html' + (query ? '?' + query : '');
  }

  function syncCatalogUrl() {
    const url = new URL(currentCatalogUrl(), location.href);
    history.replaceState(null, '', url.pathname + url.search + location.hash);
  }

  function restoreFiltersFromUrl() {
    const params = new URLSearchParams(location.search);
    $('revista-palabras').value = params.get('palabras') || '';
    $('revista-numero').value = params.get('numero') || '';
    topicInput.value = params.get('tema') || '';
    const selectedYear = params.get('anio');
    if ([...year.options].some(option => option.value === selectedYear)) year.value = selectedYear;
    const hasSearchState = ['palabras', 'numero', 'anio', 'tema', 'scroll'].some(key => params.has(key));
    const scroll = Number(params.get('scroll'));
    return hasSearchState && Number.isFinite(scroll) ? scroll : null;
  }

  function readerHref(numero, pagina) {
    const params = new URLSearchParams({ numero: String(numero), volver: currentCatalogUrl() });
    if (pagina) params.set('pagina', String(pagina));
    return 'revista-leer.html?' + params.toString();
  }

  function attachReaderLink(link, numero, pagina) {
    const update = () => {
      syncCatalogUrl();
      link.href = readerHref(numero, pagina);
    };
    link.href = readerHref(numero, pagina);
    link.addEventListener('click', update);
  }

  window.addEventListener('pagehide', syncCatalogUrl);

  function setTopicDropdown(open) {
    topicList.hidden = !open;
    topicInput.setAttribute('aria-expanded', String(open));
    if (!open) topicInput.removeAttribute('aria-activedescendant');
  }

  function renderTopicOptions(open = true) {
    const query = norm(topicInput.value.trim());
    topicSuggestions = topics.filter(topic => !query || norm(topic).includes(query));
    activeTopicIndex = -1;
    topicList.replaceChildren();
    if (!topicSuggestions.length) {
      const empty = document.createElement('div');
      empty.className = 'revista-topic-empty';
      empty.setAttribute('role', 'option');
      empty.setAttribute('aria-disabled', 'true');
      empty.textContent = 'No hay temas que coincidan';
      topicList.append(empty);
    } else {
      topicSuggestions.forEach((topic, index) => {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = 'revista-topic-option';
        option.id = 'revista-tema-opcion-' + index;
        option.tabIndex = -1;
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', 'false');
        const name = document.createElement('span');
        name.textContent = topic;
        option.append(name);
        option.addEventListener('pointerdown', event => event.preventDefault());
        option.addEventListener('click', () => {
          topicInput.value = topic;
          setTopicDropdown(false);
          render();
          topicInput.focus();
        });
        topicList.append(option);
      });
    }
    setTopicDropdown(open);
  }

  function moveActiveTopic(delta) {
    if (!topicSuggestions.length) return;
    activeTopicIndex = (activeTopicIndex + delta + topicSuggestions.length) % topicSuggestions.length;
    topicList.querySelectorAll('[role="option"]').forEach((option, index) => {
      option.setAttribute('aria-selected', String(index === activeTopicIndex));
    });
    topicInput.setAttribute('aria-activedescendant', 'revista-tema-opcion-' + activeTopicIndex);
    topicList.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }

  topicInput.addEventListener('focus', () => renderTopicOptions());
  topicInput.addEventListener('input', () => renderTopicOptions());
  topicInput.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (topicList.hidden) renderTopicOptions();
      moveActiveTopic(event.key === 'ArrowDown' ? 1 : -1);
    } else if (event.key === 'Enter' && !topicList.hidden && activeTopicIndex >= 0) {
      event.preventDefault();
      topicInput.value = topicSuggestions[activeTopicIndex];
      setTopicDropdown(false);
      render();
    } else if (event.key === 'Escape' && !topicList.hidden) {
      event.preventDefault();
      setTopicDropdown(false);
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!topicPicker.contains(event.target)) setTopicDropdown(false);
  });

  function render() {
    const number = norm($('revista-numero').value.trim());
    const topic = norm($('revista-tema').value.trim());
    const words = norm($('revista-palabras').value.trim()).split(/\s+/).filter(Boolean);
    const selectedYear = year.value;
    const matches = items.map(item => {
      const index = searchIndex.get(item.numero);
      const pages = words.length ? index.pages.flatMap((text, position) => words.every(word => text.includes(word)) ? [{
        number: position + 1,
        excerpt: pageExcerpt(index.rawPages[position], words)
      }] : []) : [];
      const metadataMatch = words.length === 0 || words.every(word => index.metadata.includes(word));
      return { item, pages, metadataMatch };
    }).filter(({item, pages, metadataMatch}) =>
      (!number || String(item.numero).includes(number)) &&
      (!selectedYear || String(item.anio) === selectedYear) &&
      (!topic || norm((item.temas || []).join(' ')).includes(topic)) &&
      (words.length ? pages.length > 0 : metadataMatch)
    );
    list.replaceChildren();

    for (const {item, pages} of matches) {
      if (words.length) {
        const card = document.createElement('article');
        card.className = 'resource-card revista-card revista-search-card';
        const title = document.createElement('strong');
        title.className = 'revista-search-issue';
        title.textContent = 'Edición Nº ' + item.numero;
        const pageList = document.createElement('div');
        pageList.className = 'revista-search-page-list';

        pages.forEach(page => {
          const row = document.createElement('div');
          row.className = 'revista-search-page';
          const pageLink = document.createElement('a');
          pageLink.className = 'revista-search-page-link';
          attachReaderLink(pageLink, item.numero, page.number);
          pageLink.textContent = 'Página ' + page.number;
          pageLink.setAttribute('aria-label', 'Abrir página ' + page.number + ' de la edición Nº ' + item.numero);
          const quote = document.createElement('p');
          quote.className = 'revista-search-excerpt';
          quote.textContent = page.excerpt;
          row.append(pageLink, quote);
          pageList.append(row);
        });

        card.append(title, pageList);
        list.append(card);
        continue;
      }

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
      attachReaderLink(link, item.numero);
      link.textContent = 'Leer revista →';
      link.setAttribute('aria-label', 'Leer edición Nº ' + item.numero + ' dentro de la app');

      copy.append(title, period, topics);
      copy.append(link);
      card.append(cover, copy);
      list.append(card);
    }

    $('revista-vacio').textContent = words.length ? 'No se encontraron páginas con esas palabras.' : 'No hay ediciones para esos filtros.';
    $('revista-vacio').hidden = matches.length > 0 || items.length === 0;
    if (!items.length) {
      const note = document.createElement('p');
      note.className = 'empty-note';
      note.textContent = 'Próximamente estarán disponibles las ediciones desde el Nº 50, una vez que se incorporen los PDF.';
      list.append(note);
    }
  }

  let highlightedMatch = null;
  let highlightTimer = 0;
  function showFirstPageMatch() {
    if (!$('revista-palabras').value.trim()) return;
    const target = list.querySelector('.revista-search-page-link') || list.querySelector('.revista-card');
    if (!target) return;
    clearTimeout(highlightTimer);
    highlightedMatch?.classList.remove('revista-search-highlight');
    target.classList.remove('revista-search-highlight');
    void target.offsetWidth;
    target.classList.add('revista-search-highlight');
    highlightedMatch = target;
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    highlightTimer = window.setTimeout(() => {
      target.classList.remove('revista-search-highlight');
      if (highlightedMatch === target) highlightedMatch = null;
    }, reduceMotion ? 1800 : 3400);
  }

  ['revista-palabras', 'revista-numero', 'revista-tema'].forEach(id => $(id).addEventListener('input', () => {
    render();
    syncCatalogUrl();
  }));
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    showFirstPageMatch();
    syncCatalogUrl();
  });
  year.addEventListener('change', () => {
    render();
    syncCatalogUrl();
  });
  const returnScroll = restoreFiltersFromUrl();
  render();
  if (returnScroll !== null) requestAnimationFrame(() => window.scrollTo(0, returnScroll));
})();
