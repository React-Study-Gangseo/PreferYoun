import { accessInstance } from "./instance";
import { cartItem, orderdata } from "types/type";

export const KeepProductList = async () => {
  try {
    const res = await accessInstance.get(`/cart/`);
    return res;
  } catch (err) {
    throw err;
  }
};
export const AddKeepProduct = async (orderdata: orderdata) => {
  try {
    const res = await accessInstance.post(`/cart/`, {
      product_id: orderdata.product_id,
      quantity: orderdata.quantity,
      check: orderdata.check,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const DeleteAllCart = async () => {
  try {
    const res = await accessInstance.delete(`/cart`);
    return res;
  } catch (err) {
    throw err;
  }
};
export const DeleteCartItem = async (cart_item_id: number) => {
  try {
    const res = await accessInstance.delete(`/cart/${cart_item_id}/`);
    return res;
  } catch (err) {
    throw err;
  }
};
export const UpdateQuantity = async (cartItem: cartItem) => {
  try {
    const res = await accessInstance.put(`/cart/${cartItem.cart_item_id}/`, {
      product_id: cartItem.product_id,
      quantity: cartItem.quantity,
      is_active: cartItem.is_active,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
