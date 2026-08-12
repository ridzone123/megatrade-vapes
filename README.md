# 🚀 Catálogo de Vapes - Megatrade Vapes

Página web completa de catálogo de vapes con integración de WhatsApp para contacto directo.

## 🎨 Tema: Dark Blue Elegante

- **Fondo azul oscuro profesional** - Diseño moderno y sofisticado
- **Gradientes azules dinámicos** - Efectos visuales atractivos
- **Alto contraste** - Fácil lectura con excelente visibilidad
- **Animaciones suaves** - Transiciones elegantes y profesionales

## 📋 Características

- **Diseño moderno y responsivo** - Se adapta a móviles, tablets y escritorio
- **7 modelos de vapes** - Cada uno con sus características y botón de pedido
- **Integración con WhatsApp** - Contacto directo con los clientes
- **Animaciones suaves** - Efectos visuales atractivos
- **Optimizado para GitHub Pages** - Listo para publicar

## 🛠️ Configuración Necesaria

### 1. Configurar tu número de WhatsApp

Abre el archivo `script.js` y cambia el número en la línea 3:

```javascript
const WHATSAPP_NUMBER = '521234567890'; // CAMBIA ESTE NÚMERO
```

**Formato del número:**
- Incluye el código de país sin el símbolo +
- Ejemplo: Para México `521234567890`, para España `34612345678`

### 2. Agregar tus imágenes

Reemplaza las imágenes de ejemplo en la carpeta del proyecto:

- `vape1.jpg` - Imagen del Vape Elite Pro
- `vape2.jpg` - Imagen del Vape Cloud Max
- `vape3.jpg` - Imagen del Vape Mini Pod
- `vape4.jpg` - Imagen del Vape Tech Pro
- `vape5.jpg` - Imagen del Vape Frost Edition
- `vape6.jpg` - Imagen del Vape Ultra Luxe
- `vape7.jpg` - Imagen del Vape Starter Kit

**Recomendaciones de imágenes:**
- Formato: JPG o PNG
- Tamaño: 300x300 píxeles (óptimo)
- Peso: Menos de 500KB para carga rápida

### 3. Personalizar contenido (opcional)

Puedes editar los siguientes archivos:

- **index.html**: Cambiar nombres, descripciones y características de los vapes
- **styles.css**: Modificar colores, fuentes y estilos
- **script.js**: Ajustar mensajes de WhatsApp

## 📤 Subir a GitHub Pages

### Opción 1: Usando GitHub Desktop (Más fácil)

1. Abre GitHub Desktop
2. Crea un nuevo repositorio y selecciona la carpeta `vapes-catalog`
3. Haz commit de los archivos
4. Publica el repositorio en GitHub
5. Ve a Settings > Pages
6. En "Source" selecciona `main branch`
7. Guarda y espera unos minutos

### Opción 2: Usando línea de comandos

```bash
# Navega a la carpeta del proyecto
cd vapes-catalog

# Inicializa git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - Catálogo de Vapes"

# Crea el repositorio en GitHub y conecta
git remote add origin https://github.com/TU_USUARIO/vapes-catalog.git

# Sube los archivos
git push -u origin main
```

Luego en GitHub:
1. Ve a Settings > Pages
2. En "Source" selecciona `main branch`
3. Guarda

### Opción 3: Subir directamente desde GitHub

1. Crea un nuevo repositorio en GitHub
2. Sube los archivos arrastrándolos a la página del repositorio
3. Ve a Settings > Pages
4. Configura como se indica arriba

## 🎨 Personalización Avanzada

### Cambiar colores

Edita `styles.css` y modifica las variables CSS al inicio:

```css
:root {
    --primary-color: #4a90e2;    /* Color principal */
    --secondary-color: #50c878;  /* Color secundario */
    --accent-color: #ff6b6b;     /* Color de acento */
    --whatsapp-color: #25d366;   /* Color de WhatsApp */
}
```

### Modificar textos

En `index.html` puedes cambiar:
- Nombre de la marca (línea 20)
- Títulos y descripciones
- Características de cada vape
- Información de contacto

## 📱 Estructura del Proyecto

```
vapes-catalog/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
├── vape1.jpg           # Imagen vape 1 (agregar)
├── vape2.jpg           # Imagen vape 2 (agregar)
├── vape3.jpg           # Imagen vape 3 (agregar)
├── vape4.jpg           # Imagen vape 4 (agregar)
├── vape5.jpg           # Imagen vape 5 (agregar)
├── vape6.jpg           # Imagen vape 6 (agregar)
└── vape7.jpg           # Imagen vape 7 (agregar)
```

## 🌐 Vista Previa

Para ver la página localmente:

1. Abre la carpeta `vapes-catalog`
2. Haz doble clic en `index.html`
3. La página se abrirá en tu navegador

## ⚡ Características Técnicas

- **HTML5 semántico** - Estructura optimizada para SEO
- **CSS3 moderno** - Flexbox, Grid, animaciones
- **JavaScript vanilla** - Sin dependencias externas
- **Responsive Design** - Mobile-first approach
- **Accesibilidad** - Navegación por teclado, etiquetas ARIA
- **Optimización** - Carga rápida, mínimo de recursos

## 📞 Soporte

Si necesitas ayuda:
1. Verifica que el número de WhatsApp esté configurado correctamente
2. Asegúrate de que las imágenes tengan el formato correcto
3. Revisa la consola del navegador para errores

## 📄 Licencia

Este proyecto es de uso libre. Puedes modificarlo según tus necesidades.

---

**¡Listo para vender!** 🎉

Una vez configurado tu número de WhatsApp y agregadas las imágenes, tu catálogo estará funcionando.