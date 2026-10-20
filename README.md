# Voz Juvenil · Grupo Intermedio

PWA pública y estática de contenidos para el Grupo Intermedio de la Asamblea Cristiana. No requiere ingreso ni Supabase. Abrir index.html mediante un servidor estático o GitHub Pages.

## Secciones

- Meditación: texto y audio existente.
- Alabanzas: tres canciones del grupo, con letra, PDF y video. La sección de himnos y sus historias está oculta de la interfaz.
- Juegos: crucigramas, verdadero o falso y opción múltiple originales.
- Plan de lectura de 365 días: plan del PDF suministrado, con tres pasajes diarios y navegación por los doce meses. Incluye acceso a los capítulos de la Biblia y seguimiento de progreso.
- Novedades, cronograma y comunicados: archivos históricos separados de publicaciones nuevas.
- Encontranos: directorio de 857 filiales con filtro por provincia o jurisdicción, búsqueda por ciudad, nombre y dirección, y resultados en bloques de 30. La sede central se muestra en 1º de Mayo 3623, Santa Fe.
- Estudios bíblicos y recursos.
- Motivos de oración: notas privadas guardadas únicamente en el navegador.
- Radio: el mismo reproductor externo de la versión original.
- Presentación institucional.
- Idiomas: español, portugués, italiano y ucraniano desde el menú del encabezado. La selección se guarda en este navegador y se aplica a los textos de las páginas; PDF, audio y video conservan su idioma original. El crucigrama mantiene respuestas en español.
- Modo claro u oscuro desde el mismo menú. La elección se guarda en este navegador y se aplica a todas las páginas.

## Publicar contenido

Editar js/alabanzas.js para las alabanzas y agregar los PDF propios en pdf/. El índice de títulos y temas del himnario permanece en js/himnario-catalogo.js para una posible restauración, pero no se carga en la página. Editar js/cronograma.js (arreglo proximos) y js/comunicados.js (arreglo comunicados) para novedades vigentes. Al publicar una actualización importante, cambiar CACHE_NAME en service-worker.js.

Las traducciones de los textos visibles están en `js/i18n-data.js`; `js/app-shell.js` aplica el idioma elegido al navegar y a los resultados que aparecen dinámicamente. Al agregar contenido en español, incorporar sus traducciones a ese archivo. Los nombres, direcciones de las filiales y archivos multimedia originales no se alteran.

El directorio usa una copia local de [`datos/filiales.js` del Himnario](https://github.com/prog-collab/Himnario/blob/26e535873197637b05ecf79d9d8688cba3a9751b/datos/filiales.js) en `js/filiales-data.js` (commit `26e5358`, 23 de agosto de 2026). La copia permite buscar sin conexión. Para actualizarla, reemplazar ese archivo con una versión revisada de la fuente, comprobar cantidad y campos, y cambiar `CACHE_NAME` en `service-worker.js`. Los enlaces a Maps hacen una búsqueda; algunas direcciones de la fuente son aproximadas.

El proyecto de referencia no declara una licencia de reutilización en su repositorio. El índice conservado contiene solo número, título y temas, sin letras completas.

La radio y los videos requieren conexión. El audio de la meditación está alojado en un dominio externo ya utilizado por la app. Los datos de lectura y oración quedan en localStorage y no se sincronizan entre dispositivos.

### Seguimiento del plan anual

`js/plan-365.js` contiene las 365 fechas y 1.095 referencias del PDF `pdf/plan-biblia-un-ano.pdf`. Se respetan el orden de meses y los rangos de pasajes del documento. Los puntos entre capítulo y versículo se presentan como dos puntos; se corrigieron las erratas tipográficas de Mateo 23.13.39 (29 de marzo), Marcos 4 1-20 (18 de junio) y Daniel 11 21-45 (25 de junio). La interfaz ofrece únicamente este plan. Cada pasaje enlaza con la Biblia integrada, donde los versículos aparecen separados y numerados.

`js/lectura.js` guarda el avance del nuevo plan en `localStorage`, bajo `voz-juvenil-plan-anual-pdf-v1`. No se trasladan automáticamente los días completados del plan sustituido porque sus lecturas eran distintas. Los datos antiguos no se borran, pero no se muestran como un plan alternativo. El porcentaje cuenta fechas completadas y la racha cuenta fechas consecutivas con al menos una lectura, comenzando hoy o ayer. Se puede marcar y desmarcar cada día y retomar el primero pendiente. El almacenamiento es local, sin sincronización entre dispositivos.
