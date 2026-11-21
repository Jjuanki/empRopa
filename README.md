# VOID — Web Oficial de Camisetas Personalizadas y Streetwear

Sitio web estático moderno, minimalista y de alto impacto visual para emprendimientos de ropa personalizada, prendas gráficas y cultura streetwear. 

Diseñado con un enfoque **mobile-first**, accesible, sin dependencias pesadas y preparado para su publicación inmediata en **GitHub Pages** (o cualquier servidor de archivos estáticos).

---

## ⚡ Características Principales

* **Estética Urbana y Minimalista:** Paleta oscura (`#0B0B0D`, `#141417`, `#1C1C21`) con toques equilibrados de acento púrpura (`#60519b`).
* **Catálogo con Desplazamiento Vertical Autónomo:** Contenedor delimitado con marco visual, cabecera fija (*sticky*) y barra de scroll propia que no satura la navegación general de la página.
* **Filtros por Categoría en Tiempo Real:** Filtrado en el cliente sin recargar la página (Todos, Camisetas, Hoodies, Otros productos) y preparado para ampliarse a pantalones o accesorios en el futuro.
* **Integración Directa con WhatsApp:**
  * **Botón flotante permanente** con mensaje de bienvenida genérico.
  * **Botones por cada tarjeta del catálogo** que generan un mensaje prellenado consultando específicamente por el modelo seleccionado.
  * **Botón en sección de personalización** para coordinar pedidos a medida.
* **100% Estático y Autónomo:** No requiere bases de datos, Node.js en producción, claves de API ni backend.
* **Cero Enlaces Rotos:** Incluye mockups vectoriales SVG locales de alta resolución listos para funcionar sin conexión a internet.
* **Listo para GitHub Pages:** Rutas relativas (`./`) compatibles tanto con subdirectorios de proyectos (`usuario.github.io/repo/`) como con dominios personalizados.

---

## 📁 Estructura del Proyecto

```text
ropaEmp/
├── index.html                   # Estructura semántica principal y metadatos SEO
├── favicon.svg                  # Ícono de pestaña con silueta streetwear
├── robots.txt                   # Instrucciones para motores de búsqueda
├── sitemap.xml                  # Mapa del sitio para indexación
├── package.json                 # Scripts de utilidad para previsualización local
├── README.md                    # Documentación y guía de despliegue
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # Flujo de GitHub Actions para despliegue automático
│
├── assets/
│   └── images/
│       ├── hero-streetwear.svg  # Composición editorial de portada
│       └── products/            # Mockups vectoriales de prendas de demostración
│           ├── tee-void-noise.svg
│           ├── tee-acid-drop.svg
│           ├── tee-minimal-type.svg
│           ├── tee-kanji-district.svg
│           ├── hoodie-heavy-oversized.svg
│           ├── hoodie-raw-cut.svg
│           ├── tote-heavy-canvas.svg
│           └── cap-distressed-logo.svg
│
└── src/
    ├── config/
    │   └── site.js              # ⚡ CONFIGURACIÓN CENTRAL (Marca, WhatsApp, textos, redes)
    ├── data/
    │   └── products.js          # ⚡ DATOS DEL CATÁLOGO (Prendas, categorías, precios, tags)
    ├── css/
    │   ├── variables.css        # Colores, tipografía y tokens de diseño
    │   ├── base.css             # Reset, foco accesible y scrollbars oscuras
    │   ├── layout.css           # Header, hero, pasos, identidad y footer
    │   ├── components.css       # Botones, tarjetas, catálogo autónomo y WhatsApp flotante
    │   └── responsive.css       # Adaptabilidad móvil (320px a 4K) y menú hamburguesa
    └── js/
        ├── utils/
        │   └── whatsapp.js      # Constructor y codificador de enlaces wa.me
        ├── components/
        │   ├── header.js        # Menú móvil, sticky header y scroll spy
        │   ├── catalog.js       # Filtros dinámicos, render de tarjetas y estado vacío
        │   └── floating-wa.js   # Botón flotante accesible
        └── main.js              # Inicializador y enlace de configuración
```

---

## 🛠️ Cómo Probar el Proyecto Localmente

Tienes varias alternativas según las herramientas instaladas en tu computadora:

### Opción 1: Con Node.js y npm (Recomendado)
Abre la terminal en la carpeta del proyecto y ejecuta:
```bash
npm start
```
Se iniciará un servidor local rápido en `http://localhost:3000`.

### Opción 2: Con Python
Si tienes Python instalado:
```bash
# Python 3
python -m http.server 3000
```
Luego abre tu navegador en `http://localhost:3000`.

### Opción 3: Con la extensión Live Server de VS Code
1. Abre la carpeta `ropaEmp` en Visual Studio Code.
2. Haz clic derecho sobre el archivo `index.html`.
3. Selecciona **"Open with Live Server"**.

*(Nota: Dado que el proyecto utiliza módulos de JavaScript nativos `type="module"`, se recomienda abrirlo a través de un servidor local HTTP en vez de hacer doble clic directo sobre el archivo HTML para evitar bloqueos de seguridad CORS del navegador).*

---

## 📋 Lista de Valores Provisionales a Reemplazar

Antes de publicar el sitio a tus clientes, personaliza los siguientes archivos:

### 1. En `src/config/site.js`
* **`brand.name`**: Cambia `'TU MARCA'` por el nombre comercial de tu negocio.
* **`contact.whatsappNumber`**: Reemplaza `'573000000000'` por tu número real de WhatsApp en formato internacional (solo dígitos, sin símbolos `+`, guiones ni espacios).
* **`contact.email`** y **`contact.location`**: Actualiza el correo y la ciudad de origen o cobertura de envíos.
* **`social`**: Agrega tus perfiles reales de Instagram y TikTok (reemplazando los enlaces de ejemplo).
* **`hero.title`** y **`hero.description`**: Ajusta el lema y la propuesta de valor si tienes textos propios.

### 2. En `src/data/products.js`
* **Prendas reales**: Reemplaza o amplía el arreglo `products` con tus modelos reales.
* **Precios**: Si quieres mostrar precios fijos, coloca un texto como `'$65.000 COP'` o `'$25 USD'`. Si dejas `price: null`, el sistema mostrará automáticamente `"Consultar disponibilidad"`.
* **Imágenes**: Coloca tus fotos de producto en formato JPG, WebP o PNG dentro de `assets/images/products/` y actualiza la propiedad `image` de cada prenda (por ejemplo: `'./assets/images/products/mi-camiseta.webp'`).

### 3. En `index.html`, `robots.txt` y `sitemap.xml`
* **`index.html`**: En las etiquetas `<meta property="og:url">`, reemplaza la URL por la dirección real donde publicarás tu página web.
* **`sitemap.xml`**: Actualiza la etiqueta `<loc>` con la URL final de tu repositorio en GitHub Pages o tu dominio personalizado.
* **`robots.txt`**: Ajusta la línea del `Sitemap:` con tu dirección final.

---

## 🚀 Cómo Subir el Proyecto a GitHub

Sigue estos sencillos pasos desde la terminal de tu computadora:

1. **Inicia el repositorio local de Git:**
   ```bash
   git init
   git add .
   git commit -m "feat: landing page completa para emprendimiento de ropa personalizada"
   ```

2. **Crea un nuevo repositorio en tu cuenta de GitHub:**
   * Entra a [github.com/new](https://github.com/new).
   * Asigna un nombre al repositorio (por ejemplo: `ropa-marca` o `ropaEmp`).
   * Déjalo como **Público** para que GitHub Pages funcione gratis.
   * No marques la opción de inicializar con README (ya tenemos uno completo).

3. **Conecta tu repositorio local con GitHub y sube los archivos:**
   ```bash
   # Cambia a la rama principal 'main'
   git branch -M main

   # Vincula tu repositorio remoto (reemplaza TU_USUARIO y TU_REPOSITORIO)
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

   # Sube los cambios
   git push -u origin main
   ```

---

## 🌐 Cómo Activar GitHub Pages

Tienes dos formas de activar tu sitio web de manera 100% gratuita:

### Método A: Mediante la rama `main` (El más rápido y directo)
1. En GitHub, entra a tu repositorio.
2. Ve a la pestaña **Settings** (Configuración) en la barra superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**:
   * **Source**: Selecciona `Deploy from a branch`.
   * **Branch**: Selecciona `main` y en la carpeta elige `/ (root)`.
5. Haz clic en **Save** (Guardar).
6. En 1 o 2 minutos, tu sitio web estará disponible en:
   `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

### Método B: Mediante GitHub Actions (Automático)
El proyecto ya incluye el archivo `.github/workflows/deploy.yml`. Si prefieres este método:
1. En **Settings > Pages**, en la opción **Source**, selecciona **GitHub Actions**.
2. Cada vez que hagas un `git push` a la rama `main`, GitHub compilará y publicará automáticamente tu sitio en segundos.

---

## 🎨 Ajuste de Colores y Estilos (Opcional)

Si en el futuro deseas cambiar la identidad visual o los colores de acento, abre `src/css/variables.css`:

```css
:root {
  --bg-primary: #0B0B0D;       /* Fondo principal */
  --bg-secondary: #141417;     /* Fondo de secciones y catálogo */
  --bg-card: #1C1C21;          /* Fondo de tarjetas de producto */
  --accent-color: #60519b;     /* Color de acento (púrpura actual) */
  --text-primary: #F5F5F5;     /* Texto principal */
  --border-color: #303036;     /* Líneas y bordes divisorios */
}
```
Todos los botones, efectos hover, bordes e indicadores cambiarán automáticamente en todo el sitio web al modificar estas variables.

---

## 🛡️ Licencia y Uso
Este proyecto fue desarrollado para uso comercial o personal libre en tu emprendimiento de ropa. Puedes personalizarlo, expandirlo y modificarlo según las necesidades de tu marca.
