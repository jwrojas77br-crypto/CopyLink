# CopyLink 📋

Una aplicación web moderna para copiar y compartir contenido de forma sencilla y rápida. Diseñada para facilitar el intercambio de información con soporte para markdown, codificación URL y notificaciones visuales.

## 🎯 Características

- ✅ **Copiar con un clic** - Copia automáticamente el contenido al portapapeles al cargar la página
- 🎨 **Soporte Markdown** - Convierte negritas (\*\*texto\*\*) a formato HTML
- 🔗 **Parámetros URL** - Pasa título y texto mediante parámetros de URL
- 📱 **Diseño responsive** - Interfaz moderna que se adapta a cualquier dispositivo
- ⌨️ **Accesibilidad** - Compatible con navegación por teclado (Enter/Espacio)
- 🔄 **Fallback para navegadores antiguos** - Funciona en navegadores que no soportan la API Clipboard
- 🌐 **Notificaciones visuales** - Feedback inmediato al copiar el contenido
- 🎭 **Diseño atractivo** - Gradiente de colores y animaciones fluidas

## 📋 Estructura del Proyecto

```
CopyLink/
├── index.html              # Página principal de la aplicación
├── script.js              # Script principal con lógica de la app
├── styles.css             # Estilos CSS de la interfaz
├── README.md              # Este archivo
├── assets/                # Carpeta de recursos
├── img/                   # Imágenes y iconos
│   └── tr-icon.png       # Logo de Transferencias Rojas
└── modules/               # Módulos ES6
    ├── clipboard.js       # Gestión del portapapeles
    ├── textProcessor.js   # Procesamiento de texto y markdown
    └── uiUtils.js         # Utilidades de interfaz de usuario
```

## 🚀 Cómo Usar

### Opción 1: Uso Local

1. Clona o descarga el repositorio
2. Abre el archivo `index.html` en tu navegador
3. El contenido se copiará automáticamente al portapapeles
4. Puedes hacer clic en el botón "Copiar" para copiar nuevamente

### Opción 2: Desde GitHub Pages (Recomendado)

Accede directamente a la página publicada:

```
https://jwrojas77br-crypto.github.io/CopyLink/
```

### Uso Avanzado con Parámetros URL

Puedes enviar título y contenido mediante parámetros en la URL:

**Formato:**
```
https://jwrojas77br-crypto.github.io/CopyLink/?title=TU_TITULO&text=TU_TEXTO
```

**Ejemplo 1 - Texto simple:**
```
https://jwrojas77br-crypto.github.io/CopyLink/?title=Bienvenida&text=Hola%20desde%20CopyLink
```

**Ejemplo 2 - Con markdown (negritas):**
```
https://jwrojas77br-crypto.github.io/CopyLink/?title=**Importante**&text=Este%20es%20un%20**mensaje%20especial**
```

**Ejemplo 3 - Con saltos de línea:**
```
https://jwrojas77br-crypto.github.io/CopyLink/?title=Instrucciones&text=Paso%201%0APaso%202%0APaso%203
```

### Caracteres Especiales Soportados

| Carácter | Código URL |
|----------|-----------|
| Espacio | `%20` |
| Salto de línea | `%0A` |
| `*` (para negritas) | `%2A` |
| `&` | `%26` |
| `#` | `%23` |
| `%` | `%25` |

### 💡 Herramientas Útiles

Para codificar tu texto fácilmente, usa:
- [URL Encoder Online](https://www.urlencoder.org/)
- [Motodata URL Encoder](https://motodata.es/herramientas/codificador-url.html)

## 🔧 Módulos Disponibles

### `script.js` - Script Principal
- Obtiene parámetros de URL
- Inicializa el contenido procesado
- Maneja eventos de copia
- Genera notificaciones de feedback

### `modules/textProcessor.js`
Procesa y decodifica el texto:
- `decodeURLEncodings(text)` - Decodifica URLs (%20, %0A, etc.)
- `processMarkdown(text)` - Convierte markdown a HTML
- `cleanMarkdown(text)` - Limpia markdown para copia

### `modules/clipboard.js`
Gestiona la copia al portapapeles:
- `copyToClipboard(text, button)` - Copia usando API moderna o fallback
- Soporta navegadores antiguos con `document.execCommand()`

### `modules/uiUtils.js`
Utilidades visuales:
- `showFeedback(button, message)` - Muestra feedback en el botón
- `showToast(message)` - Muestra notificaciones toast

## 🎨 Personalización

### Cambiar Tema de Colores

En `styles.css`, busca el gradiente del body:
```css
background: linear-gradient(135deg, #7fc97f 0%, #ffc107 35%, #1e90ff 100%);
```

### Cambiar Logo

Reemplaza `img/tr-icon.png` con tu propio logo en:
- `index.html` (línea del favicon)
- `styles.css` (clase `.header-logo`)

### Modificar Textos

Edita los textos en `index.html`:
- Título en el modal: `#modalTitle`
- Contenido: `#modalText`
- Texto del botón: `#copyBtn`

## 💻 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación ni dependencias externas
- Compatible con navegadores antiguos (graceful degradation)

## 📝 Notas Técnicas

- Utiliza **ES6 Modules** para una arquitectura limpia
- Implementa la **Clipboard API** con fallback a `document.execCommand()`
- Procesa markdown básico (negritas) sin librerías externas
- Decodifica automáticamente parámetros URL encoded

## 🤝 Contribuciones

Para mejorar el proyecto, puedes:
1. Agregar más formatos markdown (cursivas, links, listas)
2. Implementar temas oscuro/claro
3. Añadir más idiomas
4. Mejorar el diseño responsivo

## 📄 Licencia

Proyecto de Transferencias Rojas - Código abierto