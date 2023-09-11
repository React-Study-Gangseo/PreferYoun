import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import SellerJoin from "component/Auth/Join/SellerJoin";
import BuyerJoin from "../../Auth/Join/BuyerJoin";
import Logo from "../../../assets/images/Logo-hodu.png";
import Close from "../../../assets/images/close-r.svg";
import {
  SellerBtn,
  BuyerBtn,
  LogoImg,
  ButtonGroup,
} from "../../Auth/Join/Join.Style";
import { FormValue } from "types/type";
import { Seller_Join, Join } from "API/AuthAPI";

interface ModalProps {
  closeModal: () => void;
}
const JoinModal: React.FC<ModalProps> = ({ closeModal }) => {
  const modalRoot = document.getElementById("modal");
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

  useEffect(() => {
    if (!modalRoot) return;

    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [modalRoot]);

  if (!modalRoot) {
    return null;
  }
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
  return createPortal(
    <ModalWrapper>
      <StyledModalContainer>
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
                borderBottom:
                  userType === "BUYER" ? "none" : "1px solid #767676",
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
            <SellerJoin
              onSubmit={(data: FormValue) => handleFormSubmit(data)}
            />
          ) : (
            <BuyerJoin onSubmit={(data: FormValue) => handleFormSubmit(data)} />
          )}
        </ModalBody>
        <CloseBtn onClick={closeModal}>
          <img src={Close} alt="모달닫힘버튼" aria-label="모달닫힘버튼" />
        </CloseBtn>
      </StyledModalContainer>
    </ModalWrapper>,
    modalRoot
  );
};

export default JoinModal;

const ModalWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
`;

const StyledModalContainer = styled.article`
  position: relative;
  background-color: white;
  width: 800px;
  margin: 1.25rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const ModalBody = styled.div`
  padding: 15px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
