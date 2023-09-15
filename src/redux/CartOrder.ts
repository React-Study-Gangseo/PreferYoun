import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartOrderState {
  value: Array<{
    key: string;
    image: string;
    price: number;
    shipping_fee: number;
    store_name: string;
    product_name: string;
    quantity: number;
  }>;
}

const initialState: CartOrderState = { value: [] };

export const cartOrderSlice = createSlice({
  name: "cartOrder",
  initialState,
  reducers: {
    OrderProduct: (
      state: CartOrderState,
      action: PayloadAction<{
        key: string;
        image: string;
        price: number;
        shipping_fee: number;
        store_name: string;
        product_name: string;
        quantity: number;
      }>
    ) => {
      const {
        key,
        image,
        price,
        shipping_fee,
        store_name,
        product_name,
        quantity,
      } = action.payload;

      const index = state.value.findIndex((item) => item.key === key);
      if (index !== -1) {
        state.value[index].price = price;
        state.value[index].shipping_fee = shipping_fee;
        state.value[index].image = image;
        state.value[index].store_name = store_name;
        state.value[index].product_name = product_name;
        state.value[index].quantity = quantity;
      } else {
        state.value.push({
          key,
          image,
          price,
          shipping_fee,
          store_name,
          product_name,
          quantity,
        });
      }
    },
    removeOrderProduct: (
      state: CartOrderState,
      action: PayloadAction<string>
    ) => {
      const keyToRemove = action.payload;

      state.value = state.value.filter((item) => item.key !== keyToRemove);
    },
  },
});

export default cartOrderSlice.reducer;

export const { OrderProduct, removeOrderProduct } = cartOrderSlice.actions;
