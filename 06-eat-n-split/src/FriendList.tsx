// FriendList.tsx
import React from 'react';
import { InitialFriendsTypes } from './types';
import { Friend } from './Friend'; 

interface FriendListProps {
  friends: InitialFriendsTypes[];
}

export const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
