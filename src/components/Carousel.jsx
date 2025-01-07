import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Carousel.css'
import Im1 from '../assets/carru/Im1.jpg'
import Im2 from '../assets/carru/Im2.jpg'
import Im3 from '../assets/carru/Im3.jpg'
import Im4 from '../assets/carru/Im4.jpg'
import Im5 from '../assets/carru/Im5.jpg'
import Im6 from '../assets/carru/Im6.jpg'
import Im7 from '../assets/carru/Im7.jpg'
import Im8 from '../assets/carru/Im8.jpg'
import Im9 from '../assets/carru/Im9.jpg'
import Im10 from '../assets/carru/Im10.jpg'
import Im11 from '../assets/carru/Im11.jpg'
import Im12 from '../assets/carru/Im12.jpg'



// ...


const data = [
  // Tus 12 imágenes, por ejemplo:
  { src: Im1, title: 'Stand informativo, promoviendo salud sexual y reproductiva con creatividad y compromiso.' },
  { src: Im2, title: 'Apoyo integral a pacientes en entornos rurales, ofreciendo cuidado y atención personalizada.' },
  { src: Im3, title: 'Familias beneficiadas en el transporte seguro hacia los centros de atención comunitaria.' },
  { src: Im4, title: 'Orientación educativa personalizada para promover derechos y salud sexual en comunidades vulnerables.' },
  { src: Im5, title: 'Participación en ferias comunitarias con actividades dinámicas y educativas.' },
  { src: Im6, title: 'Talleres interactivos con enfoque en métodos de planificación familiar para la comunidad.' },
  { src: Im7, title: 'Representación creativa de métodos anticonceptivos en eventos educativos comunitarios.' },
  { src: Im8, title: 'Promoción de salud sexual inclusiva con actividades que generan impacto y conciencia social.' },
  { src: Im9, title: 'Talleres de concientización en comunidades indigenas, promoviendo la salud sexual reproductiva.' },
  { src: Im10, title: 'Atención personalizada y cuidado en clínicas rurales, centrados en la salud y bienestar de las comunidades.' },
  { src: Im11, title: 'Profesionales comprometidos en la gestión de datos para mejorar los servicios y garantizar un trato integral.' },
  { src: Im12, title: 'Niño en un entorno rural que refleja los retos diarios y la importancia de llevar ayuda directa a los hogares.' }
]

const Carousel = () => {
  const settings = {
    dots: true,          // Muestra puntitos de navegación
    infinite: true,      // Loop infinito
    speed: 500,          // Velocidad de la transición (ms)
    slidesToShow: 4,     // Cuántas imágenes se ven simultáneamente en escritorio
    slidesToScroll: 1,   // Avanza de 1 en 1 con cada clic/flecha
    arrows: true,        // Flechas de navegación
    autoplay: true,      // Habilita el auto-scroll
    autoplaySpeed: 3000, // Intervalo de auto-scroll en milisegundos (3 segundos)
    responsive: [
      {
        breakpoint: 1024,   // Ancho máximo de 1024px
        settings: {
          slidesToShow: 3   // Muestra 3 imágenes a la vez
        }
      },
      {
        breakpoint: 768,    // Ancho máximo de 768px
        settings: {
          slidesToShow: 2   // Muestra 2 imágenes a la vez
        }
      },
      {
        breakpoint: 480,    // Ancho máximo de 480px
        settings: {
          slidesToShow: 1   // Muestra 1 imagen a la vez
        }
      }
    ]
  }

  return (
    <div id="carousel-section" className="carousel-container">
      <h2 className="fotos-title">Historias en Acción</h2>
      <Slider {...settings}>
        {data.map((item, idx) => (
          <div key={idx} className="carousel-slide">
            <img 
              src={item.src}
              alt={`Imagen ${idx + 1}`}
              className="carousel-img"
            />
            <h4 className="carousel-text">{item.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
