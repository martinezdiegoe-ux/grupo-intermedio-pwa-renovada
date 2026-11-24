const { item: currentMeditation, isToday } = window.vozFeaturedMeditation();

if (currentMeditation) {
  if (isToday) {
    document.title = 'Meditación del día';
    document.getElementById('meditation-heading').textContent = '🕊️ Meditación del día';
    document.getElementById('meditation-verse-heading').textContent = '📖 Versículo del día';
  }
  document.getElementById('titulo-meditacion').textContent = currentMeditation.title;
  document.getElementById('versiculo').textContent = currentMeditation.verse;
  document.getElementById('texto-meditacion').textContent = currentMeditation.text;
  document.querySelector('.reproductor').hidden = !window.vozMeditationHasAudio(currentMeditation);
}
