import React from "react";
import Header from "component/Header/Header";
import ProductDetail from "component/DetailPage/ProductDetail";

export default function DetailPage() {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  return (
    <>
      <Header type={userType.toLowerCase() === "buyer" ? "buyer" : "seller"} />
      <ProductDetail />
    </>
  );
}
