# Script para instalar dependencias y aplicar optimizaciones

# Instalar dependencias de desarrollo
Write-Host "Instalando dependencias de desarrollo..." -ForegroundColor Green
npm install

# No necesitamos un directorio separado para AVIF
Write-Host "Preparando para generar imágenes AVIF..." -ForegroundColor Green

# Instalar sharp-cli globalmente si no está instalado
Write-Host "Verificando instalación de sharp-cli..." -ForegroundColor Green
$sharpInstalled = npm list -g sharp-cli
if ($LASTEXITCODE -ne 0) {
    Write-Host "Instalando sharp-cli globalmente..." -ForegroundColor Yellow
    npm install -g sharp-cli
}

# Generar imágenes AVIF a partir de JPG existentes
Write-Host "Generando imágenes AVIF a partir de JPG..." -ForegroundColor Green
Push-Location public

Get-ChildItem -Filter "*.jpg" | ForEach-Object {
    $outputFile = $_.BaseName + ".avif"
    Write-Host "Convirtiendo $($_.Name) a $outputFile" -ForegroundColor Cyan
    npx sharp $_.Name --format=avif -o $outputFile
}

Pop-Location

# Ejecutar build optimizado
Write-Host "Ejecutando build optimizado..." -ForegroundColor Green
npm run build

Write-Host "¡Optimizaciones completadas!" -ForegroundColor Green
Write-Host "Para ver el sitio optimizado, ejecuta: npm run preview" -ForegroundColor Yellow