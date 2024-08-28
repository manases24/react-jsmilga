import { useState } from "react";
import { initialFriends } from "./data";
import { InitialFriendsTypes } from "./types";
import { Friend } from "./Friend"; 

export const FriendList = () => {
  const [friends, setFriends] = useState<InitialFriendsTypes[]>(initialFriends);

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} {...friend} />
        ))}
      </ul>
    </>
  );
};
