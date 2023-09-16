import axios from "axios";
import BaseUrl from "./api";

export const instance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const accessInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const accessDataInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

accessInstance.interceptors.request.use((config) => {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;

  if (userInfo && userInfo.token) {
    config.headers.Authorization = `JWT ${userInfo.token}`;
  }

  return config;
});

accessDataInstance.interceptors.request.use((config) => {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;

  if (userInfo && userInfo.token) {
    config.headers.Authorization = `JWT ${userInfo.token}`;
  }

  return config;
});
