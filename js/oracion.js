const nota=document.getElementById('nota-oracion'),estado=document.getElementById('estado-nota');
try{nota.value=localStorage.getItem('voz-juvenil-oracion')||''}catch{}
nota.addEventListener('input',()=>{try{localStorage.setItem('voz-juvenil-oracion',nota.value);estado.textContent='Guardado en este dispositivo.'}catch{estado.textContent='Este navegador no permitió guardar la nota.'}});
