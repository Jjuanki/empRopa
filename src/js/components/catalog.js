/**
 * ==============================================================================
 * CONTROLADOR DEL CATÁLOGO INTERACTIVO (src/js/components/catalog.js)
 * ==============================================================================
 * Maneja el filtrado en el cliente, el renderizado de tarjetas, el estado vacío
 * y la integración directa con WhatsApp para cada producto.
 */

import { generateWhatsAppLink } from '../utils/whatsapp.js';

export function initCatalog(products, categories, siteConfig) {
  const filtersContainer = document.querySelector('.catalog-filters');
  const gridContainer = document.querySelector('.catalog-grid');
  const counterElement = document.querySelector('.catalog-counter');
  const scrollBox = document.querySelector('.catalog-scrollbox');

  if (!gridContainer) return;

  let currentCategory = 'todos';

  // 1. Renderizar botones de filtro por categoría
  const renderCategoryFilters = () => {
    if (!filtersContainer) return;

    filtersContainer.innerHTML = categories
      .map(
        (cat) => `
        <button 
          type="button" 
          class="filter-btn ${cat.id === currentCategory ? 'is-active' : ''}" 
          data-category="${cat.id}"
          aria-pressed="${cat.id === currentCategory}"
        >
          ${cat.label}
        </button>
      `
      )
      .join('');

    // Eventos de clic en filtros
    const filterButtons = filtersContainer.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedCat = btn.getAttribute('data-category');
        if (selectedCat === currentCategory) return;

        currentCategory = selectedCat;

        // Actualizar estados visuales de los botones
        filterButtons.forEach((b) => {
          const isActive = b.getAttribute('data-category') === currentCategory;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-pressed', String(isActive));
        });

        // Filtrar y renderizar productos
        renderProducts();

        // Reiniciar suavemente el scroll interno del catálogo
        if (scrollBox) {
          scrollBox.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  };

  // 2. Renderizar listado de productos
  const renderProducts = () => {
    const filtered = products.filter((item) => {
      if (currentCategory === 'todos') return true;
      return item.category === currentCategory;
    });

    // Actualizar contador
    if (counterElement) {
      counterElement.textContent = `${filtered.length} ${filtered.length === 1 ? 'prenda' : 'prendas'}`;
    }

    // Caso: No hay productos en la categoría (Empty State)
    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="catalog-empty">
          <div class="catalog-empty__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h3 class="catalog-empty__title">No hay productos en esta categoría</h3>
          <p class="catalog-empty__desc">
            Pronto añadiremos nuevos lanzamientos y prendas para esta colección.
          </p>
          <button type="button" class="btn btn-secondary btn-reset-filter">
            Ver todas las prendas
          </button>
        </div>
      `;

      const resetBtn = gridContainer.querySelector('.btn-reset-filter');
      resetBtn?.addEventListener('click', () => {
        const allBtn = filtersContainer?.querySelector('[data-category="todos"]');
        allBtn?.click();
      });

      return;
    }

    // Renderizar tarjetas de producto
    gridContainer.innerHTML = filtered
      .map((item) => {
        // Enlace de WhatsApp específico para esta prenda
        const waMessage = siteConfig.whatsappMessages.productInquiry(item.name, item.category);
        const waUrl = generateWhatsAppLink(siteConfig.contact.whatsappNumber, waMessage);

        const priceDisplay = item.price 
          ? `<span class="product-card__price-val">${item.price}</span>`
          : `<span class="product-card__price-val product-card__price-val--inquire">Consultar disponibilidad</span>`;

        const tagsHtml = item.tags && item.tags.length > 0
          ? item.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')
          : '';

        return `
          <article class="product-card" data-id="${item.id}">
            <div class="product-card__thumb">
              <div class="product-card__badges">
                ${item.featured ? '<span class="product-badge product-badge--featured">Destacado</span>' : ''}
                ${item.isPlaceholder ? '<span class="product-badge">Demo</span>' : ''}
              </div>
              <img 
                src="${item.image}" 
                alt="${item.name} - Prenda personalizada de ${siteConfig.brand.name}" 
                class="product-card__img"
                loading="lazy"
                width="600"
                height="750"
              />
            </div>

            <div class="product-card__body">
              <span class="product-card__category">${item.category}</span>
              <h3 class="product-card__title">${item.name}</h3>
              <p class="product-card__desc">${item.description}</p>
              
              ${tagsHtml ? `<div class="product-card__tags">${tagsHtml}</div>` : ''}

              <div class="product-card__footer">
                <div class="product-card__price-row">
                  <span class="product-card__price-label">Precio</span>
                  ${priceDisplay}
                </div>
                <a 
                  href="${waUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-whatsapp-sm"
                  aria-label="Consultar por ${item.name} en WhatsApp"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.42-.101.825z"/>
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  };

  // Inicializar
  renderCategoryFilters();
  renderProducts();
}
