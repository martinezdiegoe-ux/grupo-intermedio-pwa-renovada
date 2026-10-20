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

`biblia.html` y `js/biblia.js` implementan selector de los 66 libros, filtro de títulos, referencia escrita (por ejemplo, `Juan 3`), selector de capítulos, navegación anterior/siguiente y enlaces directos mediante `?libro=43&capitulo=3`. Cada capítulo se almacena en `datos/biblia-rv1960.json` con `intro` opcional y un arreglo `verses`:

```json
{
  "edition": "RVR1960",
  "books": [
    { "name": "Génesis", "chapters": [{ "intro": "", "verses": ["En el principio creó Dios…", "Y la tierra estaba…"] }] }
  ]
}
```

El archivo contiene los 66 libros, 1.189 capítulos y 31.104 versículos. El lector valida el orden de los libros, la cantidad de capítulos y la presencia de cada versículo. La interfaz muestra cada número a la izquierda de su texto, en una fila propia. `intro` conserva títulos introductorios de algunos salmos.

La numeración del PDF nuevo se cotejó capítulo por capítulo con los números marginales del PDF anterior: coincidieron 1.189 de 1.189 conteos. Se corrigieron tres anomalías puntuales de la copia nueva: faltaban los textos de Génesis 30:7–8, Salmos 39:11 contenía un código de formato y 1 Corintios 1:31 aparecía rotulado como 32. El contenido completo por capítulo ya revisado se usó para cotejar y conservar la redacción, mientras los límites y números se tomaron del PDF nuevo. No se publica ninguno de los PDF de origen.

El titular del proyecto informó que obtuvo autorización escrita de la Sociedad Bíblica Argentina y suministró el PDF usado para la extracción. Conservar la autorización fuera del repositorio público y respetar sus condiciones de uso. Una PWA estática y un repositorio público permiten descargar/copiar el archivo completo. La interfaz mantiene la leyenda de derechos.

## Publicación

Después de cambios en páginas, datos o PDFs, actualizar `CACHE_NAME` en `service-worker.js` para renovar los archivos sin conexión. Verificar enlaces, búsqueda, contenido y el menú de idiomas en la URL pública.

## Plan anual

`lectura.html` muestra únicamente el plan de `pdf/plan-biblia-un-ano.pdf`: 365 fechas, tres pasajes por día y navegación mensual. Los registros están en `js/plan-365.js`. El progreso se guarda bajo `voz-juvenil-plan-anual-pdf-v1`; no reutiliza los días completados del plan sustituido. Consultar README.md para el formato, referencias corregidas y funcionamiento del seguimiento.
