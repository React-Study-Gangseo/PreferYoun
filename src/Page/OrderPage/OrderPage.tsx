import React, { useState } from "react";
import Header from "component/Header/Header";
import OrderMain from "../../component/OrderPage/OrderPage";
import SearchAddress from "component/common/Modal/SearchAddress/SearchAddress";
type Props = {};

export default function OrderPage({}: Props) {
  const [modalShow, setModalShow] = useState(false);

  const handleSearchAddress = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <>
      <Header type={"buyer"} />
      <OrderMain handleSearchAddress={handleSearchAddress} />
      {modalShow && <SearchAddress closeModal={closeModal} />}
    </>
  );
}
