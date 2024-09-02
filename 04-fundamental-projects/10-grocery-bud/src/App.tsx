import { useState } from "react";
import { Form } from "./Form";
import { ItemType } from "./types";
import { Items } from "./Items";

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

  const removeItem = (itemId: string) => {
    const item = items.filter((i) => i.id !== itemId);
    return item;
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem}/>
    </section>
  );
}

export default App;
