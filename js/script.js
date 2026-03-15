// Cambia la pestaña activa dentro de una tarjeta
function tab(btn, prefix, panel) {
  const group = btn.closest('.tabs');
  group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const body = btn.closest('.tarjeta-body');
  body.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(prefix + '-' + panel).classList.add('active');
}

// Valida y envía el formulario práctico
function enviarFormulario() {
  const nombre   = document.getElementById('pNombre').value.trim();
  const email    = document.getElementById('pEmail').value.trim();
  const terminos = document.getElementById('pTerminos').checked;
  const msg      = document.getElementById('formMsg');

  msg.style.display      = 'block';
  msg.style.padding      = '10px';
  msg.style.borderRadius = '4px';

  if (!nombre || !email) {
    msg.style.background = '#fde8e8';
    msg.style.color      = '#c0392b';
    msg.style.border     = '1px solid #f5b7b1';
    msg.textContent      = '¡Completa los campos requeridos: nombre y correo!';
    return;
  }

  if (!terminos) {
    msg.style.background = '#fef9e7';
    msg.style.color      = '#d68910';
    msg.style.border     = '1px solid #f9e79f';
    msg.textContent      = '¡Debes aceptar los términos y condiciones!';
    return;
  }

  msg.style.background = '#eafaf1';
  msg.style.color      = '#1e8449';
  msg.style.border     = '1px solid #a9dfbf';
  msg.textContent      = '¡Gracias ' + nombre + '! Recibirás confirmación en ' + email + '.';
  msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Botón volver arriba — usa IntersectionObserver para detectar si el header es visible
window.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnTop');
  const header = document.querySelector('header');
  if (!btn || !header) return;

  const observer = new IntersectionObserver(function (entries) {
    // Si el header NO es visible, el usuario bajó → mostrar botón
    if (!entries[0].isIntersecting) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  }, { threshold: 0 });

  observer.observe(header);
});

// Subir al tope
function irArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
