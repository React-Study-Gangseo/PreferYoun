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

function App() {
  const [modalShow, setModalShow] = useState(false);
  const handleLogin = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <>
      <GlobalStyles />
      <Header handleLogin={handleLogin} />
      {/* <Order /> */}
      <Main />
      <Footer />
      {modalShow && <JoinModal closeModal={closeModal} />}
      {/* <SellerLogin /> */}
      {/* <LoginModal /> */}
      {/* <DetailPage /> */}
      {/* <KeepPage /> */}
      {/* <JoinModal /> */}
    </>
  );
}

export default App;
