/**
 * ==============================================================================
 * CONFIGURACIÓN CENTRAL DEL SITIO (src/config/site.js)
 * ==============================================================================
 * Edita este archivo para personalizar todos los datos de tu emprendimiento:
 * nombre de marca, número de WhatsApp, enlaces a redes sociales y textos clave.
 *
 * NOTA SOBRE WHATSAPP:
 * El número debe ingresarse en formato internacional:
 * - Código de país + Código de área/móvil + Número local
 * - ÚNICAMENTE DÍGITOS (sin '+', sin espacios, sin guiones ni paréntesis).
 * Ejemplo para Colombia: '573001234567'
 * Ejemplo para México: '5215512345678'
 * Ejemplo para Argentina: '5491123456789'
 * Ejemplo para España: '34612345678'
 */

export const siteConfig = {
  // 1. Identidad de Marca
  brand: {
    name: 'VOID',
    tagline: 'STREETWEAR & CUSTOM TEES',
    description: 'Prendas gráficas y personalizadas con estética urbana y minimalista.',
    year: new Date().getFullYear(),
  },

  // 2. Canales de Contacto Directo
  contact: {
    // Reemplaza este número ficticio por tu número real de WhatsApp (solo números)
    whatsappNumber: '593995706120', 
    email: 'contacto@tumarca.ejemplo.com',
    location: 'Ecuador-Quito', // Ciudad o cobertura de envíos
  },

  // 3. Mensajes predeterminados para WhatsApp
  whatsappMessages: {
    // Mensaje para el botón flotante y botones generales
    general: '¡Hola! Vengo desde la página web de VOID y me gustaría recibir información sobre sus prendas y opciones de personalización.',
    
    // Mensaje para el botón del Hero / sección de personalización
    customOrder: '¡Hola! Quiero personalizar una camiseta con mi propio diseño. ¿Podrían indicarme cómo es el proceso y los precios?',
    
    // Generador dinámico de mensaje para tarjetas de productos del catálogo
    productInquiry: (productName, category) => 
      `¡Hola! Estoy interesado/a en la prenda "${productName}" (${category}) que vi en su catálogo web. ¿Tienen disponibilidad o es posible personalizarla?`,
  },

  // 4. Redes Sociales (deja en '#' o reemplaza con tus URLs reales)
  social: [
    {
      name: 'Instagram',
      handle: '@tumarca.oficial',
      url: 'https://instagram.com/tumarca.ejemplo', // Cambia por tu perfil real
      icon: 'instagram',
    },
    {
      name: 'TikTok',
      handle: '@tumarca.estudio',
      url: 'https://tiktok.com/@tumarca.ejemplo', // Cambia por tu perfil real
      icon: 'tiktok',
    },
    {
      name: 'WhatsApp',
      handle: '+57 300 000 0000',
      url: null, // Se genera automáticamente con el número de arriba
      icon: 'whatsapp',
    }
  ],

  // 5. Configuración de Navegación del Header
  navigation: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Personalización', href: '#personalizacion' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Sobre Nosotros', href: '#identidad' },
    { label: 'Contacto', href: '#contacto' },
  ],

  // 6. Textos Principales de la Portada
  hero: {
    badge: 'DROP 01 // EDICIÓN DISPONIBLE',
    title: 'CAMISETAS PERSONALIZADAS. TU ESTILO, TUS REGLAS.',
    description: 'Transformamos tus ideas en prendas únicas. Explora nuestros diseños gráficos de corte urbano o cuéntanos qué quieres crear para fabricar tu prenda personalizada.',
    ctaCatalog: 'Explorar catálogo',
    ctaCustom: 'Personalizar mi camiseta',
  },

  // 7. Pasos del Servicio de Personalización
  customizationSteps: [
    {
      step: '01',
      title: 'Cuéntanos tu idea',
      description: 'Envíanos tu ilustración, texto, referencia gráfica o logotipo por WhatsApp. Te asesoramos en el tamaño y posición ideal.',
    },
    {
      step: '02',
      title: 'Elige tu prenda y diseño',
      description: 'Selecciona el corte (regular, oversized, boxy fit), el color de la prenda (negro, blanco, etc.) y la técnica recomendada.',
    },
    {
      step: '03',
      title: 'Concreta tu pedido',
      description: 'Revisamos los detalles contigo, confirmamos el acabado y coordinamos la producción y el envío directamente por chat.',
    },
  ],

  // 8. Mensaje de Marca / Manifiesto
  manifesto: {
    subtitle: 'FILOSOFÍA DE MARCA',
    title: 'ROPA CON IDENTIDAD URBANA',
    text: 'Creemos en la ropa como un lienzo de expresión personal. Cada camiseta que estampamos respeta una estética sobria, tipografías contundentes y acabados de alta definición pensados para durar.',
  }
};
