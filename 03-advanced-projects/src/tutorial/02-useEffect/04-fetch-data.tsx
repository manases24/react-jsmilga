import { useEffect, useState } from "react";

type UserType = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

const url = "https://api.github.com/users";

export function FetchData() {
  const [users, setUsers] = useState<UserType[]>([]);

  async function fetcher() {
    try {
      const response = await fetch(url);
      const usersData: UserType[] = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <section>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => (
          <Users key={user.id} {...user} />
        ))}
      </ul>
    </section>
  );
}

function Users({ id, login, avatar_url, html_url }: UserType) {
  return (
    <li key={id}>
      <img src={avatar_url} alt={login} />
      <div>
        <h5>{login}</h5>
        <a href={html_url}>Profile</a>
      </div>
    </li>
  );
}
