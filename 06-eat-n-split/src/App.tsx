import  { useState } from 'react';
import { FormAddFriend } from './FormAddFriend';
import { FriendList } from './FriendList';
import { InitialFriendsTypes } from './types';
import { initialFriends } from './data';
import { FormSplitBill } from './FormSplitBill';

function App() {
  const [friends, setFriends] = useState<InitialFriendsTypes[]>(initialFriends);

  function handleAddFriend(friend: InitialFriendsTypes) {
    setFriends((prevFriends) => [...prevFriends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <FormAddFriend onAddFriend={handleAddFriend} />
      </div>
      <FormSplitBill/>
    </div>
  );
}

export default App;
