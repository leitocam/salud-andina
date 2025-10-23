import React, { useState } from 'react';
import './Programas.css';
import { useNavigate } from 'react-router-dom';

const programasData = [
  {
    titulo: "Adolescentes",
    descripcion:
      "Brindamos a los adolescentes información, consejería y acceso a servicios de salud sexual y reproductiva , promoviendo decisiones informadas y el ejercicio de sus derechos.",
    link: "/programa#programas-especificos",
  },
  {
    titulo: "Personas con Discapacidad",
    descripcion:
      "Promovemos servicios de salud accesibles, respetuosos e inclusivos, adaptados a las necesidades específicas de personas con discapacidades físicas, sensoriales, intelectuales o mentales.",
    link: "/programa#programas-especificos",
  },
  {
    titulo: "Comunidades Vulnerables",
    descripcion:
      "Trabajamos para garantizar el acceso a servicios de salud sexual y reproductiva adaptados a las necesidades de comunidades rurales, indígenas, y otros grupos que enfrentan barreras sociales, económicas y geográficas.",
    link: "/programa#programas-especificos",
  },
];

const extrasData = [
  {
    titulo: "Contenido Educativo",
    descripcion: "Accede a materiales educativos diseñados para comunidades. Orientación gratuita y de calidad.",
    icono: "📄",
    link: "/orientacion-gratuita",
  },
  {
    titulo: "Próximos Eventos",
    descripcion: "Consulta nuestro calendario de actividades y eventos.",
    icono: "📅",
    link: "/eventos",
  },
];

const Programas = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Hook para navegación

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNavigate = (link) => {
    if (link.includes('#programas-especificos')) {
        navigate('/programa'); // Navegar a la página sin el hash
        setTimeout(() => {
            const section = document.getElementById('programas-especificos');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave al elemento
            }
        }, 300); // Esperar a que la página cargue completamente
    } else {
        navigate(link); // Navegación normal
    }
  };

  return (
    <section className="programas-container">
      {/* Título principal */}
      <h2 className="programas-title">Programas</h2>

      {/* Lista de programas */}
      <div className="programas-list">
        {programasData.map((programa, index) => (
          <div key={index} className="programa-card">
            <h3>{programa.titulo}</h3>
            <p>{programa.descripcion}</p>
            <button
              className="programa-button"
              onClick={() => handleNavigate(programa.link)} // Usar handleNavigate
            >
              <span>→</span> Descubre
            </button>
          </div>
        ))}
      </div>

      {/* Tarjetas adicionales */}
      <div className="programas-extras">
        {extrasData.map((extra, index) => (
          <div
            key={index}
            className="extra-card"
            onClick={extra.titulo === "Próximos Eventos" ? handleModalOpen : () => handleNavigate(extra.link)} // Manejo de navegación
          >
            <h3>{extra.titulo}</h3>
            <hr />
            <p>
              <span>{extra.icono}</span> {extra.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Modal de Próximos Eventos */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>&times;</span>
            <h2>Próximos Eventos</h2>
            <p>Se actualizará el contenido cuando esté disponible.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programas;
