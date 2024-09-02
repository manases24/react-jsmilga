import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { CartItemType, AppState, AppContextType } from "./api/types";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";
import { reducer } from "./reducer";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: AppState = {
  loading: false,
  cart: new Map<string, CartItemType>(),
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id: string) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id: string) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id: string) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart: CartItemType[] = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
