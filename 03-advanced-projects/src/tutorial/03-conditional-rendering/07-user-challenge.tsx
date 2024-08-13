import { useState } from "react";

type User = { name: string };

export function UserChallenge() {
  const [user, setUser] = useState<User | null>(null);

  function login() {
    setUser({ name: "vegan food truck" });
  }

  function logout() {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );

}
