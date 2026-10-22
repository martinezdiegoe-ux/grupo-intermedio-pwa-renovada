(() => {
  'use strict';

  // The plan stores chapter bounds; the reference supplies the verse bounds.
  function versesForReading(reading, bible) {
    const book = bible.books[reading.book - 1];
    if (!book) throw new Error('Libro no disponible');
    const suffix = reading.reference.match(/\s(\d+)(?::(\d+))?(?:[–-](\d+)(?::(\d+))?)?$/);
    const startVerse = suffix?.[2] ? Number(suffix[2]) : 1;
    const endVerse = suffix?.[4] ? Number(suffix[4])
      : suffix?.[3] && suffix?.[2] ? Number(suffix[3])
      : suffix?.[2] && !suffix?.[3] ? Number(suffix[2]) : null;
    const result = [];
    for (let chapter = reading.chapter; chapter <= reading.endChapter; chapter++) {
      const verses = book.chapters[chapter - 1]?.verses;
      if (!verses) throw new Error('Capítulo no disponible');
      const first = chapter === reading.chapter ? startVerse : 1;
      const last = chapter === reading.endChapter ? (endVerse || verses.length) : verses.length;
      if (first < 1 || last > verses.length || first > last) throw new Error('Versículos no disponibles');
      for (let verse = first; verse <= last; verse++) {
        result.push({ chapter, verse, text: verses[verse - 1] });
      }
    }
    return result;
  }

  window.VOZ_LECTURA_AUDIO = { versesForReading };
})();
