import React, { useState } from 'react';
import './ProgramasEspecificos.css';
import saludSR from '../../assets/salud-sexual-reproductiva.jpg';
import eis from '../../assets/Educa.JPG';
import inclusion from '../../assets/discapacidad.jpg';
import comunidad from '../../assets/fortalecimiento-comunitario.jpg';

const programasData = [
    {
        id: 1,
        titulo: 'Salud Sexual y Reproductiva',
        descripcionCorta: 'Promovemos el acceso a información y servicios de calidad en planificación familiar, prevención de embarazos no planificados y atención integral en salud sexual y reproductiva.',
        descripcionLarga: 'Acciones principales:\n• Orientaciones y conserjerías en métodos anticonceptivos.\n• Inserción y retiro de métodos modernos (DIU, Implantes, inyectables, etc.).\n• Coordinación con el Ministerio de Salud para dar funcionamiento a los Ambientes Diferenciados para Adolescentes (AIDA)\n• Apoyo a los Municipios en la dotación de insumos y capacitación al personal del Ministerio de Salud.',
        imagen: saludSR,
    },
    {
        id: 2,
        titulo: 'Educación Integral en Sexualidad (EIS)',
        descripcionCorta: 'Buscamos fortalecer conocimientos, actitudes y valores para una vida saludable y responsable.',
        descripcionLarga: 'Ayudamos a estudiantes, docentes, madres y padres de familia.\nEnfoques:\n• Sexualidad, género y derechos humanos.\n• Prevención de violencia y embarazos en adolescentes\n• Educación emocional y toma de decisiones responsables.',
        imagen: eis,
    },
    {
        id: 3,
        titulo: 'Inclusión y Discapacidad',
        descripcionCorta: 'Impulsamos la inclusión de personas con discapacidad en el acceso a la salud sexual y reproductiva, eliminando barreras físicas, comunicacionales y actitudinales.',
        descripcionLarga: 'Actividades:\n• Formación a personal de salud en atención inclusiva.\n• Adaptación de materiales educativos accesibles.\n• Promoción de derechos y participación activa.',
        imagen: inclusion,
    },
    {
        id: 4,
        titulo: 'Fortalecimiento Comunitario',
        descripcionCorta: 'Trabajamos con líderes locales, organizaciones sociales y autoridades municipales para promover entornos saludables y sostenibles.',
        descripcionLarga: 'Líneas de acción:\n• Formación de líderes comunitarios.\n• Ferias de salud y campañas informativas\n• Coordinación con el Ministerio de Salud, Ministerio de Educación y las redes de salud municipales.',
        imagen: comunidad,
    },
];

const ProgramasEspecificos = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section id="programas-especificos" className="programas-especificos">
            <h2 className="programas-title">Conoce cada uno de ellos </h2>
            <div className="programas-grid">
                {programasData.map((programa) => (
                    <div
                        key={programa.id}
                        className={`programa-card ${expanded === programa.id ? 'expanded' : ''}`}
                        onClick={() => handleExpand(programa.id)}
                    >
                        <div className="programa-image-container">
                            <img src={programa.imagen} alt={programa.titulo} className="programa-image" />
                        </div>
                        <div className="programa-content">
                            <h3 className="programa-titulo">{programa.titulo}</h3>
                            <p className="programa-descripcion">{programa.descripcionCorta}</p>
                        </div>
                        {expanded === programa.id && (
                            <div className="programa-detalle">
                                <p>{programa.descripcionLarga}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramasEspecificos;
