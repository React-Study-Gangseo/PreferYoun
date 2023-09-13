import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddressState {
  value: Array<{
    address: string;
    postCode: string;
    additional: string;
  }>;
}

const initialState: AddressState = { value: [] };

export const addressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {
    saveAddress: (
      state: AddressState,
      action: PayloadAction<{
        address: string;
        postCode: string;
        additional: string;
      }>
    ) => {
      const { address, postCode, additional } = action.payload;

      state.value.push({ address, postCode, additional });
    },
    removeAddress: (state: AddressState, action: PayloadAction<string>) => {
      const addressToRemove = action.payload;

      state.value = state.value.filter(
        (item) => item.address !== addressToRemove
      );
    },
  },
});

export default addressSlice.reducer;

export const { saveAddress, removeAddress } = addressSlice.actions;
