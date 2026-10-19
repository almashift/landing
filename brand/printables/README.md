# AlmaShift logo: print files (T-shirts and mugs)

All logos are vector (SVG and PDF) with the lettering converted to outlines, so no font
is needed. PNGs are 300 DPI with transparent backgrounds. `preview.png` shows which file
goes on which colour.

## Which file

| Use | File |
|---|---|
| Polo shirt, left chest (white, light grey or light blue) | `almashift-horizontal-color`, 9 cm wide, printed or embroidered |
| White or light T-shirt, white mug | `almashift-horizontal-color` or `almashift-stacked-color` |
| Black or navy T-shirt | `almashift-horizontal-color-on-dark` or `almashift-stacked-color-on-dark` |
| One-colour print (screen print, embroidery), light fabric | `almashift-*-black` or `almashift-*-indigo` |
| One-colour print, dark fabric | `almashift-*-white` |
| 11 oz mug, full wrap | `mug-wrap-11oz.pdf` / `.png` (8.5 × 3.5 in, logo on both sides) |

Each logo comes as `.svg` and `.pdf` (vector: send these first) and `.png` (300 DPI).
In the one-colour versions, the symbol's lines are cut out, so the shirt or mug colour shows through.

| File | Vector artboard | PNG |
|---|---|---|
| horizontal | 300 × 83 mm | 3600 × 998 px (12 in at 300 DPI) |
| stacked | 250 × 168 mm | 3000 × 2015 px (10 in at 300 DPI) |

Suggested print sizes: front chest 25–30 cm wide (horizontal) or 20–25 cm (stacked);
left chest 8–10 cm wide; mug 7.5–8 cm wide per side.

## Colours

| Colour | Hex | RGB | Used for |
|---|---|---|---|
| Indigo | `#4f46e5` | 79, 70, 229 | Symbol background, "Shift" |
| Navy | `#0f172a` | 15, 23, 42 | "Alma" on light backgrounds |
| Light indigo | `#c7d2fe` | 199, 210, 254 | Arrow in the symbol |
| Soft indigo | `#a5b4fc` | 165, 180, 252 | "Shift" on dark backgrounds |
| White | `#ffffff` | 255, 255, 255 | Symbol "A"; "Alma" on dark backgrounds |

The files are in RGB. Please convert to your process (CMYK or spot/Pantone) and send a
proof first: bright indigo tends to print duller in CMYK, so ask for the closest match.

## Regenerating
`make-print-logos.html` builds every variant (text outlined from Segoe UI Black, the font
of the on-screen wordmark). `mug-wrap-11oz.html` and `preview.html` are the sources of the
mug wrap and the preview sheet; each file's header comment has its render command.
