/**
 * ==============================================================================
 * ENTRADA PRINCIPAL DE APLICACIÓN (src/js/main.js)
 * ==============================================================================
 */

import { siteConfig } from '../config/site.js';
import { products, categories } from '../data/products.js';
import { generateWhatsAppLink } from './utils/whatsapp.js';
import { initHeader } from './components/header.js';
import { initCatalog } from './components/catalog.js';
import { initFloatingWhatsApp } from './components/floating-wa.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyección de valores de marca y configuración centralizada
  populateSiteConfig();

  // 2. Inicialización de componentes interactivos
  initHeader();
  initCatalog(products, categories, siteConfig);
  initFloatingWhatsApp(siteConfig);

  // 3. Smooth scroll mejorado para enlaces internos
  initSmoothScroll();
});

function populateSiteConfig() {
  // Reemplazar nombre de marca dinámicamente en elementos con data-bind="brand.name"
  document.querySelectorAll('[data-bind="brand.name"]').forEach((el) => {
    el.textContent = siteConfig.brand.name;
  });

  // Reemplazar año actual en el copyright
  document.querySelectorAll('[data-bind="year"]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Configurar enlace de WhatsApp en botón del Hero ("Personalizar mi camiseta")
  const heroWaBtn = document.querySelector('.btn-hero-custom');
  if (heroWaBtn) {
    heroWaBtn.href = generateWhatsAppLink(
      siteConfig.contact.whatsappNumber,
      siteConfig.whatsappMessages.customOrder
    );
  }

  // Configurar enlace de WhatsApp en botón de Personalización
  const customSectionWaBtn = document.querySelector('.btn-custom-section');
  if (customSectionWaBtn) {
    customSectionWaBtn.href = generateWhatsAppLink(
      siteConfig.contact.whatsappNumber,
      siteConfig.whatsappMessages.customOrder
    );
  }

  // Configurar enlace de WhatsApp en botón de Contacto
  const contactWaBtn = document.querySelector('.btn-contact-wa');
  if (contactWaBtn) {
    contactWaBtn.href = generateWhatsAppLink(
      siteConfig.contact.whatsappNumber,
      siteConfig.whatsappMessages.general
    );
  }

  // Configurar enlace de WhatsApp en botón del Header
  const headerWaBtn = document.querySelector('.btn-header-wa');
  if (headerWaBtn) {
    headerWaBtn.href = generateWhatsAppLink(
      siteConfig.contact.whatsappNumber,
      siteConfig.whatsappMessages.general
    );
  }

  // Configurar enlaces sociales
  siteConfig.social.forEach((item) => {
    const socialLinks = document.querySelectorAll(`[data-social="${item.name.toLowerCase()}"]`);
    socialLinks.forEach((link) => {
      if (item.url) {
        link.href = item.url;
      } else if (item.name === 'WhatsApp') {
        link.href = generateWhatsAppLink(
          siteConfig.contact.whatsappNumber,
          siteConfig.whatsappMessages.general
        );
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Actualizar URL sin salto abrupto
        history.pushState(null, '', targetId);
      }
    });
  });
}
