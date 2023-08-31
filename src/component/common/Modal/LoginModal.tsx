import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import SellerLogin from "component/Auth/Login/SellerLogin/SellerLogin";
import {
  BtnGroup,
  BuyerBtn,
  SellerBtn,
  LogoImg,
  LinkGroup,
  SignUp,
  FindPw,
} from "../../Auth/Login/Login.Style";
import Logo from "../../../assets/images/Logo-hodu.png";
import BuyerLogin from "component/Auth/Login/BuyerLogin/BuyerLogin";
import Close from "../../../assets/images/close-r.svg";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginData } from "types/type";
import { Login } from "API/AuthAPI";

interface ModalProps {
  closeModal: () => void;
  openSignUp: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ closeModal, openSignUp }) => {
  const modalRoot = document.getElementById("modal");
  const [userType, setUserType] = useState("SELLER");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess && userType === "SELLER") {
      console.log(loginSuccess);
      closeModal();
      navigate("/seller");
    } else if (loginSuccess && userType === "BUYER") {
      console.log(loginSuccess);
      closeModal();
      navigate("/buyer");
    }
  }, [loginSuccess, navigate]);

  const handleUserType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedButtonId = e.currentTarget.id;
    if (clickedButtonId === "BUYER") {
      setUserType("BUYER");
    } else if (clickedButtonId === "SELLER") {
      setUserType("SELLER");
    }
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
  const handleFormSubmit = async (loginData: LoginData, userType: string) => {
    try {
      console.log(userType, loginData);
      const response = await Login(loginData, userType);
      console.log(response);
      if (response && response.status === 200) {
        console.log("로그인성공", response.data);
        setLoginSuccess(true);
        localStorage.setItem("UserInfo", JSON.stringify(response.data));
        console.log(loginSuccess);
      }
    } catch (error) {
      const axiosError = error as AxiosError; // 타입 단언
      const responseData = axiosError?.response?.data as any;
      if (responseData) {
        Swal.fire({
          title: "로그인 실패!",
          text: "아이디와 비밀번호를 확인해 주세요",
          icon: "warning",
          confirmButtonColor: "#21bf48",
          confirmButtonAriaLabel: "확인버튼",
          customClass: {
            icon: "my-icon",
          },
        });
      }
    }
  };

  return createPortal(
    <ModalWrapper>
      <StyledModalContainer>
        <ModalBody>
          <LogoImg src={Logo} alt="Hodu 로고" />
          <BtnGroup>
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
              구매자로그인
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
              판매자로그인
            </SellerBtn>
          </BtnGroup>
          {userType === "SELLER" ? (
            <SellerLogin
              onSubmit={(data: LoginData) => handleFormSubmit(data, userType)}
            />
          ) : (
            <BuyerLogin
              onSubmit={(data: LoginData) => handleFormSubmit(data, userType)}
            />
          )}
        </ModalBody>
        <LinkGroup>
          <SignUp onClick={openSignUp}>회원가입</SignUp>
          <FindPw>비밀번호찾기</FindPw>
        </LinkGroup>
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
