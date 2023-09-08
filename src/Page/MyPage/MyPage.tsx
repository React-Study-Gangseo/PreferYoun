import React from "react";
import Header from "component/Header/Header";
import OrderList from "component/OrderList/OrderList";
import Footer from "component/Footer/Footer";
type Props = {};

export default function MyPage({}: Props) {
  return (
    <>
      <Header type={"buyer"} />
      <OrderList />
      <Footer />
    </>
  );
}
