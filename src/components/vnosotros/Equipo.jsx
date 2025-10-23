import React from 'react';
import './Equipo.css';
import teamMember1 from '../../assets/team1.jpg'; // Sustituye con las imágenes reales
import teamMember2 from '../../assets/team2.jpg';

const Equipo = () => {
    const miembros = [
        {
            id: 1,
            nombre: 'Carla Mendieta',
            descripcion: 'Director Nacional. Experta en estrategias organizacionales.',
            imagen: teamMember1,
        },
        {
            id: 2,
            nombre: 'Gabriela Santacruz ',
            descripcion: 'Coordinadora de proyectos sociales en Salud sexual reproductiva y planifiación familiar.',
            imagen: teamMember2,
        },
       
    ];

    return (
        <section className="equipo">
            <h2 className="equipo-title">Equipo</h2>
            <div className="equipo-divider"></div>
            <div className="equipo-container">
                {miembros.map((miembro) => (
                    <div key={miembro.id} className="equipo-card">
                        <div className="equipo-image-wrapper">
                            <img
                                src={miembro.imagen}
                                alt={miembro.nombre}
                                className="equipo-image"
                            />
                        </div>
                        <h3 className="equipo-nombre">{miembro.nombre}</h3>
                        <p className="equipo-descripcion">{miembro.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Equipo;
