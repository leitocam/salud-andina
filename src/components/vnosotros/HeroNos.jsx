import React from 'react';
import './HeroNos.css';
import backgroundImage from '../../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-content">
                <div className="hero-text-box">
                    <h1 className="hero-title">En Bolivia desde 2020</h1>
                    <p className="hero-description">
                        Trabajando juntos para mejorar la calidad de vida en las comunidades
                        a través de programas de salud, educación y desarrollo comunitario.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
