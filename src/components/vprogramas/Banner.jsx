import React from 'react';
import './Banner.css';  // Importamos el archivo CSS para el estilo

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2 className="banner-message">
          Juntos podemos crear un futuro más saludable y equitativo.
        </h2>
        <p className="banner-description">
          Tu apoyo y acción marcan la diferencia en la vida de muchos. ¡Únete a nosotros!
        </p>
      </div>
    </div>
  );
};

export default Banner;
