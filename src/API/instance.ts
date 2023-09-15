import axios from "axios";
import BaseUrl from "./api";

const storedData = localStorage.getItem("UserInfo");
const userInfo = storedData ? JSON.parse(storedData) : null;
const token = userInfo ? userInfo.token : null;

export const instance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const accessInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    Authorization: `JWT ${token}`,
    "Content-Type": "application/json",
  },
});
export const accessDataInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    Authorization: `JWT ${token}`,
    "Content-Type": "multipart/form-data",
  },
});
