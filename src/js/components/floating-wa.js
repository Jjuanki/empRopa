/**
 * ==============================================================================
 * BOTÓN FLOTANTE DE WHATSAPP (src/js/components/floating-wa.js)
 * ==============================================================================
 */

import { generateWhatsAppLink } from '../utils/whatsapp.js';

export function initFloatingWhatsApp(siteConfig) {
  const floatingBtn = document.querySelector('.floating-wa-btn');
  if (!floatingBtn) return;

  const url = generateWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    siteConfig.whatsappMessages.general
  );

  floatingBtn.setAttribute('href', url);
  floatingBtn.setAttribute('aria-label', `Consultar por WhatsApp con ${siteConfig.brand.name}`);
}
