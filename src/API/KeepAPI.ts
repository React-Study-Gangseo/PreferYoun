import axios from "axios";
import { cartItem, orderdata } from "types/type";
import BaseUrl from "./api";

export const KeepProductList = async (token: string) => {
  try {
    const res = await axios.get(`${BaseUrl}/cart/`, {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const AddKeepProduct = async (orderdata: orderdata, token: string) => {
  try {
    const res = await axios.post(
      `${BaseUrl}/cart/`,
      {
        product_id: orderdata.product_id,
        quantity: orderdata.quantity,
        check: orderdata.check,
      },
      {
        headers: {
          Authorization: `JWT ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};
export const DeleteAllCart = async () => {
  try {
    const res = await axios.delete(`${BaseUrl}/cart`);
    return res;
  } catch (err) {
    throw err;
  }
};
export const DeleteCartItem = async (cart_item_id: cartItem, token: string) => {
  try {
    const res = await axios.delete(`${BaseUrl}/cart/${cart_item_id}/`, {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const UpdateQuantity = async (cartItem: cartItem, token: string) => {
  try {
    const res = await axios.put(
      `${BaseUrl}/cart/${cartItem.cart_item_id}/`,
      {
        product_id: cartItem.product_id,
        quantity: cartItem.quantity,
        is_active: true,
      },
      {
        headers: {
          Authorization: `JWT ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};
