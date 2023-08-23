import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import SellerLogin from "component/Auth/Login/SellerLogin/SellerLogin";
import {
  BtnGroup,
  BuyerBtn,
  SellerBtn,
  LogoImg,
} from "../../Auth/Login/SellerLogin.Style";
import Logo from "../../../assets/images/Logo-hodu.png";
import BuyerLogin from "component/Auth/Login/BuyerLogin/BuyerLogin";
import Close from "../../../assets/images/close-r.svg";

interface ModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ closeModal }) => {
  const modalRoot = document.getElementById("modal");
  const [userType, setUserType] = useState("seller");

  const handleUserType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.id === "buyer"
      ? setUserType("buyer")
      : setUserType("seller");
  };

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
  return createPortal(
    <ModalWrapper>
      <StyledModalContainer>
        <ModalBody>
          <LogoImg src={Logo} alt="Hodu 로고" />
          <BtnGroup>
            <BuyerBtn
              id="buyer"
              onClick={(e) => {
                handleUserType(e);
              }}
              style={{
                backgroundColor: userType === "buyer" ? "#fff" : "#F2F2F2",
                borderBottom:
                  userType === "buyer" ? "none" : "1px solid #767676",
              }}
            >
              구매자로그인
            </BuyerBtn>
            <SellerBtn
              id="seller"
              onClick={(e) => {
                handleUserType(e);
              }}
              style={{
                backgroundColor: userType === "seller" ? "#fff" : "#F2F2F2",
                borderBottom:
                  userType === "seller" ? "none" : "1px solid #767676",
              }}
            >
              판매자로그인
            </SellerBtn>
          </BtnGroup>
          {userType === "seller" ? <SellerLogin /> : <BuyerLogin />}
        </ModalBody>
        <CloseBtn onClick={closeModal}>
          <img src={Close} alt="모달닫힘버튼" aria-label="모달닫힘버튼" />
        </CloseBtn>
      </StyledModalContainer>
    </ModalWrapper>,
    modalRoot
  );
};

export default LoginModal;

const ModalWrapper = styled.div`
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
  background-color: white;
  position: relative;
  width: 800px;
  margin: 3.125rem auto;
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
