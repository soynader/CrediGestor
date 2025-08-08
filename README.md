# CrediGestor - Sitio Web Oficial

🚀 **Sitio web optimizado para crédito de libranza dirigido a pensionados, maestros y policías en Colombia.**

## 🌟 Características

- ⚡ **Alto rendimiento** - Construido con Astro para máxima velocidad
- 🔍 **SEO optimizado** - Meta tags, Open Graph, Twitter Cards
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- ♿ **Accesible** - Cumple estándares de accesibilidad web
- 🖼️ **Imágenes optimizadas** - Lazy loading y dimensiones definidas
- 🎯 **Conversión optimizada** - Llamadas a la acción estratégicas

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla
- Remix Icons
- Google Fonts (Montserrat)

## 🚀 Despliegue en Netlify

### Configuración automática:

1. **Conecta tu repositorio de GitHub a Netlify**
2. **Configuración de build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Variables de entorno** (si las necesitas):
   ```
   NODE_VERSION=18
   ```

### Configuración manual:

El archivo `netlify.toml` ya está configurado con:
- Headers de seguridad
- Cache optimizado para assets
- Redirects automáticos
- Configuración de Node.js

## 📦 Instalación y desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/username/credigestor-website.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 📁 Estructura del proyecto

```
/
├── public/              # Assets estáticos
│   ├── *.jpg           # Imágenes de convenios
│   ├── favicon.svg     # Favicon
│   └── robots.txt      # SEO robots
├── src/
│   ├── components/     # Componentes Astro
│   ├── layouts/        # Layouts base
│   └── pages/          # Páginas del sitio
├── netlify.toml        # Configuración Netlify
└── package.json        # Dependencias del proyecto
```

## 🎯 Optimizaciones implementadas

### SEO
- Meta tags completos
- Open Graph para redes sociales
- Twitter Cards
- Structured data
- Sitemap automático
- Robots.txt

### Rendimiento
- Lazy loading en imágenes
- Preconnect a recursos externos
- CSS y JS minificados
- Imágenes con dimensiones definidas
- Cache headers optimizados

### Accesibilidad
- Alt text descriptivo en imágenes
- Estructura semántica HTML5
- Contraste de colores adecuado
- Navegación por teclado

## 📞 Contacto

**Nader Montenegro**  
Asesor de Crédito Especializado  
📱 WhatsApp: [350 548 9828](https://wa.me/573505489828)  
🌐 Web: [credigestor.com](https://credigestor.com)

---

*Desarrollado con ❤️ para ayudar a pensionados, maestros y policías a acceder a créditos de libranza de forma rápida y confiable.*
