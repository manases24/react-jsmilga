import { useState } from 'react';
import { text as data} from './api/api'; 
import { nanoid } from 'nanoid'; 

const App = () => {
  // Estado para el número de párrafos que se desean mostrar
  const [count, setCount] =  useState<number>(1);
  
  // Estado para almacenar los párrafos que se van a mostrar
  const [text, setText] = useState<string[]>([]);

  // Manejador de eventos para el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (enviar datos)

    // Convierte el valor de count a un número entero
    let amount = parseInt(count.toString());
    
    // Actualiza el estado text con una porción del array original según el valor de amount
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))} // Actualiza el estado count cuando el valor cambia
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {/* Mapea los párrafos del estado text y los renderiza */}
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
