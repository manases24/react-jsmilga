import { ReactNode } from "react";

export type CartItemType = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

// Define los tipos para las props del proveedor de contexto
export type AppProviderProps = {
  children: ReactNode;
};
