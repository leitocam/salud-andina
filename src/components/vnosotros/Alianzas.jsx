import React from 'react';
import './Alianzas.css';
import Recono from '../../assets/Minsa.jpg';
import Convenio from '../../assets/Minicipios.jpg';
import Expansion from '../../assets/Red.png';

const Alianzas = () => {
    const alianzas = [
        { id: 1, nombre: 'Ministerio de Salud (MINSA)', logo: Recono },
        { id: 2, nombre: 'Gobiernos Municipales', logo: Convenio },
        { id: 3, nombre: 'Redes y ONG nacionales e internacionales', logo: Expansion },
    ];

    return (
        <section className="alianzas">
            <h2 className="alianzas-title">Alianzas</h2>
            <div className="alianzas-divider"></div>
            <div className="alianzas-container">
                {alianzas.map((item) => (
                    <article key={item.id} className="alianzas-card" aria-label={item.nombre}>
                        <div className="alianzas-thumb" role="img" aria-label={item.nombre}>
                            <img
                                src={item.logo}
                                alt={item.nombre}
                                loading="lazy"
                                decoding="async"
                                sizes="(max-width: 480px) 64px, (max-width: 1100px) 9.5vw, 112px"
                            />
                        </div>
                        <h3 className="alianzas-name">{item.nombre}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Alianzas;