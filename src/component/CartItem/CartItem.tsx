import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import DeleteIcon from "../../assets/images/icon-delete.svg";
import { DeleteCartItem, UpdateQuantity } from "API/KeepAPI";
import { calcPrice } from "redux/TotalPrice";
import { useNavigate } from "react-router-dom";
import { orderdata } from "types/type";

const CartItem: React.FC<{
  product: cartItem;
  isChecked: boolean;
  onCheckChange(): void;
  FetchKeepList(): void;
}> = ({ product, isChecked, onCheckChange, FetchKeepList }) => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState<Products>();
  const [itemCount, setItemCount] = useState(product.quantity);
  const [selectItem, setSelectItem] = useState(false);
  const [updateItem, setUpdateItem] = useState<cartItem>();
  const navigate = useNavigate();
  const KeepProductDetail = async (product_id: number) => {
    try {
      const keepItem = await DetailProduct(product_id);
      setCartItem(keepItem.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setUpdateItem(product);
    KeepProductDetail(product.product_id);
  }, []);

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
      setUpdateItem((prevState) => {
        if (prevState) {
          return { ...prevState, quantity: itemCount };
        } else {
          return prevState;
        }
      });
      setItemCount(itemCount);
    }
  }, [itemCount]);

  useEffect(() => {
    UpdateItemQuantity();
  }, [updateItem]);

  const UpdateItemQuantity = async () => {
    const storedData = localStorage.getItem("UserInfo");
    const userInfo = storedData ? JSON.parse(storedData) : null;
    const token = userInfo ? userInfo.token : null;
    console.log(updateItem);
    if (updateItem) {
      try {
        await UpdateQuantity(updateItem, token);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleMinusItemCount = () => {
    setItemCount((prevItemCount) => prevItemCount - 1);
  };
  const handlePlusItemCount = () => {
    setItemCount((prevItemCount) => prevItemCount + 1);
  };
  const handleDeleteItem = async (cart_item_id: any) => {
    const storedData = localStorage.getItem("UserInfo");
    const userInfo = storedData ? JSON.parse(storedData) : null;
    const token = userInfo ? userInfo.token : null;
    try {
      const res = await DeleteCartItem(cart_item_id, token);
      console.log(res);
      if (res.status === 204) {
        FetchKeepList();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setSelectItem(isChecked);
  }, [isChecked]);

  const handleItemCheck = (checked: boolean) => {
    if (checked) {
      setSelectItem(true);
    } else {
      setSelectItem(false);
    }

    onCheckChange(); // 체크박스 상태가 변경될 때마다 부모에게 알림
  };
  useEffect(() => {
    if (selectItem && cartItem?.price && cartItem.shipping_fee) {
      dispatch(
        calcPrice({
          key: product.product_id.toString(),
          price: cartItem.price * itemCount,
          shipping_fee: cartItem.shipping_fee,
        })
      );
    } else {
      dispatch(
        calcPrice({
          key: product.product_id.toString(),
          price: 0,
          shipping_fee: 0,
        })
      );
    }
  }, [cartItem, selectItem, itemCount]);

  const handleOrderItem = () => {
    const order_kind: string = "cart_one_order";
    navigate("/orderpage", {
      state: {
        productInfo: cartItem,
        order_kind: order_kind,
        count: itemCount,
      },
    });
  };
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
        <OrderBtnS
          width="ms"
          bgColor="active"
          onClick={() => handleOrderItem()}
        >
          주문하기
        </OrderBtnS>
      </Total>
      <DeleteBtn onClick={() => handleDeleteItem(product.cart_item_id)}>
        <img src={DeleteIcon} alt="상품 삭제 버튼" />
      </DeleteBtn>
    </KeepProduct>
  );
};

export default CartItem;
