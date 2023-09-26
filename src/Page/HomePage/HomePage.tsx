import React, { useState, useEffect } from "react";
import Main from "../../component/Main/Main";
import { KeepProductList } from "API/KeepAPI";
// import useScrollRestoration from "CustomHook/useScrollRestore";
export default function HomePage() {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  // useScrollRestoration();

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
    if (userInfo.user_type === "buyer") {
      FetchKeepList();
    }
  }, []);

  return (
    <>
      <Main />
    </>
  );
}
