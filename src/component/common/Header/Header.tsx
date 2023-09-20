import React, { useState, useEffect } from "react";
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
  HeaderCenterSection,
} from "./Header.Style";
import HoduLogo from "../../../assets/images/Logo-hodu.png";
import Cart from "../../../assets/images/icon-shopping-cart.svg";
import OnCart from "../../../assets/images/icon-shopping-cart-2.svg";
import OnUser from "../../../assets/images/icon-user-2.svg";
import User from "../../../assets/images/icon-user.svg";
import Button from "component/common/Button/Button";
import SellerCenter from "../../../assets/images/icon-shopping-bag.svg";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setSearchData } from "redux/Search";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../../../assets/images/search.svg";
import { SearchAPI } from "../../../API/ProductAPI";
import { openModal } from "redux/Modal";
import Swal from "sweetalert2";

interface HeaderProps {
  type?: "home" | "seller" | "buyer" | "seller_center";
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const isCartPage = pathname === "/cart";
  const isMyPage = pathname === "/mypage";
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("home");
  const handleCenterBtn = () => {
    navigate("/seller/center");
  };
  const handleMoveCart = () => {
    navigate("/cart");
  };
  const handleMoveMyPage = () => {
    if (userInfo) {
      navigate("/mypage");
    } else {
      Swal.fire({
        text: "로그인 후 이용하실 수 있는 기능 입니다.",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "로그인 하러가기",
        confirmButtonText: "로그인 하러가기",
        icon: "warning",
        customClass: {
          icon: "my-icon",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          handleOpenLoginModal();
        }
      });
    }
  };
  console.log(pathname);
  const handleOpenLoginModal = () => {
    dispatch(
      openModal({
        modalType: "LoginModal",
        isOpen: true,
      })
    );
  };
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const search = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      try {
        const res = await SearchAPI(inputValue);
        dispatch(setSearchData({ value: res.data.results }));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  };
  const onClickHome = () => {
    setInputValue("");
    dispatch(setSearchData({ value: [] }));
  };
  const handleIconClick = () => {
    search({ key: "Enter" } as React.KeyboardEvent);
  };
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  useEffect(() => {
    if (userType) {
      if (userType === "BUYER") {
        setType("buyer");
      } else {
        setType("seller");
        if (
          pathname === "/seller/center" ||
          pathname === "/seller/center/upload"
        ) {
          setType("seller_center");
        }
      }
    } else {
      setType("home");
    }
  }, [pathname, type, userType]);

  const UI: { [key: string]: JSX.Element } = {
    home: (
      <>
        <Logo to="/">
          <LogoImage
            src={HoduLogo}
            alt="호두마켓 로고"
            onClick={() => onClickHome()}
          />
        </Logo>
        <HeaderForm onSubmit={(e) => e.preventDefault()}>
          <FormDiv>
            <HeaderInput
              type="text"
              placeholder=" "
              id="search-box"
              value={inputValue}
              onInput={handleData}
              onKeyDown={search}
            />
            <label htmlFor="search-box" onClick={handleIconClick}>
              <img src={Search} alt="검색창 아이콘" />
            </label>
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn onClick={handleMoveCart}>
            <img src={Cart} alt="쇼핑카트 아이콘" />
            장바구니
          </CartBtn>
          <UserBtn onClick={handleOpenLoginModal}>
            <img src={User} alt="로그인용 유저 아이콘" />
            로그인
          </UserBtn>
        </HeaderNav>
      </>
    ),
    seller: (
      <>
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm onSubmit={(e) => e.preventDefault()}>
          <FormDiv>
            <HeaderInput
              type="text"
              placeholder=" "
              id="search-box"
              value={inputValue}
              onInput={handleData}
              onKeyDown={search}
            />
            <label htmlFor="search-box" onClick={handleIconClick}>
              <img src={Search} alt="검색창 아이콘" />
            </label>
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
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm onSubmit={(e) => e.preventDefault()}>
          <FormDiv>
            <HeaderInput
              type="text"
              placeholder=" "
              id="search-box"
              value={inputValue}
              onInput={handleData}
              onKeyDown={search}
            />
            <label htmlFor="search-box" onClick={handleIconClick}>
              <img src={Search} alt="검색창 아이콘" />
            </label>
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
        <Logo to="/">
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
      {type === "seller_center" ? (
        <HeaderCenterSection>
          <section>{UI[type]}</section>
        </HeaderCenterSection>
      ) : (
        <HeaderSection>
          <section>{UI[type]}</section>
        </HeaderSection>
      )}
    </>
  );
};
export default Header;

const CenterImg = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;
