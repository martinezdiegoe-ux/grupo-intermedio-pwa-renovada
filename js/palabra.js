const dailyMeditations = (window.VOZ_MEDITACIONES || []).slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''));
const currentMeditation = dailyMeditations[0];

if (currentMeditation) {
  document.getElementById('titulo-meditacion').textContent = currentMeditation.title;
  document.getElementById('versiculo').textContent = currentMeditation.verse;
  document.getElementById('texto-meditacion').textContent = currentMeditation.text;
  if (!currentMeditation.audio) document.querySelector('.reproductor').hidden = true;
}
