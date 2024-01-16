import React, { useState, useEffect } from "react";

import SellerJoin from "component/Auth/Join/SellerJoin";
import BuyerJoin from "component/Auth/Join/BuyerJoin";
import Logo from "../../assets/images/Logo-hodu.png";
import { LogoImg, Main } from "component/Auth/Join/Join.Style";
import { FormValue } from "types/type";
import { Seller_Join, Join } from "API/AuthAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthButton from "component/common/Button/AuthButton";

const JoinPage: React.FC = () => {
  const [userType, setUserType] = useState<"SELLER" | "BUYER">("SELLER");
  const [JoinSuccess, setJoinSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUserType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.id === "BUYER"
      ? setUserType("BUYER")
      : setUserType("SELLER");
  };

  useEffect(() => {
    if (JoinSuccess && userType === "SELLER") {
      console.log(JoinSuccess);
    } else if (JoinSuccess && userType === "BUYER") {
      console.log(JoinSuccess, "BUYER");
    }
  }, [JoinSuccess]);

  const handleFormSubmit = async (data: FormValue) => {
    console.log("check");
    if (userType === "SELLER") {
      try {
        const response = await Seller_Join(data);
        if (response && response.status === 201) {
          console.log("회원가입 성공");
          setJoinSuccess(true);
        }
      } catch (error) {
        console.log("회원가입 실패", error);
        setJoinSuccess(false);
      }
    } else {
      try {
        const response = await Join(data);
        if (response && response.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        console.log("회원가입 실패", error);
        setJoinSuccess(false);
      }
    }
  };

  return (
    <>
      <Main>
        <Link to="/">
          <LogoImg src={Logo} alt="Hodu 로고" />
        </Link>
        <AuthButton handleUserType={handleUserType} userType={userType} />
        {userType === "SELLER" ? (
          <SellerJoin onSubmit={(data: FormValue) => handleFormSubmit(data)} />
        ) : (
          <BuyerJoin onSubmit={(data: FormValue) => handleFormSubmit(data)} />
        )}
      </Main>
    </>
  );
};

export default JoinPage;
