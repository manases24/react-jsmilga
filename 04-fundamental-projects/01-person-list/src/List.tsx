import { Person } from "./Person";
import { DataType } from "./types";

export function List({ people }: { people: DataType[] }) {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
}
