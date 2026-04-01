function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function handleSubmit(e) {
  e.preventDefault();
  alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
  e.target.reset();
}
