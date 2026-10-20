/* Canonical 66-book reading route. No copyrighted Bible text is bundled. */
(function () {
  'use strict';
  const books = [
    ['Génesis',50,'Los comienzos'],['Éxodo',40,'Liberación y pacto'],['Levítico',27,'Santidad y adoración'],['Números',36,'El camino por el desierto'],['Deuteronomio',34,'Recordar el pacto'],
    ['Josué',24,'La tierra prometida'],['Jueces',21,'Ciclos y rescate'],['Rut',4,'Fidelidad y esperanza'],['1 Samuel',31,'El pueblo y sus reyes'],['2 Samuel',24,'El reinado de David'],
    ['1 Reyes',22,'Reyes y profetas'],['2 Reyes',25,'El llamado a volver'],['1 Crónicas',29,'Historia y adoración'],['2 Crónicas',36,'El pueblo y el templo'],['Esdras',10,'Regreso y restauración'],
    ['Nehemías',13,'Reconstruir juntos'],['Ester',10,'Valentía y providencia'],['Job',42,'Fe en el sufrimiento'],['Salmos',150,'Oración y alabanza'],['Proverbios',31,'Sabiduría para vivir'],
    ['Eclesiastés',12,'El sentido de la vida'],['Cantares',8,'Amor y compromiso'],['Isaías',66,'Juicio y esperanza'],['Jeremías',52,'Escuchar la voz de Dios'],['Lamentaciones',5,'Dolor y esperanza'],
    ['Ezequiel',48,'Un corazón renovado'],['Daniel',12,'Fidelidad en el exilio'],['Oseas',14,'Amor que busca'],['Joel',3,'Volver al Señor'],['Amós',9,'Justicia y misericordia'],
    ['Abdías',1,'La justicia de Dios'],['Jonás',4,'Misericordia para todos'],['Miqueas',7,'Caminar humildemente'],['Nahúm',3,'Dios escucha al oprimido'],['Habacuc',3,'Confiar aun sin entender'],
    ['Sofonías',3,'Esperanza después del juicio'],['Hageo',2,'Volver a empezar'],['Zacarías',14,'Promesas de restauración'],['Malaquías',4,'Un corazón sincero'],
    ['Mateo',28,'Jesús, el Rey prometido'],['Marcos',16,'Jesús en acción'],['Lucas',24,'Buenas noticias para todos'],['Juan',21,'Creer y tener vida'],['Hechos',28,'La iglesia en camino'],
    ['Romanos',16,'La gracia y la fe'],['1 Corintios',16,'Una comunidad de amor'],['2 Corintios',13,'Consuelo y generosidad'],['Gálatas',6,'Libres en Cristo'],['Efesios',6,'Una nueva vida'],
    ['Filipenses',4,'Alegría y servicio'],['Colosenses',4,'Cristo en el centro'],['1 Tesalonicenses',5,'Esperanza y ánimo'],['2 Tesalonicenses',3,'Perseverar en la fe'],['1 Timoteo',6,'Cuidar la comunidad'],
    ['2 Timoteo',4,'Permanecer fiel'],['Tito',3,'Fe que transforma'],['Filemón',1,'Perdón y reconciliación'],['Hebreos',13,'Jesús, esperanza firme'],['Santiago',5,'Una fe en acción'],
    ['1 Pedro',5,'Esperanza en la prueba'],['2 Pedro',3,'Crecer en la verdad'],['1 Juan',5,'Vivir en el amor'],['2 Juan',1,'Amor y verdad'],['3 Juan',1,'Hospitalidad y verdad'],
    ['Judas',1,'Cuidar la fe'],['Apocalipsis',22,'Una esperanza nueva']
  ];
  const totalChapters = books.reduce((sum, book) => sum + book[1], 0);
  const days = [];
  let bookIndex = 0, chapter = 1;
  for (let day = 0; day < 365; day++) {
    let remaining = Math.floor((day + 1) * totalChapters / 365) - Math.floor(day * totalChapters / 365);
    const parts = [], themes = [];
    while (remaining) {
      const [name, count, theme] = books[bookIndex];
      const take = Math.min(remaining, count - chapter + 1);
      parts.push(name + ' ' + chapter + (take > 1 ? '–' + (chapter + take - 1) : ''));
      themes.push(theme);
      remaining -= take;
      chapter += take;
      if (chapter > count) { bookIndex++; chapter = 1; }
    }
    days.push({ day: day + 1, passage: parts.join(' · '), theme: themes.join(' · ') });
  }
  window.PLAN_365 = Object.freeze(days.map(Object.freeze));
})();
