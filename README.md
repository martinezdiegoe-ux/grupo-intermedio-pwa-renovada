# Voz Juvenil · Grupo Intermedio

PWA pública y estática de contenidos para el Grupo Intermedio de la Asamblea Cristiana. No requiere ingreso ni Supabase. Abrir index.html mediante un servidor estático o GitHub Pages.

## Secciones

- Meditación: texto y audio existente.
- Alabanzas: tres canciones del grupo, con letra, PDF y video. La sección de himnos y sus historias está oculta de la interfaz.
- Juegos: crucigramas, verdadero o falso y opción múltiple originales.
- Plan de lectura de 365 días: recorrido canónico de los 66 libros, de Génesis a Apocalipsis. Son 1.189 capítulos distribuidos en 365 lecturas de 3 o 4 capítulos, con tema orientativo por libro, bloques de 30 días y último bloque de 5.
- Novedades, cronograma y comunicados: archivos históricos separados de publicaciones nuevas.
- Encontranos: directorio de 857 filiales con filtro por provincia o jurisdicción, búsqueda por ciudad, nombre y dirección, y resultados en bloques de 30. La sede central se muestra en 1º de Mayo 3623, Santa Fe.
- Estudios bíblicos y recursos.
- Motivos de oración: notas privadas guardadas únicamente en el navegador.
- Radio: el mismo reproductor externo de la versión original.
- Presentación institucional.

## Publicar contenido

Editar js/alabanzas.js para las alabanzas y agregar los PDF propios en pdf/. El índice de títulos y temas del himnario permanece en js/himnario-catalogo.js para una posible restauración, pero no se carga en la página. Editar js/cronograma.js (arreglo proximos) y js/comunicados.js (arreglo comunicados) para novedades vigentes. Al publicar una actualización importante, cambiar CACHE_NAME en service-worker.js.

El directorio usa una copia local de [`datos/filiales.js` del Himnario](https://github.com/prog-collab/Himnario/blob/26e535873197637b05ecf79d9d8688cba3a9751b/datos/filiales.js) en `js/filiales-data.js` (commit `26e5358`, 23 de agosto de 2026). La copia permite buscar sin conexión. Para actualizarla, reemplazar ese archivo con una versión revisada de la fuente, comprobar cantidad y campos, y cambiar `CACHE_NAME` en `service-worker.js`. Los enlaces a Maps hacen una búsqueda; algunas direcciones de la fuente son aproximadas.

El proyecto de referencia no declara una licencia de reutilización en su repositorio. El índice conservado contiene solo número, título y temas, sin letras completas.

La radio y los videos requieren conexión. El audio de la meditación está alojado en un dominio externo ya utilizado por la app. Los datos de lectura y oración quedan en localStorage y no se sincronizan entre dispositivos.

### Seguimiento del plan anual

`js/plan-365.js` contiene el orden y la cantidad de capítulos de los 66 libros; genera las 365 referencias diarias sin incluir texto bíblico. `js/lectura.js` guarda en `localStorage`, bajo `voz-juvenil-plan-365-v1`, un objeto que asocia el número de día con la fecha local en que se marcó como completado. Se puede desmarcar un día. El porcentaje y el total salen de los días completados; la racha cuenta fechas consecutivas con al menos una lectura, comenzando hoy o ayer. La navegación abre inicialmente el bloque del primer día pendiente y permite ir a cualquiera de los 13 bloques. El plan anterior de Marcos usaba `voz-juvenil-lecturas`; su dato queda intacto, pero no se equipara con días del nuevo plan porque son lecturas diferentes. No hay sincronización, cuentas ni servidor de datos.
