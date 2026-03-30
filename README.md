# MF | Construcción

Portafolio digital profesional para mostrar trabajos de construcción y acabados.

## 🎯 Descripción

Aplicación web moderna y responsive construida con Next.js para mostrar proyectos de construcción como estuco, pintura, repello y obra civil.

## 🧱 Stack Tecnológico

- **Next.js 16** (App Router)
- **Tailwind CSS** (v4)
- **AOS** (Animate On Scroll)
- **TypeScript**
- **Lucide React** (iconos)

## 🎨 Identidad Visual

- **Color principal**: #D97706 (Amber 600)
- **Color secundario**: #78350F (Amber 900)
- **Color de fondo**: #FDF6F0 (Orange 50)
- **Color de texto**: #1F2937 (Gray 800)
- **Tipografía títulos**: Poppins
- **Tipografía cuerpo**: Inter

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js 18+ instalado
- npm o pnpm

### Pasos para ejecutar el proyecto

1. **Instalar dependencias**:

   ```bash
   npm install
   # o
   pnpm install
   ```

2. **Ejecutar servidor de desarrollo**:

   ```bash
   npm run dev
   # o
   pnpm dev
   ```

3. **Abrir en el navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

4. **Construir para producción**:
   ```bash
   npm run build
   # o
   pnpm build
   ```

## 📁 Estructura del Proyecto

```
mf-obras-y-acabados/
├── app/                          # App Router de Next.js
│   ├── globals.css              # Estilos globales y configuración
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página principal
├── components/ui/               # Componentes de UI reutilizables
│   ├── Footer.tsx              # Footer del sitio
│   ├── Navbar.tsx              # Barra de navegación
│   ├── ProjectCardWide.tsx     # Card ancha de proyecto
│   └── WhatsAppButton.tsx      # Botón flotante de WhatsApp
├── data/                        # Datos de la aplicación
│   └── projects.js             # Mock data de proyectos
├── public/                      # Archivos estáticos
└── README.md                   # Este archivo
```

## 🧩 Funcionalidades Implementadas

### ✅ Características Principales

- **Diseño Responsive**: Mobile-first, adaptable a todos los dispositivos
- **Animaciones Fluidas**: Con AOS para mejor UX
- **Filtros de Proyectos**: Por categoría (estuco, pintura, repello, obra-civil)
- **Navegación Suave**: Scroll suave entre secciones
- **Botón WhatsApp**: Contacto directo con clientes
- **Lazy Loading**: Optimización de carga de imágenes
- **SEO Optimizado**: Meta tags y estructura semántica

### 🎨 Componentes UI

- **Navbar**: Navegación fija con botón de contacto
- **ProjectCardWide**: Cards anchas para mostrar proyectos con video y galería
- **Footer**: Información de contacto y enlaces rápidos
- **WhatsAppButton**: Botón flotante para contacto rápido

## 📱 Datos de Ejemplo

El proyecto incluye **5 proyectos de ejemplo** distribuidos en 4 categorías:

- **Estuco** (2 proyectos)
- **Pintura** (1 proyecto)
- **Repello** (1 proyecto)
- **Obra Civil** (1 proyecto)

## 🔧 Personalización

### Cambiar Información de Contacto

Edita estos archivos:

1. **Número de WhatsApp**:
   - Busca `https://wa.me/573167043836` en los componentes
   - Reemplaza con tu número (formato: `https://wa.me/código+sin+0+número`)

2. **Email y otros contactos**:
   - Edita `components/ui/Footer.tsx`

### Agregar/Editar Proyectos

Edita `data/projects.js`:

```javascript
{
  id: 6,
  title: "Nuevo Proyecto",
  description: "Descripción del proyecto",
  category: "pintura", // categorías: estuco, pintura, repello, obra-civil
  video: "/videos/nuevo-proyecto.mp4",
  images: [
    "/images/proyecto-1.jpg",
    "/images/proyecto-2.jpg",
    "/images/proyecto-3.jpg",
    "/images/proyecto-4.jpg"
  ],
  featured: true // para destacar en la web
}
```

### Personalizar Colores y Tipografía

Edita `app/globals.css`:

```css
:root {
  --primary: #d97706; /* Color principal */
  --secondary: #78350f; /* Color secundario */
  --background: #fdf6f0; /* Color de fondo */
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno si es necesario
3. Deploy automático en cada push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy automático desde GitHub

## 📈 Optimizaciones

- **Performance**: Next.js 16 con optimización automática
- **SEO**: Meta tags, structured data, URLs amigables
- **Accessibility**: ARIA labels, semántica HTML5
- **Images**: Next/Image para optimización automática
- **Fonts**: Google Fonts con preload

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es para uso comercial. Contacta para más información sobre licenciamiento.

---

**📞 Contacto**: Para soporte o personalización, contacta a través del WhatsApp integrado en el sitio.
