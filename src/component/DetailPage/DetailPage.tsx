import React, { useEffect, useState } from "react";
import {
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
  MoreInfo,
  BtnGroup,
} from "./DetailPage.Style";
import { Products } from "types/type";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailProduct } from "API/ProductAPI";
import { AddKeepProduct } from "API/KeepAPI";
import Swal from "sweetalert2";
import Button from "component/common/Button/Button";
const DetailPage: React.FC = () => {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState<Products>();
  const [count, setCount] = useState(1);
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
        products_info,
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
        products_info,
      };
      setProductInfo(updatedProductInfo);
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
    }
  }, [count]);
  const handleBuyProduct = () => {
    navigate("/orderpage", {
      state: {
        order_kind: "direct_order",
        productInfo: productInfo,
        count: count,
      },
    });
  };
  const handleKeepProduct = async () => {
    try {
      const storedData = localStorage.getItem("UserInfo");
      const userInfo = storedData ? JSON.parse(storedData) : null;
      const token = userInfo ? userInfo.token : null;
      // const res = await AddKeepProduct(token);
    } catch (error) {
      console.log(error);
    }
    navigate("/cart", {
      state: {
        productInfo: productInfo,
        count: count,
      },
    });
  };
  return (
    <>
      {/* <Header /> */}
      <DetailPageWrapper>
        <ProductImg src={productInfo?.image} alt="상품 사진" />
        <ProductInfoSection>
          <span>{productInfo?.store_name}</span>
          <h3>{productInfo?.product_name}</h3>
          <Price>
            <strong>{productInfo?.price}</strong>원
          </Price>
          {productInfo?.shipping_method === "PARCEL" ? (
            <span>택배배송 / {`${productInfo.shipping_fee}원`}</span>
          ) : (
            <span>직접배송 / {`${productInfo?.shipping_fee}원`}</span>
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
                <strong>{count * productInfo.price}</strong>
              )}
              원
            </p>
          </TotalPriceWrap>
          <BtnGroup>
            <BuyButton width="l" bgColor="active" onClick={handleBuyProduct}>
              바로구매
            </BuyButton>
            <KeepButton width="ms" bgColor="dark" onClick={handleKeepProduct}>
              장바구니
            </KeepButton>
          </BtnGroup>
        </ProductInfoSection>
      </DetailPageWrapper>
      <MoreInfo>
        <ul>
          <li>
            <Button width="tabMenu" color="black">
              상세보기
            </Button>
          </li>
          <li>
            <Button width="tabMenu" color="black">
              리뷰
            </Button>
          </li>
          <li>
            <Button width="tabMenu" color="black">
              Q & A
            </Button>
          </li>
          <li>
            <Button width="tabMenu" color="black">
              반품/교환정보
            </Button>
          </li>
        </ul>
      </MoreInfo>
    </>
  );
};

export default DetailPage;
