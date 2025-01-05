import React from 'react'
import './QuienesSomos.css';
import groupImage from '../assets/quienes-somos.jpg'; // Asegúrate de usar la ruta correcta de tu imagen

const QuienesSomos = () => {
    return (
    <section className="quienes-somos-container">
      <div className="quienes-somos-image">
        <img src={groupImage} alt="Grupo de trabajo" />
      </div>

      <div className="quienes-somos-content">
        <h2>¿Quiénes somos?</h2>

        <h3>Misión</h3>
        <p>
        "Promover y garantizar el ejercicio pleno de los derechos sexuales y reproductivos de las comunidades vulnerables, adolescentes y personas con discapacidad...
        <button className="quienes-somos-button">
          Ver Más 
        </button>
        </p>
      
        <h3>Visión</h3>
        <p>
        "Ser líderes en la provisión de servicios de salud sexual y reproductiva y planificación familiar...                              
        <button className="quienes-somos-button">
          Ver Más
        </button>
         </p>
      </div>
    </section>
  );
};

export default QuienesSomos;
