(function () {
  const NEW_PH = 'Schreibe deine Nachricht…';

  function applyPlaceholder() {
    // Update all contenteditable inputs that use data-placeholder
    document.querySelectorAll('[contenteditable="true"][data-placeholder]')
      .forEach(el => {
        if (el.getAttribute('data-placeholder') !== NEW_PH) {
          el.setAttribute('data-placeholder', NEW_PH);
          // Accessibility nicety
          el.setAttribute('aria-label', NEW_PH);
          el.setAttribute('title', NEW_PH);
        }
      });
  }

  // Run now, on DOM ready, and after SPA re-renders
  applyPlaceholder();
  document.addEventListener('DOMContentLoaded', applyPlaceholder);
  const mo = new MutationObserver(applyPlaceholder);
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
