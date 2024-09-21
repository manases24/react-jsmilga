import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../../api/types";
import { store } from "../../store";

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      // No se necesita el payload
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

// Tipo del estado de la tienda
export type ModalRootState = ReturnType<typeof store.getState>;
export default modalSlice.reducer;
