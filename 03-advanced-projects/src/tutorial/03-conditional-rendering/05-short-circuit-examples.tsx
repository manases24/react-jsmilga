import { useState } from "react";

type Name = {
  name: string;
}

type State = {
  text: string;
  name: string;
  user: string;
  isEditing: boolean;
}

export function ShortCircuitExamples() {
  const [state, setState] = useState<State>({
    text: "",
    name: "susan",
    user: "john",
    isEditing: true,
  });
  const { text, name, user, isEditing } = state;

  return (
    <div>
      {/* content inside element */}
      <h2>{text || "default value"}</h2>
      {/* toggle element */}
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && <h4>also works</h4>}
      {/* toggle component */}
      {user && <SomeComponent name={name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      {/* inside element */}
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {/* toggle elements/components */}
      {user ? (
        <div>
          <h4>hello there user {name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
}


const SomeComponent = ({ name }: Name) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className="btn">log out</button>
    </div>
  );
};
