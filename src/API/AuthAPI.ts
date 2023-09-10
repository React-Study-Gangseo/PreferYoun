import { instance } from "./instance";
import { FormValue, LoginData } from "types/type";

export const Seller_Join = async (formData: FormValue) => {
  try {
    const res = await instance.post(`/accounts/signup_seller/`, {
      username: formData.id,
      password: formData.password,
      password2: formData.password2,
      name: formData.name,
      phone_number: formData.Phone,
      company_registration_number: formData.company_registration_number,
      store_name: formData.StoreName,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const Join = async (formData: FormValue) => {
  try {
    const res = await instance.post(`/accounts/signup/`, {
      username: formData.id,
      password: formData.password,
      password2: formData.password2,
      name: formData.name,
      phone_number: formData.Phone,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const CheckCRN = async (CRN: string) => {
  try {
    const res = await instance.post(
      `accounts/signup/valid/company_registration_number/`,
      {
        company_registration_number: CRN,
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};
export const CheckId = async (id: string) => {
  try {
    const res = await instance.post(`/accounts/signup/valid/username/`, {
      username: id,
    });
    return res;
  } catch (err: any) {
    throw err;
  }
};

export const Login = async (data: LoginData, userType: string) => {
  try {
    const res = await instance.post(`/accounts/login/`, {
      username: data.id,
      password: data.password,
      login_type: userType,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const Logout = async () => {
  try {
    const res = await instance.post(`/accounts/logout/`);
    return res;
  } catch (err) {
    throw err;
  }
};
