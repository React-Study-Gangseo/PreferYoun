import React, { useState, useEffect } from "react";
import {
  HeaderSection,
  Logo,
  LogoImage,
  HeaderForm,
  HeaderInput,
  HeaderCenterSection,
} from "./Header.Style";
import { TextField } from "@mui/material";
import HoduLogo from "../../../assets/images/Logo-hodu.png";
import Button from "component/common/Button/Button";
import SellerCenter from "../../../assets/images/icon-shopping-bag.svg";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setSearchData } from "redux/Search";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../../../assets/images/search.svg";
import { SearchAPI } from "../../../API/ProductAPI";

interface HeaderProps {
  type?: "home" | "seller" | "buyer" | "seller_center" | "cart_mypage";
}

const MobileHeader: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("home");

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
  const handleIconClick = (e: React.MouseEvent) => {
    search({ key: "Enter" } as React.KeyboardEvent);
  };
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  useEffect(() => {
    if (userType) {
      if (pathname === "/cart" || pathname === "/mypage") {
        setType("cart_mypage");
      } else if (userType === "BUYER") {
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
      if (pathname === "/cart" || pathname === "/mypage") {
        setType("cart_mypage");
      }
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
        <Form onSubmit={(e) => e.preventDefault()}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            onKeyDown={search}
            fullWidth
            style={{ fontSize: "20px" }}
          />
          <label className="a11y-hidden">상품검색</label>
          <SearchBtn onClick={(e) => handleIconClick(e)} type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
      </>
    ),
    seller: (
      <>
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <Form onSubmit={(e) => e.preventDefault()}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            onKeyDown={search}
            fullWidth
            style={{ fontSize: "20px" }}
          />
          <label className="a11y-hidden">상품검색</label>
          <SearchBtn onClick={(e) => handleIconClick(e)} type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
      </>
    ),
    buyer: (
      <>
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>

        <Form onSubmit={(e) => e.preventDefault()}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            onKeyDown={search}
            fullWidth
            style={{ fontSize: "20px" }}
          />
          <label className="a11y-hidden">상품검색</label>
          <SearchBtn onClick={(e) => handleIconClick(e)} type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
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
    cart_mypage: (
      <>
        <Logo to="/">
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <h2>마이페이지</h2>
        </HeaderForm>
      </>
    ),
  };
  return (
    <>
      {type === "seller_center" || type === "cart_mypage" ? (
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
export default MobileHeader;

const CenterImg = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 15px;
`;

const Form = styled.form`
  width: 100%;
  position: relative;
`;
