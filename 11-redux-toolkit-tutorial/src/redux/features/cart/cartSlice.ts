// import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../../api/types";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState: CartState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer para agregar un item al carrito
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      state.amount += 1;
    },
    // Reducer para eliminar un item del carrito
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.amount -= 1;
    },
    // Reducer para actualizar el total
    updateTotal: (state) => {
      state.total = state.cartItems.reduce(
        (total, item) => total + parseFloat(item.price) * item.amount,
        0
      );
    },
  },
});

export const { addItem, removeItem, updateTotal } = cartSlice.actions;

export default cartSlice.reducer;
