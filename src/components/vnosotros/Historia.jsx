import React, { useState } from 'react';
import './Historia.css';
import historia1 from '../../assets/Historia1.png';
import Modal from './Modal'; // Modal para mostrar imágenes grandes

const Historia = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const eventos = [
        {
            id: 1,
            fecha: '1950',
            titulo: 'Inicio de nuestras actividades',
            descripcion: 'Comenzamos nuestro camino con un enfoque en la salud comunitaria.',
            imagen: historia1,
        },
        {
            id: 2,
            fecha: '1954',
            titulo: 'Expansión internacional',
            descripcion: 'Llegamos a nuevos países con proyectos sostenibles.',
            imagen: historia1,
        },
        {
            id: 3,
            fecha: '1980',
            titulo: 'Reconocimiento global',
            descripcion: 'Fuimos reconocidos por nuestras iniciativas innovadoras.',
            imagen: historia1,
        },
        {
            id: 4,
            fecha: '1980',
            titulo: 'Reconocimiento global',
            descripcion: 'Fuimos reconocidos por nuestras iniciativas innovadoras.',
            imagen: historia1,
        },
        {
            id: 5,
            fecha: '1980',
            titulo: 'Reconocimiento global',
            descripcion: 'Fuimos reconocidos por nuestras iniciativas innovadoras.',
            imagen: historia1,
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
