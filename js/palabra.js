/* La entrada más reciente también permanece en el archivo de meditaciones. */
const dailyMeditations = (window.VOZ_MEDITACIONES || []).slice().sort((a,b) => (b.date || '').localeCompare(a.date || ''));
const currentMeditation = dailyMeditations[0];
if (currentMeditation) {
  document.getElementById('titulo-meditacion').textContent = currentMeditation.title;
  document.getElementById('versiculo').textContent = currentMeditation.verse;
  document.getElementById('texto-meditacion').textContent = currentMeditation.text;
  const player = document.getElementById('audio');
  if (currentMeditation.audio) player.src = currentMeditation.audio;
  else document.querySelector('.reproductor').hidden = true;
}

const audio = document.getElementById("audio")

const playBtn = document.getElementById("play")
const backBtn = document.getElementById("back")
const forwardBtn = document.getElementById("forward")

const progress = document.getElementById("progress")

const current = document.getElementById("current")
const duration = document.getElementById("duration")


function formatTime(seconds){

if(isNaN(seconds)) return "0:00"

const minutes = Math.floor(seconds / 60)
const secs = Math.floor(seconds % 60)

return minutes + ":" + (secs < 10 ? "0"+secs : secs)

}


/* CARGA DEL AUDIO */

audio.addEventListener("loadedmetadata", () => {

progress.max = Math.floor(audio.duration)

duration.textContent = formatTime(audio.duration)

})


/* PLAY / PAUSE */

playBtn.addEventListener("click", () => {

if(audio.paused){

audio.play()

playBtn.textContent = "⏸"

}else{

audio.pause()

playBtn.textContent = "▶"

}

})


/* ACTUALIZAR BARRA */

audio.addEventListener("timeupdate", () => {

progress.value = Math.floor(audio.currentTime)

current.textContent = formatTime(audio.currentTime)

})


/* MOVER BARRA */

progress.addEventListener("change", () => {

audio.currentTime = progress.value

})


/* ADELANTAR */

forwardBtn.addEventListener("click", () => {

audio.currentTime += 10

})


/* RETROCEDER */

backBtn.addEventListener("click", () => {

audio.currentTime -= 10

})


/* FIN DEL AUDIO */

audio.addEventListener("ended", () => {

playBtn.textContent = "▶"

progress.value = 0

})
