import React, { useState } from "react";
import Header from "component/Header/Header";
import Main from "../component/Main/Main";
import Footer from "component/Footer/Footer";
import JoinModal from "component/common/Modal/JoinModal";
import LoginModal from "component/common/Modal/LoginModal";
type Props = {};

export default function HomePage({}: Props) {
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
      <Header handleLogin={handleLogin} />
      <Main />
      {modalShow && login && (
        <LoginModal closeModal={closeModal} openSignUp={handleSignUp} />
      )}
      {modalShow && signUp && <JoinModal closeModal={closeModal} />}
      <Footer />
    </>
  );
}
