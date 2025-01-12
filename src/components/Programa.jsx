import React from 'react';
import ProyectoDestacado from './vprogramas/ProyectoDestacado';
import ProgramasEspecificos from './vprogramas/ProgramasEspecificos';
import Servicios from './vprogramas/Servicios';
import Banner from './vprogramas/Banner';

import Footer from "./Footer"; // Corrige la dirección de importación


import './Programa.css';

const Programa = () => {
    return (
        <div className="programa">
            <ProyectoDestacado />
            <ProgramasEspecificos />
            <Servicios />
            <Banner />
            <Footer />
        </div>
    );
};

export default Programa;
