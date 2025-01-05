import React from 'react';
import './Ayuda.css';
import Operadora from '../assets/operadora.jpg';

const Ayuda = () => {
  return (
    <section className="ayuda-section">
      <div className="ayuda-container">
        <div className="ayuda-image">
          <img src={Operadora} alt="Asistencia" />
        </div>
        <div className="ayuda-text">
          <h2>¿Necesitas ayuda?</h2>
          <button className="ayuda-button">Orientación GRATUITA</button>
        </div>
      </div>
    </section>
  );
};

export default Ayuda;
