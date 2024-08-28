import { InitialFriendsTypes } from "./types";

export const initialFriends: InitialFriendsTypes[] = [
  {
    id: crypto.randomUUID(),
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: crypto.randomUUID(),
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: crypto.randomUUID(),
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
