const inputNombre = document.getElementById('nombreusuario');
const btnSaludo = document.getElementById('btnSaludo');
const parrafoMensaje = document.getElementById('mensaje');

btnSaludo.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    if (nombre !== '') {
        parrafoMensaje.textContent = `Hola ${nombre}, bienvenido al curso de JavaScript`;
    } else {
        parrafoMensaje.textContent = 'Por favor, ingresa tu nombre';
    }
});

const formulario = document.getElementById('formSuscripcion');
const inputCorreo = document.getElementById('correoUsuario');
const mensajeExito = document.getElementById('mensajeExito');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = inputCorreo.value.trim();
    if (correo !== '') {
        mensajeExito.textContent = `Gracias por suscribirte con el correo: ${correo}`;
        formulario.reset();
    } else {
        mensajeExito.textContent = 'Por favor, ingresa un correo válido';
    }
});