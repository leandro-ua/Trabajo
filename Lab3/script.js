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


// ===== Ejercicio 3: Panel de estadísticas =====
const estadisticas = [
    { etiqueta: 'Proyectos', valor: 10 },
    { etiqueta: 'Participantes en beta', valor: 42500 },
    { etiqueta: 'Años desarrollando', valor: 4 },
];

const contenedorStats = document.querySelector('#panel-estadisticas');

function renderizarEstadisticas(lista) {
    // Vaciamos por precaución antes de dibujar
    contenedorStats.innerHTML = ''; 

    lista.forEach(function (item) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-stat', 'card', 'p-4', 'shadow-sm'); 
        tarjeta.innerHTML = `
            <span class="stat-numero fs-1 fw-bold text-primary" data-valor="${item.valor}">0</span>
            <p class="m-0">${item.etiqueta}</p>
        `;
        contenedorStats.appendChild(tarjeta);

        // ¡ESTA ES LA LÍNEA CLAVE QUE HACE QUE LOS NÚMEROS SUBAN!
        const spanNumero = tarjeta.querySelector('.stat-numero');
        animarConteo(spanNumero, item.valor);
    });
}

// Función que anima los números
function animarConteo(elemento, valorFinal) {
    // Le damos un tiempo aleatorio entre 2 y 3 segundos para que no terminen a la vez
    const tiempoTotal = 1500 + (Math.random() * 1000); 
    let tiempoInicio = null;

    function paso(tiempoActual) {
        if (!tiempoInicio) tiempoInicio = tiempoActual;
        // Calculamos cuánto tiempo ha pasado desde que empezó la animación
        const progresoTiempo = tiempoActual - tiempoInicio;
        
        // Calculamos qué porcentaje del tiempo total ha transcurrido (de 0.0 a 1.0)
        let porcentajeTiempo = Math.min(progresoTiempo / tiempoTotal, 1);

        // Transforma un avance lineal en una curva que frena al final
        const porcentajeFrenado = 1 - Math.pow(1 - porcentajeTiempo, 3);

        // Multiplicamos nuestro número final por el porcentaje de la curva
        const valorActual = Math.floor(porcentajeFrenado * valorFinal);
        
        elemento.textContent = valorActual;

        // Si aún no llegamos al 100% del tiempo, pedimos el siguiente "frame"
        if (porcentajeTiempo < 1) {
            requestAnimationFrame(paso);
        } else {
            // Aseguramos que termine en el número exacto
            elemento.textContent = valorFinal;
        }
    }

    // Iniciamos la animación
    requestAnimationFrame(paso);
}
// Ejecutar la creación de tarjetas
renderizarEstadisticas(estadisticas);


// Lógica del botón +1 / -1
let interacciones = 0;
const spanInteracciones = document.querySelector('#contador-interacciones');
const btnSumar = document.querySelector('#btn-sumar');
const btnRestar = document.querySelector('#btn-restar');

if(btnSumar && btnRestar && spanInteracciones) {
    btnSumar.addEventListener('click', () => {
        interacciones++;
        spanInteracciones.textContent = interacciones;
    });

    btnRestar.addEventListener('click', () => {
        if (interacciones > 0) {
            interacciones--;
            spanInteracciones.textContent = interacciones;
        }
    });
}