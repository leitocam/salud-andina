import React from 'react';
import './MisionVision.css';
import visionImage from '../../assets/vision.jpg'; // Reemplaza con la ruta de tu imagen
import misionImage from '../../assets/mision.jpg'; // Reemplaza con la ruta de tu imagen

const MisionVision = () => {
    return (
        <section id="mision-vision" className="mision-vision">
            <h2 className="mision-vision-title">¿Quiénes somos?</h2>
            <div className="mision-vision-divider"></div>
            <div className="mision-vision-container">
                {/* Visión */}
                <div className="mision-vision-item">
                    <img src={visionImage} alt="Visión" className="mision-vision-image" />
                    <div className="mision-vision-card">
                        <h3 className="mision-vision-card-title">Visión</h3>
                        <p className="mision-vision-card-text">
                                 "Ser líderes en la provisión de servicios de salud sexual y reproductiva y planificación familiar, reconocidos por nuestra excelencia, innovación y compromiso con la equidad y el respeto a los derechos humanos. Aspiramos a ser una institución referente a nivel nacional e internacional en la promoción de una vida sexual y reproductiva saludable, inclusiva y libre de discriminación, contribuyendo a la construcción de una sociedad justa, igualitaria y empoderada, donde todas las personas puedan vivir con dignidad, autonomía y bienestar."                 
                           </p>
                    </div>
                </div>
                {/* Misión */}
                <div className="mision-vision-item reverse">
                    <img src={misionImage} alt="Misión" className="mision-vision-image" />
                    <div className="mision-vision-card">
                        <h3 className="mision-vision-card-title">Misión</h3>
                        <p className="mision-vision-card-text">
                        "Promover y garantizar el ejercicio pleno de los derechos sexuales y reproductivos de las comunidades vulnerables, adolescentes y personas con discapacidad, a través de la prestación de servicios de salud sexual y reproductiva integrales, accesibles, inclusivos y de calidad. 
                            Nuestro compromiso se centra en la educación, prevención, atención y apoyo en planificación familiar, contribuyendo al bienestar, autonomía y desarrollo integral de todas las personas, en un marco de equidad, respeto a la diversidad y promoción de una vida sexual y reproductiva saludable y segura." 
                         </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MisionVision;
