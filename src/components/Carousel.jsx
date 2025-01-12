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
import Im13 from '../assets/carru/Im13.png'
import Im14 from '../assets/carru/Im14.png'
import Im15 from '../assets/carru/Im15.png'



// ...


const data = [
  { src: Im1, title: 'Campaña de Orientación y consejería en centros de atención comunitaria.' },
  { src: Im2, title: 'Apoyo integral a personas en entornos rurales, ofreciendo cuidado y atención personalizada.' },
  { src: Im3, title: 'Trabajo de transporte en coordinación al Ministerio de Salud .' },
  { src: Im4, title: 'Orientación educativa personalizada para promover derechos y salud sexual en comunidades vulnerables.' },
  { src: Im5, title: 'Consejeria y orientación en salud sexual y reproductiva dentro de la comunidad.' },
  { src: Im6, title: 'Visitas domiciliarias del equipo voluntario para brindar enseñanza y apoyo en salud sexual.' },
  { src: Im7, title: 'Charalas a grupos de mujeres en comunidades rurales.' },
  { src: Im8, title: 'Sesión educativa para jovenes y adolescentes en unidades educativas rurales.' },
  { src: Im9, title: 'Talleres de concientización en comunidades indigenas, promoviendo la salud sexual reproductiva.' },
  { src: Im10, title: 'Atención personalizada y cuidado en clínicas rurales, centrados en la salud y bienestar de las comunidades.' },
  { src: Im11, title: 'Profesionales comprometidos en la gestión de datos para mejorar los servicios y garantizar un trato integral.' },
  { src: Im12, title: 'Fortalecimiento del equipo de voluntarios Saea para brindar atención integral.' },
  { src: Im13, title: 'Mujeres reunidas en charlas de orientación sobre salud sexual y reproductiva.' },
  { src: Im14, title: 'Feria integral de salud en comunidades rurales.' },
  { src: Im15, title: 'Cursillos Comunales al aire libre, por parte de voluntarios de la fundación.' }
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
