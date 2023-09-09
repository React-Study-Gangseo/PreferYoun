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
  SearchSubmit,
} from "./Header.Style";
import HoduLogo from "../../assets/images/Logo-hodu.png";
import Cart from "../../assets/images/icon-shopping-cart.svg";
import OnCart from "../../assets/images/icon-shopping-cart-2.svg";
import OnUser from "../../assets/images/icon-user-2.svg";
import User from "../../assets/images/icon-user.svg";
import Button from "component/common/Button/Button";
import SellerCenter from "../../assets/images/icon-shopping-bag.svg";
import JoinModal from "component/common/Modal/JoinModal";
import LoginModal from "component/common/Modal/LoginModal";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../../assets/images/search.svg";
interface HeaderProps {
  type: "home" | "seller" | "buyer" | "seller_center";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const pathname = location.pathname;

  const isCartPage = pathname === "/cart";
  const isMyPage = pathname === "/mypage";

  const handleCenterBtn = () => {
    navigate("/seller/center");
  };
  const handleMoveCart = () => {
    navigate("/cart");
  };
  const handleMoveMyPage = () => {
    navigate("/mypage");
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
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const UI = {
    home: (
      <>
        <Logo to="/">
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <HeaderInput type="text" placeholder=" " id="search-box" />
            <label htmlFor="search-box">
              <img src={Search} alt="검색창 아이콘" />
            </label>
            <SearchSubmit type="submit" id="search-submit" />
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
        <Logo to={`/${userType.toLowerCase()}`}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <HeaderInput type="text" placeholder=" " id="search-box" />
            <label htmlFor="search-box">
              <img src={Search} alt="검색창 아이콘" />
            </label>
            <SearchSubmit type="submit" id="search-submit" />
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <UserBtn onClick={handleMoveMyPage}>
            <img src={isMyPage ? OnUser : User} alt="마이페이지 아이콘" />
            마이페이지
          </UserBtn>
          <Button width="ms" bgColor="active" onClick={handleCenterBtn}>
            <CenterImg src={SellerCenter} alt="판매자 센터 아이콘" />
            판매자 센터
          </Button>
        </HeaderNav>
      </>
    ),
    buyer: (
      <>
        <Logo to={`/${userType.toLowerCase()}`}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <HeaderInput type="text" placeholder=" " id="search-box" />
            <label htmlFor="search-box">
              <img src={Search} alt="검색창 아이콘" />
            </label>
            <SearchSubmit type="submit" id="search-submit" />
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn onClick={handleMoveCart}>
            <img src={isCartPage ? OnCart : Cart} alt="쇼핑카트 아이콘" />
            장바구니
          </CartBtn>
          <UserBtn onClick={handleMoveMyPage}>
            <img src={isMyPage ? OnUser : User} alt="마이페이지 아이콘" />
            마이페이지
          </UserBtn>
        </HeaderNav>
      </>
    ),
    seller_center: (
      <>
        <Logo to="/seller">
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <h2>판매자센터</h2>
        </HeaderForm>
      </>
    ),
  };
  return (
    <>
      <HeaderSection>
        <section>{UI[type]}</section>
      </HeaderSection>
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
