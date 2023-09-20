import React, { useState, useEffect } from "react";
import Main from "../../component/Main/Main";
import { KeepProductList } from "API/KeepAPI";
import { useLocation } from "react-router-dom";
// import useScrollRestoration from "CustomHook/useScrollRestore";
export default function HomePage() {
  const location = useLocation();
  // useScrollRestoration();

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
  const FetchKeepList = async () => {
    try {
      const keepList = await KeepProductList();
      console.log(keepList);
      localStorage.setItem("userCart", JSON.stringify(keepList.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (type === "buyer") {
      FetchKeepList();
    }
  }, []);

  return (
    <>
      <Main />
    </>
  );
}
