import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../../api/types";

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.isOpen = true;
    },
    closeModal: (state, action: PayloadAction<ModalState>) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
