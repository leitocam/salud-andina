import React, { useState } from 'react';
import './Historia.css';
import creacion from '../../assets/Creacion.jpg';
import Expansion from '../../assets/Expansion.jpg';
import historia24 from '../../assets/Historia-2024.jpg'; // Puedes reemplazar la imagen por las adecuadas para cada evento.
import Recono from '../../assets/Recono.jpg'; // Puedes reemplazar la imagen por las adecuadas para cada evento.
import Convenio from '../../assets/Convenio.jpg'; // Puedes reemplazar la imagen por las adecuadas para cada evento.
import Prim from '../../assets/PrimerP.jpg'; // Puedes reemplazar la imagen por las adecuadas para cada evento.
import Modal from './Modal'; // Modal para mostrar imágenes grandes

const Historia = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const eventos = [
        {
            id: 1,
            fecha: '2020',
            titulo: 'Creación de la ONG',
            descripcion: 'Fundamos nuestra organización con la misión de mejorar la calidad de vida en las comunidades más necesitadas.',
            imagen: creacion,
        },
        {
            id: 2,
            fecha: '2020',
            titulo: 'Inicio del primer proyecto',
            descripcion: 'Comenzamos nuestro primer proyecto en el Norte de Potosí y Cochabamba, enfocándonos en salud y educación.',
            imagen: Prim,
        },
        {
            id: 3,
            fecha: 'Enero 2022',
            titulo: 'Reconocimiento de comunidades por servicio',
            descripcion: 'Recibimos un reconocimiento especial por parte de las comunidades por nuestro compromiso y trabajo social.',
            imagen: Recono,
        },
        {
            id: 4,
            fecha: 'Junio 2022',
            titulo: 'Expansión Nacional del Proyecto',
            descripcion: 'Extendimos nuestras iniciativas a Chuquisaca, Oruro y Santa Cruz, alcanzando a más familias y comunidades.',
            imagen: Expansion,
        },
        {
            id: 5,
            fecha: '2023',
            titulo: 'Convenio con el GAM Santivañez',
            descripcion: 'Firmamos un convenio con el Gobierno Autónomo Municipal de Santivañez para fortalecer nuestros proyectos en la región.',
            imagen: Convenio,
        },
        {
            id: 6,
            fecha: '2024',
            titulo: 'Convenio de Asociación con Distritales de Educación Municipales',
            descripcion: 'Realizamos un trabajo conjunto con los municipios de san pedro , sacaca toro toro y arampampa para realizar talleres educativos en salud sexual reproductiva',
            imagen: historia24,
        },
    ];

    const handleImageClick = (imagen) => {
        setSelectedImage(imagen);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="historia">
            <h2 className="historia-title">Historia</h2>
            <div className="historia-divider"></div>
            <div className="historia-timeline">
                {eventos.map((evento, index) => (
                    <div key={evento.id} className={`historia-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="historia-content">
                            <span className="historia-fecha">{evento.fecha}</span>
                            <h3 className="historia-titulo">{evento.titulo}</h3>
                            <p className="historia-descripcion">{evento.descripcion}</p>
                        </div>
                        <img
                            src={evento.imagen}
                            alt={evento.titulo}
                            className="historia-imagen"
                            onClick={() => handleImageClick(evento.imagen)}
                        />
                        <div className="historia-point"></div>
                    </div>
                ))}
                <div className="historia-line"></div>
            </div>
            {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
        </section>
    );
};

export default Historia;
