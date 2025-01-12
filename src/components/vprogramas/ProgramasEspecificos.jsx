import React, { useState } from 'react';
import './ProgramasEspecificos.css';
import adolecentes from '../../assets/adolecentes.jpg';
import discapacidad from '../../assets/discapacidad.jpg';
import vulnerable from '../../assets/vulnerable.jpg';
const programasData = [
    {
        id: 1,
        titulo: 'Adolescentes',
        descripcionCorta: 'Educación en salud sexual y prevención.',
        descripcionLarga: 'Ofrecemos talleres y programas educativos para adolescentes con el objetivo de prevenir embarazos no deseados, infecciones de transmisión sexual y fomentar una educación sexual integral.',
        imagen: adolecentes, // Reemplaza con tu imagen
    },
    {
        id: 2,
        titulo: 'Personas con Discapacidad',
        descripcionCorta: 'Acceso inclusivo a recursos de salud.',
        descripcionLarga: 'Garantizamos que las personas con discapacidad tengan acceso a recursos de salud sexual y reproductiva mediante campañas de inclusión, adaptación de materiales y apoyo comunitario.',
        imagen: discapacidad, // Reemplaza con tu imagen
    },
    {
        id: 3,
        titulo: 'Comunidades Vulnerables',
        descripcionCorta: 'Apoyo a comunidades desfavorecidas.',
        descripcionLarga: 'Trabajamos con comunidades vulnerables para mejorar su acceso a recursos de salud, educación y planificación familiar, adaptándonos a sus necesidades específicas.',
        imagen: vulnerable, // Reemplaza con tu imagen
    },
];

const ProgramasEspecificos = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpand = (id) => {
        setExpanded(expanded === id ? null : id); // Alternar expansión
    };

    return (
        <section id="programas-especificos" className="programas-especificos">
            <h2 className="programas-title">Nuestros Programas</h2>
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
