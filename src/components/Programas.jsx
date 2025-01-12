import './Programas.css';

const programasData = [
  {
    titulo: "Adolescentes",
    descripcion:
      "Desarrollamos programas de salud sexual y reproductiva para adolescentes, abordando temas como educación sexual, prevención de enfermedades de transmisión sexual (ETS), planificación familiar y promoción de la salud integral.",
    link: "/programa",
  },
  {
    titulo: "Personas con Discapacidad",
    descripcion:
      "Promovemos servicios de salud accesibles, respetuosos e inclusivos, adaptados a las necesidades específicas de personas con discapacidades físicas, sensoriales, intelectuales o mentales.",
    link: "/programa",
  },
  {
    titulo: "Comunidades Vulnerables",
    descripcion:
      "Trabajamos para garantizar el acceso a servicios de salud sexual y reproductiva adaptados a las necesidades de comunidades rurales, indígenas, y otros grupos que enfrentan barreras sociales, económicas y geográficas.",
    link: "/programa",
  },
];

const extrasData = [
  {
    titulo: "Contenido Educativo",
    descripcion: "Accede a materiales educativos diseñados para comunidades. Orientación gratuita y de calidad.",
    icono: "📄",
    link: "/contenido-educativo",
  },
  {
    titulo: "Próximos Eventos",
    descripcion: "Consulta nuestro calendario de actividades y eventos.",
    icono: "📅",
    link: "/eventos",
  },
];

const Programas = () => {
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
              onClick={() => window.location.href = programa.link}
            >
              <span>→</span> Descubre
            </button>
          </div>
        ))}
      </div>

      {/* Tarjetas adicionales */}
      <div className="programas-extras">
        {extrasData.map((extra, index) => (
          <div key={index} className="extra-card" onClick={() => window.location.href = extra.link}>
            <h3>{extra.titulo}</h3>
            <hr />
            <p>
              <span>{extra.icono}</span> {extra.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programas;
