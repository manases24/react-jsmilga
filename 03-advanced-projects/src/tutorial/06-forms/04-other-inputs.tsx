import { useState, ChangeEvent, FormEvent } from "react";

const frameworks = ["react", "angular", "vue", "svelte", "astro", "next"];

export const OtherInputs = () => {
  const [shipping, setShipping] = useState<boolean>(false);
  const [framework, setFramework] = useState<string>("react");

  const handleShipping = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e: ChangeEvent<HTMLSelectElement>) => {
    setFramework(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ shipping, framework });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((fw) => (
              <option key={fw} value={fw}>
                {fw}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
