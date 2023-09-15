import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TotalPriceState {
  value: Array<{
    key: string;
    price: number;
    shipping_fee: number;
  }>;
}

const initialState: TotalPriceState = { value: [] };

export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    calcPrice: (
      state: TotalPriceState,
      action: PayloadAction<{
        key: string;
        price: number;
        shipping_fee: number;
      }>
    ) => {
      const { key, price, shipping_fee } = action.payload;

      const index = state.value.findIndex((item) => item.key === key);
      if (index !== -1) {
        state.value[index].price = price;
        state.value[index].shipping_fee = shipping_fee;
      } else {
        state.value.push({ key, price, shipping_fee });
      }
    },
    resetPrice: (state: TotalPriceState) => {
      state.value = [];
    },
  },
});

export default totalPriceSlice.reducer;

export const { calcPrice, resetPrice } = totalPriceSlice.actions;
