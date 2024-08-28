import { InitialFriendsTypes } from "./types";

export const Friend = ({ name, image, balance }: InitialFriendsTypes) => {
  return (
    <>
      <li>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        {balance < 0 && (
          <p className="red">
            You owe {name} {balance}$
          </p>
        )}

        {balance > 0 && (
          <p className="green">
            {name} owes you {balance}$
          </p>
        )}
        {balance === 0 && <p>You and {name} are even</p>}
        <button className="button">Select</button>
      </li>
    </>
  );
};
