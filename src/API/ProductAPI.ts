import BaseUrl from "./api";
import axios from "axios";

export const GetFullProduct = async () => {
  try {
    const res = await axios.get(`${BaseUrl}/products/`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
