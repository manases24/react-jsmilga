export type InitialFriendsTypes = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

export type OnAddFriendType = (newFriend: InitialFriendsTypes) => void;
