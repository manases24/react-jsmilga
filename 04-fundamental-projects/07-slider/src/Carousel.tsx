import { useEffect, useState } from "react";
import { shortList, list, longList } from "./api/api";
import { Person } from "./api/types";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Carousel = () => {
  const [people, setPeople] = useState<Person[]>(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((prevIndex) => {
      // Si el índice actual es 0 (es decir, estamos en el primer elemento),
      // entonces queremos movernos al último elemento de la lista.
      // Esto se logra devolviendo `people.length - 1`, que es el índice del último elemento.
      // Si no estamos en el primer elemento, simplemente restamos 1 del índice actual
      // para movernos al elemento anterior.
      return prevIndex === 0 ? people.length - 1 : prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((prevIndex) => {
      // Si el índice actual es el último de la lista (`people.length - 1`),
      // entonces queremos movernos al primer elemento de la lista.
      // Esto se logra devolviendo `0`, que es el índice del primer elemento.
      // Si no estamos en el último elemento, simplemente sumamos 1 al índice actual
      // para movernos al siguiente elemento.
      return prevIndex === people.length - 1 ? 0 : prevIndex + 1;
    });
  };
  
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  
  
  return (
    <section className='slider-container'>
      {people.map(({ id, image, name, title, quote }, personIndex) => {
      
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
