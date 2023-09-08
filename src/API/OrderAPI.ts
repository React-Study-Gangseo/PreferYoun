import { orderdata } from "types/type";
import { accessInstance } from "./instance";
export const OrderDirect = async (Orderdata: orderdata) => {
  try {
    const res = await accessInstance.post(`/order/`, {
      product_id: Orderdata.product_id,
      quantity: Orderdata.quantity,
      order_kind: Orderdata.order_kind,
      receiver: Orderdata.receiver,
      receiver_phone_number: Orderdata.receiver_phone_number,
      address: Orderdata.address,
      address_message: Orderdata.address_message,
      payment_method: Orderdata.payment_method,
      total_price: Orderdata.total_price,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const CartOneOrder = async (Orderdata: orderdata) => {
  try {
    const res = await accessInstance.post(`/order/`, {
      product_id: Orderdata.product_id,
      quantity: Orderdata.quantity,
      order_kind: Orderdata.order_kind,
      receiver: Orderdata.receiver,
      receiver_phone_number: Orderdata.receiver_phone_number,
      address: Orderdata.address,
      address_message: Orderdata.address_message,
      payment_method: Orderdata.payment_method,
      total_price: Orderdata.total_price,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const CartOrder = async (Orderdata: orderdata) => {
  try {
    const res = await accessInstance.post(`/order/`, {
      order_kind: Orderdata.order_kind,
      receiver: Orderdata.receiver,
      receiver_phone_number: Orderdata.receiver_phone_number,
      address: Orderdata.address,
      address_message: Orderdata.address_message,
      payment_method: Orderdata.payment_method,
      total_price: Orderdata.total_price,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const GetOrderList = async () => {
  try {
    const res = await accessInstance.get(`/order/`);
    return res;
  } catch (err) {
    throw err;
  }
};
