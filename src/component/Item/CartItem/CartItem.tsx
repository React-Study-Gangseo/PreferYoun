import React, { useEffect, useState } from "react";
import {
  KeepProduct,
  KeepProductImg,
  KeepProductInfo,
  Total,
  TotalPrice,
  DeleteBtn,
  KeepProductMobile,
} from "./CartItem.Style";
import { Products, cartItem } from "types/type";
import { DetailProduct } from "API/ProductAPI";
import { useDispatch } from "react-redux";
import DeleteIcon from "../../../assets/images/icon-delete.svg";
import { UpdateQuantity } from "API/KeepAPI";
import { calcPrice, resetPrice } from "../../../redux/TotalPrice";
import { OrderProduct, removeOrderProduct } from "../../../redux/CartOrder";
import { useNavigate } from "react-router-dom";
import Button from "component/common/Button/Button";
import CheckBox from "component/common/CheckBox/CheckBox";
import CountButton from "component/common/Button/CountButton";
import { openModal } from "../../../redux/Modal";
import { ModalSetting } from "component/common/Modal/ConfirmModal/ModalSetting";
const CartItem: React.FC<{
  product: cartItem;
  isChecked: boolean;
  onCheckChange(): void;
  FetchKeepList(): void;
  handleDeleteItem(id: number): void;
}> = ({
  product,
  isChecked,
  onCheckChange,
  FetchKeepList,
  handleDeleteItem,
}) => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState<Products>();
  const [itemCount, setItemCount] = useState(product.quantity);
  const [selectItem, setSelectItem] = useState(false);
  const [updateItem, setUpdateItem] = useState<cartItem>();
  const navigate = useNavigate();
  let order_kind: string = "";
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
    dispatch(resetPrice());
  }, []);

  useEffect(() => {
    if (itemCount < 1) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.UnderStockModal,
        })
      );
      setItemCount(1);

      return;
    } else if (cartItem?.stock && itemCount > cartItem?.stock) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          isOpen: true,
          modalProps: ModalSetting.OverStockModal,
        })
      );
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
    if (order_kind === "cart_one_order") {
      console.log(order_kind);
    }
  }, [updateItem, order_kind]);

  const UpdateItemQuantity = async () => {
    if (updateItem) {
      try {
        await UpdateQuantity(updateItem);
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

  useEffect(() => {
    setSelectItem(isChecked);
    setUpdateItem(product);
    UpdateItemQuantity();
  }, [isChecked]);

  const handleItemCheck = (checked: boolean) => {
    console.log("🚀 ~ handleItemCheck ~ checked:", checked);
    if (checked) {
      setSelectItem(true);
    } else {
      setSelectItem(false);
    }

    onCheckChange(); // 체크박스 상태가 변경될 때마다 부모에게 알림
  };
  const handleDelete = (cart_item_id: number) => {
    dispatch(
      openModal({
        modalType: "ConfirmModal",
        isOpen: true,
        modalProps: ModalSetting.DeleteModal,
      })
    );
    handleDeleteItem(cart_item_id);
    dispatch(
      calcPrice({
        key: product.product_id.toString(),
        price: 0,
        shipping_fee: 0,
      })
    );
    dispatch(removeOrderProduct(product.product_id?.toString()));
    FetchKeepList();
  };
  useEffect(() => {
    if (
      selectItem &&
      cartItem?.price &&
      cartItem.product_name &&
      cartItem.image &&
      cartItem.store_name &&
      cartItem.product_id
    ) {
      console.log(itemCount);
      dispatch(
        OrderProduct({
          key: cartItem?.product_id?.toString(),
          image: cartItem?.image,
          price: cartItem?.price,
          store_name: cartItem?.store_name,
          shipping_fee: cartItem.shipping_fee || 0,
          product_name: cartItem?.product_name,
          quantity: itemCount,
        })
      );
    } else {
      dispatch(removeOrderProduct(product.product_id?.toString()));
    }
  }, [selectItem]);
  useEffect(() => {
    if (
      cartItem?.price &&
      cartItem.product_name &&
      cartItem.image &&
      cartItem.store_name &&
      cartItem.product_id
    ) {
      dispatch(
        OrderProduct({
          key: cartItem?.product_id?.toString(),
          image: cartItem?.image,
          price: cartItem?.price,
          store_name: cartItem?.store_name,
          shipping_fee: cartItem.shipping_fee || 0,
          product_name: cartItem?.product_name,
          quantity: itemCount,
        })
      );
    }
  }, [cartItem, itemCount]);

  useEffect(() => {
    if (selectItem && cartItem?.price) {
      dispatch(
        calcPrice({
          key: product.product_id.toString(),
          price: cartItem.price * itemCount,
          shipping_fee: cartItem.shipping_fee || 0,
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
    order_kind = "cart_one_order";
    if (updateItem && !updateItem?.is_active) {
      const orderItem = { ...updateItem, is_active: true };
      UpdateQuantity(orderItem);
    }
    navigate("/orderpage", {
      state: {
        productInfo: {
          ...cartItem,
          quantity: itemCount,
        },
        order_kind: order_kind,
      },
    });
  };

  return (
    <>
      <>
        <KeepProduct>
          <td>
            <CheckBox
              checked={!!selectItem}
              onChange={(checked) => handleItemCheck(checked)}
            />
          </td>
          <td>
            <KeepProductInfo>
              <KeepProductImg
                src={cartItem?.image}
                alt="장바구나 상품 이미지"
              />
              <div>
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
                    택배배송 /
                    {cartItem?.shipping_fee === 0
                      ? "무료배송"
                      : `${new Intl.NumberFormat("ko-KR").format(
                          cartItem?.shipping_fee || 0
                        )}원`}
                  </span>
                ) : (
                  <span>
                    직접배송 /
                    {cartItem?.shipping_fee === 0
                      ? "무료배송"
                      : `${cartItem?.shipping_fee}원`}
                  </span>
                )}
              </div>
            </KeepProductInfo>
          </td>
          <td>
            <CountButton
              handleMinusItemCount={handleMinusItemCount}
              handlePlusItemCount={handlePlusItemCount}
            >
              {itemCount}
            </CountButton>
          </td>
          <td>
            <Total>
              {cartItem?.price && (
                <TotalPrice>
                  {new Intl.NumberFormat("ko-KR").format(
                    cartItem?.price * itemCount
                  )}
                  원
                </TotalPrice>
              )}
              <Button
                size="ms"
                color="primary"
                variant="contained"
                onClick={() => handleOrderItem()}
                margin="0 auto"
              >
                주문하기
              </Button>
              <DeleteBtn onClick={() => handleDelete(product.cart_item_id)}>
                <img src={DeleteIcon} alt="상품 삭제 버튼" />
              </DeleteBtn>
            </Total>
          </td>
        </KeepProduct>
      </>
      <>
        <KeepProductMobile>
          <td>
            <input
              type="checkbox"
              checked={!!selectItem}
              onChange={(e) => handleItemCheck(e.target.checked)}
            />
            <label className="a11y-hidden">장바구니 아이템 체크박스</label>
          </td>
          <td>
            <KeepProductInfo>
              <KeepProductImg
                src={cartItem?.image}
                alt="장바구나 상품 이미지"
              />
              <div>
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
                    택배배송 /
                    {cartItem?.shipping_fee === 0
                      ? "무료배송"
                      : `${new Intl.NumberFormat("ko-KR").format(
                          cartItem?.shipping_fee || 0
                        )}원`}
                  </span>
                ) : (
                  <span>
                    직접배송 /
                    {cartItem?.shipping_fee === 0
                      ? "무료배송"
                      : `${cartItem?.shipping_fee}원`}
                  </span>
                )}
              </div>
            </KeepProductInfo>
          </td>
          <td></td>
          <td>
            <Total>
              <CountButton
                handleMinusItemCount={handleMinusItemCount}
                handlePlusItemCount={handlePlusItemCount}
              >
                {itemCount}
              </CountButton>
              {cartItem?.price && (
                <TotalPrice>
                  {new Intl.NumberFormat("ko-KR").format(
                    cartItem?.price * itemCount
                  )}
                  원
                </TotalPrice>
              )}
              <Button
                size="ms"
                color="primary"
                variant="contained"
                onClick={() => handleOrderItem()}
                margin="0 auto"
              >
                주문하기
              </Button>
              <DeleteBtn onClick={() => handleDelete(product.cart_item_id)}>
                <img src={DeleteIcon} alt="상품 삭제 버튼" />
              </DeleteBtn>
            </Total>
          </td>
        </KeepProductMobile>
      </>
    </>
  );
};

export default CartItem;
