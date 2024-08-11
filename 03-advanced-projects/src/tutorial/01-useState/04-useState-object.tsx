import { useState } from "react";

export function UseStateObject() {
  const [person, setPerson] = useState({
    name: "messi",
    age: 37,
    hobby: "play soccer",
  });

  const displayPerson = () => {
    setPerson({ name: "Emanuel Ginobili", age: 47, hobby: "play basketball" });
    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show ginobili
      </button>
    </>
  );
}
