import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfirmModalProps } from "../component/common/Modal/ConfirmModal/ConfirmModal";

export interface ModalState {
  modals: {
    modalType: string;
    modalProps: ConfirmModalProps | null;
  }[];
}

const initialState: ModalState = {
  modals: [],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state: ModalState,
      actions: PayloadAction<{
        modalType: string;
        modalProps?: ConfirmModalProps;
      }>
    ) => {
      const { modalType, modalProps } = actions.payload;
      state.modals.push({ modalType, modalProps: modalProps || null });
    },
    closeModal: (state) => {
      state.modals.pop();
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: any) => state.modal.modals;
export default modalSlice.reducer;
