import { useFetch } from "./useFetch";

const url = 'https://api.github.com/users/goncy';

interface UserData {
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export const FetchData = () => {
  const [user, isLoading, isError] = useFetch<UserData>(url);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
