(function () {
  'use strict';
  const books = [
    ['Génesis',50],['Éxodo',40],['Levítico',27],['Números',36],['Deuteronomio',34],['Josué',24],['Jueces',21],['Rut',4],['1 Samuel',31],['2 Samuel',24],['1 Reyes',22],['2 Reyes',25],['1 Crónicas',29],['2 Crónicas',36],['Esdras',10],['Nehemías',13],['Ester',10],['Job',42],['Salmos',150],['Proverbios',31],['Eclesiastés',12],['Cantares',8],['Isaías',66],['Jeremías',52],['Lamentaciones',5],['Ezequiel',48],['Daniel',12],['Oseas',14],['Joel',3],['Amós',9],['Abdías',1],['Jonás',4],['Miqueas',7],['Nahúm',3],['Habacuc',3],['Sofonías',3],['Hageo',2],['Zacarías',14],['Malaquías',4],
    ['Mateo',28],['Marcos',16],['Lucas',24],['Juan',21],['Hechos',28],['Romanos',16],['1 Corintios',16],['2 Corintios',13],['Gálatas',6],['Efesios',6],['Filipenses',4],['Colosenses',4],['1 Tesalonicenses',5],['2 Tesalonicenses',3],['1 Timoteo',6],['2 Timoteo',4],['Tito',3],['Filemón',1],['Hebreos',13],['Santiago',5],['1 Pedro',5],['2 Pedro',3],['1 Juan',5],['2 Juan',1],['3 Juan',1],['Judas',1],['Apocalipsis',22]
  ];
  const $ = id => document.getElementById(id);
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const localizedName = name => {
    let language = 'es';
    try { language = localStorage.getItem('voz-juvenil-idioma') || 'es'; } catch (_) {}
    const extras = {pt:{Juan:'João'},it:{Juan:'Giovanni'},uk:{Juan:'Івана'}};
    return extras[language]?.[name] || window.VOZ_TRANSLATIONS?.[language]?.[name] || name;
  };
  const matchesName = (name, query) => normalize(name).includes(query) || normalize(localizedName(name)).includes(query);
  const params = new URLSearchParams(location.search);
  const requestedBook = Number(params.get('libro'));
  let book = Number.isInteger(requestedBook) && requestedBook >= 1 && requestedBook <= books.length ? requestedBook - 1 : 0;
  const requestedChapter = Number(params.get('capitulo'));
  let chapter = Number.isInteger(requestedChapter) ? Math.max(1, Math.min(books[book][1], requestedChapter)) : 1;
  let text = null;

  function select(nextBook, nextChapter, focusReader) {
    book = nextBook; chapter = nextChapter;
    const url = new URL(location.href); url.searchParams.set('libro', String(book + 1)); url.searchParams.set('capitulo', String(chapter));
    history.pushState(null, '', url);
    render();
    if (focusReader) $('bible-title').focus({preventScroll:true});
  }
  function renderBooks() {
    const search = normalize($('bible-search').value).replace(/\s+\d+$/, '');
    const list = $('bible-book-list'); list.replaceChildren();
    let matches = 0;
    books.forEach(([name, count], index) => {
      if (search && !matchesName(name, search)) return;
      if (!search && (index === 0 || index === 39)) {
        const group = document.createElement('p'); group.className = 'bible-group-title';
        group.textContent = index ? 'NUEVO TESTAMENTO' : 'ANTIGUO TESTAMENTO';
        group.style.gridColumn = '1 / -1'; list.append(group);
      }
      const button = document.createElement('button'); button.type = 'button'; button.className = 'bible-book';
      button.setAttribute('aria-current', index === book ? 'true' : 'false');
      const title = document.createElement('span'); title.textContent = name;
      const detail = document.createElement('small'); detail.textContent = `${count} cap.`;
      button.append(title, detail);
      button.addEventListener('click', () => { select(index, 1, false); $('bible-search').value = ''; renderBooks(); $('bible-title').scrollIntoView({behavior:'smooth',block:'start'}); });
      list.append(button); matches++;
    });
    $('bible-no-results').hidden = matches > 0;
  }
  function renderPassage() {
    const passage = $('bible-passage'); passage.replaceChildren();
    const verses = text?.books?.[book]?.chapters?.[chapter - 1];
    if (!Array.isArray(verses) || !verses.length) {
      const note = document.createElement('div'); note.className = 'bible-empty';
      const heading = document.createElement('strong'); heading.textContent = 'Texto en preparación';
      const body = document.createElement('span'); body.textContent = 'Podés explorar los libros y capítulos. La lectura completa estará disponible cuando se incorpore la edición digital autorizada.';
      note.append(heading, body); passage.append(note); return;
    }
    for (const [index, verse] of verses.entries()) {
      const paragraph = document.createElement('p');
      const number = document.createElement('sup'); number.textContent = String(index + 1);
      paragraph.append(number, document.createTextNode(verse)); passage.append(paragraph);
    }
  }
  function render() {
    const [name, count] = books[book];
    $('bible-title').textContent = `${name} ${chapter}`;
    $('bible-title').tabIndex = -1;
    const selectChapter = $('bible-chapter-select'); selectChapter.replaceChildren();
    const chips = $('bible-chapters'); chips.replaceChildren();
    for (let number = 1; number <= count; number++) {
      const option = document.createElement('option'); option.value = String(number); option.textContent = String(number); selectChapter.append(option);
      const button = document.createElement('button'); button.type = 'button'; button.className = 'bible-chapter'; button.textContent = String(number);
      button.setAttribute('aria-label', `Capítulo ${number}`);
      button.setAttribute('aria-current', number === chapter ? 'true' : 'false');
      button.addEventListener('click', () => select(book, number, false)); chips.append(button);
    }
    selectChapter.value = String(chapter);
    $('bible-prev').disabled = book === 0 && chapter === 1;
    $('bible-next').disabled = book === books.length - 1 && chapter === count;
    renderBooks(); renderPassage();
  }
  $('bible-search').addEventListener('input', renderBooks);
  $('bible-search').addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    const query = normalize(event.currentTarget.value);
    const match = query.match(/^(.+?)\s+(\d+)$/);
    const target = books.findIndex(([name]) => normalize(name) === (match?.[1] || query) || normalize(localizedName(name)) === (match?.[1] || query));
    if (target < 0) return;
    event.preventDefault();
    select(target, match ? Math.max(1, Math.min(books[target][1], Number(match[2]))) : 1, false);
    event.currentTarget.value = ''; renderBooks(); $('bible-title').scrollIntoView({behavior:'smooth',block:'start'});
  });
  $('bible-chapter-select').addEventListener('change', event => select(book, Number(event.currentTarget.value), false));
  $('bible-prev').addEventListener('click', () => select(chapter > 1 ? book : book - 1, chapter > 1 ? chapter - 1 : books[book - 1][1], true));
  $('bible-next').addEventListener('click', () => select(chapter < books[book][1] ? book : book + 1, chapter < books[book][1] ? chapter + 1 : 1, true));
  window.addEventListener('popstate', () => { const current = new URLSearchParams(location.search); const requested = Number(current.get('libro')) - 1; book = Number.isInteger(requested) && requested >= 0 && requested < books.length ? requested : 0; chapter = Math.max(1, Math.min(books[book][1], Number(current.get('capitulo')) || 1)); render(); });
  render();
  fetch('datos/biblia-rv1960.json').then(response => response.ok ? response.json() : null).then(data => {
    if (!data) return;
    if (data.edition !== 'RVR1960' || !Array.isArray(data.books) || data.books.length !== 66 ||
        !data.books.every((item, index) => item.name === books[index][0] && Array.isArray(item.chapters) && item.chapters.length === books[index][1] && item.chapters.every(verses => Array.isArray(verses) && verses.every(verse => typeof verse === 'string')))) return;
    text = data; renderPassage();
  }).catch(() => {});
})();
