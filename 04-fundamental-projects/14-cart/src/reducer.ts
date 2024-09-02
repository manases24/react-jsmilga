import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { AppState, ActionType } from "./api/types";

export const reducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };

    case REMOVE:
      if (!action.payload?.id) {
        throw new Error("REMOVE action payload must contain an id");
      }
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };

    case INCREASE:
      if (!action.payload?.id) {
        throw new Error("INCREASE action payload must contain an id");
      }
      const increasedCart = new Map(state.cart);
      const itemInc = increasedCart.get(action.payload.id);
      if (itemInc) {
        increasedCart.set(action.payload.id, {
          ...itemInc,
          amount: itemInc.amount + 1,
        });
      }
      return { ...state, cart: increasedCart };

    case DECREASE:
      if (!action.payload?.id) {
        throw new Error("DECREASE action payload must contain an id");
      }
      const decreasedCart = new Map(state.cart);
      const itemDec = decreasedCart.get(action.payload.id);
      if (itemDec) {
        if (itemDec.amount === 1) {
          decreasedCart.delete(action.payload.id);
        } else {
          decreasedCart.set(action.payload.id, {
            ...itemDec,
            amount: itemDec.amount - 1,
          });
        }
      }
      return { ...state, cart: decreasedCart };

    case LOADING:
      return { ...state, loading: true };

    case DISPLAY_ITEMS:
      if (!action.payload?.cart) {
        throw new Error(
          "DISPLAY_ITEMS action payload must contain a cart array"
        );
      }
      const newDisplayCart = new Map(
        action.payload.cart.map((item) => [item.id, item])
      );
      return { ...state, loading: false, cart: newDisplayCart };

    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
};
