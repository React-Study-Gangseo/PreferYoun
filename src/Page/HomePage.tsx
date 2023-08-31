import React, { useState } from "react";
import Header from "component/Header/Header";
import Main from "../component/Main/Main";
import Footer from "component/Footer/Footer";

import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

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
  return (
    <>
      <Header type={type} />
      <Main />
      <Footer />
    </>
  );
}
