# Voz Juvenil · Grupo Intermedio

PWA pública y estática de contenidos para el Grupo Intermedio de la Asamblea Cristiana. No requiere ingreso ni Supabase. Abrir index.html mediante un servidor estático o GitHub Pages.

## Secciones

- Meditación: texto y audio existente.
- Alabanzas: tres canciones existentes, con PDF y video. El índice local permite buscar los 400 himnos por número, título y los 33 temas del proyecto [prog-collab/Himnario](https://github.com/prog-collab/Himnario). Cada resultado abre la letra y las herramientas en el [himnario original](https://prog-collab.github.io/Himnario/); dos historias editoriales tienen fuentes separadas.
- Juegos: crucigramas, verdadero o falso y opción múltiple originales.
- Plan de lectura de 365 días: recorrido canónico de los 66 libros, de Génesis a Apocalipsis. Son 1.189 capítulos distribuidos en 365 lecturas de 3 o 4 capítulos, con tema orientativo por libro, bloques de 30 días y último bloque de 5.
- Novedades, cronograma y comunicados: archivos históricos separados de publicaciones nuevas.
- Ubicación: sede central de Santa Fe.
- Estudios bíblicos y recursos.
- Motivos de oración: notas privadas guardadas únicamente en el navegador.
- Radio: el mismo reproductor externo de la versión original.
- Presentación institucional.

## Publicar contenido

Editar js/alabanzas.js para las alabanzas y agregar los PDF propios en pdf/. El índice de títulos y temas del himnario se conserva en js/himnario-catalogo.js; no contiene las letras. Editar js/cronograma.js (arreglo proximos) y js/comunicados.js (arreglo comunicados) para novedades vigentes. Al publicar una actualización importante, cambiar CACHE_NAME en service-worker.js.

El proyecto de referencia no declara una licencia de reutilización en su repositorio. Por eso esta PWA conserva solo el índice de número, título y temas, atribuye la fuente y enlaza al contenido completo en la aplicación de origen. Las historias no provienen de ese repositorio y están atribuidas a sus fuentes en cada ficha.

La radio y los videos requieren conexión. El audio de la meditación está alojado en un dominio externo ya utilizado por la app. Los datos de lectura y oración quedan en localStorage y no se sincronizan entre dispositivos.

### Seguimiento del plan anual

`js/plan-365.js` contiene el orden y la cantidad de capítulos de los 66 libros; genera las 365 referencias diarias sin incluir texto bíblico. `js/lectura.js` guarda en `localStorage`, bajo `voz-juvenil-plan-365-v1`, un objeto que asocia el número de día con la fecha local en que se marcó como completado. Se puede desmarcar un día. El porcentaje y el total salen de los días completados; la racha cuenta fechas consecutivas con al menos una lectura, comenzando hoy o ayer. La navegación abre inicialmente el bloque del primer día pendiente y permite ir a cualquiera de los 13 bloques. El plan anterior de Marcos usaba `voz-juvenil-lecturas`; su dato queda intacto, pero no se equipara con días del nuevo plan porque son lecturas diferentes. No hay sincronización, cuentas ni servidor de datos.
