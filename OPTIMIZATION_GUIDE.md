# 🚀 Guía de Optimización para Netlify

## 📹 **Optimización de Videos**

### 1. **Formatos Recomendados**
- **MP4 (H.264)**: Máxima compatibilidad
- **WebM**: Mejor compresión (Chrome, Firefox)
- **Formato recomendado**: MP4 720p o 1080p

### 2. **Configuración de Compresión**
```bash
# Usar FFmpeg para optimizar videos
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k output.mp4

# Para videos más pequeños (720p)
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 30 -preset medium output.mp4
```

### 3. **Atributos de Video Optimizados**
- `preload="metadata"`: Carga solo metadatos
- `playsInline`: Funciona mejor en móviles
- `muted`: Autoplay sin problemas
- `poster`: Imagen de vista previa

## 🖼️ **Optimización de Imágenes**

### 1. **Formatos Modernos**
- **WebP**: 25-35% más pequeño que JPEG
- **AVIF**: 50% más pequeño que JPEG
- **JPEG**: Formato fallback

### 2. **Tamaños Recomendados**
- **Thumbnails**: 80x80px
- **Cards**: 400x300px
- **Modal**: 1200x900px máximo

### 3. **Compresión con Squoosh**
```bash
# Convertir a WebP
cwebp -q 80 input.jpg -o output.webp

# Para AVIF (mejor compresión)
cavif -q 80 input.jpg -o output.avif
```

## ⚡ **Optimización de Next.js**

### 1. **Lazy Loading**
- Componentes dinámicos para cards
- Imágenes con `loading="lazy"`
- Videos con `preload="metadata"`

### 2. **Bundle Splitting**
- Vendor chunks separados
- Componentes lazy-loaded
- Tree shaking activado

### 3. **Caching Strategy**
- Imágenes: 30 días cache
- Videos: 30 días cache
- Static assets: 1 año cache

## 🌐 **Optimización para Netlify**

### 1. **Configuración de Build**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/videos/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 2. **Optimización de Entrega**
- CDN de Netlify activado
- Gzip compression enabled
- HTTP/2 automatic

## 📊 **Monitoreo de Rendimiento**

### 1. **Core Web Vitals**
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### 2. **Herramientas de Medición**
- Google PageSpeed Insights
- Lighthouse en DevTools
- WebPageTest.org

## 🔧 **Implementación Inmediata**

### 1. **Cambios en Videos**
- [ ] Convertir videos a MP4 720p
- [ ] Agregar `preload="metadata"`
- [ ] Usar posters optimizados

### 2. **Cambios en Imágenes**
- [ ] Convertir a WebP
- [ ] Agregar lazy loading
- [ ] Optimizar tamaños

### 3. **Cambios en Código**
- [ ] Implementar dynamic imports
- [ ] Agregar skeleton loaders
- [ ] Optimizar bundle

## 📈 **Resultados Esperados**

### Antes de Optimización:
- Tiempo de carga: 8-12 segundos
- LCP: 4-6 segundos
- Tamaño bundle: 2-3MB

### Después de Optimización:
- Tiempo de carga: 2-4 segundos
- LCP: 1.5-2.5 segundos
- Tamaño bundle: 800KB-1.2MB

## 🚨 **Troubleshooting**

### Videos no cargan:
1. Verificar formato MP4
2. Reducir resolución a 720p
3. Comprimir con FFmpeg

### Imágenes lentas:
1. Convertir a WebP
2. Reducir tamaños
3. Agregar lazy loading

### Bundle grande:
1. Implementar dynamic imports
2. Revisar dependencies
3. Activar tree shaking
