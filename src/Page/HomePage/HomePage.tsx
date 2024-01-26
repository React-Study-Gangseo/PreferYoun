import React, { useEffect } from "react";
import Main from "../../component/Main/Main";
import { KeepProductList } from "API/KeepAPI";

export default function HomePage() {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;

  const FetchKeepList = async () => {
    try {
      const keepList = await KeepProductList();
      localStorage.setItem("userCart", JSON.stringify(keepList.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userInfo) {
      if (userInfo.user_type === "BUYER") {
        FetchKeepList();
      }
    } else {
      return;
    }
  }, []);

  return (
    <>
      <Main />
    </>
  );
}
