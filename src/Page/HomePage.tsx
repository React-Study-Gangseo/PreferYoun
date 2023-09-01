import React, { useState, useEffect } from "react";
import Header from "component/Header/Header";
import Main from "../component/Main/Main";
import Footer from "component/Footer/Footer";
import { KeepProductList } from "API/KeepAPI";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const token = userInfo ? userInfo.token : null;
  let type: "home" | "seller" | "buyer";
  switch (location.pathname) {
    case "/seller":
      type = "seller";
      break;
    case "/buyer":
      type = "buyer";
      break;
    default:
      type = "home";
  }
  const FetchKeepList = async () => {
    try {
      const keepList = await KeepProductList(token);
      console.log(keepList);
      localStorage.setItem("userCart", JSON.stringify(keepList.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (type === "buyer") {
      FetchKeepList();
    }
  }, []);

  return (
    <>
      <Header type={type} />
      <Main />
      <Footer />
    </>
  );
}
