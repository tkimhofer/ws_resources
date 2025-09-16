function setPlaceholder() {
  const ta = document.querySelector('textarea[placeholder]');
  if (ta) ta.placeholder = 'Schreibe deine Nachricht…';
}
function replaceWordmark() {
  // Fallback if any "Chainlit" text node sneaks in
  document.querySelectorAll('h1, h2, div, span').forEach((el) => {
    if (el.textContent.trim() === 'Chainlit') el.textContent = 'Duisburger Rat Assistent';
  });
}
const mo = new MutationObserver(() => { setPlaceholder(); replaceWordmark(); });
mo.observe(document.documentElement, { childList: true, subtree: true });
setPlaceholder(); replaceWordmark();
