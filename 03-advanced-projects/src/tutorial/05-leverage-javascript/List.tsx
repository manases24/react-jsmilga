import { people } from "../../data";
import { PeopleType } from "../../types";
import { Person } from "./Person";

export function List() {
  return (
    <div>
      {people.map((person: PeopleType) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}
