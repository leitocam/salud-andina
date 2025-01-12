import React, { useState } from 'react';
import educa from '../../assets/Educacion.svg';
import acceso from '../../assets/Acceso.svg';
import './Servicios.css';

const serviciosData = [
    {
        id: 1,
        titulo: 'Educación en Salud Sexual Reproductiva ',
        descripcionCorta: 'Fomentamos la educación para planifiacación familiar y prevención de enfermedades.',
        descripcionLarga: 'Realizamos talleres, seminarios y campañas educativas para enseñar a las comunidades sobre la importancia de la prevención de enfermedades y el cuidado de su salud.',
        icono: educa
    },
    {
        id: 2,
        titulo: 'Acceso a recursos de prevención',
        descripcionCorta: 'Facilitamos recursos de prevención de enfermedades sexuales.',
        descripcionLarga: 'Ofrecemos recursos como condones, píldoras anticonceptivas, PAE, inyectables trimestrales y vasectomías con el fin de garantizar la salud sexual y reproductiva.',
        icono: acceso 
    },
];

const Servicios = () => {
    const [hovered, setHovered] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <section className="servicios" onMouseMove={handleMouseMove}>
            <h2 className="servicios-title">Servicios</h2>
            <p className="servicios-description">
                Ofrecemos una amplia gama de servicios enfocados en la prevención y el acceso a recursos de salud.
            </p>
            <div className="servicios-grid">
                {serviciosData.map((servicio) => (
                    <div
                        key={servicio.id}
                        className={`servicio-card ${hovered === servicio.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setHovered(servicio.id)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            '--mouse-x': `${mousePosition.x}px`,
                            '--mouse-y': `${mousePosition.y}px`,
                        }}
                    >
                        <div className="servicio-icono">
                            <img src={servicio.icono} alt={servicio.titulo} />
                        </div>
                        <h3 className="servicio-titulo">{servicio.titulo}</h3>
                        <p className="servicio-descripcion">
                            {hovered === servicio.id ? servicio.descripcionLarga : servicio.descripcionCorta}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Servicios;
