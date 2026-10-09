/**
 * ==============================================================================
 * UTILIDADES DE ENLACES DE WHATSAPP (src/js/utils/whatsapp.js)
 * ==============================================================================
 * Limpieza de números internacionales y codificación segura de URLs para WhatsApp.
 */

/**
 * Limpia cualquier símbolo, espacio o guión dejando exclusivamente los dígitos.
 * @param {string|number} phone 
 * @returns {string} Solo dígitos
 */
export function cleanPhoneNumber(phone) {
  if (!phone) return '';
  return String(phone).replace(/\D/g, '');
}

/**
 * Genera un enlace oficial universal para WhatsApp (https://wa.me/NUMERO?text=...)
 * Compatible con móviles, tablets y WhatsApp Web en escritorio.
 * @param {string} phone - Número en formato internacional (solo dígitos)
 * @param {string} message - Texto predeterminado a enviar
 * @returns {string} URL formateada y codificada
 */
export function generateWhatsAppLink(phone, message = '') {
  const cleanPhone = cleanPhoneNumber(phone);
  if (!cleanPhone) {
    console.warn('[WhatsApp] Número de teléfono no configurado.');
    return '#';
  }

  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}
