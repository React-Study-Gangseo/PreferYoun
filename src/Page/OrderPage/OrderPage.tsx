import React from "react";
import Header from "component/Header/Header";
import OrderMain from "../../component/OrderPage/OrderPage";
type Props = {};

export default function OrderPage({}: Props) {
  return (
    <>
      <Header type={"buyer"} />
      <OrderMain />
    </>
  );
}
