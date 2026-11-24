(function () {
  'use strict';
  const books = [
    ['Génesis',50],['Éxodo',40],['Levítico',27],['Números',36],['Deuteronomio',34],['Josué',24],['Jueces',21],['Rut',4],['1 Samuel',31],['2 Samuel',24],['1 Reyes',22],['2 Reyes',25],['1 Crónicas',29],['2 Crónicas',36],['Esdras',10],['Nehemías',13],['Ester',10],['Job',42],['Salmos',150],['Proverbios',31],['Eclesiastés',12],['Cantares',8],['Isaías',66],['Jeremías',52],['Lamentaciones',5],['Ezequiel',48],['Daniel',12],['Oseas',14],['Joel',3],['Amós',9],['Abdías',1],['Jonás',4],['Miqueas',7],['Nahúm',3],['Habacuc',3],['Sofonías',3],['Hageo',2],['Zacarías',14],['Malaquías',4],
    ['Mateo',28],['Marcos',16],['Lucas',24],['Juan',21],['Hechos',28],['Romanos',16],['1 Corintios',16],['2 Corintios',13],['Gálatas',6],['Efesios',6],['Filipenses',4],['Colosenses',4],['1 Tesalonicenses',5],['2 Tesalonicenses',3],['1 Timoteo',6],['2 Timoteo',4],['Tito',3],['Filemón',1],['Hebreos',13],['Santiago',5],['1 Pedro',5],['2 Pedro',3],['1 Juan',5],['2 Juan',1],['3 Juan',1],['Judas',1],['Apocalipsis',22]
  ];
  const $ = id => document.getElementById(id);
  const bibleUrl = 'datos/biblia-rv1960.json?v=23';
  const offlineCache = 'conectados-a-cristo-biblia';
  const bookmarkKey = 'conectados-biblia-marcadores-v1';
  const referencePattern = /^(.+?)\s+(\d+)(?:\s*:\s*(\d+))?$/;
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const localizedName = name => {
    let language = 'es';
    try { language = localStorage.getItem('voz-juvenil-idioma') || 'es'; } catch (_) {}
    const extras = {pt:{Juan:'João'},it:{Juan:'Giovanni'},uk:{Juan:'Івана'}};
    return extras[language]?.[name] || window.VOZ_TRANSLATIONS?.[language]?.[name] || name;
  };
  const matchesName = (name, query) => normalize(name).includes(query) || normalize(localizedName(name)).includes(query);
  function readAddress() {
    const params = new URLSearchParams(location.search);
    const requestedBook = Number(params.get('libro')) - 1;
    const book = Number.isInteger(requestedBook) && requestedBook >= 0 && requestedBook < books.length ? requestedBook : 0;
    const requestedChapter = Number(params.get('capitulo'));
    const chapter = Number.isInteger(requestedChapter) ? Math.max(1, Math.min(books[book][1], requestedChapter)) : 1;
    return { book, chapter };
  }
  let { book, chapter } = readAddress();
  function targetVerse() {
    const verse = Number(new URLSearchParams(location.search).get('versiculo'));
    return Number.isInteger(verse) && verse > 0 ? verse : null;
  }
  let text = null;
  let loadError = false;
  let openTestament = null;
  let chaptersOpen = false;

  function passageUrl() {
    const url = new URL('biblia.html', location.href);
    url.searchParams.set('libro', String(book + 1));
    url.searchParams.set('capitulo', String(chapter));
    const verse = targetVerse();
    if (verse) url.searchParams.set('versiculo', String(verse));
    return url;
  }

  function updateSharedAddress() {
    if (window.frameElement?.id === 'site-frame') {
      window.parent.history.replaceState(null, '', passageUrl().href);
    }
    $('bible-copy-status').hidden = true;
    $('bible-copy-url').hidden = true;
  }

  function select(nextBook, nextChapter, focusReader, verse) {
    book = nextBook; chapter = nextChapter;
    openTestament = null; chaptersOpen = false;
    const url = new URL(location.href); url.searchParams.set('libro', String(book + 1)); url.searchParams.set('capitulo', String(chapter));
    if (verse) url.searchParams.set('versiculo', String(verse));
    else url.searchParams.delete('versiculo');
    $('bible-search-status').textContent = '';
    $('bible-verse-status').textContent = '';
    history.pushState(null, '', url);
    updateSharedAddress();
    render();
    if (focusReader) $('bible-title').focus({preventScroll:true});
  }
  function revealPassage() {
    const verse = targetVerse();
    const row = verse && document.getElementById(`bible-verse-${verse}`);
    $('bible-verse-status').textContent = verse && text && !row ? 'Ese versículo no existe en este capítulo.' : '';
    (row || $('bible-title')).scrollIntoView({ block: row ? 'center' : 'start' });
  }
  function readBookmarks() {
    try {
      const saved = JSON.parse(localStorage.getItem(bookmarkKey) || '[]');
      return Array.isArray(saved) ? saved.filter(value => {
        if (typeof value !== 'string' || !/^\d+:\d+:\d+$/.test(value)) return false;
        const [number, chapter, verse] = value.split(':').map(Number);
        const count = text?.books[number - 1]?.chapters[chapter - 1]?.verses.length ?? 999;
        return chapter > 0 && chapter <= books[number - 1]?.[1] && verse > 0 && verse <= count;
      }) : [];
    } catch (_) { return []; }
  }

  function renderBookmarks(saved) {
    const list = $('bible-bookmarks');
    list.replaceChildren();
    $('bible-bookmarks-empty').hidden = saved.length > 0;
    for (const value of saved) {
      const [number, chapter, verse] = value.split(':').map(Number);
      const item = document.createElement('li');
      const link = document.createElement('a');
      const params = new URLSearchParams({ libro: number, capitulo: chapter, versiculo: verse });
      link.href = 'biblia.html?' + params;
      link.textContent = `${localizedName(books[number - 1][0])} ${chapter}:${verse}`;
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        select(number - 1, chapter, true, verse);
        revealPassage();
      });
      item.append(link);
      list.append(item);
    }
  }
  function renderBooks() {
    const query = normalize($('bible-search').value);
    const reference = query.match(referencePattern);
    const search = reference?.[1] || query;
    const list = $('bible-book-list'); list.replaceChildren();
    let matches = 0;
    function bookButton(index) {
      const [name, count] = books[index];
      const button = document.createElement('button'); button.type = 'button'; button.className = 'bible-book';
      button.setAttribute('aria-current', index === book ? 'true' : 'false');
      const title = document.createElement('span'); title.textContent = name;
      const detail = document.createElement('small'); detail.textContent = `${count} cap.`;
      button.append(title, detail);
      button.addEventListener('click', () => openResult(index, reference));
      return button;
    }
    if (search) {
      books.forEach(([name], index) => {
        if (matchesName(name, search)) { list.append(bookButton(index)); matches++; }
      });
    } else {
      [['Antiguo Testamento',0,39],['Nuevo Testamento',39,books.length]].forEach(([name,start,end], groupIndex) => {
        const button = document.createElement('button'); button.type = 'button'; button.className = 'bible-testament-button';
        button.setAttribute('aria-controls', `bible-testament-${groupIndex}`);
        button.setAttribute('aria-expanded', String(openTestament === groupIndex));
        const label = document.createElement('span'); label.textContent = localizedName(name);
        const arrow = document.createElement('span'); arrow.setAttribute('aria-hidden','true'); arrow.textContent = openTestament === groupIndex ? '−' : '+';
        button.append(label,arrow);
        const content = document.createElement('div'); content.id = `bible-testament-${groupIndex}`;
        content.className = 'bible-testament-list'; content.hidden = openTestament !== groupIndex;
        for (let index = start; index < end; index++) content.append(bookButton(index));
        button.addEventListener('click', () => { openTestament = openTestament === groupIndex ? null : groupIndex; renderBooks(); });
        list.append(button, content);
      });
      matches = books.length;
    }
    $('bible-no-results').hidden = matches > 0;
  }
  function renderPassage() {
    const passage = $('bible-passage'); passage.replaceChildren();
    const saved = readBookmarks();
    renderBookmarks(saved);
    const reading = text?.books?.[book]?.chapters?.[chapter - 1];
    if (!Array.isArray(reading?.verses) || !reading.verses.length) {
      const note = document.createElement('div'); note.className = 'bible-empty';
      const heading = document.createElement('strong'); heading.textContent = loadError ? 'No se pudo cargar la lectura' : 'Cargando lectura…';
      const body = document.createElement('span'); body.textContent = loadError ? 'Revisá tu conexión y actualizá esta página para intentar de nuevo.' : 'Un momento, estamos preparando el capítulo.';
      note.append(heading, body); passage.append(note); return;
    }
    if (reading.intro) {
      const intro = document.createElement('p'); intro.className = 'bible-intro';
      intro.textContent = reading.intro; passage.append(intro);
    }
    const verseToHighlight = targetVerse();
    reading.verses.forEach((content, index) => {
      const row = document.createElement('div'); row.className = 'bible-verse';
      row.id = `bible-verse-${index + 1}`;
      if (index + 1 === verseToHighlight) row.classList.add('is-target');
      const number = document.createElement('span'); number.className = 'bible-verse-number';
      number.textContent = String(index + 1); number.setAttribute('aria-label', `Versículo ${index + 1}`);
      const verse = document.createElement('p'); verse.className = 'bible-verse-text'; verse.textContent = content;
      const key = `${book + 1}:${chapter}:${index + 1}`;
      const star = document.createElement('button');
      star.type = 'button';
      star.className = 'bible-bookmark-button';
      star.setAttribute('aria-label', 'Marcar versículo ' + (index + 1));
      function showBookmark(marked) {
        star.setAttribute('aria-pressed', String(marked));
        star.textContent = marked ? '★' : '☆';
      }
      showBookmark(saved.includes(key));
      star.addEventListener('click', () => {
        const current = readBookmarks();
        const remove = current.includes(key);
        const status = $('bible-bookmark-status');
        if (!remove && current.length >= 1000) {
          status.textContent = 'Llegaste al límite de marcadores.';
          return;
        }
        const updated = remove ? current.filter(value => value !== key) : [key, ...current];
        try {
          localStorage.setItem(bookmarkKey, JSON.stringify(updated));
          showBookmark(!remove);
          renderBookmarks(updated);
          status.textContent = remove ? 'Marcador quitado.' : 'Versículo guardado en Mis marcadores.';
        } catch (_) { status.textContent = 'No se pudo guardar el cambio.'; }
      });
      row.append(number, verse, star); passage.append(row);
    });
  }
  function render() {
    const [name, count] = books[book];
    $('bible-title').textContent = `${name} ${chapter}`;
    $('bible-title').tabIndex = -1;
    const chips = $('bible-chapters'); chips.replaceChildren();
    for (let number = 1; number <= count; number++) {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'bible-chapter'; button.textContent = String(number);
      button.setAttribute('aria-label', `Capítulo ${number}`);
      button.setAttribute('aria-current', number === chapter ? 'true' : 'false');
      button.addEventListener('click', () => select(book, number, false)); chips.append(button);
    }
    chips.hidden = !chaptersOpen;
    const chapterToggle = $('bible-chapter-toggle');
    chapterToggle.textContent = `${localizedName('Capítulo')} ${chapter} ${chaptersOpen ? '▴' : '▾'}`;
    chapterToggle.setAttribute('aria-expanded', String(chaptersOpen));
    $('bible-prev').disabled = book === 0 && chapter === 1;
    $('bible-next').disabled = book === books.length - 1 && chapter === count;
    renderBooks(); renderPassage();
  }
  function openResult(target, reference) {
    const chapter = reference ? Number(reference[2]) : 1;
    const verse = reference?.[3] ? Number(reference[3]) : undefined;
    if (chapter < 1 || chapter > books[target][1] || verse === 0 || (verse !== undefined && !Number.isSafeInteger(verse))) {
      $('bible-search-status').textContent = 'Revisá el número de capítulo o versículo.';
      return;
    }
    $('bible-search').value = '';
    select(target, chapter, true, verse);
    revealPassage();
  }
  $('bible-search').addEventListener('input', () => {
    $('bible-search-status').textContent = '';
    renderBooks();
  });
  $('bible-search-form').addEventListener('submit', event => {
    event.preventDefault();
    const query = normalize($('bible-search').value);
    const reference = query.match(referencePattern);
    const nameQuery = reference?.[1] || query;
    const target = books.findIndex(([name]) => normalize(name) === nameQuery || normalize(localizedName(name)) === nameQuery);
    if (target < 0) return;
    openResult(target, reference);
  });
  $('bible-chapter-toggle').addEventListener('click', () => { chaptersOpen = !chaptersOpen; render(); });
  $('bible-copy').addEventListener('click', async () => {
    const url = passageUrl().href;
    const status = $('bible-copy-status');
    const field = $('bible-copy-url');
    try {
      await navigator.clipboard.writeText(url);
      if (url !== passageUrl().href) return;
      status.textContent = 'Enlace copiado.';
      field.hidden = true;
    } catch (_) {
      if (url !== passageUrl().href) return;
      status.textContent = 'Copiá el enlace seleccionado.';
      field.value = url;
      field.hidden = false;
      field.focus();
      field.select();
    }
    status.hidden = false;
  });
  $('bible-prev').addEventListener('click', () => select(chapter > 1 ? book : book - 1, chapter > 1 ? chapter - 1 : books[book - 1][1], true));
  $('bible-next').addEventListener('click', () => select(chapter < books[book][1] ? book : book + 1, chapter < books[book][1] ? chapter + 1 : 1, true));
  window.addEventListener('popstate', () => {
    ({ book, chapter } = readAddress());
    chaptersOpen = false;
    openTestament = null;
    $('bible-search-status').textContent = '';
    $('bible-verse-status').textContent = '';
    updateSharedAddress();
    render();
    if (targetVerse()) revealPassage();
  });
  window.addEventListener('storage', event => {
    if (event.key === bookmarkKey || event.key === null) renderPassage();
  });

  let bibleRequest;
  function loadBible() {
    bibleRequest ||= fetch(bibleUrl).then(async response => {
      if (!response.ok) throw new Error('Texto no disponible');
      const data = await response.clone().json();
      if (data.edition !== 'RVR1960' || !Array.isArray(data.books) || data.books.length !== 66 ||
          !data.books.every((item, index) => item.name === books[index][0] && Array.isArray(item.chapters) && item.chapters.length === books[index][1] && item.chapters.every(reading => Array.isArray(reading.verses) && reading.verses.length > 0 && reading.verses.every(verse => typeof verse === 'string' && verse.trim().length > 0)))) throw new Error('Texto incompleto');
      text = data;
      loadError = false;
      renderPassage();
      if (targetVerse()) revealPassage();
      return response;
    }).catch(error => {
      bibleRequest = null;
      loadError = true;
      renderPassage();
      throw error;
    });
    return bibleRequest;
  }

  const offlineButton = $('bible-offline');
  const offlineStatus = $('bible-offline-status');
  function showSavedBible() {
    offlineButton.disabled = true;
    offlineStatus.textContent = 'La Biblia está guardada en este dispositivo.';
  }
  offlineButton.addEventListener('click', async () => {
    offlineButton.disabled = true;
    offlineStatus.textContent = 'Guardando la Biblia…';
    try {
      const response = await loadBible();
      const cache = await caches.open(offlineCache);
      await cache.put(bibleUrl, response.clone());
      showSavedBible();
    } catch (_) {
      offlineButton.disabled = false;
      offlineStatus.textContent = 'No se pudo guardar la Biblia. Revisá tu conexión y volvé a intentar.';
    }
  });

  render();
  loadBible().then(async () => {
    if (await caches.match(bibleUrl, { cacheName: offlineCache })) showSavedBible();
  }).catch(() => {});
})();
