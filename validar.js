function validarCorreo() {
  const form = document.getElementById('form');
  const email2 = document.getElementById('email2');
  const mensajeDeAlerta = document.createElement('p');
  const alerta = document.createTextNode("Las direcciones de correo no coinciden");
  const contenido = document.getElementById('contenido');
  mensajeDeAlerta.appendChild(alerta);
  mensajeDeAlerta.setAttribute('id', 'alert');
  mensajeDeAlerta.classList.add("color_alerta");

  const mostrarAlerta = () => {
      if (!document.getElementById('alert')) {
          contenido.parentNode.insertBefore(mensajeDeAlerta, contenido);
      }
      email2.classList.add("fondo_alerta");
  };
  const ocultarAlerta = () => {
      email2.classList.remove("fondo_alerta");
      if (mensajeDeAlerta.parentNode) {
          mensajeDeAlerta.parentNode.removeChild(mensajeDeAlerta);
      }
  };

  email2.addEventListener('input', () => {
      if (form.email.value !== form.email2.value) {
          mostrarAlerta();
      } else {
          ocultarAlerta();
      }
  });
}
window.onload = function() {
  validarCorreo();
};