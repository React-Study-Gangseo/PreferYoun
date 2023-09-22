import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavWrapper,
  NavList,
  Center,
  ButtonContainer,
  CenterImg,
} from "./Navigation.Style";
import HomeIcon from "../../../assets/images/home-icon.svg";
import Search from "../../../assets/images/search-black.svg";
import Cart from "../../../assets/images/icon-shopping-cart.svg";
import OnCart from "../../../assets/images/icon-shopping-cart-2.svg";
import OnUser from "../../../assets/images/icon-user-2.svg";
import User from "../../../assets/images/icon-user.svg";
import SellerCenter from "../../../assets/images/icon-shopping-bag.svg";
import Swal from "sweetalert2";
export default function Navigation() {
  // const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isCartPage = pathname === "/cart";
  const isMyPage = pathname === "/mypage";
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;

  const handleMoveMyPage = () => {
    if (userInfo) {
      navigate("/mypage");
    } else {
      navigate("/login");
    }
  };
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
            <button onClick={handleMoveMyPage}>
              <img src={isMyPage ? OnUser : User} alt="마이페이지 아이콘" />
            </button>
          </li>
          {userType === "SELLER" ? (
            <li>
              <Center>
                <Link to="/seller/center">
                  <CenterImg src={SellerCenter} alt="판매자 센터 아이콘" />
                </Link>
              </Center>
            </li>
          ) : (
            <li>
              <Link to="/cart">
                <img src={isCartPage ? OnCart : Cart} alt="쇼핑카트 아이콘" />
              </Link>
            </li>
          )}
        </NavList>
      </NavWrapper>
    </>
  );
}
