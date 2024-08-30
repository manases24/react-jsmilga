import React from 'react';
import { FriendsListProps } from './types';
import {Friend} from './Friend';

export const FriendsList: React.FC<FriendsListProps> = ({ friends, onSelection, selectedFriend }) => (
  <ul>
    {friends.map((friend) => (
      <Friend
        friend={friend}
        key={friend.id}
        selectedFriend={selectedFriend}
        onSelection={onSelection}
      />
    ))}
  </ul>
);


