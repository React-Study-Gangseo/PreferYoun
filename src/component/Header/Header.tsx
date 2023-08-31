import React, { useState } from "react";
import {
  HeaderSection,
  HeaderNav,
  Logo,
  LogoImage,
  FormDiv,
  HeaderForm,
  HeaderInput,
  CartBtn,
  UserBtn,
} from "./Header.Style";
import HoduLogo from "../../assets/images/Logo-hodu.png";
import Cart from "../../assets/images/icon-shopping-cart.svg";
import User from "../../assets/images/icon-user.svg";
import Button from "component/common/Button/Button";
import SellerCenter from "../../assets/images/icon-shopping-bag.svg";
import JoinModal from "component/common/Modal/JoinModal";
import LoginModal from "component/common/Modal/LoginModal";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  type: "home" | "seller" | "buyer";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);

  const handleCenterBtn = () => {
    console.log("check");
    navigate("/seller/center");
  };
  const handleLogin = () => {
    setModalShow(true);
    setLogin(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setSignUp(false);
    setLogin(false);
  };
  const handleSignUp = () => {
    setSignUp(true);
    setLogin(false);
  };
  const UI = {
    home: (
      <>
        <Logo>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <label className="a11y-hidden">검색창</label>
            <HeaderInput type="text" placeholder=" " />
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn>
            <img src={Cart} alt="쇼핑카트 아이콘" />
            장바구니
          </CartBtn>
          <UserBtn onClick={handleLogin}>
            <img src={User} alt="로그인용 유저 아이콘" />
            로그인
          </UserBtn>
        </HeaderNav>
      </>
    ),
    seller: (
      <>
        <Logo>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <label className="a11y-hidden">검색창</label>
            <HeaderInput type="text" placeholder=" " />
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn>
            <img src={Cart} alt="쇼핑카트 아이콘" />
            장바구니
          </CartBtn>
          <Button width="ms" bgColor="active" onClick={handleCenterBtn}>
            <CenterImg src={SellerCenter} alt="판매자 센터 아이콘" />
            판매자 센터
          </Button>
        </HeaderNav>
      </>
    ),
    buyer: (
      <>
        <Logo>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <label className="a11y-hidden">검색창</label>
            <HeaderInput type="text" placeholder=" " />
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn>
            <img src={Cart} alt="쇼핑카트 아이콘" />
            장바구니
          </CartBtn>
          <UserBtn>
            <img src={User} alt="로그인용 유저 아이콘" />
            마이페이지
          </UserBtn>
        </HeaderNav>
      </>
    ),
  };
  return (
    <>
      <HeaderSection>{UI[type]}</HeaderSection>
      {modalShow && login && (
        <LoginModal closeModal={closeModal} openSignUp={handleSignUp} />
      )}
      {modalShow && signUp && <JoinModal closeModal={closeModal} />}
    </>
  );
};
export default Header;

const CenterImg = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;
