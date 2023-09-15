import React from "react";
import Header from "component/Header/Header";
import OrderList from "component/OrderList/OrderList";
import Footer from "component/Footer/Footer";
type Props = {};

export default function MyPage() {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  return (
    <>
      <Header type={userType ? userType?.toLowerCase() : "home"} />
      <OrderList />
      <Footer />
    </>
  );
}
