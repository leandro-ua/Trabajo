import React, { useState, useEffect } from 'react';
import './index.css'; 
import ListaServicios from './components/ListaServicios';

function App() {
    // 1. Estado para el modo oscuro
    const [modoOscuro, setModoOscuro] = useState(false);

    // 2. Estado para el contador de interacciones
    const [interacciones, setInteracciones] = useState(0);

    // 3. Lógica del saludo dinámico
    const horaActual = new Date().getHours();
    let mensajeSaludo = '¡Buenas noches!';
    if (horaActual >= 6 && horaActual < 12) {
        mensajeSaludo = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {
        mensajeSaludo = '¡Buenas tardes!';
    }

    // Efecto para aplicar la clase al body cuando cambie el modo oscuro
    useEffect(() => {
        if (modoOscuro) {
            document.body.classList.add('modo-oscuro');
        } else {
            document.body.classList.remove('modo-oscuro');
        }
    }, [modoOscuro]);

    return (
        <div className="layout">
            <header className="area-header header">
                <div>
                    <span id="saludo">{mensajeSaludo}</span> | Próximamente : página de videojuego
                </div>
                {/* Botón modo claro/oscuro con evento onClick de React */}
                <button 
                    id="boton-tema" 
                    onClick={() => setModoOscuro(!modoOscuro)}
                >
                    {modoOscuro ? '☀️ Modo claro' : '🌙 Modo oscuro'}
                </button>
            </header>

            <nav className="area-nav navegacion">
                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Características</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>

            <main className="area-hero hero">
                <h1>Estamos trabajando en ello</h1>
                <h2>Envíe un mensaje de por qué debería participar en la beta</h2>
            </main>

            {/* Componente del Ejercicio 1 */}
            <ListaServicios />

            <section className="area-stats stats my-5 text-center">
                <h2>Nuestros Números</h2>
                <div id="panel-estadisticas" className="d-flex justify-content-center flex-wrap gap-3 my-4">
                </div>

                <div id="panel-interacciones" className="mt-5">
                    <h3>¿Hypeado por el juego?, deja tu like para mostrarnos tu apoyo</h3>
                    {/* El número ahora lee la variable de estado 'interacciones' */}
                    <h3><span id="contador-interacciones">{interacciones}</span></h3>
                    
                    {/* Botones de suma y resta usando onClick y setInteracciones */}
                    <button 
                        id="btn-sumar" 
                        className="btn btn-success me-2"
                        onClick={() => setInteracciones(interacciones + 1)}
                    >
                        +1
                    </button>
                    <button 
                        id="btn-restar" 
                        className="btn btn-danger"
                        onClick={() => interacciones > 0 && setInteracciones(interacciones - 1)}
                    >
                        -1
                    </button>
                </div>
            </section>

            <form action="/enviar" method="post" className="area-form">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="correo" required />

                <label htmlFor="mensaje">Mensaje:</label>
                <input type="text" id="mensaje" required minLength="10" />

                <button type="submit">Enviar</button>
            </form>

            <footer className="area-footer">
                Contacto : +56 9 1234 5678 - correo@ejemplo.com
            </footer>
        </div>
    );
}

export default App;