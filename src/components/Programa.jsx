import React, { useEffect } from 'react';
import ProyectoDestacado from './vprogramas/ProyectoDestacado';
import ProgramasEspecificos from './vprogramas/ProgramasEspecificos';
import Servicios from './vprogramas/Servicios';
import Banner from './vprogramas/Banner';

import Footer from "./Footer"; 


import './Programa.css';

const Programa = () => {
    useEffect(() => {
        const hash = window.location.hash; // Obtener el hash de la URL
        if (hash === '#programas-especificos') {
            const section = document.getElementById('programas-especificos');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave al elemento
            }
        }
    }, []); 

    return (
        <div className="programa">
            <ProyectoDestacado />
            <section id="programas-especificos">
                <ProgramasEspecificos />
            </section>
            <Servicios />
            <Banner />
            <Footer />
        </div>
    );
};

export default Programa;
