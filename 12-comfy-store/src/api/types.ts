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

// Define el tipo para el objeto de acción
export type ActionParams = {
  request: Request;
};

// Define el tipo para el response de tu API
export type LoginResponse = {
  user: User;
  jwt: string;
};
