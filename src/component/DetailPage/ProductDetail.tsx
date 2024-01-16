import React, { useEffect, useState, useCallback } from "react";
import {
  MainSection,
  DetailPageWrapper,
  Price,
  ProductImg,
  ProductInfoSection,
  TotalPriceWrap,
  BtnGroup,
  ShareBtn,
  CountWrap,
} from "./ProductDetail.Style";
import { Products, orderdata } from "types/type";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailProduct } from "API/ProductAPI";
import { AddKeepProduct } from "API/KeepAPI";
import ShareIcon from "@mui/icons-material/Share";
import MoreProductInfo from "./MoreInfo/MoreProductInfo";
import Button from "component/common/Button/Button";
import CountButton from "component/common/Button/CountButton";
import kakaoButton from "CustomHook/KakaoShare";
import { openModal } from "../../redux/Modal";
import { useDispatch } from "react-redux";
import { ModalSetting } from "component/common/Modal/ConfirmModal/ModalSetting";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const productId = Number(location.pathname.slice(15));
  const product = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState<Products>();
  const [postCartData, setPostCartData] = useState<orderdata>({
    product_id: productId,
    quantity: 0,
    check: true,
  });
  const [count, setCount] = useState(1);
  const userInfo = localStorage.getItem("UserInfo")
    ? JSON.parse(localStorage.getItem("UserInfo")!)
    : null;
  const userType = userInfo ? userInfo.user_type : null;

  const handleMinusCount = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const handlePlusCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await DetailProduct(productId);
        setProductInfo(res.data);
        localStorage.setItem("ProductInfo", JSON.stringify(res.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  useEffect(() => {
    if (count < 1) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.UnderStockModal,
        })
      );
      setCount(1);
      return;
    } else if (productInfo?.stock && count > productInfo?.stock) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.OverStockModal,
        })
      );
      setCount(productInfo.stock);
      return;
    } else {
      setPostCartData((prevState) => ({ ...prevState, quantity: count }));
    }
  }, [count, productInfo?.stock]);

  const handleBuyProduct = useCallback(() => {
    if (productInfo?.stock && !userInfo) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.LoginModal,
        })
      );
    } else if (productInfo?.stock) {
      navigate("/orderpage", {
        state: {
          order_kind: "direct_order",
          productInfo: {
            ...productInfo,
            quantity: count,
            product_id: product?.product,
          },
        },
      });
    } else {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.SoldOutModal,
        })
      );
    }
  }, [count, dispatch, navigate, productInfo, userInfo]);

  const handleKeepProduct = useCallback(async () => {
    if (productInfo?.stock) {
      if (userInfo && productInfo?.stock) {
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
              isOpen: true,
              modalProps: ModalSetting.GoCartModal,
            })
          );
        } else {
          try {
            await AddKeepProduct(postCartData);
            navigate("/cart");
          } catch (error) {
            console.log(error);
          }
        }
      } else if (userInfo) {
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            isOpen: true,
            modalProps: ModalSetting.SoldOutModal,
          })
        );
      } else {
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            isOpen: true,
            modalProps: ModalSetting.LoginModal,
          })
        );
      }
    } else {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.SoldOutModal,
        })
      );
    }
  }, [productId, userInfo, navigate, postCartData, productInfo, dispatch]);

  const handleKakaoShare = useCallback(() => {
    if (productInfo) kakaoButton(productInfo);
  }, [productInfo]);

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
            onClick={handleKakaoShare}
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
          <span>
            {productInfo?.shipping_method === "PARCEL"
              ? "택배배송"
              : "직접배송"}{" "}
            /{" "}
            {productInfo?.shipping_fee === 0
              ? "무료배송"
              : `${new Intl.NumberFormat("ko-KR").format(
                  productInfo?.shipping_fee || 0
                )}원`}
          </span>
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
