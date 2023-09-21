import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavWrapper,
  NavList,
  NavLink,
  ButtonContainer,
} from "./Navigation.Style";
import HomeIcon from "../../../assets/images/home-icon.svg";
import Search from "../../../assets/images/search-black.svg";
import Cart from "../../../assets/images/icon-shopping-cart.svg";
import OnCart from "../../../assets/images/icon-shopping-cart-2.svg";
import OnUser from "../../../assets/images/icon-user-2.svg";
import User from "../../../assets/images/icon-user.svg";
export default function Navigation() {
  // const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const isCartPage = pathname === "/cart";
  const isMyPage = pathname === "/mypage";
  return (
    <>
      <NavWrapper>
        <ButtonContainer>
          {/* {showButton && (
            <ScrollButton onClick={scrollToTop}>
              <TopIcon src={topIcon} alt="Top" />
            </ScrollButton>
          )} */}
        </ButtonContainer>
        <NavList>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="홈 아이콘" />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <img src={Search} alt="검색창 아이콘" />
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <img src={isMyPage ? OnUser : User} alt="마이페이지 아이콘" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={isCartPage ? OnCart : Cart} alt="쇼핑카트 아이콘" />
            </Link>
          </li>
        </NavList>
      </NavWrapper>
    </>
  );
}
