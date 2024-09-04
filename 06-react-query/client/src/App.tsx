import { useState, useEffect } from "react";
import { Form } from "./Form";
import { ItemType } from "./types";
import { Items } from "./Items";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuid } from "uuid";
import { BASE_URL, TasksApiAdapter } from "./services/utils";

const url = BASE_URL;

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const taskApi = new TasksApiAdapter();

  const fetchTask = async () => {
    try {
      const data = await taskApi.get<{ taskList: ItemType[] }>(url);
      const { taskList } = data;

      if (Array.isArray(taskList)) {
        setItems(taskList);
      } else {
        console.error("Expected taskList to be an array");
        setItems([]);
      }
    } catch (error) {
      console.error("Failed to fetch tasks", error);
      setItems([]);
    }
  };

  const addItem = async (itemTitle: string) => {
    const newItem = {
      id: uuid(),
      title: itemTitle,
      isDone: false,
    };

    try {
      const addedItem = await taskApi.post<ItemType, typeof newItem>(
        url,
        newItem
      );
      setItems((prevItems) => [...prevItems, addedItem]);
      toast.success("Item added to the list");
    } catch (error) {
      console.error("Failed to add item", error);
      toast.error("Failed to add item");
    }
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

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items />
    </section>
  );
}

export default App;
