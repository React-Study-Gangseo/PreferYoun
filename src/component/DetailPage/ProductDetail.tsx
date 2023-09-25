import React, { useEffect, useState } from "react";
import {
  MainSection,
  DetailPageWrapper,
  Price,
  ProductImg,
  ProductInfoSection,
  CountWrap,
  BuyButton,
  KeepButton,
  DecreaseButton,
  IncreaseButton,
  TotalPriceWrap,
  BtnGroup,
} from "./ProductDetail.Style";
import { Products, orderdata } from "types/type";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailProduct } from "API/ProductAPI";
import { AddKeepProduct } from "API/KeepAPI";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { openModal } from "redux/Modal";
import MoreProductInfo from "./MoreInfo/MoreProductInfo";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state;
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState<Products>();
  const [postCartData, setPostCartData] = useState<orderdata>({
    product_id: product.product,
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
      console.log(res.data);
      localStorage.setItem("ProductInfo", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchDetailProduct(product);
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
  };
  const handleKeepProduct = async () => {
    const storedData = localStorage.getItem("UserInfo");
    if (storedData) {
      try {
        const storedCart = localStorage.getItem("userCart");
        const userCart = storedCart ? JSON.parse(storedCart) : null;
        userCart.forEach((item: any) => {
          if (item.product_id === product.product) {
            setPostCartData((prevState) => ({ ...prevState, check: false }));
          }
        });
        const res = await AddKeepProduct(postCartData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      navigate("/cart");
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
          dispatch(
            openModal({
              modalType: "LoginModal",
              isOpen: true,
            })
          );
        }
      });
    }
  };
  return (
    <MainSection>
      <DetailPageWrapper>
        <ProductImg src={productInfo?.image} alt="상품 사진" />
        <ProductInfoSection>
          <span>{productInfo?.store_name}</span>
          <h3>{productInfo?.product_name}</h3>
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
            <DecreaseButton
              onClick={handleMinusCount}
              disabled={userType === "BUYER" ? false : true}
            >
              -
            </DecreaseButton>
            <div>{count}</div>
            <IncreaseButton
              onClick={handlePlusCount}
              disabled={userType === "BUYER" ? false : true}
            >
              +
            </IncreaseButton>
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
            <BuyButton
              width="l"
              bgColor={userType === "BUYER" ? "active" : "dark"}
              onClick={handleBuyProduct}
              disabled={userType === "BUYER" ? false : true}
            >
              바로구매
            </BuyButton>
            <KeepButton
              width="ms"
              onClick={handleKeepProduct}
              bgColor="dark"
              disabled={userType === "BUYER" ? false : true}
            >
              장바구니
            </KeepButton>
          </BtnGroup>
        </ProductInfoSection>
      </DetailPageWrapper>
      <MoreProductInfo Productinfo={productInfo?.product_info || ""} />
    </MainSection>
  );
};

export default ProductDetail;
