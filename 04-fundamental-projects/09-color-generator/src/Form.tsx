import { FormEvent, useState } from "react";

type FormProps = {
  addColor: (color: string) => void; 
};

export const Form = ({ addColor }: FormProps) => {
  const [color, setColor] = useState("#f15025"); // Inicializar con un valor por defecto

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    addColor(color); // Llamar a la función addColor con el color actual
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
