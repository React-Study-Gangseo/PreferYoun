import BaseUrl from "./api";
import axios from "axios";
import { Products, UploadProducts } from "types/type";

export const GetFullProduct = async () => {
  try {
    const res = await axios.get(`${BaseUrl}/products`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const PostProduct = async (Products: UploadProducts, token: string) => {
  try {
    console.log(Products);
    const res = await axios.post(
      `${BaseUrl}/products/`,
      {
        product_name: Products.product_name,
        image: Products.image,
        price: Products.price,
        shipping_method: "PARCEL", // PARCEL 또는 DELIVERY 선택
        shipping_fee: Products.shipping_fee,
        stock: Products.stock,
        product_info: "전통주",
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
export const GetSellerProduct = async (token: string) => {
  try {
    const res = await axios.get(
      `${BaseUrl}/seller/`,

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
export const DeleteProduct = async (product_id: number, token: string) => {
  try {
    const res = await axios.delete(`${BaseUrl}/products/${product_id}/`, {
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
export const DetailProduct = async (product_id: number) => {
  try {
    const res = await axios.get(`${BaseUrl}/products/${product_id}/`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
