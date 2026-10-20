const filiales=[{provincia:'Santa Fe',ciudad:'Santa Fe',nombre:'Asamblea Cristiana · sede central',direccion:'Primero de Mayo 3761, Santa Fe'}];
function buscar(){
 const provincia=document.getElementById('provincia').value.trim().toLocaleLowerCase('es');
 const ciudad=document.getElementById('ciudad').value.trim().toLocaleLowerCase('es');
 const contenedor=document.getElementById('resultados');contenedor.replaceChildren();
 const resultados=filiales.filter(f=>f.provincia.toLocaleLowerCase('es').includes(provincia)&&f.ciudad.toLocaleLowerCase('es').includes(ciudad));
 if(!resultados.length){const p=document.createElement('p');p.className='empty-note';p.textContent='No hay más direcciones cargadas todavía.';contenedor.append(p);return}
 resultados.forEach(f=>{const card=document.createElement('div');card.className='panel';const h=document.createElement('h2');h.textContent=f.nombre;const p=document.createElement('p');p.textContent=f.direccion;const a=document.createElement('a');a.className='action-link primary';a.textContent='Cómo llegar ↗';a.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(f.direccion);a.target='_blank';a.rel='noopener noreferrer';card.append(h,p,a);contenedor.append(card)});
}
buscar();
