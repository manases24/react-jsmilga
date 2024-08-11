import { useState } from "react";
import { data } from "../../data";

type PeopleListProps = {
  id: number;
  name: string;
  removeItem: (id: number) => void;
};

export function UseStateArray() {
  const [people, setPeople] = useState(data);

  function removeItem(id: number) {
    let removePeople = people.filter((p) => p.id !== id);
    setPeople(removePeople);
  }

  return (
    <div>
      {people.map(({ id, name }) => (
        <PeopleList key={id} id={id} name={name} removeItem={removeItem} />
      ))}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
}

function PeopleList({ id, name, removeItem }: PeopleListProps){
  return (
    <div key={id} className="item">
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
}
