export interface CartItemType {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export interface AppState {
  loading: boolean;
  cart: Map<string, CartItemType>;
}

export interface AppContextType extends AppState {
  clearCart: () => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalAmount: number;
  totalCost: number;
}

export interface ActionType {
  type: string;
  payload?: {
    id?: string;
    cart?: CartItemType[];
  };
}

export type CartItemProps = {
  id: string;
  img: string;
  title: string;
  price: number;
  amount: number;
};
