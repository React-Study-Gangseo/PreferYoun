import React, { useEffect, useState } from "react";
import SellerLogin from "../../component/Auth/Login/SellerLogin/SellerLogin";
import {
  LogoImg,
  LinkGroup,
  SignUp,
  FindPw,
  Main,
} from "../../component/Auth/Login/Login.Style";
import Logo from "../../assets/images/Logo-hodu.png";
import BuyerLogin from "../../component/Auth/Login/BuyerLogin/BuyerLogin";
import { AxiosError } from "axios";
import { LoginData } from "types/type";
import { Login } from "../../API/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../component/common/Button/AuthButton";
import { ModalSetting } from "../../component/common/Modal/ConfirmModal/ModalSetting";
import { openModal } from "../../redux/Modal";
import { useDispatch } from "react-redux";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userType, setUserType] = useState<"SELLER" | "BUYER">("SELLER");
  const dispatch = useDispatch();
  useEffect(() => {
    if (loginSuccess && userType === "SELLER") {
      navigate("/");
    } else if (loginSuccess && userType === "BUYER") {
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
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            modalProps: ModalSetting.LoginFailModal,
          })
        );
      }
    }
  };
  const handleOpenLoginModal = () => {
    navigate("/join");
  };

  return (
    <>
      <Main>
        <Link to="/">
          <LogoImg src={Logo} alt="Hodu 로고" />
        </Link>
        <AuthButton handleUserType={handleUserType} userType={userType} />
        {userType === "SELLER" ? (
          <SellerLogin
            onSubmit={(data: LoginData) => handleFormSubmit(data, userType)}
          />
        ) : (
          <BuyerLogin
            onSubmit={(data: LoginData) => handleFormSubmit(data, userType)}
          />
        )}
      </Main>
      <LinkGroup>
        <SignUp onClick={handleOpenLoginModal}>회원가입</SignUp>
        <FindPw>비밀번호찾기</FindPw>
      </LinkGroup>
    </>
  );
};

export default LoginPage;
