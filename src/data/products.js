/**
 * ==============================================================================
 * DATOS DEL CATÁLOGO DE PRODUCTOS (src/data/products.js)
 * ==============================================================================
 * Define aquí todas las prendas de tu tienda.
 * Los datos se renderizan automáticamente en el catálogo interactivo.
 *
 * ESTRUCTURA DE CADA PRODUCTO:
 * - id: Identificador único (ej: 'tee-01')
 * - name: Nombre comercial de la prenda
 * - category: Debe coincidir exactamente con el ID de una categoría definida abajo
 * - description: Breve descripción de la prenda, corte o gráfica
 * - price: Texto del precio (ej: '$65.000 COP', '$25 USD') o null si prefieres
 *          mostrar "Consultar disponibilidad"
 * - featured: true si debe aparecer en la sección destacada de la portada
 * - tags: Etiquetas visuales (ej: ['Oversized', '100% Algodón', 'Edición Limitada'])
 * - image: Ruta relativa de la imagen local en assets/images/products/
 * - isPlaceholder: Indicador de que es contenido de muestra para reemplazar
 */

// Categorías del catálogo (ampliable a futuro: 'Pantalones', 'Accesorios', etc.)
export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'camisetas', label: 'Camisetas' },
  { id: 'hoodies', label: 'Hoodies' },
  { id: 'otros', label: 'Otros productos' },
  // Para añadir una categoría futura: { id: 'pantalones', label: 'Pantalones' }
];

// Listado de productos de demostración
export const products = [
  {
    id: 'tee-void-noise',
    name: 'Camiseta Graphic "Void Noise"',
    category: 'camisetas',
    description: 'Corte boxy oversized en algodón de alto gramaje (240g). Estampado serigráfico en espalda y detalle tipográfico minimal en pecho.',
    price: null, // null muestra "Consultar disponibilidad"
    featured: true,
    tags: ['Oversized', 'Heavy Cotton', 'Negro'],
    image: './assets/images/products/tee-void-noise.svg',
    isPlaceholder: true,
  },
  {
    id: 'tee-acid-drop',
    name: 'Camiseta "Acid Drop" Cyberpunk',
    category: 'camisetas',
    description: 'Ilustración futurista con acentos púrpura en contraste de alta resolución. Cuello reforzado y costuras dobles.',
    price: null,
    featured: true,
    tags: ['Streetwear', 'Acento Púrpura', 'Grafismo'],
    image: './assets/images/products/tee-acid-drop.svg',
    isPlaceholder: true,
  },
  {
    id: 'tee-minimal-type',
    name: 'Camiseta "Typo Minimalist" Raw',
    category: 'camisetas',
    description: 'Diseño sobrio de inspiración brutalista con coordenadas urbanas y tipografía sans-serif de precisión sobre base blanca.',
    price: null,
    featured: false,
    tags: ['Minimalista', 'Corte Regular', 'Blanco'],
    image: './assets/images/products/tee-minimal-type.svg',
    isPlaceholder: true,
  },
  {
    id: 'tee-kanji-district',
    name: 'Camiseta "District 09" Kanji',
    category: 'camisetas',
    description: 'Estética neo-Tokyo con kanjis y tipografía técnica. Acabado suave al tacto con tinta ecológica de larga duración.',
    price: null,
    featured: true,
    tags: ['Neo-Tokyo', 'Boxy Fit', 'Negro'],
    image: './assets/images/products/tee-kanji-district.svg',
    isPlaceholder: true,
  },
  {
    id: 'hoodie-heavy-oversized',
    name: 'Hoodie Oversized "Shadow System"',
    category: 'hoodies',
    description: 'Buzo con capota en felpa pesada de 400g. Interior perchado ultra suave, bolsillo canguro y microprint tonal.',
    price: null,
    featured: true,
    tags: ['Felpa Pesada', 'Capota Doble', 'Premium'],
    image: './assets/images/products/hoodie-heavy-oversized.svg',
    isPlaceholder: true,
  },
  {
    id: 'hoodie-raw-cut',
    name: 'Hoodie Boxy "Subversion 00"',
    category: 'hoodies',
    description: 'Silueta amplia y hombros caídos. Gráfico serigrafiado en el frente con frase icónica y acabado mate.',
    price: null,
    featured: false,
    tags: ['Hombro Caído', 'Edición Limitada', 'Urbano'],
    image: './assets/images/products/hoodie-raw-cut.svg',
    isPlaceholder: true,
  },
  {
    id: 'tote-heavy-canvas',
    name: 'Tote Bag "Heavy Canvas 16oz"',
    category: 'otros',
    description: 'Bolsa de tela resistente en lona de 16 onzas con manijas reforzadas y estampado frontal para uso diario.',
    price: null,
    featured: false,
    tags: ['Lona 16oz', 'Ecológico', 'Accesorios'],
    image: './assets/images/products/tote-heavy-canvas.svg',
    isPlaceholder: true,
  },
  {
    id: 'cap-distressed-logo',
    name: 'Gorra Dad Cap "Distressed Monogram"',
    category: 'otros',
    description: 'Gorra desestructurada de 6 paneles en sarga de algodón con bordado frontal en relieve y cierre metálico ajustable.',
    price: null,
    featured: false,
    tags: ['Bordado 3D', 'Ajustable', 'Unisex'],
    image: './assets/images/products/cap-distressed-logo.svg',
    isPlaceholder: true,
  },
];
