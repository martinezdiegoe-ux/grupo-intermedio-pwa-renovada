# Contenidos de Estudios bíblicos

La sección `recursos.html` presenta tres subsecciones: Meditaciones, Biblia y Biblioteca digital. La PWA sigue siendo estática; el contenido se publica mediante cambios en este repositorio, sin cuentas de usuario ni panel de carga público.

## Meditaciones

`js/meditaciones-data.js` contiene registros permanentes. La entrada más reciente, ordenada por `date` en formato `AAAA-MM-DD`, aparece automáticamente en `palabra.html`. Todas permanecen en `meditaciones.html`, donde se buscan por título, pasaje, resumen o texto. La meditación existente “La Gran Comisión” se conservó sin atribuirle una fecha que no constaba.

Para publicar una meditación, agregar un objeto con `id` único, `title`, `date`, `reference`, `summary`, `verse`, `text`, `audio` y `audioStable`. Si hay audio, subir un MP3 con nombre propio e inmutable y usar esa ruta como `audio`; establecer `audioStable: true`. El archivo externo `meditacion.mp3` de la entrada antigua puede cambiar: se mantiene como audio de la página actual, pero no se ofrece como audio de archivo para evitar atribuir una grabación futura a una meditación pasada. No reutilizar un mismo nombre de MP3 para fechas distintas.

Ejemplo de registro nuevo:

```js
{
  id: '2026-10-21-titulo',
  title: 'Título',
  date: '2026-10-21',
  reference: 'Juan 3:16',
  summary: 'Resumen breve.',
  verse: 'Texto y referencia de la cita, cuando corresponda.',
  text: 'Contenido completo de la meditación.',
  audio: 'audio/meditaciones/2026-10-21-titulo.mp3',
  audioStable: true
}
```

## Biblioteca digital

Subir cada libro autorizado a `pdf/libros/` y agregarlo a `js/biblioteca-data.js`. El buscador de `biblioteca.html` encuentra coincidencias en título, autor, tema y descripción. Cada tarjeta abre el PDF en una pestaña nueva. No se alojan libros de terceros sin permiso de distribución.

```js
{ title: 'Título', author: 'Autor', topic: 'Estudio bíblico', file: 'pdf/libros/archivo.pdf', description: 'Descripción breve' }
```

## Biblia Reina-Valera 1960

`biblia.html` y `js/biblia.js` implementan selector de los 66 libros, filtro de títulos, referencia escrita (por ejemplo, `Juan 3`), selector de capítulos, navegación anterior/siguiente y enlaces directos mediante `?libro=43&capitulo=3`. El texto completo de 1.189 capítulos se almacena en `datos/biblia-rv1960.json` con este formato:

```json
{
  "edition": "RVR1960",
  "books": [
    { "name": "Génesis", "chapters": [{ "text": "Texto íntegro del capítulo", "page": 5 }] }
  ]
}
```

El archivo real contiene los 66 libros en orden canónico y 1.189 capítulos. El lector valida nombres, cantidad de capítulos y presencia del texto antes de mostrarlo. `page` indica la página física del PDF original (desde 1) donde empieza el capítulo. El lector ofrece texto por capítulo sin números de versículo: el PDF de origen tiene esos números en los márgenes y en algunas líneas reúne dos, por lo que atribuirles cortes automáticos podría falsear el texto. La división visual en párrafos no modifica el orden de las palabras. `scripts/extraer_biblia_pdf.py` permite repetir la extracción desde `upload/biblia-reina-valera-1960.pdf` en una copia local; no se publica el PDF de origen. Requiere PyMuPDF (`fitz`).

El titular del proyecto informó que obtuvo autorización escrita de la Sociedad Bíblica Argentina y suministró el PDF usado para la extracción. Conservar la autorización fuera del repositorio público y respetar sus condiciones de uso. Una PWA estática y un repositorio público permiten descargar/copiar el archivo completo. La interfaz mantiene la leyenda de derechos.

## Publicación

Después de cambios en páginas, datos o PDFs, actualizar `CACHE_NAME` en `service-worker.js` para renovar los archivos sin conexión. Verificar enlaces, búsqueda, contenido y el menú de idiomas en la URL pública.
