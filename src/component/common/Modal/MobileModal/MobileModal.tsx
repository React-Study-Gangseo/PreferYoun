import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ModalLineSpan,
  CountWrap,
  TotalPriceWrap,
  DecreaseButton,
  IncreaseButton,
  BtnGroup,
  BuyButton,
  KeepButton,
} from "./MobileModal.Style";
import { Products, orderdata } from "types/type";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "redux/Modal";
import Swal from "sweetalert2";
import { DetailProduct } from "API/ProductAPI";
import { AddKeepProduct } from "API/KeepAPI";

export default function MobileModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const productId = Number(pathname.slice(15));
  const [productInfo, setProductInfo] = useState<Products>();
  const [postCartData, setPostCartData] = useState<orderdata>({
    product_id: productId,
    quantity: 0,
    check: true,
  });
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const [count, setCount] = useState(1);
  const handleMinusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handlePlusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchDetailProduct({ product: productId });
  }, []);
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
  const handleKeepProduct = async () => {
    if (productInfo?.stock) {
      const storedData = localStorage.getItem("UserInfo");
      if (storedData) {
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
              dispatch(closeModal());
            }
          });
        } else {
          try {
            const res = await AddKeepProduct(postCartData);
            console.log(res);

            navigate("/cart");
            dispatch(closeModal());
          } catch (error) {
            console.log(error);
          }
        }
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

  const handleBuyProduct = () => {
    if (productInfo?.stock) {
      navigate("/orderpage", {
        state: {
          order_kind: "direct_order",
          productInfo: {
            ...productInfo,
            quantity: count,
            product_id: productId,
          },
        },
      });
      dispatch(closeModal());
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
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <ModalLineSpan onClick={handleModalClose} />
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
    </>
  );
}
