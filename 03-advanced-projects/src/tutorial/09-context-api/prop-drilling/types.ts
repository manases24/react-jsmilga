export type User = {
  name: string;
};

export type UserContainerProps = {
  user: User | null;
  logout: () => void;
};
