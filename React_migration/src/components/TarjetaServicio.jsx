import React from 'react';

function TarjetaServicio({ titulo, descripcion, icono }) {
    return (
        <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 p-3 shadow-sm">
                <h3>{icono} {titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default TarjetaServicio;