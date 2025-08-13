# Instrucciones para Generar Imágenes AVIF

Para aprovechar completamente las optimizaciones implementadas, es necesario generar versiones AVIF de todas las imágenes del sitio. AVIF es un formato de imagen moderno que ofrece mejor compresión y calidad que JPEG y WebP.

## Requisitos

- Node.js 18 o superior
- NPM o Yarn

## Instalación de herramientas

```bash
npm install -g sharp-cli
```

## Generación de imágenes AVIF

Ejecuta el siguiente comando desde la raíz del proyecto para convertir todas las imágenes JPG y WebP a formato AVIF:

```bash
cd public
for file in *.jpg; do
  sharp $file --format avif --output ${file%.jpg}.avif
done

for file in *.webp; do
  sharp $file --format avif --output ${file%.webp}.avif
done
```

## Verificación

Una vez generadas las imágenes AVIF, asegúrate de que:

1. Todas las imágenes JPG y WebP tienen su correspondiente versión AVIF
2. Los archivos AVIF son más pequeños que sus equivalentes WebP y JPG
3. Las rutas en el código apuntan correctamente a las versiones AVIF

## Notas importantes

- Las imágenes AVIF no son compatibles con todos los navegadores, por eso mantenemos las versiones WebP y JPG como fallback
- El elemento `<picture>` con múltiples `<source>` garantiza que se cargue el formato más optimizado que soporte el navegador
- Para imágenes críticas (above the fold), se recomienda precargar también la versión AVIF

## Ejemplo de implementación

```html
<picture>
  <source srcset="/imagen.avif" type="image/avif">
  <source srcset="/imagen.webp" type="image/webp">
  <img src="/imagen.jpg" alt="Descripción de la imagen" width="800" height="600">
</picture>
```

Este enfoque garantiza la mejor experiencia para todos los usuarios, independientemente del navegador que utilicen.