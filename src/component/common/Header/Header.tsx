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
  MypageMenu,
} from "./Header.Style";
import HoduLogo from "../../../assets/images/Logo-hodu.png";
import Cart from "../../../assets/images/icon-shopping-cart.svg";
import OnCart from "../../../assets/images/icon-shopping-cart-2.svg";
import OnUser from "../../../assets/images/icon-user-2.svg";
import User from "../../../assets/images/icon-user.svg";
import Button from "../../../component/common/Button/Button";
import SellerCenter from "../../../assets/images/icon-shopping-bag.svg";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../../redux/Search";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../../../assets/images/search.svg";
import { SearchAPI } from "../../../API/ProductAPI";
import { openModal, closeModal } from "../../../redux/Modal";
import { ModalSetting } from "../Modal/ConfirmModal/ModalSetting";
import { useSelector } from "react-redux";
import { Logout } from "../../../API/AuthAPI";

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
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const modals = useSelector((state: any) => state.modal.modals);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const handleMoveMyPage = () => {
    if (userInfo) {
      navigate("/mypage");
    } else {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.LoginModal,
        })
      );
    }
  };
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const search = async (
    e: React.KeyboardEvent,
    value: string,
    page: number = 1,
    accumulatedResults: any[] = []
  ) => {
    if (e.key === "Enter") {
      try {
        const res = await SearchAPI(inputValue, page);
        accumulatedResults.push(...res.data.results);

        if (res.data.next) {
          await search(e, value, page + 1, accumulatedResults);
        } else {
          dispatch(setSearchData({ value: accumulatedResults }));
        }
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
    if (inputValue)
      search({ key: "Enter" } as React.KeyboardEvent, inputValue, 1, []);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search(e, inputValue, 1, []);
    }
  };
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
    setMenuVisible(false);
  }, [pathname, type, userType]);

  const handleButtonClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogOut = () => {
    dispatch(
      openModal({
        modalType: "ConfirmModal",
        modalProps: ModalSetting.LogOutModal,
      })
    );
  };
  const handleAgree = async () => {
    const response = await Logout();
    if (response.status === 200) {
      localStorage.removeItem("UserInfo");
      localStorage.removeItem("userCart");
      localStorage.removeItem("ProductInfo");
      navigate("/");
    } else {
      console.log("통신에러");
    }
    dispatch(closeModal());
  };

  useEffect(() => {
    const currentModalChoice =
      modals.length > 0 ? modals[modals.length - 1].modalChoice : undefined;
    if (currentModalChoice && modals[0].modalProps.title === "LogOut") {
      handleAgree();
    }
  }, [modals]);

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
        <HeaderForm onSubmit={(e) => e.preventDefault()} id="search-form">
          <FormDiv>
            <HeaderInput
              type="text"
              placeholder=" "
              id="search-box"
              value={inputValue}
              onInput={handleData}
              onKeyDown={handleKeyDown}
            />
            <label htmlFor="search-box" onClick={handleIconClick}>
              <img src={Search} alt="검색창 아이콘" />
            </label>
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn onClick={() => navigate("/cart")}>
            <img src={Cart} alt="쇼핑카트 아이콘" />
            <span>장바구니</span>
          </CartBtn>
          <UserBtn onClick={() => navigate("/login")}>
            <img src={User} alt="로그인용 유저 아이콘" />
            <span>로그인</span>
          </UserBtn>
        </HeaderNav>
      </>
    ),
    seller: (
      <>
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm onSubmit={(e) => e.preventDefault()} id="search-form">
          <FormDiv>
            <HeaderInput
              type="text"
              placeholder=" "
              id="search-box"
              value={inputValue}
              onInput={handleData}
              onKeyDown={handleKeyDown}
            />
            <label htmlFor="search-box" onClick={handleIconClick}>
              <img src={Search} alt="검색창 아이콘" />
            </label>
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <UserBtn onClick={handleMoveMyPage}>
            <img src={isMyPage ? OnUser : User} alt="마이페이지 아이콘" />
            <span>마이페이지</span>
          </UserBtn>
          <Button
            size="ms"
            variant="contained"
            color="primary"
            onClick={() => navigate("/seller/center")}
            padding="10px 20px"
            margin="auto 0"
          >
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
        <HeaderForm onSubmit={(e) => e.preventDefault()} id="search-form">
          <FormDiv>
            <HeaderInput
              type="text"
              placeholder=" "
              id="search-box"
              value={inputValue}
              onInput={handleData}
              onKeyDown={handleKeyDown}
            />
            <label htmlFor="search-box" onClick={handleIconClick}>
              <img src={Search} alt="검색창 아이콘" />
            </label>
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn onClick={() => navigate("/cart")}>
            <img src={isCartPage ? OnCart : Cart} alt="쇼핑카트 아이콘" />
            <span>장바구니</span>
          </CartBtn>
          <UserBtn onClick={handleButtonClick}>
            <img src={isMyPage ? OnUser : User} alt="마이페이지 아이콘" />
            <span>마이페이지</span>
          </UserBtn>
          {isMenuVisible && (
            <MypageMenu>
              <ul>
                <li>
                  <button
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    마이페이지
                  </button>
                </li>
                <li>
                  <button onClick={handleLogOut}>로그아웃</button>
                </li>
              </ul>
            </MypageMenu>
          )}
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
  aspect-ratio: 1/1;
  margin-right: 0.5rem;
`;
