import { FormEvent, useState } from "react";
import { AddItemType } from "./types";

export const Form = ({ addItem }: AddItemType) => {
  const [newItemName, setNewItemName] = useState("");

  function handleSubmit(e: FormEvent<HTMLElement>) {
    e.preventDefault();

    if (!newItemName) return;

    addItem(newItemName);
    setNewItemName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>tasks app</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};
