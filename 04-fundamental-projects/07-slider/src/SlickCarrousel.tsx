import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { list } from "./api/api";
import { FaQuoteRight } from "react-icons/fa";

export const SlickCarousel = () => {
  const settings = {
    dots: true, // Muestra puntos de navegación debajo del carrusel
    infinite: true, // Hace que el carrusel sea infinito, es decir, una vez que llegas al final, se reinicia desde el principio
    speed: 500, // Establece la velocidad de transición entre slides en milisegundos
    slidesToShow: 2, // Número de slides que se muestran al mismo tiempo
    slidesToScroll: 1, // Número de slides que se desplazan al hacer clic en la flecha de navegación
    // fade: true, // Comentado. Si se activa, permite un efecto de desvanecimiento en lugar de deslizamiento entre los slides
    autoplay: true, // Activa el autoplay, lo que hace que el carrusel avance automáticamente
    autoplaySpeed: 1000, // Intervalo de tiempo (en milisegundos) para avanzar al siguiente slide en autoplay
    pauseOnHover: true, // Pausa el autoplay cuando el usuario pasa el cursor sobre el carrusel
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map(({ id, image, name, title, quote }) => {
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
