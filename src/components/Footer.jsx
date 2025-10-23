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

          /* Redes Sociales */
                <div className="footer-column">
                <h3>REDES SOCIALES</h3>
                <ul>
                  <li><a href="https://wa.me/59174140597" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                  <li><a href="https://www.instagram.com/saludandinaenaccion">Instagram</a></li>
                  <li><a href="https://www.facebook.com/people/Salud-Andina-En-Acci%C3%B3n/61582657107919/?mibextid=wwXIfr&rdid=AEUT3W7ZZWsKby7S&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BTPnpsWvM%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="#tiktok">TikTok</a></li>
                </ul>
                </div>

                {/* Visítanos */}
          <div className="footer-column">
            <h3>VISÍTANOS</h3>
            <p>Calle Colombia N° 576 Piso 3 Oficina 4 entre San Martin y Lanza </p>
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
        <p>{new Date().getFullYear()} Salud Andina En Acción - Todos los Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
