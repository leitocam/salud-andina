import React from 'react';
import { Link } from 'react-router-dom';
import './Ayuda.css';
import Operadora from '../assets/operadora.jpg';

const Ayuda = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="ayuda-section">
      <div className="ayuda-container">
        <div className="ayuda-image">
          <img src={Operadora} alt="Asistencia" />
        </div>
        <div className="ayuda-text">
          <h2>¿Necesitas ayuda?</h2>
          <Link to="/ayuda" onClick={scrollToTop}>
            <button className="ayuda-button">Contactanos</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ayuda;
