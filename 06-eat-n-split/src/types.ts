export type Friend = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

export type OnAddFriendType = (friend: Friend) => void;
export type OnSelectionType = (friend: Friend) => void;
export type OnSplitBillType = (value: number) => void;

export interface FormAddFriendProps {
  onAddFriend: OnAddFriendType;
}

export interface FormSplitBillProps {
  selectedFriend: Friend;
  onSplitBill: (amount: number) => void;
}

export interface FriendsListProps {
  friends: Friend[];
  selectedFriend: Friend | null;
  onSelection: OnSelectionType;
}

export interface FriendProps {
  friend: Friend;
  selectedFriend: Friend | null;
  onSelection: OnSelectionType;
}
