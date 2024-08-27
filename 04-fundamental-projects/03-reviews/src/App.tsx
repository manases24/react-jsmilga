import { useState } from "react";
import people from "./data"; 
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState<number>(0);
  const { name, job, image, text } = people[index];

  // Función para verificar y corregir el número de índice si se sale del rango del array
  function checkNumber(num: number) {
    // Si el número es mayor que el último índice del array, vuelve al primer elemento
    if (num > people.length - 1) {
      return 0;
    }
    // Si el número es menor que 0, vuelve al último elemento del array
    if (num < 0) {
      return people.length - 1;
    }
    // Si el número está dentro del rango, retorna el número tal cual
    return num;
  }

  // Función para avanzar al siguiente elemento en el array
  function nextPerson() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex); // Verifica si el nuevo índice es válido
    });
  }

  // Función para retroceder al elemento anterior en el array
  function prevPerson() {
    setIndex((index) => {
      let newIndex = index - 1; 
      return checkNumber(newIndex); // Verifica si el nuevo índice es válido
    });
  }

  // Función para seleccionar un elemento aleatorio del array
  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length); // Genera un número aleatorio entre 0 y el largo del array
    // Si el número aleatorio es igual al índice actual, avanza al siguiente
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // Establece el nuevo índice usando la función de verificación
    setIndex(checkNumber(randomNumber));
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>

        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
