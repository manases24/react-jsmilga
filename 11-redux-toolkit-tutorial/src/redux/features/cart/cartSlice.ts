import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosReduxToolKit } from "../../../api/httpAdapter";
import { CartItem, CartState } from "../../../api/types";
import { store } from "../../store";

interface IncreaseDecreasePayload {
  id: string;
}

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState: CartState = {
  cartItems: [],
  amount: 0, // Inicialmente 0 si el carrito está vacío
  total: 0,
  isLoading: true,
};

// Thunk para obtener los artículos del carrito
export const getCartItems = createAsyncThunk<CartItem[], void>(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const resp = await axiosReduxToolKit.get<CartItem[]>(url);
      return resp; // Asumiendo que la API devuelve un array de CartItem
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action: PayloadAction<IncreaseDecreasePayload>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.amount += 1;
      }
    },
    decrease: (state, action: PayloadAction<IncreaseDecreasePayload>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.amount -= 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * parseFloat(item.price); // Convertir a número
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCartItems.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.isLoading = false;
          state.cartItems = action.payload;
        }
      )
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Exportar las acciones
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

// Tipo del estado de la tienda
export type RootState = ReturnType<typeof store.getState>;

// Exportar el reducer
export default cartSlice.reducer;
