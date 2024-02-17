import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  KeepProduct,
  KeepProductImg,
  KeepProductInfo,
  Total,
  TotalPrice,
  DeleteBtn,
  KeepProductMobile,
  CountWrap,
} from "./CartItem.Style";
import { Products, cartItem } from "types/type";
import { DetailProduct } from "API/ProductAPI";
import { UpdateQuantity } from "API/KeepAPI";
import { calcPrice, resetPrice } from "../../../redux/TotalPrice";
import { OrderProduct, removeOrderProduct } from "../../../redux/CartOrder";
import { closeModal, openModal } from "../../../redux/Modal";
import { ModalSetting } from "component/common/Modal/ConfirmModal/ModalSetting";
import Button from "component/common/Button/Button";
import CheckBox from "component/common/CheckBox/CheckBox";
import CountButton from "component/common/Button/CountButton";
import DeleteIcon from "../../../assets/images/icon-delete.svg";

type CartItemProps = {
  product: cartItem;
  isChecked: boolean;
  onCheckChange(): void;
  FetchKeepList(): void;
  handleDeleteItem(id: number): void;
  index: number;
};

const CartItem: React.FC<CartItemProps> = React.memo(
  ({
    product,
    isChecked,
    onCheckChange,
    FetchKeepList,
    handleDeleteItem,
    index,
  }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cartItem, setCartItem] = useState<Products | undefined>();
    const [itemCount, setItemCount] = useState<number>(product.quantity);
    const [selectItem, setSelectItem] = useState<boolean>(false);
    const modals = useSelector((state: any) => state.modal.modals);
    let delete_id = useRef<number | null>(null);

    const KeepProductDetail = useCallback(async (product_id: number) => {
      try {
        const keepItem = await DetailProduct(product_id);
        setCartItem(keepItem.data);
      } catch (error) {
        console.log(error);
      }
    }, []);

    useEffect(() => {
      KeepProductDetail(product.product_id);
      dispatch(resetPrice());
    }, [KeepProductDetail, product.product_id, dispatch]);

    useEffect(() => {
      if (itemCount < 1) {
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            modalProps: ModalSetting.UnderStockModal,
          })
        );
        setItemCount(1);
      } else if (cartItem?.stock && itemCount > cartItem?.stock) {
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            modalProps: ModalSetting.OverStockModal,
          })
        );
        setItemCount(cartItem.stock);
      } else {
        setItemCount(itemCount);
      }
    }, [itemCount, cartItem?.stock, dispatch]);

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
    }, [selectItem, cartItem, itemCount, dispatch]);

    const handleMinusItemCount = useCallback(() => {
      setItemCount((prevItemCount) => prevItemCount - 1);
    }, []);

    const handlePlusItemCount = useCallback(() => {
      setItemCount((prevItemCount) => prevItemCount + 1);
    }, []);

    useEffect(() => {
      setSelectItem(isChecked);
    }, [isChecked]);

    const handleItemCheck = useCallback(
      (checked: boolean) => {
        setSelectItem(checked);
        onCheckChange();
      },
      [onCheckChange]
    );

    const handleDelete = useCallback(
      (cart_item_id: number) => {
        delete_id.current = cart_item_id;
        dispatch(
          openModal({
            modalType: "ConfirmModal",
            modalProps: ModalSetting.DeleteModal,
          })
        );
      },
      [dispatch]
    );
    useEffect(() => {
      const currentModalChoice =
        modals.length > 0 ? modals[modals.length - 1].modalChoice : undefined;

      if (currentModalChoice && delete_id.current !== null) {
        handleDeleteItem(delete_id.current);
        dispatch(
          calcPrice({
            key: product.product_id?.toString(),
            price: 0,
            shipping_fee: 0,
          })
        );
        dispatch(removeOrderProduct(product.product_id?.toString()));
        FetchKeepList();
        dispatch(closeModal());
      } else if (currentModalChoice === false) {
        dispatch(closeModal());
      }
    }, [modals]);

    const handleOrderItem = useCallback(() => {
      const order_kind = "cart_one_order";
      if (product && !product?.is_active) {
        const orderItem = { ...product, is_active: true };
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
    }, [product, cartItem, itemCount, navigate]);

    useEffect(() => {
      if (
        selectItem &&
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
      } else {
        dispatch(removeOrderProduct(product.product_id?.toString()));
      }
    }, [selectItem, cartItem, itemCount, dispatch]);

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
    }, [cartItem, itemCount, dispatch]);

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
    }, [selectItem, cartItem, itemCount, dispatch]);

    return (
      <>
        <>
          <KeepProduct>
            <td>
              <CheckBox
                checked={!!selectItem}
                onChange={(checked) => handleItemCheck(checked)}
                id={`check-box-${index}`}
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
              <CountWrap>
                <CountButton
                  handleMinusItemCount={handleMinusItemCount}
                  handlePlusItemCount={handlePlusItemCount}
                >
                  {itemCount}
                </CountButton>
              </CountWrap>
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
                  size="ss"
                  color="primary"
                  variant="contained"
                  onClick={() => handleOrderItem()}
                  margin="0 auto"
                  padding="10px"
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
              <CheckBox
                checked={!!selectItem}
                onChange={(checked) => handleItemCheck(checked)}
                id={`check-box-${index}-mobile`}
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
            <td></td>
            <td>
              <Total>
                <CountWrap>
                  <CountButton
                    handleMinusItemCount={handleMinusItemCount}
                    handlePlusItemCount={handlePlusItemCount}
                  >
                    {itemCount}
                  </CountButton>
                </CountWrap>
                {cartItem?.price && (
                  <TotalPrice>
                    {new Intl.NumberFormat("ko-KR").format(
                      cartItem?.price * itemCount
                    )}
                    원
                  </TotalPrice>
                )}
                <Button
                  size="s"
                  color="primary"
                  variant="contained"
                  onClick={() => handleOrderItem()}
                  margin="0 auto"
                  padding="10px"
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
  }
);

export default CartItem;
