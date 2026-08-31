from pathlib import Path
import re

from PIL import Image, ImageOps


SOURCE_DIR = Path(__file__).resolve().parents[1] / "assets" / "Cruises"
OUTPUT_DIR = SOURCE_DIR / "optimized"
MAX_SIZE = (1600, 1200)
WEBP_QUALITY = 82


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def optimize_image(source: Path) -> tuple[Path, tuple[int, int], int]:
    output = OUTPUT_DIR / f"{slugify(source.stem)}.webp"
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        image.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        image.save(output, "WEBP", quality=WEBP_QUALITY, method=6)
        return output, image.size, output.stat().st_size


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    sources = sorted(path for path in SOURCE_DIR.iterdir() if path.is_file())
    for source in sources:
        output, dimensions, size = optimize_image(source)
        print(f"{source.name} -> {output.name} | {dimensions[0]}x{dimensions[1]} | {size:,} bytes")


if __name__ == "__main__":
    main()
