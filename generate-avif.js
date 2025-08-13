// Script para generar imágenes AVIF
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

// Procesar imágenes JPG
const processImages = async () => {
  try {
    const files = fs.readdirSync(publicDir);
    
    // Filtrar solo archivos JPG
    const jpgFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') && 
      !file.includes('favicon')
    );
    
    console.log(`Encontrados ${jpgFiles.length} archivos JPG para convertir`);
    
    // Convertir cada archivo JPG a AVIF
    for (const file of jpgFiles) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, file.replace('.jpg', '.avif'));
      
      console.log(`Convirtiendo ${file} a AVIF...`);
      
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`✓ Generado: ${file.replace('.jpg', '.avif')}`);
    }
    
    console.log('¡Conversión completada!');
  } catch (error) {
    console.error('Error al procesar imágenes:', error);
  }
};

processImages();