# Conectados a Cristo

PWA pública de contenidos de la Asamblea Cristiana. La identidad de la portada usa «Conectados a Cristo» como nombre de trabajo. «Voz Juvenil» queda reservado para el archivo de la revista.

## Secciones

- Meditación diaria, archivo de meditaciones con búsqueda, tema y fechas, y audio existente.
- Alabanzas con tres PDF y videos, más una playlist personal de enlaces a esos videos. La selección se guarda en el navegador; no sincroniza con Spotify ni YouTube Music. El catálogo de himnos permanece en el código, oculto de la interfaz mientras se revisan permisos.
- Plan de lectura de 365 días que abre en el mes actual, destaca la lectura de hoy, permite volver a ella desde cualquier mes y mantiene el progreso local. Incluye el PDF original y enlaces a la Biblia RV1960, capítulo y versículo.
- Estudios bíblicos: meditaciones, Biblia y biblioteca digital.
- Comunicados y cronograma con filtros de filial y fecha. Un comunicado general se muestra bajo cualquier filial. La búsqueda a 100 km necesita coordenadas verificadas por evento; sin ellas informa que no hay datos suficientes. Maps aparece cuando el evento tenga dirección o enlace confirmado.
- Mensajes al correo institucional, oración con notas locales, juegos, radio y directorio de filiales.
- Iglesia perseguida: enlaces oficiales externos a Voice of the Martyrs y Puertas Abiertas. El contenido propio queda sujeto a revisión editorial.
- Voz Juvenil: catálogo de revista con número, año, tema y portada. Están disponibles en PDF las ediciones Nº 59, 60 y 61, con búsqueda por palabras dentro de sus páginas.
- Nosotros: tres textos institucionales en construcción hasta la revisión de los ancianos; el directorio de filiales sigue operativo.

## Publicación de contenido

Editar `js/comunicados.js` y `js/cronograma.js` para nuevas publicaciones con fecha ISO `YYYY-MM-DD` y filial. Para una actividad con mapa, agregar `direccion` o `mapUrl`; para filtro de 100 km, `lat` y `lon` verificadas. La app estática no tiene panel de administración.

Agregar meditaciones a `js/meditaciones-data.js` con `date`, `topics`, texto y audio estable. El criterio editorial del proyecto es audio de hasta 2 minutos y 30 segundos, grabado por jóvenes y sin exponer su identidad en la interfaz. Un audio existente no se modifica automáticamente.

Agregar los PDF propios de la revista en `pdf/revista/`, sus tapas WebP en `assets/revista/` y sus registros en `js/revista-data.js` (`numero`, `anio`, `periodo`, `temas`, `articulos`, `portada`, `pdf`). El texto OCR para la búsqueda está en `js/revista-ocr.js`, con una entrada por página. Los PDF de las ediciones 59 a 61 tienen 24 páginas cada uno. Las tapas livianas y el índice de búsqueda se guardan sin conexión; los PDF se descargan al abrir una edición. Verificar derechos de himnos, CD, PDF y video antes de sumar material nuevo.

Actualizar las traducciones de los textos nuevos en `js/i18n-data.js` o `js/app-shell.js`. Los recursos PDF, video y audio conservan su idioma original. La elección de idioma y tema se guarda localmente. El avance de lectura, notas de oración y playlist se guardan solo en el navegador y no se sincronizan.

Al publicar cambios de contenido o diseño, incrementar `CACHE_NAME` en `service-worker.js`. GitHub Pages sirve la rama `main`. La app arranca en `app.html?page=index.html` para conservar el audio durante la navegación.
