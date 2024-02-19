import Header from "component/common/Header/Header";
import Footer from "component/common/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
