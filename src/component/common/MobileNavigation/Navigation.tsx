import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavWrapper,
  NavList,
  ScrollButton,
  TopIcon,
  ButtonContainer,
  CenterImg,
  Center,
  BuyBtnLi,
  CartBuy,
  PriceLi,
} from "./Navigation.Style";
import HomeIcon from "../../../assets/images/home-icon.svg";
import TopBtnIcon from "../../../assets/images/arrow_top.svg";
import Search from "../../../assets/images/search-black.svg";
import More from "../../../assets/images/icon-up-arrow.svg";
import CloseMore from "../../../assets/images/icon-down-arrow.svg";
import Cart from "../../../assets/images/icon-shopping-cart.svg";
import User from "../../../assets/images/icon-user.svg";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import SellerCenter from "../../../assets/images/icon-shopping-bag.svg";
import Share from "../../../assets/images/share-icon.svg";
import { closeModal, openModal } from "../../../redux/Modal";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { CartOrderState } from "../../../redux/CartOrder";
import { TotalPriceState } from "../../../redux/TotalPrice";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);
  const pathname = location.pathname;
  const isCartPage = pathname === "/cart";
  const isCenter = pathname === "/seller/center";
  const isDetailPage = pathname.startsWith("/detailProduct/");
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const [isTotalPrice, setIsTotalPrice] = useState(false);
  const orderCartInfo = useSelector((state: { cartOrder: CartOrderState }) => {
    return state.cartOrder.value;
  });

  const totalPrice = useSelector((state: { totalPrice: TotalPriceState }) => {
    return state.totalPrice.value.reduce((sum, item) => sum + item.price, 0);
  });

  const totalShippingFee = useSelector(
    (state: { totalPrice: TotalPriceState }) => {
      return state.totalPrice.value.reduce(
        (sum, item) => sum + item.shipping_fee,
        0
      );
    }
  );
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
      })
    );
  };
  useEffect(() => {
    dispatch(closeModal());
  }, [pathname]);

  const handleTotalPrice = () => {
    setIsTotalPrice(!isTotalPrice);
    if (isTotalPrice) {
      dispatch(closeModal());
    } else {
      dispatch(
        openModal({
          modalType: "PriceModal",
        })
      );
    }
  };
  const initializeKakao = () => {
    //@ts-ignore
    if (window.Kakao && !window.Kakao.isInitialized()) {
      //@ts-ignore
      window.Kakao.init("0a8f716c5157a42141e742f8d1dc57aa");
    }
  };

  function kakaoButton() {
    alert("현재 크롬 써드 파트 문제로 제한 되어 있는 기능입니다.");
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
          mobileWebUrl: "https://markethodu.netlify.app",
          webUrl: "https://markethodu.netlify.app",
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
            mobileWebUrl: `https://markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
            webUrl: `https://markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
          },
        },
        {
          title: "공유하기",
          link: {
            mobileWebUrl: `https://markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
            webUrl: `https://markethodu.netlify.app/detailProduct/${productInfo.product_id}`,
          },
        },
      ],
    });
  }
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const showButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", showButtonClick);
    return () => {
      window.removeEventListener("scroll", showButtonClick);
    };
  }, []);

  const handleOrder = useCallback(() => {
    const order_kind: string = "cart_order";
    navigate("/orderpage", {
      state: {
        productInfo: orderCartInfo,
        order_kind: order_kind,
      },
    });
  }, [navigate, orderCartInfo]);

  return (
    <>
      <NavWrapper>
        <ButtonContainer>
          {showButton && (
            <ScrollButton onClick={scrollToTop}>
              <TopIcon src={TopBtnIcon} alt="Top" />
            </ScrollButton>
          )}
        </ButtonContainer>
        <NavList>
          {isDetailPage && (
            <>
              <li style={{ width: "80px" }}>
                <button onClick={kakaoButton}>
                  <img
                    src={Share}
                    alt="공유하기 아이콘"
                    aria-label="공유하기"
                  />
                </button>
              </li>
              <BuyBtnLi>
                <Button
                  size="ll"
                  color="primary"
                  variant="contained"
                  onClick={handleCountQuantity}
                  margin="auto auto"
                >
                  구매하기
                </Button>
              </BuyBtnLi>
            </>
          )}
          {isCartPage && (
            <>
              <PriceLi>
                <div>
                  <p>{`합계: ${new Intl.NumberFormat("ko-KR").format(
                    totalPrice + totalShippingFee
                  )} 원`}</p>
                  <button onClick={handleTotalPrice}>
                    <img src={!isTotalPrice ? More : CloseMore} alt="더보기" />
                  </button>
                </div>
              </PriceLi>
              <CartBuy>
                <div>
                  <Button
                    size="ll"
                    color="primary"
                    variant="contained"
                    onClick={handleOrder}
                    margin="auto 20px auto auto"
                    fontSize="18px"
                  >
                    {`전체 구매하기 (${orderCartInfo.length})`}
                  </Button>
                </div>
              </CartBuy>
            </>
          )}
          {!isDetailPage && !isCartPage && (
            <>
              <li>
                <Link to="/">
                  <img src={HomeIcon} alt="홈 아이콘" />
                </Link>
                {pathname === "/" && <span>HOME</span>}
              </li>
              <li>
                <Link to="/search">
                  <img src={Search} alt="검색창 아이콘" />
                </Link>
              </li>
              {!isCenter ? null : (
                <li>
                  <Link to="/seller/center/upload">
                    <AddCircleOutline
                      style={{ fontSize: 30 }}
                      aria-label="업로드 아이콘"
                    />
                  </Link>
                </li>
              )}
              <li>
                <button onClick={handleMoveMyPage}>
                  <img src={User} alt="마이페이지 아이콘" />
                </button>
                {pathname === "/mypage" && <span>mypage</span>}
              </li>
              {userType === "SELLER" ? (
                <li>
                  <Center>
                    <Link to="/seller/center">
                      <CenterImg src={SellerCenter} alt="판매자 센터 아이콘" />
                    </Link>
                    {pathname === "/seller/center" && <span>center</span>}
                  </Center>
                </li>
              ) : (
                <li>
                  <Link to="/cart">
                    <img src={Cart} alt="쇼핑카트 아이콘" />
                  </Link>
                  {pathname === "/cart" && <span>cart</span>}
                </li>
              )}
            </>
          )}
        </NavList>
      </NavWrapper>
    </>
  );
}
