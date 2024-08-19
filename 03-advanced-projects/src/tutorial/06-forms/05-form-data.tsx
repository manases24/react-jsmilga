import { useState, FormEvent } from "react";

export const UncontrolledInputs = () => {
  const [value, setValue] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Obtén los valores uno por uno
    const name = formData.get("name");
    console.log(name);

    // Obtén todos los valores
    const newUser = Object.fromEntries(formData.entries());
    console.log(newUser);

    // Realiza alguna acción (petición POST, agregar a una lista, etc.)
    // ...

    // Incrementa el valor (forzando un re-render)
    setValue(value + 1);

    // Restablece los valores del formulario
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
