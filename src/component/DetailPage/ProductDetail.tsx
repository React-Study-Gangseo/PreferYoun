import React, { useEffect, useState } from "react";
import {
  MainSection,
  DetailPageWrapper,
  Price,
  ProductImg,
  ProductInfoSection,
  CountWrap,
  DecreaseButton,
  IncreaseButton,
  TotalPriceWrap,
  BtnGroup,
  ShareBtn,
} from "./ProductDetail.Style";
import { Products, orderdata } from "types/type";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailProduct } from "API/ProductAPI";
import { AddKeepProduct } from "API/KeepAPI";
import Swal from "sweetalert2";
import ShareIcon from "@mui/icons-material/Share";
import MoreProductInfo from "./MoreInfo/MoreProductInfo";
import Button from "component/common/Button/Button";
const ProductDetail: React.FC = () => {
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname;
  const productId = Number(pathname.slice(15));
  const product = location.state;
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState<Products>();
  const [postCartData, setPostCartData] = useState<orderdata>({
    product_id: productId,
    quantity: 0,
    check: true,
  });
  const [count, setCount] = useState(1);
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;

  const FetchDetailProduct = async (data: { product: number }) => {
    try {
      const res = await DetailProduct(data.product);
      const {
        product_name,
        seller,
        store_name,
        image,
        price,
        shipping_method,
        shipping_fee,
        stock,
        product_info,
      } = res.data;
      const updatedProductInfo: Products = {
        product_name,
        seller,
        store_name,
        image,
        price,
        shipping_method,
        shipping_fee,
        stock,
        product_info,
      };
      setProductInfo(updatedProductInfo);
      localStorage.setItem("ProductInfo", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchDetailProduct({ product: productId });
  }, []);

  const handleMinusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handlePlusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    if (count < 1) {
      Swal.fire({
        text: "최소 선택 수량은 1개입니다.",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
      setCount(1);
      return;
    } else if (productInfo?.stock && count > productInfo?.stock) {
      Swal.fire({
        text: "최대 수량입니다. ",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
      setCount(productInfo.stock);
      return;
    } else {
      setPostCartData((prevState) => ({ ...prevState, quantity: count }));
    }
  }, [count]);

  const handleBuyProduct = () => {
    if (productInfo?.stock) {
      navigate("/orderpage", {
        state: {
          order_kind: "direct_order",
          productInfo: {
            ...productInfo,
            quantity: count,
            product_id: product.product,
          },
        },
      });
    } else {
      Swal.fire({
        text: "해당 상품은 현재 품절 상태 입니다.",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
    }
  };
  const handleKeepProduct = async () => {
    if (productInfo?.stock) {
      const storedData = localStorage.getItem("UserInfo");
      if (storedData && productInfo?.stock) {
        const storedCart = localStorage.getItem("userCart");
        const userCart = storedCart ? JSON.parse(storedCart) : null;
        let isItemInCart = false;

        userCart.forEach((item: any) => {
          if (item.product_id === productId) {
            isItemInCart = true;
          }
        });

        if (isItemInCart) {
          setPostCartData((prevState) => ({ ...prevState, check: false }));
          Swal.fire({
            text: "해당상품은 이미 장바구니에 있습니다. 장바구니로 이동하시겠습니까?",
            confirmButtonColor: "#21bf48",
            confirmButtonAriaLabel: "확인버튼",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/cart");
            }
          });
        } else {
          try {
            const res = await AddKeepProduct(postCartData);
            console.log(res);

            navigate("/cart");
          } catch (error) {
            console.log(error);
          }
        }
      } else if (storedData) {
        Swal.fire({
          text: "해당 상품은 현재 품절 상태 입니다.",
          icon: "warning",
          confirmButtonColor: "#21bf48",
          confirmButtonAriaLabel: "확인버튼",
          customClass: {
            icon: "my-icon",
          },
        });
      } else {
        Swal.fire({
          title: "로그인 후 이용 가능한 기능입니다.",
          text: "로그인 하시겠습니까?",
          icon: "warning",
          confirmButtonColor: "#21bf48",
          confirmButtonAriaLabel: "로그인하러가기",
          confirmButtonText: "로그인하러가기",
          customClass: {
            icon: "my-icon",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
    } else {
      Swal.fire({
        text: "해당 상품은 현재 품절 상태 입니다.",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
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
  return (
    <MainSection>
      <DetailPageWrapper>
        <ProductImg src={productInfo?.image} alt="상품 사진" />
        <ProductInfoSection>
          <span>{productInfo?.store_name}</span>
          <h3>{productInfo?.product_name}</h3>
          <ShareBtn
            color="secondary"
            aria-label="공유하기 버튼"
            onClick={kakaoButton}
          >
            <ShareIcon fontSize="large" />
          </ShareBtn>
          <Price>
            {productInfo?.price && (
              <strong>
                {new Intl.NumberFormat("ko-KR").format(productInfo?.price)}
              </strong>
            )}
            원
          </Price>
          {productInfo?.shipping_method === "PARCEL" ? (
            <span>
              택배배송 /{" "}
              {productInfo?.shipping_fee === 0
                ? "무료배송"
                : `${new Intl.NumberFormat("ko-KR").format(
                    productInfo?.shipping_fee || 0
                  )}원`}
            </span>
          ) : (
            <span>
              직접배송 /{" "}
              {productInfo?.shipping_fee === 0
                ? "무료배송"
                : `${new Intl.NumberFormat("ko-KR").format(
                    productInfo?.shipping_fee || 0
                  )}원`}
            </span>
          )}
          <CountWrap>
            <DecreaseButton onClick={handleMinusCount}>-</DecreaseButton>
            <div>{count}</div>
            <IncreaseButton onClick={handlePlusCount}>+</IncreaseButton>
          </CountWrap>
          <TotalPriceWrap>
            <p>총 상품 금액</p>
            <span>
              총 수량 <strong>{count}</strong>개
            </span>
            <p>
              {productInfo?.price && (
                <strong>
                  {new Intl.NumberFormat("ko-KR").format(
                    productInfo?.price * count
                  )}
                </strong>
              )}
              원
            </p>
          </TotalPriceWrap>
          <BtnGroup>
            <Button
              size="m"
              color={userType === "BUYER" ? "primary" : "secondary"}
              variant="contained"
              onClick={handleBuyProduct}
              fontSize="20px"
              padding=" 0 40px"
            >
              바로구매
            </Button>
            <Button
              size="ms"
              onClick={handleKeepProduct}
              color="secondary"
              variant="contained"
              padding=" 0 40px"
              fontSize="20px"
            >
              장바구니
            </Button>
          </BtnGroup>
        </ProductInfoSection>
      </DetailPageWrapper>
      <MoreProductInfo Productinfo={productInfo?.product_info || ""} />
    </MainSection>
  );
};

export default ProductDetail;
