// ===== Ejercicio 1: Tema y saludo dinámico =====
let temaActual = 'claro';
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');
function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}

function saludar() {
    const horaActual = new Date().getHours();

    // TODO: definir el mensaje según el rango de horaActual
    let mensaje = '';
    if (horaActual >= 6 && horaActual < 12) {
        mensaje = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {
        mensaje = '¡Buenas tardes!';
    } else {
        mensaje = '¡Buenas noches!';
    }

    // TODO: asignar el mensaje a saludoElemento.textContent
    saludoElemento.textContent = mensaje;

}
botonTema.addEventListener('click', cambiarTema);
saludar();

