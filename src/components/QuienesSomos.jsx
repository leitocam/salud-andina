import React from 'react'
import './QuienesSomos.css';
import groupImage from '../assets/quienes-somos.jpg'; // Asegúrate de usar la ruta correcta de tu imagen
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
          <Link to="/nosotros#mision" onClick={() => {
              setTimeout(() => {
                  document.getElementById('mision').scrollIntoView({ behavior: 'smooth' });
              }, 100);
          }}>Ver Más</Link>
        </button>
        </p>
      
        <h3>Visión</h3>
        <p>
        "Ser líderes en la provisión de servicios de salud sexual y reproductiva y planificación familiar...                              
        <button className="quienes-somos-button">
          <Link to="/nosotros#vision" onClick={() => {
              setTimeout(() => {
                  document.getElementById('vision').scrollIntoView({ behavior: 'smooth' });
              }, 100);
          }}>Ver Más</Link>
        </button>
         </p>
      </div>
    </section>
  );
};

export default QuienesSomos;
