import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Carousel.css'
import Im1 from '../assets/carru/Im1.jpg'
import Im2 from '../assets/carru/Im2.jpg'
//import Im3 from '../assets/carru/Im3.jpg'
import Im4 from '../assets/carru/Im4.jpg'
import Im5 from '../assets/carru/Im5.jpg'
import Im6 from '../assets/carru/Im6.jpg'
import Im7 from '../assets/carru/Im7.jpg'
import Im8 from '../assets/carru/Im8.jpg'
import Im9 from '../assets/carru/Im9.jpg'
import Im10 from '../assets/carru/Im10.jpg'
import Im11 from '../assets/carru/Im11.jpg'
import Im12 from '../assets/carru/Im12.jpg'
import Im13 from '../assets/carru/Im13.png'
import Im14 from '../assets/carru/Im14.png'
import Im15 from '../assets/carru/Im15.png'



// ...


const data = [
  { src: Im1, title: 'Provisión de Información para la Toma de Decisiones Informadas en Salud Sexual y Reproductiva.' },
  { src: Im2, title: 'Apoyo integral a personas, ofreciendo cuidado y atención personalizada.' },
  { src: Im4, title: 'Orientación sobre Derechos Sexuales y Derechos Reproductivos.' },
  { src: Im5, title: 'Asesoramiento y Orientación en Salud Sexual y Reproductiva en los Establecimientos de Salud del MINSA.' },
  { src: Im6, title: 'Visitas Domiciliarias para brindar Asesoría en Salud Sexual y Reproductiva.' },
  { src: Im7, title: 'Charlas a grupos de mujeres en comunidades rurales.' },
  { src: Im8, title: 'Sesiones Educativas para Adolescentes en Educación Integral en Sexualidad.' },
  { src: Im9, title: 'Talleres de Sensibilización para la Promoción de la Salud Sexual y Reproductiva.' },
  { src: Im10, title: 'Atención Personalizada, Enfocada en la Salud y el Bienestar de las Comunidades.' },
  { src: Im11, title: 'Profesionales comprometidos en la gestión de datos para mejorar los servicios y garantizar un trato integral.' },
  { src: Im12, title: 'Fortalecimiento del Equipo SAEA para la Prestación de Atención Integral en Salud Sexual.' },
  { src: Im13, title: 'Mujeres reunidas en charlas de orientación sobre salud sexual y reproductiva.' },
  { src: Im14, title: 'Ferias Integrales de Salud en Coordinación con el MINSA.' },
  { src: Im15, title: 'Cursillos , impartiendo temas de salud sexual y reproductiva.' }
]

const Carousel = () => {
  const settings = {
    dots: true,          // Muestra puntitos de navegación
    infinite: true,      // Loop infinito
    speed: 1000,          // Velocidad de la transición (ms)
    slidesToShow: 4,     // Cuántas imágenes se ven simultáneamente en escritorio
    slidesToScroll: 1,   // Avanza de 1 en 1 con cada clic/flecha
    arrows: true,        // Flechas de navegación
    autoplay: true,      // Habilita el auto-scroll
    autoplaySpeed: 6000, // Intervalo de auto-scroll en milisegundos (3 segundos)
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
