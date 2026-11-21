/**
 * ==============================================================================
 * DATOS DEL CATÁLOGO DE PRODUCTOS (src/data/products.js)
 * ==============================================================================
 * Define aquí todas las prendas de tu tienda.
 * Los datos se renderizan automáticamente en el catálogo interactivo.
 *
 * ESTRUCTURA DE CADA PRODUCTO:
 * - id: Identificador único (ej: 'spiderman-comic-classic-back')
 * - name: Nombre comercial de la prenda
 * - category: Debe coincidir exactamente con el ID de una categoría definida abajo
 * - description: Breve descripción de la prenda, corte o gráfica
 * - price: Texto del precio (ej: '$25 USD', '$65.000 COP') o null para "Consultar disponibilidad"
 * - featured: true si debe aparecer resaltado
 * - tags: Etiquetas visuales (ej: ['Spider-Man', 'Marvel', 'Cómic Vintage'])
 * - image: Ruta relativa de la imagen local en assets/images/products/
 * - isPlaceholder: false para prendas reales del catálogo
 */

// Categorías del catálogo
export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'marvel', label: 'Spider-Man & Marvel' },
  { id: 'hellokitty', label: 'Hello Kitty' },
  { id: 'urbano', label: 'Urbano & Música' },
  { id: 'coleccion-void', label: 'Colección VOID' },
];

// Listado de productos del catálogo
export const products = [
  // ==========================================
  // SPIDER-MAN & MARVEL (14 Diseños)
  // ==========================================
  {
    id: 'spiderman-comic-classic-back',
    name: 'Camiseta Spider-Man "Classic Comic Action"',
    category: 'marvel',
    description: 'Corte streetwear en algodón peinado. Mini insignia arácnida roja en pecho y gran viñeta serigráfica de cómic vintage de Spider-Man en acción en la espalda.',
    price: null,
    featured: true,
    tags: ['Spider-Man', 'Marvel', 'Cómic Vintage', 'Negro'],
    image: './assets/images/products/spiderman-comic-classic-back.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-hooded-comic-back',
    name: 'Camiseta Spider-Man "Red Hooded Comic"',
    category: 'marvel',
    description: 'Estética urbana. Pecho con araña metálica roja y espalda con ilustración de Spider-Man encapuchado sobre collage de cómics retro.',
    price: null,
    featured: true,
    tags: ['Spider-Man', 'Hooded Spidey', 'Marvel', 'Negro'],
    image: './assets/images/products/spiderman-hooded-comic-back.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-multiverse-comic-back',
    name: 'Camiseta Spider-Man "Multiverse Comic Wall"',
    category: 'marvel',
    description: 'Mosaico editorial de viñetas arácnidas en la espalda y detalle arácnido frontal en contraste rojo sobre base negra profunda.',
    price: null,
    featured: false,
    tags: ['Spider-Man', 'Multiverso', 'Cómic Collage', 'Negro'],
    image: './assets/images/products/spiderman-multiverse-comic-back.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-spider-boy-back',
    name: 'Camiseta Spider-Boy "Daily Bugle Back Print"',
    category: 'marvel',
    description: 'Gráfica trasera estilo periódicos Daily Bugle de Spider-Boy con la frase legendaria "Un gran poder conlleva una gran responsabilidad". Mini logo frontal.',
    price: null,
    featured: true,
    tags: ['Spider-Boy', 'Daily Bugle', 'Frase Legendaria', 'Negro'],
    image: './assets/images/products/spiderman-spider-boy-back.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-spider-boy-front',
    name: 'Camiseta Spider-Boy "Daily Bugle Front Print"',
    category: 'marvel',
    description: 'Impactante estampa delantera con portada retro del Daily Bugle, titular Spider-Boy y tipografía urbana. Espalda lisa.',
    price: null,
    featured: false,
    tags: ['Spider-Boy', 'Front Print', 'Streetwear', 'Negro'],
    image: './assets/images/products/spiderman-spider-boy-front.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-tobey-maguire-front',
    name: 'Camiseta Spider-Man "Tobey Maguire Cinematic Front"',
    category: 'marvel',
    description: 'Collage cinematográfico de la trilogía de Sam Raimi en el frente, acompañado de la tipografía oficial Spider-Man. Estilo movie tee retro.',
    price: null,
    featured: true,
    tags: ['Spider-Man', 'Tobey Maguire', 'Trilogía Raimi', 'Negro'],
    image: './assets/images/products/spiderman-tobey-maguire-front.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-tobey-maguire-back',
    name: 'Camiseta Spider-Man "Tobey Maguire Cinematic Back"',
    category: 'marvel',
    description: 'Frente minimalista con tipografía Spider-Man a la altura del pecho y espalda con panel fotográfico de escenas memorables de Tobey Maguire.',
    price: null,
    featured: false,
    tags: ['Spider-Man', 'Tobey Maguire', 'Back Graphic', 'Negro'],
    image: './assets/images/products/spiderman-tobey-maguire-back.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-tobey-legacy-back',
    name: 'Camiseta Spider-Man "Tobey Maguire Legacy Back"',
    category: 'marvel',
    description: 'Homenaje visual completo al Peter Parker de Tobey Maguire en espalda: traje clásico, momento de pizza, máscara y momentos icónicos.',
    price: null,
    featured: false,
    tags: ['Spider-Man', 'Tobey Maguire', 'Legacy', 'Negro'],
    image: './assets/images/products/spiderman-tobey-legacy-back.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spiderman-tobey-legacy-front',
    name: 'Camiseta Spider-Man "Tobey Maguire Legacy Front"',
    category: 'marvel',
    description: 'Estampa delantera de gran formato con tributo fotográfico a Tobey Maguire y tipografía cinematográfica. Espalda limpia.',
    price: null,
    featured: false,
    tags: ['Spider-Man', 'Tobey Maguire', 'Front Graphic', 'Negro'],
    image: './assets/images/products/spiderman-tobey-legacy-front.jpg',
    isPlaceholder: false,
  },
  {
    id: 'avengers-doomsday-doom-front',
    name: 'Camiseta Avengers "Doomsday - Victor Von Doom"',
    category: 'marvel',
    description: 'Arte gráfico frontal en tonos verde esmeralda y cósmico con Doctor Doom comandando la escena rodeado por los Vengadores.',
    price: null,
    featured: true,
    tags: ['Avengers', 'Doctor Doom', 'Marvel Studios', 'Negro'],
    image: './assets/images/products/avengers-doomsday-doom-front.jpg',
    isPlaceholder: false,
  },
  {
    id: 'avengers-doomsday-poster-front',
    name: 'Camiseta Marvel Studios "Avengers: Doomsday Poster"',
    category: 'marvel',
    description: 'Póster cinematográfico oficial "Doomsday is Here" con logotipo de Marvel Studios Avengers Doomsday al frente en máxima resolución.',
    price: null,
    featured: true,
    tags: ['Avengers', 'Doomsday', 'Póster Oficial', 'Negro'],
    image: './assets/images/products/avengers-doomsday-poster-front.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spider-girl-comic-white',
    name: 'Camiseta Spider-Girl / Spider-Gwen "White Edition"',
    category: 'marvel',
    description: 'Base blanca en algodón peinado con arte frontal cómic de Spider-Gwen / Spider-Girl en tonalidades rosa fucsia, magenta y estética pop.',
    price: null,
    featured: true,
    tags: ['Spider-Gwen', 'Spider-Girl', 'Blanco', 'Cómic'],
    image: './assets/images/products/spider-girl-comic-white.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spider-girl-comic-black',
    name: 'Camiseta Spider-Girl / Spider-Gwen "Black Edition"',
    category: 'marvel',
    description: 'Estampado frontal de Spider-Gwen en tonos rosa y blanco sobre base negra profunda con estética cómic moderna.',
    price: null,
    featured: false,
    tags: ['Spider-Gwen', 'Spider-Girl', 'Negro', 'Cómic'],
    image: './assets/images/products/spider-girl-comic-black.jpg',
    isPlaceholder: false,
  },
  {
    id: 'spider-gwen-ghost-spider-back',
    name: 'Camiseta Spider-Gwen "Ghost Spider Back Print"',
    category: 'marvel',
    description: 'Frente con araña rosa Spider-Gwen en el pecho y espalda con gran composición cómic Spider-Gwen y tipografía urbana rosa sobre negro.',
    price: null,
    featured: true,
    tags: ['Spider-Gwen', 'Ghost Spider', 'Back Print', 'Rosa & Negro'],
    image: './assets/images/products/spider-gwen-ghost-spider-back.jpg',
    isPlaceholder: false,
  },

  // ==========================================
  // HELLO KITTY & SANRIO (6 Modelos y Cortes)
  // ==========================================
  {
    id: 'hellokitty-tennis-classic',
    name: 'Camiseta Hello Kitty "Vintage Tennis Club" (Regular)',
    category: 'hellokitty',
    description: 'Corte clásico unisex en color marfil/crema vintage. Gráfica nostálgica de Hello Kitty con raqueta de tenis y tipografía bold roja retro.',
    price: null,
    featured: true,
    tags: ['Hello Kitty', 'Tennis Club', 'Corte Regular', 'Crema'],
    image: './assets/images/products/hellokitty-tennis-classic.jpg',
    isPlaceholder: false,
  },
  {
    id: 'hellokitty-tennis-oversized',
    name: 'Camiseta Hello Kitty "Vintage Tennis Club" (Oversized)',
    category: 'hellokitty',
    description: 'Silueta boxy oversized con hombros caídos en tono marfil. Estilo streetwear japonés con el gráfico retro Hello Kitty Sports.',
    price: null,
    featured: true,
    tags: ['Hello Kitty', 'Oversized', 'Streetwear', 'Crema'],
    image: './assets/images/products/hellokitty-tennis-oversized.jpg',
    isPlaceholder: false,
  },
  {
    id: 'hellokitty-tennis-babytee',
    name: 'Baby Tee Hello Kitty "Vintage Tennis Club" (Crop)',
    category: 'hellokitty',
    description: 'Corte femenino entallado estilo Baby Tee / Crop en algodón suave color crema con la gráfica retro Hello Kitty Tennis.',
    price: null,
    featured: true,
    tags: ['Hello Kitty', 'Baby Tee', 'Y2K', 'Crema'],
    image: './assets/images/products/hellokitty-tennis-babytee.jpg',
    isPlaceholder: false,
  },
  {
    id: 'hellokitty-blossom-classic',
    name: 'Camiseta Hello Kitty & Friends "Blossom Shop" (Regular)',
    category: 'hellokitty',
    description: 'Corte clásico en color blanco puro. Gráfica ilustrada multicolor con Hello Kitty, My Melody, Keroppi y Cinnamoroll en la florería.',
    price: null,
    featured: false,
    tags: ['Hello Kitty', 'Sanrio Friends', 'Corte Regular', 'Blanco'],
    image: './assets/images/products/hellokitty-blossom-classic.jpg',
    isPlaceholder: false,
  },
  {
    id: 'hellokitty-blossom-oversized',
    name: 'Camiseta Hello Kitty & Friends "Blossom Shop" (Oversized)',
    category: 'hellokitty',
    description: 'Silueta oversized streetwear en algodón pesado blanco con gran estampado frontal "Hello Kitty and Friends Blossom Shop".',
    price: null,
    featured: true,
    tags: ['Hello Kitty', 'Sanrio Friends', 'Oversized', 'Blanco'],
    image: './assets/images/products/hellokitty-blossom-oversized.jpg',
    isPlaceholder: false,
  },
  {
    id: 'hellokitty-blossom-babytee',
    name: 'Baby Tee Hello Kitty & Friends "Blossom Shop" (Crop)',
    category: 'hellokitty',
    description: 'Ajuste femenino entallado Baby Tee / Crop en base blanca con el colorido diseño de Hello Kitty & Friends Blossom Shop.',
    price: null,
    featured: true,
    tags: ['Hello Kitty', 'Baby Tee', 'Sanrio', 'Blanco'],
    image: './assets/images/products/hellokitty-blossom-babytee.jpg',
    isPlaceholder: false,
  },

  // ==========================================
  // URBANO, MÚSICA & ANIME (3 Diseños)
  // ==========================================
  {
    id: 'tee-morat-floral',
    name: 'Camiseta Morat "Floral Emblem Tour"',
    category: 'urbano',
    description: 'Base negra en algodón pesado. Mini logo Morat en el pecho y gran emblema hexagonal Morat rodeado de flores silvestres en la espalda.',
    price: null,
    featured: true,
    tags: ['Morat', 'Música', 'Floral', 'Banda', 'Negro'],
    image: './assets/images/products/tee-morat-floral.jpg',
    isPlaceholder: false,
  },
  {
    id: 'tee-blessed-gothic-angel',
    name: 'Camiseta Gothic "Blessed Angel & Roses"',
    category: 'urbano',
    description: 'Estética dark streetwear. Emblema alado gótico en el pecho y panel en espalda con escultura de querubín vendado y rosas carmesí.',
    price: null,
    featured: true,
    tags: ['Gothic', 'Blessed', 'Dark Streetwear', 'Rosas', 'Negro'],
    image: './assets/images/products/tee-blessed-gothic-angel.jpg',
    isPlaceholder: false,
  },
  {
    id: 'tee-gengar-akuma-shadow',
    name: 'Camiseta Oversized "Gengar Akuma Shadow"',
    category: 'urbano',
    description: 'Corte boxy oversized en negro. Mini alas en el pecho y espalda con Gengar en modo demonio alado con kanjis y detalles streetwear.',
    price: null,
    featured: true,
    tags: ['Gengar', 'Pokémon', 'Anime Streetwear', 'Boxy Fit', 'Negro'],
    image: './assets/images/products/tee-gengar-akuma-shadow.jpg',
    isPlaceholder: false,
  },

  // ==========================================
  // COLECCIÓN BÁSICA VOID
  // ==========================================
  {
    id: 'tee-void-noise',
    name: 'Camiseta Graphic "Void Noise"',
    category: 'coleccion-void',
    description: 'Corte boxy oversized en algodón de alto gramaje (240g). Estampado serigráfico en espalda y detalle tipográfico minimal en pecho.',
    price: null,
    featured: false,
    tags: ['Oversized', 'Heavy Cotton', 'Negro'],
    image: './assets/images/products/tee-void-noise.svg',
    isPlaceholder: false,
  },
  {
    id: 'tee-acid-drop',
    name: 'Camiseta "Acid Drop" Cyberpunk',
    category: 'coleccion-void',
    description: 'Ilustración futurista con acentos púrpura en contraste de alta resolución. Cuello reforzado y costuras dobles.',
    price: null,
    featured: false,
    tags: ['Streetwear', 'Acento Púrpura', 'Grafismo'],
    image: './assets/images/products/tee-acid-drop.svg',
    isPlaceholder: false,
  },
  {
    id: 'tee-kanji-district',
    name: 'Camiseta "District 09" Kanji',
    category: 'coleccion-void',
    description: 'Estética neo-Tokyo con kanjis y tipografía técnica. Acabado suave al tacto con tinta ecológica de larga duración.',
    price: null,
    featured: false,
    tags: ['Neo-Tokyo', 'Boxy Fit', 'Negro'],
    image: './assets/images/products/tee-kanji-district.svg',
    isPlaceholder: false,
  },
  {
    id: 'hoodie-heavy-oversized',
    name: 'Hoodie Oversized "Shadow System"',
    category: 'coleccion-void',
    description: 'Buzo con capota en felpa pesada de 400g. Interior perchado ultra suave, bolsillo canguro y microprint tonal.',
    price: null,
    featured: false,
    tags: ['Felpa Pesada', 'Capota Doble', 'Premium'],
    image: './assets/images/products/hoodie-heavy-oversized.svg',
    isPlaceholder: false,
  },
];
