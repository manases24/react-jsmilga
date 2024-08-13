import { useEffect, useState } from "react";

type UserType = {
  name: string;
  avatar_url: string;
  company: string;
  bio: string;
};

const url = "https://api.github.com/users/goncy";

export function MultipleReturnsFetchData() {
  const [state, setState] = useState<{
    isLoading: boolean;
    isError: boolean;
    user: UserType | null;
  }>({
    isLoading: true,
    isError: false,
    user: null,
  });

  async function fetcher() {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setState({ ...state, isError: true });
      }

      const user = await res.json();
      setState({ isLoading: false, isError: false, user });
    } catch (error) {
      setState({ isLoading: false, isError: true, user: null });
    }
  }

  useEffect(() => {
    fetcher();
  }, []);

  if (state.isLoading) {
    return <h2>Loading...</h2>;
  }

  if (state.isError) {
    return <h2>There was an error...</h2>;
  }

  if (!state.user) {
    return null;
  }

  return (
    <>
      <User {...state.user} />
    </>
  );
}

function User({ name, avatar_url, company, bio }: UserType) {
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
}


