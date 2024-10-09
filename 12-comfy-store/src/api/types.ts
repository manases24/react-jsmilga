export type InputField = {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  size?: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export type UserState = {
  user: User | null;
  theme: string;
};

export type LoginUserAction = {
  payload: {
    user: Omit<User, "token">;
    jwt: string;
  };
};
