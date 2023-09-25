import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavWrapper,
  NavList,
  Center,
  BuyBtn,
  CenterImg,
} from "./Navigation.Style";
import HomeIcon from "../../../assets/images/home-icon.svg";
import Search from "../../../assets/images/search-black.svg";
import Cart from "../../../assets/images/icon-shopping-cart.svg";
import OnCart from "../../../assets/images/icon-shopping-cart-2.svg";
import OnUser from "../../../assets/images/icon-user-2.svg";
import User from "../../../assets/images/icon-user.svg";
import SellerCenter from "../../../assets/images/icon-shopping-bag.svg";
import Share from "../../../assets/images/share-icon.svg";
import { useDispatch } from "react-redux";
import { openModal } from "redux/Modal";
export default function Navigation() {
  // const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const handleCountQuantity = () => {
    dispatch(
      openModal({
        modalType: "MobileModal",
        isOpen: true,
      })
    );
  };
  const initializeKakao = () => {
    //@ts-ignore
    if (window.Kakao && !window.Kakao.isInitialized()) {
      //@ts-ignore
      window.Kakao.init("0a8f716c5157a42141e742f8d1dc57aa");
    }
  };

  function kakaoButton() {
    initializeKakao();
    //@ts-ignore
    if (!window.Kakao) {
      return;
    }
    //@ts-ignore
    const kakao = window.Kakao;
    const ProductData = localStorage.getItem("ProductInfo");
    const productInfo = ProductData ? JSON.parse(ProductData) : null;
    kakao.Share.sendDefault({
      objectType: "commerce",
      content: {
        title: "호두 마켓에서 당신의 삶을 채워 보세요",
        imageUrl: productInfo?.image,
        link: {
          mobileWebUrl: "https:markethodu.netlify.app",
          webUrl: "https:markethodu.netlify.app",
        },
      },
      commerce: {
        productName: productInfo.product_name,
        regularPrice: productInfo.price,
      },
      buttons: [
        {
          title: "구매하기",
          link: {
            mobileWebUrl: `https:markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
            webUrl: `https:markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
          },
        },
        {
          title: "공유하기",
          link: {
            mobileWebUrl: `https:markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
            webUrl: `https:markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
          },
        },
      ],
    });
  }
  return (
    <>
      <NavWrapper>
        {/* <ButtonContainer>
          {showButton && (
            <ScrollButton onClick={scrollToTop}>
              <TopIcon src={topIcon} alt="Top" />
            </ScrollButton>
          )}
        </ButtonContainer> */}
        <NavList>
          {pathname.startsWith("/detailProduct/") ? (
            <>
              <li>
                <button onClick={kakaoButton}>
                  <img
                    src={Share}
                    alt="공유하기 아이콘"
                    aria-label="공유하기"
                  />
                </button>
              </li>
              <li>
                <BuyBtn bgColor="active" onClick={handleCountQuantity}>
                  구매하기
                </BuyBtn>
              </li>
            </>
          ) : (
            <>
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
                    <img
                      src={isCartPage ? OnCart : Cart}
                      alt="쇼핑카트 아이콘"
                    />
                  </Link>
                </li>
              )}
            </>
          )}
        </NavList>
      </NavWrapper>
    </>
  );
}
