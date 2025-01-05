import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Encabezado principal */}
        <h2 className="footer-title">Salud Andina En Acción</h2>

       

        {/* Cuatro columnas */}
        <div className="footer-columns">
          {/* Escríbenos */}
          <div className="footer-column">
            <h3>ESCRÍBENOS</h3>
            <p>soporte@ongsaludandina.com</p>
          </div>

          {/* Redes Sociales */}
          <div className="footer-column">
            <h3>REDES SOCIALES</h3>
            <ul>
              <li><a href="#whatsapp">WhatsApp</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#tiktok">TikTok</a></li>
            </ul>
          </div>

          {/* Visítanos */}
          <div className="footer-column">
            <h3>VISÍTANOS</h3>
            <p>Calle Reza N°. 250 entre Junín y Hamiraya </p>
            <p>Cochabamaba - Bolivia  </p>
          </div>

          {/* Llámanos */}
          <div className="footer-column">
            <h3>LLÁMANOS</h3>
            <p>+591 4-42439946</p>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer-bottom">
        <p>2024 Salud Andina En Acción - Todos los Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
