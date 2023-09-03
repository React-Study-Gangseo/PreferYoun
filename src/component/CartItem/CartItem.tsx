import React, { useEffect, useState, useContext } from "react";
import {
  KeepProduct,
  KeepProductImg,
  KeepProductInfo,
  CountWrap,
  IncreaseButton,
  DecreaseButton,
  Total,
  TotalPrice,
  OrderBtnS,
  DeleteBtn,
} from "./CartItem.Style";
import { Products, cartItem } from "types/type";
import { DetailProduct } from "API/ProductAPI";
import Swal from "sweetalert2";
import { MyContext } from "../KeepPage/KeepPage";
import DeleteIcon from "../../assets/images/icon-delete.svg";

const CartItem: React.FC<{
  product: cartItem;
  allCheck: boolean;
  index: number;
  isChecked: boolean; // 추가된 prop type 선언
  onCheckChange(): void;
}> = ({
  product,
  allCheck,
  index,
  isChecked, // 추가된 prop type 선언
  onCheckChange,
}) => {
  const [cartItem, setCartItem] = useState<Products>();
  const [itemCount, setItemCount] = useState(product.quantity);
  const { count, shippingFee, price, setCount, setShippingFee, setPrice } =
    useContext(MyContext);
  const [selectItem, setSelectItem] = useState(false);

  const KeepProductDetail = async (product_id: number) => {
    try {
      const keepItem = await DetailProduct(product_id);
      setCartItem(keepItem.data);
      setShippingFee(keepItem.data.shipping_fee);
      setPrice(keepItem.data.price);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCount(product.quantity);
    KeepProductDetail(product.product_id);
  }, []);
  console.log(product.quantity, count, shippingFee, price);
  useEffect(() => {
    if (itemCount < 1) {
      Swal.fire({
        text: "최소 선택 수량은 1개입니다.",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
      setItemCount(1);
      return;
    } else if (cartItem?.stock && itemCount > cartItem?.stock) {
      Swal.fire({
        text: "최대 수량입니다. ",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
      setItemCount(cartItem.stock);
      return;
    } else {
      setCount(itemCount);
    }
  }, [itemCount]);

  const handleMinusItemCount = () => {
    setItemCount((prevItemCount) => prevItemCount - 1);
  };
  const handlePlusItemCount = () => {
    setItemCount((prevItemCount) => prevItemCount + 1);
  };
  const handleDeleteItem = (product_id: any) => {
    console.log(product_id);
  };

  useEffect(() => {
    setSelectItem(isChecked);
  }, [isChecked]);

  useEffect(() => {
    if (allCheck) {
      setSelectItem(true);
    } else {
      setSelectItem(false);
    }
  }, [allCheck]);

  const handleItemCheck = (checked: boolean) => {
    if (checked) {
      setSelectItem(true);
    } else {
      setSelectItem(false);
    }

    onCheckChange(); // 체크박스 상태가 변경될 때마다 부모에게 알림
  };
  const CalcPrice = () => {
    console.log(cartItem);
    if (cartItem?.price && count && cartItem?.shipping_fee !== undefined) {
      setPrice(cartItem.price);
      setCount(count);
      setShippingFee(cartItem.shipping_fee);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    if (selectItem) {
      CalcPrice();
    }
  }, [selectItem]);
  return (
    <KeepProduct>
      <input
        type="checkbox"
        checked={selectItem}
        onChange={(e) => handleItemCheck(e.target.checked)}
      />
      <label className="a11y-hidden">장바구니 아이템 체크박스</label>
      <KeepProductImg src={cartItem?.image} alt="장바구나 상품 이미지" />
      <KeepProductInfo>
        <span>{cartItem?.store_name}</span>
        <h3>{cartItem?.product_name}</h3>
        <p>
          <strong>
            {cartItem?.price
              ? new Intl.NumberFormat("ko-KR").format(cartItem.price)
              : "0"}
          </strong>
          원
        </p>
        {cartItem?.shipping_method === "PARCEL" ? (
          <span>
            택배배송 /{" "}
            {cartItem?.shipping_fee === 0
              ? "무료배송"
              : `${new Intl.NumberFormat("ko-KR").format(
                  cartItem?.shipping_fee || 0
                )}원`}
          </span>
        ) : (
          <span>
            직접배송 /{" "}
            {cartItem?.shipping_fee === 0
              ? "무료배송"
              : `${cartItem?.shipping_fee}원`}
          </span>
        )}
      </KeepProductInfo>
      <CountWrap>
        <DecreaseButton onClick={handleMinusItemCount}>-</DecreaseButton>
        <div>{itemCount}</div>
        <IncreaseButton onClick={handlePlusItemCount}>+</IncreaseButton>
      </CountWrap>
      <Total>
        {cartItem?.price && (
          <TotalPrice>
            {new Intl.NumberFormat("ko-KR").format(cartItem?.price * itemCount)}
            원
          </TotalPrice>
        )}
        <OrderBtnS>주문하기</OrderBtnS>
      </Total>
      <DeleteBtn onClick={() => handleDeleteItem(cartItem?.product_id)}>
        <img src={DeleteIcon} alt="상품 삭제 버튼" />
      </DeleteBtn>
    </KeepProduct>
  );
};

export default CartItem;
