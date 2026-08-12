# 📱 INSTRUCCIONES DE CONFIGURACIÓN - Megatrade Vapes

## 🔥 PASO 1: Configurar tu número de WhatsApp

Abre el archivo `script.js` con cualquier editor de texto (Notepad, VS Code, etc.)

Busca esta línea (está al principio del archivo):

```javascript
const WHATSAPP_NUMBER = '521234567890';
```

**CAMBIA el número por el tuyo real:**

### Ejemplos:

**Para México:**
```javascript
const WHATSAPP_NUMBER = '525512345678';  // 52 (código país) + 55 (CDMX) + tu número
```

**Para España:**
```javascript
const WHATSAPP_NUMBER = '34612345678';   // 34 (código España) + tu número
```

**Para Colombia:**
```javascript
const WHATSAPP_NUMBER = '573123456789';  // 57 (código Colombia) + tu número
```

**Para Argentina:**
```javascript
const WHATSAPP_NUMBER = '5491123456789'; // 54 (código Argentina) + 9 + tu número
```

⚠️ **IMPORTANTE:**
- NO incluyas el símbolo +
- NO incluyas espacios ni guiones
- Solo números, sin el + al inicio

---

## 🖼️ PASO 2: Agregar tus imágenes de vapes

Tus imágenes deben llamarse exactamente así:

- `vape1.jpg` - Para el Vape Elite Pro
- `vape2.jpg` - Para el Vape Cloud Max  
- `vape3.jpg` - Para el Vape Mini Pod
- `vape4.jpg` - Para el Vape Tech Pro
- `vape5.jpg` - Para el Vape Frost Edition
- `vape6.jpg` - Para el Vape Ultra Luxe
- `vape7.jpg` - Para el Vape Starter Kit

**Colócalas en la misma carpeta donde están los archivos:**
```
vapes-catalog/
├── index.html
├── styles.css
├── script.js
├── vape1.jpg  ← AQUÍ
├── vape2.jpg  ← AQUÍ
├── vape3.jpg  ← AQUÍ
├── vape4.jpg  ← AQUÍ
├── vape5.jpg  ← AQUÍ
├── vape6.jpg  ← AQUÍ
└── vape7.jpg  ← AQUÍ
```

**Recomendaciones:**
- Imágenes cuadradas (300x300 píxeles es ideal)
- Formato JPG o PNG
- Que no pesen más de 500KB cada una

---

## 🚀 PASO 3: Subir a GitHub

### Opción más fácil - GitHub Desktop:

1. Descarga e instala [GitHub Desktop](https://desktop.github.com/)
2. Abre GitHub Desktop
3. Ve a File > New Repository
4. En "Local Path" selecciona la carpeta `vapes-catalog`
5. Dale un nombre al repositorio (ej: "vapes-catalog")
6. Clic en "Create Repository"
7. Arrastra los archivos a GitHub Desktop
8. Escribe un mensaje de commit: "Catálogo de vapes inicial"
9. Clic en "Commit to main"
10. Clic en "Publish Repository"
11. Crea el repositorio en tu cuenta de GitHub

### Activar GitHub Pages:

1. Ve a tu repositorio en GitHub.com
2. Clic en **Settings** (arriba a la derecha)
3. En el menú lateral, clic en **Pages**
4. En "Build and deployment" > "Source":
   - Selecciona **Deploy from a branch**
   - En "Branch" selecciona **main**
   - En "Folder" selecciona **/(root)**
5. Clic en **Save**

**¡Espera 2-3 minutos y tu página estará online!** 🎉

El enlace de tu página será: `https://TU_USUARIO.github.io/vapes-catalog/`

---

## 🎨 PASO 4: Personalizar (opcional)

Si quieres cambiar textos o colores:

### Cambiar nombres de los vapes:
Abre `index.html` y busca los nombres como "Vape Elite Pro" y cámbialos.

### Cambiar colores:
Abre `styles.css` y al principio verás:

```css
:root {
    --primary-color: #4a90e2;    /* Color principal (azul) */
    --secondary-color: #50c878;  /* Color secundario (verde) */
    --accent-color: #ff6b6b;     /* Color de acento (rojo) */
}
```

Cambia los códigos de color por los que quieras.

---

## ✅ Verificar que funcione

1. Abre el archivo `index.html` en tu navegador (doble clic)
2. Prueba hacer clic en "Pedir por WhatsApp" en algún vape
3. Debe abrir WhatsApp con un mensaje pre-escrito
4. Si funciona, está listo para subir a GitHub

---

## 🆘 ¿Problemas?

**El botón de WhatsApp no funciona:**
- Verifica que el número esté en `script.js` sin el símbolo +
- Asegúrate de que el número tenga el código de país

**Las imágenes no aparecen:**
- Verifica que los nombres sean exactamente `vape1.jpg`, `vape2.jpg`, etc.
- Asegúrate de que estén en la misma carpeta que los otros archivos

**La página no se ve bien en el celular:**
- La página es responsiva, debería adaptarse automáticamente
- Si hay problemas, verifica que `styles.css` esté en la carpeta

---

## 📞 ¿Necesitas ayuda?

Si tienes problemas, revisa:
1. Que todos los archivos estén en la misma carpeta
2. Que el número de WhatsApp esté configurado
3. Que las imágenes tengan los nombres correctos

**¡Listo para vender tus vapes!** 💨