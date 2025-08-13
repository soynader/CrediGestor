# CrediGestor Web

Plataforma web para asesoría en créditos de libranza construida con Astro y Tailwind CSS.

## 🚀 Características

- **100% Estático**: Generado con Astro para máximo rendimiento
- **Responsive**: Diseño adaptable para todos los dispositivos
- **Optimizado**: Imágenes en formatos modernos (AVIF, WebP)
- **SEO Friendly**: Meta tags optimizados y estructura semántica
- **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático

## 📁 Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/      # Componentes Astro reutilizables
│   ├── layouts/         # Layouts de página
│   └── pages/           # Páginas del sitio
├── astro.config.mjs     # Configuración de Astro
├── netlify.toml         # Configuración de Netlify
└── package.json         # Dependencias y scripts
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Acción                                          |
| :--------------------- | :---------------------------------------------- |
| `npm install`          | Instala las dependencias                       |
| `npm run dev`          | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run build:prod`   | Limpia y construye para producción             |
| `npm run preview`      | Previsualiza la construcción localmente        |
| `npm run clean`        | Limpia archivos de construcción                |

## 🚀 Despliegue en Netlify

Este proyecto está optimizado para Netlify con:

- Configuración automática en `netlify.toml`
- Headers de seguridad y cache optimizados
- Compresión HTML habilitada
- Assets optimizados para CDN

### Pasos para desplegar:

1. Conecta tu repositorio a Netlify
2. La configuración se aplicará automáticamente desde `netlify.toml`
3. El sitio se construirá con `npm run build`

## 📞 Contacto

Para consultas sobre créditos de libranza:
- **WhatsApp**: +57 350 548 9828
- **Web**: [CrediGestor.com](https://credigestor.com)

---

**Nota**: CrediGestor.com es un sitio web de asesoría, no somos una entidad financiera.
