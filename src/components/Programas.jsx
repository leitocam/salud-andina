import React, { useState } from 'react';
import './Programas.css';
import { useNavigate } from 'react-router-dom';

const programasData = [
  {
    titulo: "Salud Sexual y Reproductiva",
    descripcion:
      "Promovemos el acceso a información y servicios de calidad en planificación familiar, prevención de embarazos no planificados y atención integral en salud sexual y reproductiva.",
    link: "/programa#programas-especificos",
  },
  {
    titulo: "Educación Integral en Sexualidad (EIS)",
    descripcion:
      "Buscamos fortalecer conocimientos, actitudes y valores para una vida saludable y responsable.",
    link: "/programa#programas-especificos",
  },
  {
    titulo: "Inclusión y Discapacidad",
    descripcion:
      "Impulsamos la inclusión de personas con discapacidad en el acceso a la salud sexual y reproductiva, eliminando barreras físicas, comunicacionales y actitudinales.",
    link: "/programa#programas-especificos",
  },
  {
    titulo: "Fortalecimiento Comunitario",
    descripcion:
      "Trabajamos con líderes locales, organizaciones sociales y autoridades municipales para promover entornos saludables y sostenibles.",
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
