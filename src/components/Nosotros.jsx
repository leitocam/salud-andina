import React from "react";
import Hero from "./vnosotros/HeroNos";
import Impacto from "./vnosotros/Impacto";
import MisionVision from "./vnosotros/MisionVision";
import Historia from "./vnosotros/Historia";
import Equipo from "./vnosotros/Equipo";
import Footer from "./Footer"; // Corrige la dirección de importación

const Nosotros = () => {
    return (
        <>
            <Hero />
            <MisionVision />
            <Impacto />
            <Historia />
            <Equipo />
            <Footer />
        </>
    );
};

export default Nosotros;
