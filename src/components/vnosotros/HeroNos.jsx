import React, { useEffect, useState } from 'react';
import './HeroNos.css';
import backgroundImage from '../../assets/hero-bg.jpg';

// Hook simple para detectar ancho de pantalla
const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < breakpoint : false);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isMobile;
};

const Hero = () => {
    const isMobile = useIsMobile(768);
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: isMobile ? 'center top' : 'center',
                minHeight: isMobile ? '60vh' : '70vh',
            }}
        >
            <div className="hero-content" style={{ padding: isMobile ? '56px 16px' : '84px 24px' }}>
                <div className="hero-text-box">
                    <h1 className="hero-title" style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', lineHeight: 1.2 }}>¿Quiénes somos?</h1>
                    <p className="hero-description" style={{ fontSize: isMobile ? '1rem' : '1.05rem', lineHeight: 1.7 }}>
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
