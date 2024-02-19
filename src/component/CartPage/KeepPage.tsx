import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  Heading,
  KeepForm,
  CartTable,
  CalcPrice,
  EmptyKeepList,
  AllSection,
} from "./KeepPage.Style";
import { DeleteCartItem, DeleteAllCart, KeepProductList } from "API/KeepAPI";
import { cartData, cartItem } from "types/type";
import CartItem from "component/Item/CartItem/CartItem";
import { calcPrice } from "../../redux/TotalPrice";
import { removeOrderProduct } from "../../redux/CartOrder";
import { useDispatch } from "react-redux";
import { TotalPriceState } from "../../redux/TotalPrice";
import { CartOrderState } from "../../redux/CartOrder";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button/Button";
import CheckBox from "component/common/CheckBox/CheckBox";
import { ModalSetting } from "component/common/Modal/ConfirmModal/ModalSetting";
import { closeModal, openModal } from "../../redux/Modal";

const KeepPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState<cartData[]>([]);
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const token = userInfo?.token ? userInfo.token : "";
  const [cartItem, setCartItem] = useState<cartItem[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const modals = useSelector((state: any) => state.modal.modals);
  const totalPrice = useSelector((state: { totalPrice: TotalPriceState }) => {
    return state.totalPrice.value.reduce((sum, item) => sum + item.price, 0);
  });
  const totalShippingFee = useSelector(
    (state: { totalPrice: TotalPriceState }) => {
      return state.totalPrice.value.reduce(
        (sum, item) => sum + item.shipping_fee,
        0
      );
    }
  );
  const orderCartInfo = useSelector((state: { cartOrder: CartOrderState }) => {
    return state.cartOrder.value;
  });

  const allChecked = cartItem.every((item) => item.is_active);

  const FetchKeepList = useCallback(async () => {
    try {
      if (token) {
        const keepList = await KeepProductList();
        setCartData([keepList.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    FetchKeepList();
    if (storedData) {
      setIsLogin(true);
    }
  }, [FetchKeepList, storedData]);

  useEffect(() => {
    cartData.map((data: cartData) =>
      data.results ? setCartItem(data.results) : null
    );
  }, [cartData]);

  const handleAllCheck = useCallback(
    (checked: boolean) => {
      cartItem.map((item) =>
        item.is_active !== checked ? handleItemCheck(item.product_id) : item
      );
    },
    [cartItem]
  );

  const handleItemCheck = useCallback((id: number) => {
    setCartItem((prevCartItems) =>
      prevCartItems.map((item) =>
        item.product_id === id ? { ...item, is_active: !item.is_active } : item
      )
    );
  }, []);

  const handleOrderList = useCallback(() => {
    const order_kind: string = "cart_order";
    navigate("/orderpage", {
      state: {
        productInfo: orderCartInfo,
        order_kind: order_kind,
      },
    });
  }, [navigate, orderCartInfo]);

  const handleDeleteItem = useCallback(
    async (cart_item_id: number) => {
      try {
        const res = await DeleteCartItem(cart_item_id);
        if (res.status === 204) {
          FetchKeepList();
        }
      } catch (error) {
        console.log(error);
      }
    },
    [FetchKeepList]
  );
  const handleAllDelete = useCallback(async () => {
    dispatch(
      openModal({
        modalType: "ConfirmModal",
        modalProps: ModalSetting.AllDeleteModal,
      })
    );
  }, [allChecked, cartItem, dispatch, FetchKeepList, handleDeleteItem]);
  useEffect(() => {
    const currentModalChoice =
      modals.length > 0 ? modals[modals.length - 1].modalChoice : undefined;

    const deleteItems = async () => {
      if (allChecked) {
        try {
          const res = await DeleteAllCart();
          if (res.status === 204) {
            FetchKeepList();
            cartItem.forEach((item) => {
              dispatch(
                calcPrice({
                  key: item.product_id.toString(),
                  price: 0,
                  shipping_fee: 0,
                })
              );
              dispatch(removeOrderProduct(item.product_id?.toString()));
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const activeItems = cartItem.filter((item) => item.is_active === true);

        activeItems.forEach((item) => {
          handleDeleteItem(item.cart_item_id);
          dispatch(
            calcPrice({
              key: item.product_id.toString(),
              price: 0,
              shipping_fee: 0,
            })
          );
          dispatch(removeOrderProduct(item.product_id?.toString()));
        });
      }
    };
    if (currentModalChoice && modals[0].modalProps.title === "AllDelete") {
      deleteItems();
      dispatch(closeModal());
    }
  }, [modals]);

  return (
    <>
      <Wrapper>
        <Heading>장바구니</Heading>
        <KeepForm>
          {isLogin && (
            <AllSection>
              <div>
                <CheckBox
                  checked={cartItem.length > 0 ? allChecked : false}
                  onChange={(checked) => handleAllCheck(checked)}
                  id="all-check-box"
                />
              </div>
              <Button
                size="s"
                color="secondary"
                variant="contained"
                onClick={handleAllDelete}
                margin="10px 0 10px auto"
              >
                전체삭제
              </Button>
            </AllSection>
          )}
          <CartTable>
            <thead>
              <tr>
                <th>
                  <CheckBox
                    checked={cartItem.length > 0 ? allChecked : false}
                    onChange={(checked) => handleAllCheck(checked)}
                    id="mobile-all-check-box"
                  />
                </th>
                <th>상품정보</th>
                <th>수량</th>
                <th>상품금액</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item: cartItem, index) => (
                <CartItem
                  key={item.product_id}
                  product={item}
                  isChecked={item.is_active}
                  onCheckChange={() => handleItemCheck(item.product_id)}
                  FetchKeepList={FetchKeepList}
                  handleDeleteItem={handleDeleteItem}
                  index={index}
                />
              ))}
            </tbody>
          </CartTable>
          {isLogin ? (
            cartItem.length > 0 ? (
              <>
                <CalcPrice>
                  <li>
                    총상품금액
                    <strong>
                      {new Intl.NumberFormat("ko-KR").format(totalPrice)}
                      <span>원</span>
                    </strong>
                  </li>
                  <li>
                    상품할인
                    <strong>
                      0<span>원</span>
                    </strong>
                  </li>
                  <li>
                    배송비
                    <strong>
                      {new Intl.NumberFormat("ko-KR").format(totalShippingFee)}
                      <span>원</span>
                    </strong>
                  </li>
                  <li>
                    결제 예정 금액
                    <strong>
                      {new Intl.NumberFormat("ko-KR").format(
                        totalPrice + totalShippingFee
                      )}
                      <span>원</span>
                    </strong>
                  </li>
                </CalcPrice>
                <Button
                  size="l"
                  color="primary"
                  variant="contained"
                  onClick={handleOrderList}
                  margin="30px auto 20px auto"
                  fontSize="24px"
                >
                  주문하기
                </Button>
              </>
            ) : (
              <EmptyKeepList>
                <h5>장바구니에 담긴 상품이 없습니다.</h5>
                <p> 원하는 상품을 장바구니에 담아보세요!</p>
              </EmptyKeepList>
            )
          ) : (
            <EmptyKeepList>
              <p>
                로그인을 하시면, 장바구니에 보관된 상품을 확인하실 수 있습니다.
              </p>
              <Button
                size="ms"
                color="primary"
                variant="contained"
                onClick={() => navigate("/login")}
                margin="30px auto"
                fontSize="24px"
              >
                로그인
              </Button>
            </EmptyKeepList>
          )}
        </KeepForm>
      </Wrapper>
    </>
  );
};

export default KeepPage;
