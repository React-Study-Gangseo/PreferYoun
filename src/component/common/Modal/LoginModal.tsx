import React, { useEffect, useState } from "react";
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
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { LoginData } from "types/type";
import { Login } from "API/AuthAPI";
import { openModal, closeModal } from "redux/Modal";
import { useNavigate } from "react-router-dom";
const LoginModal: React.FC = () => {
  const [userType, setUserType] = useState("SELLER");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  useEffect(() => {
    if (loginSuccess && userType === "SELLER") {
      dispatch(closeModal());
      navigate("/");
    } else if (loginSuccess && userType === "BUYER") {
      dispatch(closeModal());
      navigate("/");
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

  const handleFormSubmit = async (loginData: LoginData, userType: string) => {
    try {
      const response = await Login(loginData, userType);
      if (response && response.status === 200) {
        localStorage.setItem("UserInfo", JSON.stringify(response.data));
        setLoginSuccess(true);
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
  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        modalType: "SignupModal",
        isOpen: true,
      })
    );
  };

  return (
    <>
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
              borderBottom: userType === "BUYER" ? "none" : "1px solid #767676",
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
        <SignUp onClick={handleOpenLoginModal}>회원가입</SignUp>
        <FindPw>비밀번호찾기</FindPw>
      </LinkGroup>
    </>
  );
};

export default LoginModal;

const ModalBody = styled.div`
  padding: 15px;
`;
