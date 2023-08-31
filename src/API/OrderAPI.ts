import axios from "axios";
import { orderdata } from "types/type";
import BaseUrl from "./api";

export const OrderDirect = async (Orderdata: orderdata) => {
  try {
    const res = await axios.post(
      `${BaseUrl}/order/`,
      {
        product_id: Orderdata.product_id,
        quantity: Orderdata.quantity,
        order_kind: Orderdata.order_kind,
        reciever: Orderdata.reciever,
        reciever_phone_number: Orderdata.reciever_phone_number,
        address: Orderdata.address,
        address_message: Orderdata.address_message,
        payment_method: Orderdata.payment_method,
        total_price: Orderdata.total_price,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};
