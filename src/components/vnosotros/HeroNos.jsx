import React from 'react';
import './HeroNos.css';
import backgroundImage from '../../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-content">
                <div className="hero-text-box">
                    <h1 className="hero-title">¿Quiénes somos?</h1>
                    <p className="hero-description">
                    Somos una <strong>organización sin fines
                    de lucro</strong> dedicada a promover la
                    <strong>salud sexual y reproductiva</strong>, con un
                    firme compromiso hacia las
                    poblaciones que enfrentan mayores
                    desafíos para acceder a <strong>servicios
                    de calidad</strong>. Desde <strong>2020</strong>,
                    trabajamos en <strong>Bolivia</strong> para
                    mejorar la <strong>calidad de vida</strong> en las
                    comunidades, desarrollando
                    programas de <strong>salud, educación</strong> y
                    <strong>fortalecimiento comunitario</strong>.
                    Impulsamos los <strong>derechos humanos</strong>,
                    contribuyendo a que cada persona
                    pueda vivir con <strong>dignidad,
                    autonomía y bienestar</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
