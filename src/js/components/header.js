/**
 * ==============================================================================
 * CONTROLADOR DE HEADER Y MENÚ MÓVIL (src/js/components/header.js)
 * ==============================================================================
 */

export function initHeader() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  const desktopNavLinks = document.querySelectorAll('.nav-desktop__link');

  // 1. Efecto sticky con elevación al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Control de apertura/cierre del menú móvil
  const openDrawer = () => {
    drawer?.classList.add('is-open');
    backdrop?.classList.add('is-open');
    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer?.classList.remove('is-open');
    backdrop?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = drawer?.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  // Cerrar al pulsar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Cerrar al hacer clic en un enlace de navegación
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. Scroll Spy para resaltar el enlace activo
  const sections = document.querySelectorAll('section[id]');
  const handleScrollSpy = () => {
    const scrollPos = window.scrollY + 160;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });

        mobileNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
}
