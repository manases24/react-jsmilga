import { FormEvent, useState } from "react";

export function ControlledInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          name
        </label>
        <input
          className="form-input"
          type="text"
          id={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor={email} className="form-label">
          email
        </label>
        <input
          className="form-input"
          type="text"
          id={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
}
