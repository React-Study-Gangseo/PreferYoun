import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ModalLineSpan,
  CountWrap,
  TotalPriceWrap,
  BtnGroup,
} from "./MobileModal.Style";
import { Products, orderdata } from "types/type";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../../../redux/Modal";
import { DetailProduct } from "../../../../API/ProductAPI";
import { AddKeepProduct } from "../../../../API/KeepAPI";
import Button from "../../../../component/common/Button/Button";
import CountButton from "../../../../component/common/Button/CountButton";
import { ModalSetting } from "../ConfirmModal/ModalSetting";

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
  const modals = useSelector((state: any) => state.modal.modals);

  const currentModalChoice =
    modals.length > 0 ? modals[modals.length - 1].modalChoice : undefined;
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
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.UnderStockModal,
        })
      );
      setCount(1);
      return;
    } else if (productInfo?.stock && count > productInfo?.stock) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.OverStockModal,
        })
      );
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
          dispatch(
            openModal({
              modalType: "ConfirmModal",
              modalProps: ModalSetting.GoCartModal,
            })
          );
        } else {
          try {
            await AddKeepProduct(postCartData);
            dispatch(closeModal());
            navigate("/cart");
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            modalProps: ModalSetting.LoginModal,
          })
        );
      }
    } else {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.SoldOutModal,
        })
      );
    }
  };

  useEffect(() => {
    if (currentModalChoice) {
      dispatch(closeModal());
      navigate("/cart");
    }
  }, [currentModalChoice]);

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
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.SoldOutModal,
        })
      );
    }
  };
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <ModalLineSpan onClick={handleModalClose} />
      <CountWrap>
        <CountButton
          handleMinusItemCount={handleMinusCount}
          handlePlusItemCount={handlePlusCount}
        >
          {count}
        </CountButton>
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
          size="l"
          color={userType === "BUYER" ? "primary" : "secondary"}
          onClick={handleBuyProduct}
          disabled={userType === "BUYER" ? false : true}
        >
          바로구매
        </Button>
        <Button
          size="ms"
          onClick={handleKeepProduct}
          color="secondary"
          disabled={userType === "BUYER" ? false : true}
        >
          장바구니
        </Button>
      </BtnGroup>
    </>
  );
}
