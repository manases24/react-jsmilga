import { FormEvent, useState } from "react";
import { data } from "../../data";

type UserType = {
  id: number;
  name: string;
  removeUser: (id: number) => void;
};

export function UserChallenge() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (name.trim()) {
      const newUser = { id: new Date().getTime(), name };
      setUsers([...users, newUser]);
      setName("");
    }
  }

  function removeUser(id: number): void {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>
      {users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} removeUser={removeUser} />
      ))}
    </div>
  );
}

function User({ id, name, removeUser }: UserType) {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removeUser(id)} className="btn">
        remove
      </button>
    </div>
  );
}
