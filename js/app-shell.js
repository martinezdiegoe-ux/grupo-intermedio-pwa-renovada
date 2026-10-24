(() => {
  'use strict';

  if (window.parent === window || window.frameElement?.id !== 'site-frame') {
    const shellUrl = new URL('app.html', location.href);
    const page = location.pathname.split('/').pop() || 'index.html';
    shellUrl.searchParams.set('page', page === 'reproductor.html' ? 'index.html' : page + location.search + location.hash);
    location.replace(shellUrl.href);
    return;
  }

  const languages = ['es', 'pt', 'it', 'uk'];
  const languageNames = { es: 'Español', pt: 'Português', it: 'Italiano', uk: 'Українська' };
  const languageKey = 'voz-juvenil-idioma';
  const themeKey = 'voz-juvenil-modo';
  const fontSizeKey = 'voz-juvenil-tamano-letra';
  const fontScales = { small: .9, normal: 1, large: 1.1, larger: 1.2 };
  let fontSize = 'normal';
  try {
    const saved = localStorage.getItem(fontSizeKey);
    if (Object.hasOwn(fontScales, saved)) fontSize = saved;
  } catch (_) { /* The selector still works for this visit. */ }
  let theme = 'light';
  try {
    if (localStorage.getItem(themeKey) === 'dark') theme = 'dark';
  } catch (_) { /* The theme still works for this visit. */ }
  document.documentElement.dataset.theme = theme;
  let language = 'es';
  try {
    const saved = localStorage.getItem(languageKey);
    if (languages.includes(saved)) language = saved;
  } catch (_) { /* The selector still works for this visit. */ }

  let translations = window.VOZ_TRANSLATIONS || null;
  const editorial = {
    pt: {
      'VOZ JUVENIL': 'VOZ JUVENIL', 'GRUPO INTERMEDIO': 'GRUPO INTERMEDIO',
      'VOZ JUVENIL · GRUPO INTERMEDIO': 'VOZ JUVENIL · GRUPO INTERMEDIO',
      'Voz Juvenil · Grupo Intermedio': 'Voz Juvenil · Grupo Intermedio',
      'Asamblea Cristiana': 'Asamblea Cristiana',
      'ASAMBLEA CRISTIANA': 'ASAMBLEA CRISTIANA',
      'Contenidos que': 'Conteúdos que', 'alimentan el alma': 'alimentam a alma',
      'Una palabra para hoy, música y contenido para seguir aprendiendo juntos.': 'Uma palavra para hoje, música e conteúdo para continuarmos aprendendo juntos.',
      'ASAMBLEA CRISTIANA · UN ESPACIO PARA CRECER': 'ASAMBLEA CRISTIANA · UM ESPAÇO PARA CRESCER',
      'Inicio': 'Início', 'Alabanzas': 'Louvores', 'Encontranos': 'Encontre-nos',
      'Nosotros': 'Quem somos', 'DESCUBRÍ': 'DESCUBRA',
      'Compartir': 'Compartilhar', 'Compartí Conectados a Cristo': 'Compartilhe Conectados a Cristo',
      'Escaneá el código QR para abrir el sitio.': 'Escaneie o código QR para abrir o site.',
      'Código QR para abrir Conectados a Cristo': 'Código QR para abrir Conectados a Cristo',
      'Enviar por WhatsApp ↗': 'Enviar pelo WhatsApp ↗', 'Cerrar': 'Fechar',
      'Audio': 'Áudio', 'Abrir reproductor de audio': 'Abrir reprodutor de áudio',
      'Escuchar radio': 'Ouvir rádio', 'Escuchar meditación': 'Ouvir meditação',
      '▶ Escuchar radio': '▶ Ouvir rádio', '▶ Escuchar meditación': '▶ Ouvir meditação',
      'Escuchá la radio de la Asamblea Cristiana mientras recorrés Voz Juvenil.': 'Ouça a rádio da Assembleia Cristã enquanto navega pelo Voz Juvenil.',
      'La radio se abre en un reproductor independiente para que sigas escuchando al cambiar de página.': 'A rádio abre em um reprodutor separado para continuar tocando quando você mudar de página.',
      'Reproductor · Voz Juvenil': 'Reprodutor · Voz Juvenil', 'REPRODUCTOR': 'REPRODUTOR',
      'Radio y audio de meditación de Voz Juvenil.': 'Rádio e áudio de meditação do Voz Juvenil.',
      'Abrir Voz Juvenil': 'Abrir Voz Juvenil', 'Escuchá sin interrupciones': 'Ouça sem interrupções',
      'Dejá abierto este reproductor para seguir escuchando mientras recorrés el sitio.': 'Mantenha este reprodutor aberto para continuar ouvindo enquanto navega pelo site.',
      'Elegir audio': 'Escolher áudio', 'Audio de meditación': 'Áudio de meditação',
      'Reproductor de audio': 'Reprodutor de áudio', 'EN VIVO': 'AO VIVO', 'MEDITACIÓN': 'MEDITAÇÃO',
      'No se pudo reproducir el audio. Intentá nuevamente.': 'Não foi possível reproduzir o áudio. Tente novamente.',
      'Reproductor alternativo ↗': 'Reprodutor alternativo ↗', 'Flotar sobre otras ventanas': 'Flutuar sobre outras janelas',
      'En el celular, podés usar los controles multimedia del sistema al abrir otras apps.': 'No celular, você pode usar os controles de mídia do sistema ao abrir outros aplicativos.',
      'Pausar audio': 'Pausar áudio', 'Reanudar audio': 'Retomar áudio',
      'Tocá reproducir para comenzar.': 'Toque em reproduzir para começar.',
      'Conocé al Grupo Intermedio': 'Conheça o Grupo Intermedio',
      '01 / CAMINEMOS JUNTOS': '01 / CAMINHEMOS JUNTOS',
      'Cronograma': 'Programação', 'Filial': 'Filial',
      'Menú principal': 'Menu principal',
      'Modo': 'Modo', 'Claro': 'Claro', 'Oscuro': 'Escuro',
      'MÚSICA Y MEMORIA': 'MÚSICA E MEMÓRIA',
      'Explorar la meditación': 'Explorar a meditação',
      'Las respuestas del crucigrama se escriben en español.': 'As respostas das palavras cruzadas devem ser escritas em espanhol.'
    },
    it: {
      'VOZ JUVENIL': 'VOZ JUVENIL', 'GRUPO INTERMEDIO': 'GRUPO INTERMEDIO',
      'VOZ JUVENIL · GRUPO INTERMEDIO': 'VOZ JUVENIL · GRUPO INTERMEDIO',
      'Voz Juvenil · Grupo Intermedio': 'Voz Juvenil · Grupo Intermedio',
      'Asamblea Cristiana': 'Asamblea Cristiana',
      'ASAMBLEA CRISTIANA': 'ASAMBLEA CRISTIANA',
      'Contenidos que': 'Contenuti che', 'alimentan el alma': 'nutrono l’anima',
      'Una palabra para hoy, música y contenido para seguir aprendiendo juntos.': 'Una parola per oggi, musica e contenuti per continuare a imparare insieme.',
      'ASAMBLEA CRISTIANA · UN ESPACIO PARA CRECER': 'ASAMBLEA CRISTIANA · UNO SPAZIO PER CRESCERE',
      'Inicio': 'Home', 'Alabanzas': 'Canti di lode', 'Encontranos': 'Dove trovarci',
      'Nosotros': 'Chi siamo', 'DESCUBRÍ': 'SCOPRI',
      'Compartir': 'Condividi', 'Compartí Conectados a Cristo': 'Condividi Conectados a Cristo',
      'Escaneá el código QR para abrir el sitio.': 'Inquadra il codice QR per aprire il sito.',
      'Código QR para abrir Conectados a Cristo': 'Codice QR per aprire Conectados a Cristo',
      'Enviar por WhatsApp ↗': 'Invia con WhatsApp ↗', 'Cerrar': 'Chiudi',
      'Audio': 'Audio', 'Abrir reproductor de audio': 'Apri il lettore audio',
      'Escuchar radio': 'Ascolta la radio', 'Escuchar meditación': 'Ascolta la meditazione',
      '▶ Escuchar radio': '▶ Ascolta la radio', '▶ Escuchar meditación': '▶ Ascolta la meditazione',
      'Escuchá la radio de la Asamblea Cristiana mientras recorrés Voz Juvenil.': 'Ascolta la radio dell’Assemblea Cristiana mentre navighi in Voz Juvenil.',
      'La radio se abre en un reproductor independiente para que sigas escuchando al cambiar de página.': 'La radio si apre in un lettore separato per continuare ad ascoltare quando cambi pagina.',
      'Reproductor · Voz Juvenil': 'Lettore · Voz Juvenil', 'REPRODUCTOR': 'LETTORE',
      'Radio y audio de meditación de Voz Juvenil.': 'Radio e audio delle meditazioni di Voz Juvenil.',
      'Abrir Voz Juvenil': 'Apri Voz Juvenil', 'Escuchá sin interrupciones': 'Ascolta senza interruzioni',
      'Dejá abierto este reproductor para seguir escuchando mientras recorrés el sitio.': 'Lascia aperto questo lettore per continuare ad ascoltare mentre navighi nel sito.',
      'Elegir audio': 'Scegli l’audio', 'Audio de meditación': 'Audio della meditazione',
      'Reproductor de audio': 'Lettore audio', 'EN VIVO': 'IN DIRETTA', 'MEDITACIÓN': 'MEDITAZIONE',
      'No se pudo reproducir el audio. Intentá nuevamente.': 'Impossibile riprodurre l’audio. Riprova.',
      'Reproductor alternativo ↗': 'Lettore alternativo ↗', 'Flotar sobre otras ventanas': 'Mostra sopra le altre finestre',
      'En el celular, podés usar los controles multimedia del sistema al abrir otras apps.': 'Sul telefono puoi usare i controlli multimediali del sistema quando apri altre app.',
      'Pausar audio': 'Metti in pausa l’audio', 'Reanudar audio': 'Riprendi l’audio',
      'Tocá reproducir para comenzar.': 'Tocca riproduci per iniziare.',
      'Conocé al Grupo Intermedio': 'Conosci il Grupo Intermedio',
      '01 / CAMINEMOS JUNTOS': '01 / CAMMINIAMO INSIEME',
      'Filial': 'Sede', 'Meditar': 'Meditare',
      'Menú principal': 'Menu principale',
      'Modo': 'Modalità', 'Claro': 'Chiaro', 'Oscuro': 'Scuro',
      'Las respuestas del crucigrama se escriben en español.': 'Le risposte del cruciverba vanno scritte in spagnolo.'
    },
    uk: {
      'VOZ JUVENIL': 'VOZ JUVENIL', 'GRUPO INTERMEDIO': 'GRUPO INTERMEDIO',
      'VOZ JUVENIL · GRUPO INTERMEDIO': 'VOZ JUVENIL · GRUPO INTERMEDIO',
      'Voz Juvenil · Grupo Intermedio': 'Voz Juvenil · Grupo Intermedio',
      'Asamblea Cristiana': 'Asamblea Cristiana',
      'ASAMBLEA CRISTIANA': 'ASAMBLEA CRISTIANA',
      'Contenidos que': 'Матеріали, що', 'alimentan el alma': 'живлять душу',
      'Una palabra para hoy, música y contenido para seguir aprendiendo juntos.': 'Слово на сьогодні, музика та матеріали, щоб разом продовжувати навчатися.',
      'ASAMBLEA CRISTIANA · UN ESPACIO PARA CRECER': 'ASAMBLEA CRISTIANA · ПРОСТІР ДЛЯ ЗРОСТАННЯ',
      'Inicio': 'Головна', 'Alabanzas': 'Пісні прославлення', 'Encontranos': 'Де нас знайти',
      'Nosotros': 'Про нас', 'DESCUBRÍ': 'ВІДКРИЙТЕ',
      'Compartir': 'Поділитися', 'Compartí Conectados a Cristo': 'Поділіться Conectados a Cristo',
      'Escaneá el código QR para abrir el sitio.': 'Відскануйте QR-код, щоб відкрити сайт.',
      'Código QR para abrir Conectados a Cristo': 'QR-код для відкриття Conectados a Cristo',
      'Enviar por WhatsApp ↗': 'Надіслати через WhatsApp ↗', 'Cerrar': 'Закрити',
      'Audio': 'Аудіо', 'Abrir reproductor de audio': 'Відкрити аудіопрогравач',
      'Escuchar radio': 'Слухати радіо', 'Escuchar meditación': 'Слухати роздуми',
      '▶ Escuchar radio': '▶ Слухати радіо', '▶ Escuchar meditación': '▶ Слухати роздуми',
      'Escuchá la radio de la Asamblea Cristiana mientras recorrés Voz Juvenil.': 'Слухайте радіо Християнської Асамблеї під час перегляду Voz Juvenil.',
      'La radio se abre en un reproductor independiente para que sigas escuchando al cambiar de página.': 'Радіо відкриється в окремому програвачі й продовжить звучати після переходу на іншу сторінку.',
      'Reproductor · Voz Juvenil': 'Програвач · Voz Juvenil', 'REPRODUCTOR': 'ПРОГРАВАЧ',
      'Radio y audio de meditación de Voz Juvenil.': 'Радіо та аудіороздуми Voz Juvenil.',
      'Abrir Voz Juvenil': 'Відкрити Voz Juvenil', 'Escuchá sin interrupciones': 'Слухайте без перерв',
      'Dejá abierto este reproductor para seguir escuchando mientras recorrés el sitio.': 'Залиште цей програвач відкритим, щоб слухати під час перегляду сайту.',
      'Elegir audio': 'Вибрати аудіо', 'Audio de meditación': 'Аудіороздуми',
      'Reproductor de audio': 'Аудіопрогравач', 'EN VIVO': 'НАЖИВО', 'MEDITACIÓN': 'РОЗДУМИ',
      'No se pudo reproducir el audio. Intentá nuevamente.': 'Не вдалося відтворити аудіо. Спробуйте ще раз.',
      'Reproductor alternativo ↗': 'Інший програвач ↗', 'Flotar sobre otras ventanas': 'Показати поверх інших вікон',
      'En el celular, podés usar los controles multimedia del sistema al abrir otras apps.': 'На телефоні можна керувати аудіо через системні елементи керування, відкриваючи інші застосунки.',
      'Pausar audio': 'Призупинити аудіо', 'Reanudar audio': 'Відновити аудіо',
      'Tocá reproducir para comenzar.': 'Натисніть відтворення, щоб почати.',
      'Conocé al Grupo Intermedio': 'Познайомтеся з Grupo Intermedio',
      '01 / CAMINEMOS JUNTOS': '01 / ХОДІМО РАЗОМ',
      'Cronograma': 'Розклад', 'Estudios bíblicos': 'Біблійні заняття',
      'Filial': 'Філія', 'Meditar': 'Роздуми', 'Meditación': 'Роздуми',
      'Menú principal': 'Головне меню',
      'Modo': 'Режим', 'Claro': 'Світлий', 'Oscuro': 'Темний',
      'Música': 'Музика', 'Explorar la meditación': 'Перейти до роздумів',
      'Las respuestas del crucigrama se escriben en español.': 'Відповіді на кросворд потрібно писати іспанською.'
    }
  };
  const bookNames = {
    pt: {
      '1 Samuel': '1 Samuel', '2 Samuel': '2 Samuel', 'Job': 'Jó',
      'Daniel': 'Daniel', 'Marcos': 'Marcos', 'Hechos': 'Atos',
      'Santiago': 'Tiago', 'Miqueas': 'Miqueias'
    },
    it: {
      'Rut': 'Rut', 'Job': 'Giobbe', 'Joel': 'Gioele',
      'Miqueas': 'Michea', 'Hechos': 'Atti', 'Santiago': 'Giacomo'
    },
    uk: {
      'Génesis': 'Буття', 'Éxodo': 'Вихід', 'Levítico': 'Левит',
      'Números': 'Числа', 'Deuteronomio': 'Повторення Закону',
      'Josué': 'Ісус Навин', 'Jueces': 'Суддів', 'Rut': 'Рут',
      '1 Samuel': '1 Самуїла', '2 Samuel': '2 Самуїла',
      '1 Reyes': '1 Царів', '2 Reyes': '2 Царів',
      '1 Crónicas': '1 Хронік', '2 Crónicas': '2 Хронік',
      'Esdras': 'Ездри', 'Nehemías': 'Неемії', 'Ester': 'Естер',
      'Job': 'Йова', 'Salmos': 'Псалми', 'Proverbios': 'Приповісті',
      'Eclesiastés': 'Еклезіаст', 'Cantares': 'Пісня над піснями',
      'Isaías': 'Ісаї', 'Jeremías': 'Єремії', 'Lamentaciones': 'Плач Єремії',
      'Ezequiel': 'Єзекіїля', 'Daniel': 'Даниїла', 'Oseas': 'Осії',
      'Joel': 'Йоіла', 'Amós': 'Амоса', 'Abdías': 'Овдія',
      'Jonás': 'Йони', 'Miqueas': 'Михея', 'Nahúm': 'Наума',
      'Habacuc': 'Авакума', 'Sofonías': 'Софонії', 'Hageo': 'Огія',
      'Zacarías': 'Захарії', 'Malaquías': 'Малахії',
      'Mateo': 'Матвія', 'Marcos': 'Марка', 'Lucas': 'Луки',
      'Juan': 'Івана', 'Hechos': 'Дії апостолів', 'Romanos': 'Римлян',
      '1 Corintios': '1 Коринтян', '2 Corintios': '2 Коринтян',
      'Gálatas': 'Галатів', 'Efesios': 'Ефесян',
      'Filipenses': "Филип'ян", 'Colosenses': 'Колосян',
      '1 Tesalonicenses': '1 Солунян', '2 Tesalonicenses': '2 Солунян',
      '1 Timoteo': '1 Тимофія', '2 Timoteo': '2 Тимофія',
      'Tito': 'Тита', 'Filemón': 'Филимона', 'Hebreos': 'Євреїв',
      'Santiago': 'Якова', '1 Pedro': '1 Петра', '2 Pedro': '2 Петра',
      '1 Juan': '1 Івана', '2 Juan': '2 Івана', '3 Juan': '3 Івана',
      'Judas': 'Юди', 'Apocalipsis': "Об'явлення"
    }
  };
  const copyCorrections = {
    pt: {
      'DESCUBRÍ': 'DESCUBRA',
      'Sede central · Santa Fe': 'Sede central · Santa Fe',
      '1º de Mayo 3623, Santa Fe': '1º de Mayo 3623, Santa Fe',
      'ASAMBLEA CRISTIANA EN ARGENTINA': 'ASAMBLEA CRISTIANA NA ARGENTINA',
      'Buscá filiales de la Asamblea Cristiana por provincia, ciudad o dirección.': 'Procure filiais da Asamblea Cristiana por província, cidade ou endereço.',
      'Buscá una filial por provincia, ciudad, nombre o dirección.': 'Procure uma filial por província, cidade, nome ou endereço.',
      'Filiales': 'Filiais', 'Filiales en todo el país': 'Filiais em todo o país',
      'No encontramos filiales con esos filtros. Probá otra ciudad o provincia.': 'Não encontramos filiais com esses filtros. Tente outra cidade ou província.',
      'listado público de filiales del Himnario ↗': 'lista pública de filiais do Himnario ↗',
      'PUNTO DE REFERENCIA': 'PONTO DE REFERÊNCIA',
      'El avance se guarda solo en este dispositivo. No requiere iniciar sesión.': 'O progresso é salvo apenas neste dispositivo. Não é preciso iniciar sessão.',
      'Elegí un bloque de lectura': 'Escolha um bloco de leitura',
      'Progreso del plan': 'Progresso do plano',
      'Ir al próximo día': 'Ir para o próximo dia',
      'Ir al día': 'Ir para o dia',
      'por leer': 'por ler',
      'Conocé al Grupo Intermedio': 'Conheça o Grupo Intermedio'
    },
    it: {
      'Sede central · Santa Fe': 'Sede centrale · Santa Fe',
      '1º de Mayo 3623, Santa Fe': '1º de Mayo 3623, Santa Fe',
      'ASAMBLEA CRISTIANA EN ARGENTINA': 'ASAMBLEA CRISTIANA IN ARGENTINA',
      'Buscá filiales de la Asamblea Cristiana por provincia, ciudad o dirección.': 'Cerca le sedi della Asamblea Cristiana per provincia, città o indirizzo.',
      'Buscá una filial por provincia, ciudad, nombre o dirección.': 'Cerca una sede per provincia, città, nome o indirizzo.',
      'DIRECTORIO': 'ELENCO', 'Filiales': 'Sedi',
      'Filiales en todo el país': 'Sedi in tutto il paese',
      'No encontramos filiales con esos filtros. Probá otra ciudad o provincia.': 'Non abbiamo trovato sedi con questi filtri. Prova un’altra città o provincia.',
      'listado público de filiales del Himnario ↗': 'elenco pubblico delle sedi del Himnario ↗',
      'Todas': 'Tutte',
      'El avance se guarda solo en este dispositivo. No requiere iniciar sesión.': 'I progressi vengono salvati solo su questo dispositivo. Non è necessario accedere.',
      'Elegí un bloque de lectura': 'Scegli un blocco di lettura',
      'Progreso del plan': 'Avanzamento del piano',
      'Ir al próximo día': 'Vai al prossimo giorno',
      'Ir al día': 'Vai al giorno',
      'por leer': 'da leggere'
    },
    uk: {
      'Sede central · Santa Fe': 'Центральна громада · Санта-Фе',
      '1º de Mayo 3623, Santa Fe': '1º de Mayo 3623, Santa Fe',
      'ASAMBLEA CRISTIANA EN ARGENTINA': 'ASAMBLEA CRISTIANA В АРГЕНТИНІ',
      'Buscá filiales de la Asamblea Cristiana por provincia, ciudad o dirección.': 'Шукайте філії Asamblea Cristiana за областю, містом або адресою.',
      'Buscá una filial por provincia, ciudad, nombre o dirección.': 'Шукайте філію за областю, містом, назвою або адресою.',
      'PUNTO DE REFERENCIA': 'ОРІЄНТИР',
      'DIRECTORIO': 'КАТАЛОГ', 'Filiales': 'Філії',
      'Filiales en todo el país': 'Філії по всій країні',
      'No encontramos filiales con esos filtros. Probá otra ciudad o provincia.': 'За цими фільтрами філій не знайдено. Спробуйте інше місто або область.',
      'listado público de filiales del Himnario ↗': 'публічний перелік філій з Himnario ↗',
      'Todas': 'Усі',
      'El avance se guarda solo en este dispositivo. No requiere iniciar sesión.': 'Прогрес зберігається лише на цьому пристрої. Вхід не потрібен.',
      'Elegí un bloque de lectura': 'Оберіть блок читання',
      'Progreso del plan': 'Прогрес плану',
      'Ir al próximo día': 'Перейти до наступного дня',
      'Ir al día': 'Перейти до дня',
      'Sin dirección registrada': 'Адресу не вказано',
      'por leer': 'залишилося прочитати'
    }
  };
  const newText = {
    pt: {'CONECTADOS A CRISTO':'CONECTADOS A CRISTO','Conectados a Cristo · Asamblea Cristiana':'Conectados a Cristo · Assembleia Cristã','Una palabra para hoy, alabanzas que animan y contenidos para seguir creciendo juntos.':'Uma palavra para hoje, louvores que animam e conteúdos para continuarmos crescendo juntos.','MÚSICA PARA ACOMPAÑARTE':'MÚSICA PARA ACOMPANHAR VOCÊ','UN AÑO DE LA PALABRA DE DIOS':'UM ANO DA PALAVRA DE DEUS','Avisos y actividades juveniles':'Avisos e atividades juvenis','Iglesia perseguida':'Igreja perseguida','Voz Juvenil':'Voz Juvenil','Sección en construcción':'Seção em construção','Mi playlist':'Minha playlist'},
    it: {'CONECTADOS A CRISTO':'CONECTADOS A CRISTO','Conectados a Cristo · Asamblea Cristiana':'Conectados a Cristo · Assemblea Cristiana','Una palabra para hoy, alabanzas que animan y contenidos para seguir creciendo juntos.':'Una parola per oggi, canti che incoraggiano e contenuti per continuare a crescere insieme.','MÚSICA PARA ACOMPAÑARTE':'MUSICA CHE TI ACCOMPAGNA','UN AÑO DE LA PALABRA DE DIOS':'UN ANNO NELLA PAROLA DI DIO','Avisos y actividades juveniles':'Avvisi e attività giovanili','Iglesia perseguida':'Chiesa perseguitata','Sección en construcción':'Sezione in preparazione','Mi playlist':'La mia playlist'},
    uk: {'CONECTADOS A CRISTO':'CONECTADOS A CRISTO','Conectados a Cristo · Asamblea Cristiana':'Conectados a Cristo · Християнська Асамблея','Una palabra para hoy, alabanzas que animan y contenidos para seguir creciendo juntos.':'Слово на сьогодні, пісні прославлення та матеріали, щоб зростати разом.','MÚSICA PARA ACOMPAÑARTE':'МУЗИКА ДЛЯ ВАС','UN AÑO DE LA PALABRA DE DIOS':'РІК БОЖОГО СЛОВА','Avisos y actividades juveniles':'Оголошення та молодіжні заходи','Iglesia perseguida':'Переслідувана церква','Sección en construcción':'Розділ готується','Mi playlist':'Мій список відтворення'}
  };
  const revistaText = {
    pt: {
      'Archivo de la revista juvenil':'Arquivo da revista juvenil','ARCHIVO DE REVISTAS':'ARQUIVO DE REVISTAS',
      'Aquí encontrarás las ediciones de la revista juvenil de la iglesia. Te invitamos a descubrir artículos y mensajes que acompañen tu vida cristiana.':'Aqui você encontra as edições da revista juvenil da igreja, com artigos e mensagens para acompanhar sua vida cristã.',
      'Buscar ediciones':'Buscar edições','Número':'Número','Por ejemplo 50':'Por exemplo 50','Año':'Ano','Todos los años':'Todos os anos','Tema':'Tema','Buscar tema':'Buscar tema',
      'Buscar por palabras en los artículos':'Buscar por palavras nos artigos','Escribí una palabra o frase':'Digite uma palavra ou frase','Coincidencias en páginas:':'Resultados nas páginas:',
      'No hay ediciones para esos filtros.':'Não há edições para esses filtros.','No hay temas que coincidan':'Nenhum tema correspondente','Temas disponibles':'Temas disponíveis','Leer revista →':'Ler revista →'
    },
    it: {
      'Archivo de la revista juvenil':'Archivio della rivista giovanile','ARCHIVO DE REVISTAS':'ARCHIVIO DELLE RIVISTE',
      'Aquí encontrarás las ediciones de la revista juvenil de la iglesia. Te invitamos a descubrir artículos y mensajes que acompañen tu vida cristiana.':'Qui trovi le edizioni della rivista giovanile della chiesa, con articoli e messaggi per accompagnare la tua vita cristiana.',
      'Buscar ediciones':'Cerca le edizioni','Número':'Numero','Por ejemplo 50':'Per esempio 50','Año':'Anno','Todos los años':'Tutti gli anni','Tema':'Tema','Buscar tema':'Cerca per tema',
      'Buscar por palabras en los artículos':'Cerca parole negli articoli','Escribí una palabra o frase':'Scrivi una parola o frase','Coincidencias en páginas:':'Risultati alle pagine:',
      'No hay ediciones para esos filtros.':'Nessuna edizione corrisponde ai filtri.','No hay temas que coincidan':'Nessun tema corrispondente','Temas disponibles':'Temi disponibili','Leer revista →':'Leggi la rivista →'
    },
    uk: {
      'Archivo de la revista juvenil':'Архів молодіжного журналу','ARCHIVO DE REVISTAS':'АРХІВ ЖУРНАЛІВ',
      'Aquí encontrarás las ediciones de la revista juvenil de la iglesia. Te invitamos a descubrir artículos y mensajes que acompañen tu vida cristiana.':'Тут зібрані випуски церковного молодіжного журналу зі статтями та посланнями для християнського життя.',
      'Buscar ediciones':'Знайти випуски','Número':'Номер','Por ejemplo 50':'Наприклад, 50','Año':'Рік','Todos los años':'Усі роки','Tema':'Тема','Buscar tema':'Пошук за темою',
      'Buscar por palabras en los artículos':'Пошук слів у статтях','Escribí una palabra o frase':'Введіть слово або фразу','Coincidencias en páginas:':'Знайдено на сторінках:',
      'No hay ediciones para esos filtros.':'За цими фільтрами випусків немає.','No hay temas que coincidan':'Немає відповідних тем','Temas disponibles':'Доступні теми','Leer revista →':'Читати журнал →'
    }
  };
  const fontSizeText = {
    pt: {'Tamaño de letra':'Tamanho da letra','Pequeña':'Pequena','Normal':'Normal','Grande':'Grande','Muy grande':'Muito grande'},
    it: {'Tamaño de letra':'Dimensione del testo','Pequeña':'Piccola','Normal':'Normale','Grande':'Grande','Muy grande':'Molto grande'},
    uk: {'Tamaño de letra':'Розмір шрифту','Pequeña':'Малий','Normal':'Звичайний','Grande':'Великий','Muy grande':'Дуже великий'}
  };
  function applyEditorial() {
    for (const code of ['pt', 'it', 'uk']) {
      const dictionary = translations[code];
      for (const source of Object.keys(dictionary)) {
        if (!source.includes('Voz Juvenil')) continue;
        dictionary[source] = dictionary[source]
          .replace(/Voz Jovem|Voce giovanile|Voce Giovanile|Voce dei Giovani|Голос молоді|Молодіжний Голос|Youth Voice/g, 'Voz Juvenil');
      }
      Object.assign(dictionary, editorial[code], bookNames[code], copyCorrections[code], newText[code], revistaText[code], fontSizeText[code]);
    }
  }
  if (translations) applyEditorial();
  let loadingTranslations = null;
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const normalized = value => String(value).replace(/\s+/g, ' ').trim();

  function loadTranslations() {
    if (translations) return Promise.resolve();
    if (!loadingTranslations) {
      loadingTranslations = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'js/i18n-data.js';
        script.onload = () => {
          translations = window.VOZ_TRANSLATIONS;
          if (translations) { applyEditorial(); resolve(); }
          else reject(new Error('No se cargaron las traducciones'));
        };
        script.onerror = () => reject(new Error('No se cargaron las traducciones'));
        document.head.append(script);
      }).catch(error => { loadingTranslations = null; throw error; });
    }
    return loadingTranslations;
  }

  const direct = phrase => translations?.[language]?.[phrase] || null;

  function translateDynamic(phrase) {
    let match;
    if ((match = phrase.match(/^(\d+) filiales · (\d+) jurisdicciones$/))) {
      if (language === 'pt') return `${match[1]} filiais · ${match[2]} jurisdições`;
      if (language === 'it') return `${match[1]} sedi · ${match[2]} giurisdizioni`;
      return `${match[1]} філій · ${match[2]} адміністративні одиниці`;
    }
    if ((match = phrase.match(/^(\d+) (filial encontrada|filiales encontradas)(?: en (.*?))?(?: · mostrando (\d+))?$/))) {
      const [, count, , province, shown] = match;
      if (language === 'pt') return `${count} ${count === '1' ? 'filial encontrada' : 'filiais encontradas'}${province ? ' em ' + province : ''}${shown ? ' · mostrando ' + shown : ''}`;
      if (language === 'it') return `${count} ${count === '1' ? 'sede trovata' : 'sedi trovate'}${province ? ' in ' + province : ''}${shown ? ' · visualizzate ' + shown : ''}`;
      return `${count} філій знайдено${province ? ' у ' + province : ''}${shown ? ' · показано ' + shown : ''}`;
    }
    if ((match = phrase.match(/^Mostrar (\d+) más$/))) {
      return language === 'pt' ? `Mostrar mais ${match[1]}` : language === 'it' ? `Mostra altri ${match[1]}` : `Показати ще ${match[1]}`;
    }
    if ((match = phrase.match(/^(Federación Asamblea Cristiana · Filial|Asamblea Cristiana · Filial) (\d+)$/))) {
      return match[1].replace('Filial', direct('Filial') || 'Filial') + ' ' + match[2];
    }
    if ((match = phrase.match(/^Localidad sin especificar · (.+)$/))) {
      return (direct('Localidad sin especificar') || 'Localidad sin especificar') + ' · ' + match[1];
    }
    if ((match = phrase.match(/^Buscar en Maps: (.+)$/))) {
      return (direct('Buscar en Maps:') || 'Buscar en Maps:') + ' ' + match[1];
    }
    if ((match = phrase.match(/^Días (\d+)–(\d+)(?: · (\d+) de (\d+) completados)?$/))) {
      if (language === 'pt') return `Dias ${match[1]}–${match[2]}` + (match[3] ? ` · ${match[3]} de ${match[4]} concluídos` : '');
      if (language === 'it') return `Giorni ${match[1]}–${match[2]}` + (match[3] ? ` · ${match[3]} di ${match[4]} completati` : '');
      return `Дні ${match[1]}–${match[2]}` + (match[3] ? ` · виконано ${match[3]} із ${match[4]}` : '');
    }
    if ((match = phrase.match(/^DÍA (\d+)$/))) return `${direct('DÍA') || 'DÍA'} ${match[1]}`;
    if ((match = phrase.match(/^Ir al día (\d+)$/))) return `${direct('Ir al día') || 'Ir al día'} ${match[1]}`;
    if ((match = phrase.match(/^Día (\d+) (completado|pendiente)\. (\d+) de 365 días completados\.$/))) {
      if (language === 'pt') return `Dia ${match[1]} ${match[2] === 'completado' ? 'concluído' : 'pendente'}. ${match[3]} de 365 dias concluídos.`;
      if (language === 'it') return `Giorno ${match[1]} ${match[2] === 'completado' ? 'completato' : 'in sospeso'}. ${match[3]} giorni completati su 365.`;
      return `День ${match[1]} ${match[2] === 'completado' ? 'завершено' : 'очікує'}. Завершено ${match[3]} із 365 днів.`;
    }
    if ((match = phrase.match(/^Día (\d+): (.+)\. Marcar lectura completada$/))) {
      const passage = translateDynamic(match[2]) || match[2];
      if (language === 'pt') return `Dia ${match[1]}: ${passage}. Marcar leitura como concluída`;
      if (language === 'it') return `Giorno ${match[1]}: ${passage}. Segna la lettura come completata`;
      return `День ${match[1]}: ${passage}. Позначити читання як завершене`;
    }
    if (phrase.includes(' · ')) {
      const parts = phrase.split(' · ');
      const translatedParts = parts.map(part => translateDynamic(part) || direct(part) || part);
      if (translatedParts.some((part, index) => part !== parts[index])) return translatedParts.join(' · ');
    }
    if ((match = phrase.match(/^(.+?) (\d+(?:–\d+)?)$/)) && direct(match[1])) {
      return `${direct(match[1])} ${match[2]}`;
    }
    if ((match = phrase.match(/^📅 (\d+) de ([a-záéíóúñ]+) de (\d{4})$/i))) {
      const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
      const month = months.indexOf(match[2].toLowerCase());
      if (month >= 0) {
        const locale = { pt: 'pt-BR', it: 'it-IT', uk: 'uk-UA' }[language];
        const date = new Date(Date.UTC(Number(match[3]), month, Number(match[1])));
        return '📅 ' + date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
      }
    }
    if ((match = phrase.match(/^⏰ (.+) hs$/))) {
      return '⏰ ' + match[1] + (language === 'it' ? ' ore' : language === 'uk' ? ' год' : ' h');
    }
    return null;
  }

  function translated(phrase) {
    if (language === 'es') return phrase;
    return direct(phrase) || translateDynamic(phrase) || phrase;
  }

  function translateTextNode(node) {
    if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(node.parentElement.tagName)) return;
    if (node.parentElement.closest('.site-menu-language')) return;
    const current = node.nodeValue;
    let entry = originalText.get(node);
    if (!entry || (current !== entry.last && current !== entry.source)) entry = { source: current, last: current };
    const source = entry.source;
    const phrase = normalized(source);
    if (!phrase) return;
    let replacement = translated(phrase);
    let next = source;
    if (language !== 'es' && source.includes('\n')) {
      const lines = source.split('\n');
      const translatedLines = lines.map(line => {
        const part = normalized(line);
        const result = part ? direct(part) || translateDynamic(part) : null;
        return result ? line.replace(part, result) : line;
      });
      if (translatedLines.some((line, index) => line !== lines[index])) next = translatedLines.join('\n');
    }
    if (next === source && replacement !== phrase) {
      next = (source.match(/^\s*/) || [''])[0] + replacement + (source.match(/\s*$/) || [''])[0];
    }
    if (current !== next) node.nodeValue = next;
    entry.last = next;
    originalText.set(node, entry);
  }

  const translatableAttributes = ['placeholder', 'aria-label', 'title', 'alt'];
  function translateAttributes(element) {
    let records = originalAttributes.get(element);
    if (!records) { records = {}; originalAttributes.set(element, records); }
    for (const name of translatableAttributes) {
      if (!element.hasAttribute(name)) continue;
      const current = element.getAttribute(name);
      let entry = records[name];
      if (!entry || (current !== entry.last && current !== entry.source)) entry = { source: current, last: current };
      const next = translated(normalized(entry.source));
      if (next !== current) element.setAttribute(name, next);
      entry.last = next;
      records[name] = entry;
    }
    if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
      const current = element.getAttribute('content');
      let entry = records.content;
      if (!entry || (current !== entry.last && current !== entry.source)) entry = { source: current, last: current };
      const next = translated(normalized(entry.source));
      if (next !== current) element.setAttribute('content', next);
      entry.last = next;
      records.content = entry;
    }
  }

  function translateTree(root) {
    if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateAttributes(node);
    }
  }

  const header = document.querySelector('.topbar') || document.createElement('header');
  const menuStyles = document.createElement('link');
  menuStyles.rel = 'stylesheet';
  menuStyles.href = 'css/site-menu.css?v=41';
  document.head.append(menuStyles);
  const themeStyles = document.createElement('link');
  themeStyles.rel = 'stylesheet';
  themeStyles.href = 'css/theme.css';
  document.head.append(themeStyles);
  if (!header.classList.contains('topbar')) {
    document.body.classList.add('legacy-page');
    header.className = 'topbar app-header';
    header.innerHTML = '<a class="brand" href="index.html"><img class="brand-mark" src="assets/icon-192-v2.png" alt=""><span><strong>CONECTADOS A CRISTO</strong><small>ASAMBLEA CRISTIANA</small></span></a>';
    document.body.prepend(header);
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.setAttribute('aria-label', 'Navegación principal');
    const links = [['index.html','⌂','Inicio'],['palabra.html','✦','Meditar'],['alabanzas.html','♫','Música'],['juegos.html','◈','Juegos'],['novedades.html','◉','Novedades']];
    const name = location.pathname.split('/').pop();
    links.forEach(([href,icon,label]) => {
      const a = document.createElement('a');
      a.href = href;
      a.innerHTML = '<span aria-hidden="true">' + icon + '</span>' + label;
      if (name === href || (name === 'alabanza.html' && href === 'alabanzas.html')) a.className = 'selected';
      nav.append(a);
    });
    document.body.append(nav);
  }
  header.querySelector('.top-link')?.remove();

  const menu = document.createElement('div');
  menu.className = 'site-menu';
  menu.innerHTML = `
    <button type="button" class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="site-menu-panel">
      <span class="menu-bars" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
    <nav id="site-menu-panel" class="site-menu-panel" aria-label="Menú principal" hidden>
      <a class="site-menu-link" href="index.html">Inicio</a>
      <a class="site-menu-link" href="acerca.html">Conócenos</a>
      <button type="button" class="site-menu-link site-menu-share-trigger">Compartir</button>
      <div class="site-menu-language-title">Idioma</div>
      <div class="site-menu-languages"></div>
      <div id="site-menu-theme-title" class="site-menu-theme-title">Modo</div>
      <div class="site-menu-themes" role="group" aria-labelledby="site-menu-theme-title">
        <button type="button" class="site-menu-theme" data-theme-choice="light">Claro</button>
        <button type="button" class="site-menu-theme" data-theme-choice="dark">Oscuro</button>
      </div>
      <div id="site-menu-font-title" class="site-menu-font-title">Tamaño de letra</div>
      <div class="site-menu-font-sizes" role="group" aria-labelledby="site-menu-font-title">
        <button type="button" class="site-menu-font-size" data-font-size="small">Pequeña</button>
        <button type="button" class="site-menu-font-size" data-font-size="normal">Normal</button>
        <button type="button" class="site-menu-font-size" data-font-size="large">Grande</button>
        <button type="button" class="site-menu-font-size" data-font-size="larger">Muy grande</button>
      </div>
    </nav>`;
  header.append(menu);
  const shareDialog = document.createElement('dialog');
  shareDialog.className = 'site-share-dialog';
  shareDialog.setAttribute('aria-labelledby', 'site-share-title');
  shareDialog.innerHTML = `
    <div class="site-share-content">
      <button type="button" class="site-share-close" aria-label="Cerrar">×</button>
      <h2 id="site-share-title">Compartí Conectados a Cristo</h2>
      <img class="site-share-qr" src="assets/compartir-qr.svg" width="240" height="240" alt="Código QR para abrir Conectados a Cristo">
      <p class="site-share-hint">Escaneá el código QR para abrir el sitio.</p>
      <a class="site-share-whatsapp" target="_blank" rel="noopener noreferrer">Enviar por WhatsApp ↗</a>
    </div>`;
  document.body.append(shareDialog);
  const shareTrigger = menu.querySelector('.site-menu-share-trigger');
  const shareClose = shareDialog.querySelector('.site-share-close');
  const shareWhatsApp = shareDialog.querySelector('.site-share-whatsapp');
  shareWhatsApp.href = 'https://wa.me/?text=' + encodeURIComponent(new URL('./', location.href).href);
  shareTrigger.addEventListener('click', () => { closeMenu(); shareDialog.showModal(); });
  shareClose.addEventListener('click', () => shareDialog.close());
  shareDialog.addEventListener('click', event => { if (event.target === shareDialog) shareDialog.close(); });
  const toggle = menu.querySelector('.menu-toggle');
  const panel = menu.querySelector('.site-menu-panel');
  const languageButtons = menu.querySelector('.site-menu-languages');
  const themeButtons = menu.querySelectorAll('.site-menu-theme');
  const fontButtons = menu.querySelectorAll('.site-menu-font-size');
  for (const code of languages) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'site-menu-language';
    button.dataset.language = code;
    button.textContent = languageNames[code];
    button.addEventListener('click', () => setLanguage(code));
    languageButtons.append(button);
  }
  for (const button of themeButtons) button.addEventListener('click', () => setTheme(button.dataset.themeChoice));
  for (const button of fontButtons) button.addEventListener('click', () => setFontSize(button.dataset.fontSize));

  // Scale declared type sizes while preserving each page's existing media queries and layout sizes.
  const originalFontSizes = new WeakMap();
  function prepareFontScaling() {
    function visit(rules) {
      for (const rule of rules) {
        if (rule.cssRules?.length) visit(rule.cssRules);
        if (!rule.style || /::?(before|after)/i.test(rule.selectorText || '')) continue;
        const size = originalFontSizes.get(rule) || rule.style.fontSize;
        if (!size || !/(?:px|rem|em|vw|vh)/i.test(size)) continue;
        originalFontSizes.set(rule, size);
        rule.style.fontSize = size.replace(/(\d*\.?\d+)(px|rem|em|vw|vh)/gi,
          (_, number, unit) => `${Number((Number(number) * fontScales[fontSize]).toFixed(3))}${unit}`);
      }
    }
    for (const sheet of document.styleSheets) {
      try { visit(sheet.cssRules); } catch (_) { /* Third-party stylesheets may block CSSOM access. */ }
    }
  }
  menuStyles.addEventListener('load', prepareFontScaling);
  themeStyles.addEventListener('load', prepareFontScaling);
  prepareFontScaling();

  function setFontSize(next) {
    if (!Object.hasOwn(fontScales, next)) return;
    fontSize = next;
    prepareFontScaling();
    for (const button of fontButtons) button.setAttribute('aria-pressed', String(button.dataset.fontSize === next));
    try { localStorage.setItem(fontSizeKey, next); } catch (_) {}
  }
  setFontSize(fontSize);

  function renderTheme() {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    for (const button of themeButtons) button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#0d1527' : '#101b38');
  }
  function setTheme(next) {
    if (next !== 'light' && next !== 'dark') return;
    theme = next;
    try { localStorage.setItem(themeKey, next); } catch (_) {}
    renderTheme();
    closeMenu();
  }

  function closeMenu() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    translateAttributes(toggle);
  }
  toggle.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    translateAttributes(toggle);
  });
  document.addEventListener('click', event => { if (!menu.contains(event.target)) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { closeMenu(); toggle.focus(); }
  });

  function renderLanguage() {
    document.documentElement.lang = language;
    translateTree(document.documentElement);
    for (const button of languageButtons.children) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    }
  }
  async function setLanguage(next) {
    if (next !== 'es') {
      try { await loadTranslations(); }
      catch (_) { return; }
    }
    language = next;
    try { localStorage.setItem(languageKey, next); } catch (_) {}
    renderLanguage();
    closeMenu();
  }

  document.addEventListener('click', event => {
    const launcher = event.target.closest('[data-player-source]');
    if (!launcher) return;
    event.preventDefault();
    window.parent.postMessage({ type: 'voz-audio-select', source: launcher.dataset.playerSource }, location.origin);
  });

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') translateTextNode(mutation.target);
      else if (mutation.type === 'attributes') translateAttributes(mutation.target);
      else for (const node of mutation.addedNodes) translateTree(node);
    }
  });
  observer.observe(document.documentElement, {
    childList: true, subtree: true, characterData: true,
    attributes: true, attributeFilter: translatableAttributes.concat('content')
  });
  renderTheme();
  setLanguage(language);
})();
