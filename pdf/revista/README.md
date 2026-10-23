Los PDF completos de Voz Juvenil Nº 59, 60 y 61 se armaron con tapa, 20 páginas interiores y cierre, en ese orden. Las portadas web están en `assets/revista/` y los registros en `js/revista-data.js`.

El lector `revista-leer.html` usa imágenes WebP de cada página para mostrar una página por vez, permitir pasar lateralmente y ampliar con dos dedos. Se generan con `python generar-paginas-revista.py` (requiere PyMuPDF y Pillow) y quedan en `assets/revista/paginas/<numero>/`. Al agregar una edición, incorporá su PDF al generador y la cantidad de páginas a `js/revista-data.js`.
