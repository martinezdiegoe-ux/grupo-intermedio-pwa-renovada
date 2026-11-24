// Cada registro debe tener un PDF completo y una portada optimizada para la web.
window.VOZ_REVISTAS=[
  {
    numero:61, anio:2026, periodo:'Julio–octubre 2026', temas:['Santidad','Fe','Alabanza','Esperanza'],
    articulos:['La santidad en tiempos modernos','Iguales o diferentes','La alabanza a Dios','Abraham y Lot','Los ojos de la fe vs. los ojos de la carne','La decisión que define tu destino','La eternidad de Dios','Suenen dulces himnos','Esgrima bíblico','Pablo','Espera en Dios','Vencedores'],
    portada:'assets/revista/voz-juvenil-61.webp', pdf:'pdf/revista/voz-juvenil-61.pdf', paginas:24, mb:6.12
  },
  {
    numero:60, anio:2026, periodo:'Marzo–junio 2026', temas:['Gozo','Congregación','Amor de Dios'],
    articulos:['Pon gozo en tu vida','Los tiempos están en la potestad de Dios','La necesidad de congregarnos','Una virtud que permanece','Padre, a tus pies me postro','Esgrima bíblico','Carta de Rut','No renuncies al amor de Dios','Perder tiempo'],
    portada:'assets/revista/voz-juvenil-60.webp', pdf:'pdf/revista/voz-juvenil-60.pdf', paginas:24, mb:6.01
  },
  {
    numero:59, anio:2025, periodo:'Noviembre 2025–febrero 2026', temas:['Vida cristiana','Oración','Perdón'],
    articulos:['Recursos divinos para los problemas de la vida','Sigue avanzando','Resumen de la vida cristiana','Autoexamen: la vida y la muerte del cristiano','Orando con fe y fervor','El siervo de Dios','Esgrima bíblico','Todo tiene su tiempo','¿Perdón o pato?','Una nueva mirada'],
    portada:'assets/revista/voz-juvenil-59.webp', pdf:'pdf/revista/voz-juvenil-59.pdf', paginas:24, mb:5.15
  }
];

window.VOZ_REVISTA_LECTURA = {
  cacheName: 'conectados-a-cristo-revistas',
  pagePath: (issue, page) => `assets/revista/paginas/${issue.numero}/${String(page).padStart(2, '0')}.webp`,
  lastPage(issue) {
    try {
      const page = Number(localStorage.getItem('voz-revista-pagina-' + issue.numero));
      return Number.isInteger(page) && page >= 1 && page <= issue.paginas ? page : 1;
    } catch (_) { return 1; }
  },
  savePage(issue, page) {
    try { localStorage.setItem('voz-revista-pagina-' + issue.numero, String(page)); } catch (_) {}
  }
};
