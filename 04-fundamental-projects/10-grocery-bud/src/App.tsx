import { useState, useEffect } from "react";
import { Form } from "./Form";
import { ItemType } from "./types";
import { Items } from "./Items";
import { toast, ToastContainer } from "react-toastify";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

const setLocalStorage = (items: ItemType[]) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  // Inicializar el estado con los datos de localStorage
  const [items, setItems] = useState<ItemType[]>(defaultList);

  // Efecto para actualizar localStorage cuando cambian los items
  useEffect(() => {
    setLocalStorage(items);
  }, [items]);

  const addItem = (itemName: string) => {
    const newItems = {
      id: crypto.randomUUID(),
      name: itemName,
      completed: false,
    };
    const updatedItems = [...items, newItems];
    setItems(updatedItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((i) => i.id !== itemId);
    setItems(newItems);
  };

  const toggleItemCompleted = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const editItem = (itemId: string) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  return (
    <section className="section-center">
      {/* <ToastContainer position="top-center" /> */}
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        editItem={editItem}
      />
    </section>
  );
}

export default App;
