(() => {
  const extra = {
    pt: {
      'Las alabanzas del grupo, sus letras, audio, PDF y videos.': 'Os louvores do grupo, suas letras, áudio, PDFs e vídeos.',
      'Escuchá cada alabanza en audio o abrí su letra, PDF y video.': 'Ouça cada louvor em áudio ou abra a letra, o PDF e o vídeo.',
      'Seleccioná alabanzas y reproducilas en orden con el reproductor de la app. La selección se guarda en este dispositivo.': 'Selecione louvores e reproduza-os em sequência no aplicativo. A seleção fica salva neste dispositivo.',
      '▶ Escuchar audio': '▶ Ouvir áudio', '▶ Reproducir mi playlist': '▶ Reproduzir minha playlist',
      '▶ Escuchar desde aquí': '▶ Ouvir a partir daqui'
    },
    it: {
      'Las alabanzas del grupo, sus letras, audio, PDF y videos.': 'I canti del gruppo con testi, audio, PDF e video.',
      'Escuchá cada alabanza en audio o abrí su letra, PDF y video.': 'Ascolta ogni canto oppure apri il testo, il PDF e il video.',
      'Seleccioná alabanzas y reproducilas en orden con el reproductor de la app. La selección se guarda en este dispositivo.': 'Seleziona i canti e ascoltali in sequenza con il lettore dell’app. La selezione è salvata su questo dispositivo.',
      '▶ Escuchar audio': '▶ Ascolta audio', '▶ Reproducir mi playlist': '▶ Riproduci la mia playlist',
      '▶ Escuchar desde aquí': '▶ Ascolta da qui'
    },
    uk: {
      'Las alabanzas del grupo, sus letras, audio, PDF y videos.': 'Пісні прославлення групи: тексти, аудіо, PDF і відео.',
      'Escuchá cada alabanza en audio o abrí su letra, PDF y video.': 'Слухайте кожну пісню або відкрийте її текст, PDF і відео.',
      'Seleccioná alabanzas y reproducilas en orden con el reproductor de la app. La selección se guarda en este dispositivo.': 'Виберіть пісні й слухайте їх по черзі у програвачі застосунку. Вибір зберігається на цьому пристрої.',
      '▶ Escuchar audio': '▶ Слухати аудіо', '▶ Reproducir mi playlist': '▶ Відтворити мій плейлист',
      '▶ Escuchar desde aquí': '▶ Слухати звідси'
    }
  };
  for (const [language, phrases] of Object.entries(extra)) {
    Object.assign(window.VOZ_TRANSLATIONS[language], phrases);
  }
})();
