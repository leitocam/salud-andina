import React from 'react';
import './ProyectoDestacado.css';
import proyectoImage from '../../assets/proyecto-image.jpg';

const ProyectoDestacado = () => {
    const scrollToProgramas = () => {
        document.getElementById('programas-especificos').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="proyecto-destacado">
            <div className="proyecto-grid">
                {/* Contenido textual */}
                <div className="proyecto-content">
                    <h2 className="proyecto-title">Proyecto Salud Sexual Reproductiva</h2>
                    <p className="proyecto-description">
                        Este proyecto tiene como objetivo mejorar la calidad de vida en comunidades 
                        del norte de Potosí, Oruro y Cochabamba. Nos enfocamos en brindar acceso a 
                        recursos de planificación familiar y educación en salud sexual, especialmente 
                        en comunidades vulnerables.
                    </p>
                    <ul className="proyecto-list">
                        <li>Educación sobre salud sexual y reproductiva.</li>
                        <li>Acceso a métodos anticonceptivos modernos.</li>
                        <li>Capacitación para líderes comunitarios.</li>
                    </ul>
                    <button className="proyecto-button" onClick={scrollToProgramas}>Conoce Más</button>
                </div>
                {/* Imagen del proyecto */}
                <div className="proyecto-image-container">
                    <img 
                        src={proyectoImage} 
                        alt="Proyecto Salud Sexual Reproductiva" 
                        className="proyecto-image" 
                    />
                </div>
            </div>
        </section>
    );
};

export default ProyectoDestacado;
