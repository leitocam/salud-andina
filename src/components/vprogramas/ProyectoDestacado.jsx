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
                    <h2 className="proyecto-title">NUESTROS PROGRAMAS</h2>
                    <p className="proyecto-description">
                    En Salud Andina en Acción, trabajamos por el bienestar integral de las comunidades del norte de Potosí, Oruro y Cochabamba. 
                    Nuestros programas promueven el ejercicio de los derechos sexuales y reproductivos, la educación integral en sexualidad y el acceso equitativo a servicios de salud para adolescentes, mujeres, varones y personas con discapacidad. 
                    </p>
                    <ul className="proyecto-list">
                        <li>Salud Sexual y Reproductiva</li>
                        <li>Educación Integral en Sexualidad</li>
                        <li>Inclusión y Discapacidad</li>
                        <li>Fortalecimiento Comunitario</li>
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
