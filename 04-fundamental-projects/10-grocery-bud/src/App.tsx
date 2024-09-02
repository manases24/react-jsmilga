import { useState } from "react";
import { Form } from "./Form";
import { ItemType } from "./types";


function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  const addItem = (itemName: string) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: itemName,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem}/>
    </section>
  );
}

export default App;
