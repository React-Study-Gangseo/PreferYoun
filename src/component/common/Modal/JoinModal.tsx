import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import SellerJoin from "component/Auth/Join/SellerJoin";
import BuyerJoin from "../../Auth/Join/BuyerJoin";
import { JoinBtn } from "component/Auth/Join/Join.Style";
import Logo from "../../../assets/images/Logo-hodu.png";
import Close from "../../../assets/images/close-r.svg";
import {
  SellerBtn,
  BuyerBtn,
  LogoImg,
  ButtonGroup,
} from "../../Auth/Join/Join.Style";
interface ModalProps {
  closeModal: () => void;
}
const JoinModal: React.FC<ModalProps> = ({ closeModal }) => {
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
          <ButtonGroup>
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
              구매자 회원가입
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
              판매자 회원가입
            </SellerBtn>
          </ButtonGroup>
          {userType === "seller" ? <SellerJoin /> : <BuyerJoin />}
          <CheckJoinForm>
            <CheckBox type="checkbox" />
            <Terms>
              호두샵의 <CheckTerms>이용약관</CheckTerms> 및
              <CheckTerms> 개인정보처리방침</CheckTerms>에 대한 내용을 확인
              하였고
              <br />
              동의합니다.
            </Terms>
            <JoinBtn>가입하기</JoinBtn>
          </CheckJoinForm>
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

const CheckTerms = styled.a`
  font-weight: bold;
  text-decoration: underline;
`;
const CheckJoinForm = styled.form`
  width: 30rem;
  margin: 0 auto 0.625rem;
`;
const CheckBox = styled.input`
  margin-right: 0.3rem;
`;
const Terms = styled.label`
  display: block;
  float: right;
  padding: 0 40px 0 0;
  line-height: normal;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
