import { useState, useEffect } from "react";
import { Form } from "./Form";
import { ItemType } from "./types";
import { Items } from "./Items";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuid } from "uuid";
import { TasksApiAdapter } from "./utils";

const url = "http://localhost:5000/api/tasks";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const taskApi = new TasksApiAdapter();

  const fetchTask = async () => {
    try {
      const data = await taskApi.get<{ taskList: ItemType[] }>(url);
      const { taskList } = data;

      // Asegurarse de que `taskList` sea un array antes de asignarlo
      if (Array.isArray(taskList)) {
        setItems(taskList);
      } else {
        console.error("Expected taskList to be an array");
        setItems([]); // Mantén `items` como un array vacío si la estructura no es correcta
      }
    } catch (error) {
      console.error("Failed to fetch tasks", error);
      setItems([]); // Mantén `items` como un array vacío en caso de error
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const addItem = (itemName: string) => {
    const newItems = {
      id: uuid(),
      name: itemName,
      completed: false,
    };
    const updatedItems = [...items, newItems];
    // setItems(updatedItems);
    toast.success("item added to the list");
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((i) => i.id !== itemId);
    setItems(newItems);
  };

  const editItem = (itemId: string) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, isDone: !item.isDone } : item
    );
    setItems(updatedItems);
  };

  return (
    <section className="section-center">
      {/* <ToastContainer position="top-center" /> */}
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
