import React, { useState } from 'react';
import iconSalud from '../../assets/servicios-salud-sexual.svg';
import iconEducacion from '../../assets/servicios-educacion.svg';
import iconInclusiva from '../../assets/servicios-inclusiva.svg';
import iconApoyo from '../../assets/servicios-apoyo-salud.svg';
import iconReferencia from '../../assets/servicios-referencia.svg';
import './Servicios.css';

const serviciosData = [
    {
        id: 1,
        titulo: 'Atención en Salud Sexual y Reproductiva',
        descripcionCorta: 'Orientación y planificación familiar con métodos anticonceptivos modernos.',
        descripcionLarga: 'Orientación y consejería personalizada sobre métodos anticonceptivos modernos, inserción y retiro de DIU e implantes y atención en planificación familiar.',
        icono: iconSalud
    },
    {
        id: 2,
        titulo: 'Educación y Sensibilización',
        descripcionCorta: 'Sesiones, talleres y charlas sobre sexualidad, género y derechos.',
        descripcionLarga: 'Sesiones educativas, talleres y charlas dirigidas a adolescentes, padres de familia, docentes y líderes comunitarios sobre sexualidad, género y derechos.',
        icono: iconEducacion
    },
    {
        id: 3,
        titulo: 'Atención Inclusiva',
        descripcionCorta: 'Acompañamiento a personas con discapacidad con materiales adaptados.',
        descripcionLarga: 'Acompañamiento y orientación a personas con discapacidad, garantizando un acceso a los servicios de salud y materiales adaptados.',
        icono: iconInclusiva
    },
    {
        id: 4,
        titulo: 'Apoyo a Servicios de Salud',
        descripcionCorta: 'Capacitación, dotación de métodos y coordinación con AIDA y municipios.',
        descripcionLarga: 'Capacitación al personal de salud, dotación de métodos anticonceptivos y coordinación con los Ambientes Diferenciados para Adolescentes (AIDA) y municipios.',
        icono: iconApoyo
    },
    {
        id: 5,
        titulo: 'Referencia y Acompañamiento',
        descripcionCorta: 'Derivación a servicios especializados con acompañamiento.',
        descripcionLarga: 'Derivación a servicios especializados y acompañamiento.',
        icono: iconReferencia
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
