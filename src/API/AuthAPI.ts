import BaseUrl from "./api";
import axios from "axios";
import { FormValue } from "../component/Auth/Join/SellerJoin";

export const SellerJoin = async (formData: FormValue) => {
  try {
    // const { id, password, password2, name, CRNumber, Phone, StoreName } =
    //   formData;
    const phoneNumber = `${formData.phoneCode}${formData.firstNumber}${formData.secondNumber}`;

    const res = await axios.post(
      `${BaseUrl}/accounts/signup_seller/`,
      {
        username: formData.id,
        password: formData.password,
        password2: formData.password2,
        name: formData.name,
        phone_number: phoneNumber,
        company_registration_number: formData.CRNumber,
        store_name: formData.StoreName,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const CheckCRN = async (CRN: string) => {
  console.log("CRN", CRN);
  try {
    const res = await axios.post(
      `${BaseUrl}/accounts/signup/valid/company_registration_number/`,
      {
        company_registration_number: CRN,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const CheckId = async (id: string) => {
  console.log("id", id);
  try {
    const res = await axios.post(
      `${BaseUrl}/accounts/signup/valid/username/`,
      {
        username: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
