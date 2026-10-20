(() => {
  'use strict';
  const books = Array.isArray(window.VOZ_BIBLIOTECA) ? window.VOZ_BIBLIOTECA.filter(book => book && typeof book.title === 'string' && typeof book.file === 'string' && /^pdf\/libros\/[^/\\?#]+\.pdf$/i.test(book.file) && !book.file.includes('..')) : [];
  const grid = document.getElementById('library-grid');
  const search = document.getElementById('library-search');
  const normalized = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function render() {
    grid.replaceChildren();
    const query = normalized(search.value.trim());
    const matches = books.filter(book => normalized([book.title,book.author,book.topic,book.description].join(' ')).includes(query));
    document.getElementById('library-count').textContent = `${books.length} ${books.length === 1 ? 'libro disponible' : 'libros disponibles'}`;
    document.getElementById('library-empty').hidden = books.length > 0 || Boolean(query);
    document.getElementById('library-no-results').hidden = !query || matches.length > 0;
    for (const book of matches) {
      const link = document.createElement('a'); link.className = 'library-book'; link.href = book.file; link.target = '_blank'; link.rel = 'noopener';
      link.setAttribute('aria-label',`Abrir PDF: ${book.title}`);
      const icon = document.createElement('span'); icon.className='library-book-icon'; icon.textContent='▤'; icon.setAttribute('aria-hidden','true');
      const topic = document.createElement('span'); topic.className='eyebrow'; topic.textContent=book.topic || 'LIBRO DIGITAL';
      const title = document.createElement('strong'); title.textContent=book.title;
      const author = document.createElement('small'); author.textContent=book.author || book.description || '';
      const action = document.createElement('span'); action.className='book-action'; action.textContent='Abrir PDF ↗';
      link.append(icon,topic,title,author,action); grid.append(link);
    }
  }
  search.addEventListener('input',render); render();
})();
