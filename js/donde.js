(() => {
  'use strict';

  const filiales = typeof FILIALES === 'undefined' ? [] : FILIALES;
  const porPagina = 30;
  const comparar = new Intl.Collator('es', { numeric: true, sensitivity: 'base' });
  const provincia = document.getElementById('provincia');
  const busqueda = document.getElementById('busqueda-filial');
  const resultados = document.getElementById('resultados');
  const resumen = document.getElementById('resumen-filiales');
  const mostrarMas = document.getElementById('mostrar-mas');

  const normalizar = valor => String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es');

  const ordenadas = [...filiales].sort((a, b) =>
    comparar.compare(a.prov, b.prov) ||
    comparar.compare(a.ciudad, b.ciudad) ||
    comparar.compare(a.nombre, b.nombre) ||
    comparar.compare(a.dir, b.dir)
  );

  const provincias = [...new Set(filiales.map(f => f.prov))].sort((a, b) => comparar.compare(a, b));
  for (const nombre of provincias) {
    const opcion = document.createElement('option');
    opcion.value = nombre;
    opcion.textContent = nombre;
    provincia.append(opcion);
  }
  document.getElementById('total-filiales').textContent =
    filiales.length + ' filiales · ' + provincias.length + ' jurisdicciones';

  let filtradas = ordenadas;
  let visibles = porPagina;

  function nombreVisible(nombre) {
    return nombre
      .replace(/^FEDERACION ASAMBLEA CRISTIANA - FILIAL/i, 'Federación Asamblea Cristiana · Filial')
      .replace(/^ASAMBLEA CRISTIANA - FILIAL/i, 'Asamblea Cristiana · Filial');
  }

  function crearTarjeta(filial) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'directory-card';

    const lugar = document.createElement('p');
    lugar.className = 'directory-locality';
    lugar.textContent = (filial.ciudad || 'Localidad sin especificar') + ' · ' + filial.prov;

    const nombre = document.createElement('h3');
    nombre.textContent = nombreVisible(filial.nombre);

    const direccion = document.createElement('p');
    direccion.className = 'directory-address';
    direccion.textContent = filial.dir || 'Sin dirección registrada';

    const mapa = document.createElement('a');
    const consulta = [filial.dir, filial.ciudad, filial.prov, 'Argentina'].filter(Boolean).join(', ');
    mapa.className = 'action-link';
    mapa.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(consulta);
    mapa.target = '_blank';
    mapa.rel = 'noopener noreferrer';
    mapa.textContent = 'Buscar en Maps ↗';
    mapa.setAttribute('aria-label', 'Buscar en Maps: ' + nombre.textContent + ', ' + lugar.textContent);

    tarjeta.append(lugar, nombre, direccion, mapa);
    return tarjeta;
  }

  function mostrarResultados() {
    resultados.replaceChildren();
    if (!filtradas.length) {
      const vacio = document.createElement('p');
      vacio.className = 'empty-note';
      vacio.textContent = 'No encontramos filiales con esos filtros. Probá otra ciudad o provincia.';
      resultados.append(vacio);
    } else {
      const fragmento = document.createDocumentFragment();
      for (const filial of filtradas.slice(0, visibles)) fragmento.append(crearTarjeta(filial));
      resultados.append(fragmento);
    }

    const cantidad = filtradas.length;
    resumen.textContent = cantidad + (cantidad === 1 ? ' filial encontrada' : ' filiales encontradas') +
      (provincia.value ? ' en ' + provincia.value : '') +
      (cantidad ? ' · mostrando ' + Math.min(visibles, cantidad) : '');
    mostrarMas.hidden = visibles >= cantidad;
    if (!mostrarMas.hidden) mostrarMas.textContent =
      'Mostrar ' + Math.min(porPagina, cantidad - visibles) + ' más';
  }

  function aplicarFiltros() {
    const texto = normalizar(busqueda.value.trim());
    filtradas = ordenadas.filter(filial =>
      (!provincia.value || filial.prov === provincia.value) &&
      (!texto || normalizar([filial.nombre, filial.dir, filial.ciudad, filial.prov].join(' ')).includes(texto))
    );
    visibles = porPagina;
    mostrarResultados();
  }

  provincia.addEventListener('change', aplicarFiltros);
  busqueda.addEventListener('input', aplicarFiltros);
  mostrarMas.addEventListener('click', () => {
    visibles += porPagina;
    mostrarResultados();
  });
  mostrarResultados();
})();
