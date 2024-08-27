import { useState } from 'react';             // Importamos el hook useState de React para manejar el estado local.
import { questions as data } from './data';   // Importamos las preguntas desde un archivo de datos (presumiblemente un array de objetos).
import { Questions } from './Questions';      // Importamos el componente Questions, que probablemente renderiza la lista de preguntas.

function App() {
  // Estado local que almacena las preguntas.
  const [questions, setQuestions] = useState(data);

  // Estado local que almacena el ID de la pregunta actualmente activa (expandida).
  const [activeId, setActiveId] = useState<number | null>(null);

  // Función que se llama cuando se hace clic en una pregunta para expandirla o contraerla.
  const toggleQuestion = (id: number) => {
    // Si la pregunta clicada ya está activa, la desactivamos; de lo contrario, activamos la nueva.
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      {/* Renderizamos el componente Questions, pasándole las preguntas, el ID activo y la función para alternar entre preguntas */}
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default App;
