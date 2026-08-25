import React from 'react';
import TarjetaServicio from './TarjetaServicio';

const servicios = [
    { id: 1, icono: "🌍", titulo: "Mundo Abierto", descripcion: "Explora un vasto universo lleno de misterios por descubrir." },
    { id: 2, icono: "👥", titulo: "Multijugador", descripcion: "Compite o coopera con jugadores de todo el mundo en tiempo real." },
    { id: 3, icono: "✨", titulo: "Gráficos Épicos", descripcion: "Impulsado por tecnología de última generación." },
    { id: 4, icono: "🛠️", titulo: "Soporte Continuo", descripcion: "Actualizaciones constantes y eventos de temporada." }
];

function ListaServicios() {
    // Renderizado condicional solicitado
    if (servicios.length === 0) {
        return <p className="text-center">No hay características disponibles en este momento.</p>;
    }

    return (
        <section className="area-features features">
            <div className="row w-100">
                {servicios.map((servicio) => (
                    <TarjetaServicio 
                        key={servicio.id}
                        icono={servicio.icono}
                        titulo={servicio.titulo}
                        descripcion={servicio.descripcion}
                    />
                ))}
            </div>
        </section>
    );
}

export default ListaServicios;