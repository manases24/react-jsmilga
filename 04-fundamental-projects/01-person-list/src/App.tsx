import { useState } from "react";
import { List } from "./List";
import { data } from "./data";

import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
