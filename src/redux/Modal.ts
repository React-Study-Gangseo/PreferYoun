import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  modalType: string;
  isOpen: boolean;
}

const initialState: ModalState = {
  modalType: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: ModalState,
      actions: PayloadAction<{ modalType: string; isOpen: boolean }>
    ) => {
      const { modalType } = actions.payload;
      state.modalType = modalType;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: any) => state.modal;
export default modalSlice.reducer;
