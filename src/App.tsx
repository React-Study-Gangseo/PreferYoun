import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import GlobalStyles from "component/GlobalStyle/GlobalStyle";
import LoginModal from "component/common/Modal/LoginModal";
import JoinModal from "component/common/Modal/JoinModal";
import DetailPage from "component/DetailPage/DetailPage";
import KeepPage from "component/KeepPage/KeepPage";
import Order from "component/OrderPage/OrderPage";
import { useState } from "react";
import SellerCenterPage from "component/SellerCenter/SellerCenterPage";

import React from "react";
import { styled } from "@mui/system";
import UploadProduct from "component/UploadProduct/UploadProduct";
import BasicButton from "component/common/Button/Button";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setModalShow(true);
    setLogin(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setSignUp(false);
    setLogin(false);
  };
  const handleSignUp = () => {
    setSignUp(true);
    setLogin(false);
  };

  return (
    <>
      <GlobalStyles />
      {/* <SellerCenterPage /> */}
      <Header handleLogin={handleLogin} />
      {/* <UploadProduct /> */}
      {/* <Order /> */}
      <Main />
      <Footer />
      {modalShow && signUp && <JoinModal closeModal={closeModal} />}
      {/* <SellerLogin /> */}
      {modalShow && login && (
        <LoginModal closeModal={closeModal} openSignUp={handleSignUp} />
      )}
      {/* <DetailPage /> */}
      {/* <KeepPage /> */}
      {/* <JoinModal /> */}
      {/* <Order /> */}
    </>
  );
}

export default App;
