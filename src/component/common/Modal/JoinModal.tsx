import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import SellerJoin from "component/Auth/Join/SellerJoin";
import BuyerJoin from "../../Auth/Join/BuyerJoin";
import Logo from "../../../assets/images/Logo-hodu.png";
import {
  SellerBtn,
  BuyerBtn,
  LogoImg,
  ButtonGroup,
} from "../../Auth/Join/Join.Style";
import { FormValue } from "types/type";
import { Seller_Join, Join } from "API/AuthAPI";

const JoinModal: React.FC = () => {
  const [userType, setUserType] = useState("SELLER");
  const [JoinSuccess, setJoinSuccess] = useState(false);

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
          console.log("회원가입 성공");
          setJoinSuccess(true);
        }
      } catch (error) {
        console.log("회원가입 실패", error);
        setJoinSuccess(false);
      }
    }
  };

  return (
    <>
      <ModalBody>
        <LogoImg src={Logo} alt="Hodu 로고" />
        <ButtonGroup>
          <BuyerBtn
            id="BUYER"
            onClick={(e) => {
              handleUserType(e);
            }}
            style={{
              backgroundColor: userType === "BUYER" ? "#fff" : "#F2F2F2",
              borderBottom: userType === "BUYER" ? "none" : "1px solid #767676",
            }}
          >
            구매자 회원가입
          </BuyerBtn>
          <SellerBtn
            id="SELLER"
            onClick={(e) => {
              handleUserType(e);
            }}
            style={{
              backgroundColor: userType === "SELLER" ? "#fff" : "#F2F2F2",
              borderBottom:
                userType === "SELLER" ? "none" : "1px solid #767676",
            }}
          >
            판매자 회원가입
          </SellerBtn>
        </ButtonGroup>
        {userType === "SELLER" ? (
          <SellerJoin onSubmit={(data: FormValue) => handleFormSubmit(data)} />
        ) : (
          <BuyerJoin onSubmit={(data: FormValue) => handleFormSubmit(data)} />
        )}
      </ModalBody>
    </>
  );
};

export default JoinModal;

const ModalBody = styled.div`
  padding: 15px;
`;
