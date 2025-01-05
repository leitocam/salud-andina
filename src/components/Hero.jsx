import React from 'react';
import Button from './button';
import './Hero.css';
// Suponiendo que tu imagen de fondo está en src/assets/hero-background.jpg
import heroBackground from '../assets/hero-background.jpg';

const Hero = () => {
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Oscurecer o clarificar con un overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Salud Andina en Acción</h1>
        <p className="hero-description">
          Bienvenidos a Salud Andina en Acción, donde trabajamos de corazón para construir una sociedad más justa y saludable. Nos enfocamos en brindar educación, apoyo y servicios integrales en salud sexual y reproductiva, asegurándonos de que nadie se quede atrás. ¡Juntos hacemos la diferencia!
        </p>
        {/* Botón “Descubre” */}
        <Button />
      </div>
    </section>
  );
};

export default Hero;
