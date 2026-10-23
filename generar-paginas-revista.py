"""Genera las páginas WebP del lector a partir de los PDF completos.

Requiere: pip install pymupdf pillow
Uso: python generar-paginas-revista.py
"""

from io import BytesIO
from pathlib import Path

import pymupdf
from PIL import Image


ROOT = Path(__file__).resolve().parent
NUMBERS = (59, 60, 61)
SCALE = 3.2

for number in NUMBERS:
    pdf_path = ROOT / "pdf" / "revista" / f"voz-juvenil-{number}.pdf"
    output_dir = ROOT / "assets" / "revista" / "paginas" / str(number)
    output_dir.mkdir(parents=True, exist_ok=True)
    with pymupdf.open(pdf_path) as document:
        for index, page in enumerate(document, start=1):
            bitmap = page.get_pixmap(matrix=pymupdf.Matrix(SCALE, SCALE), alpha=False)
            image = Image.frombytes("RGB", (bitmap.width, bitmap.height), bitmap.samples)
            output_path = output_dir / f"{index:02d}.webp"
            image.save(output_path, format="WEBP", quality=82, method=6)
        print(f"Voz Juvenil Nº {number}: {len(document)} páginas")
