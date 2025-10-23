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
                    Somos una organización sin fines
                    de lucro dedicada a promover la
                    salud sexual y reproductiva, con un
                    firme compromiso hacia las
                    poblaciones que enfrentan mayores
                    desafíos para acceder a servicios
                    de calidad. Desde 2020,
                    trabajamos en Bolivia para
                    mejorar la calidad de vida en las
                    comunidades, desarrollando
                    programas de salud, educación y
                    fortalecimiento comunitario.
                    Impulsamos los derechos humanos,
                    contribuyendo a que cada persona
                    pueda vivir con dignidad,
                    autonomía y bienestar.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
