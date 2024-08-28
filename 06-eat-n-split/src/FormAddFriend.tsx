import { FormEvent, useState } from "react";
import { FormAddFriendProps } from "./types";
import { Button } from "./Button";

export const FormAddFriend = ({ onAddFriend }: FormAddFriendProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: `${image}?=${crypto.randomUUID()}`,
      balance: 0,
    };
    
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};
