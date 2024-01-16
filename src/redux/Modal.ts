import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfirmModalProps } from "../component/common/Modal/ConfirmModal/ConfirmModal";

export interface ModalState {
  modalType: string;
  isOpen: boolean;
  modalProps: ConfirmModalProps | null;
}

const initialState: ModalState = {
  modalType: "",
  isOpen: false,
  modalProps: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: ModalState,
      actions: PayloadAction<{
        modalType: string;
        isOpen: boolean;
        modalProps?: ConfirmModalProps;
      }>
    ) => {
      const { modalType, modalProps } = actions.payload;
      state.modalType = modalType;
      state.isOpen = true;
      state.modalProps = modalProps || null;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: any) => state.modal;
export default modalSlice.reducer;
