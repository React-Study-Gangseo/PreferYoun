import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  Heading,
  KeepForm,
  KeepList,
  FormTop,
  ClacPrice,
  OrderBtn,
  EmptyKeepList,
  AllDeleteBtn,
  LoginBtn,
} from "./KeepPage.Style";
import { DeleteCartItem, DeleteAllCart, KeepProductList } from "API/KeepAPI";
import { cartData, cartItem } from "types/type";
import CartItem from "component/CartItem/CartItem";
import { TotalPriceState } from "redux/TotalPrice";
import { CartOrderState } from "redux/CartOrder";
import { useNavigate } from "react-router-dom";
import LoginModal from "component/common/Modal/LoginModal";
import JoinModal from "component/common/Modal/JoinModal";

const KeepPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<cartData[]>([]);
  const [cartItem, setCartItem] = useState<cartItem[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const totalPrice = useSelector((state: { totalPrice: TotalPriceState }) => {
    return state.totalPrice.value.reduce((sum, item) => sum + item.price, 0);
  });
  const storedData = localStorage.getItem("UserInfo");
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

  // Record<K, T>는 TypeScript의 유틸리티 타입 중 하나로, 모든 속성의 키가 K 타입이고 값이 T 타입인 객체
  const FetchKeepList = async () => {
    try {
      const keepList = await KeepProductList();
      setCartData([keepList.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchKeepList();
    if (storedData) {
      setIsLogin(true);
    }
  }, []);

  // useEffect(() => {
  //   const checkedObj = cartItem.reduce<Record<string, boolean>>((acc, item) => {
  //     acc[item.product_id] = true;
  //     return acc;
  //   }, {});
  //   setSelectedItems(checkedObj);
  //   // setCartItem((prevCartItem) =>
  //   //   prevCartItem.map((item) => ({ ...item, is_active: true }))
  //   // );
  // }, [cartItem]);

  useEffect(() => {
    cartData.map((data: cartData) =>
      data.results ? setCartItem(data.results) : null
    );
  }, [cartData]);

  const handleAllCheck = (checked: boolean) => {
    cartItem.map((item) =>
      item.is_active !== checked ? handleItemCheck(item.product_id) : item
    );
  };

  const handleItemCheck = (id: number) => {
    setCartItem((prevCartItems) =>
      prevCartItems.map((item) =>
        item.product_id === id ? { ...item, is_active: !item.is_active } : item
      )
    );
  };
  const handleOrderList = () => {
    console.log(orderCartInfo);
    const order_kind: string = "cart_order";
    navigate("/orderpage", {
      state: {
        productInfo: orderCartInfo,
        order_kind: order_kind,
      },
    });
  };

  const handleAllDelete = async () => {
    if (allChecked) {
      try {
        const res = await DeleteAllCart();
        if (res.status === 204) {
          FetchKeepList();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const activeItems = cartItem.filter((item) => item.is_active === true);
      console.log(activeItems);

      activeItems.map((item) => handleDeleteItem(item.cart_item_id));
    }
  };
  const handleDeleteItem = async (cart_item_id: number) => {
    try {
      const res = await DeleteCartItem(cart_item_id);
      console.log(res);
      if (res.status === 204) {
        FetchKeepList();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    setModalShow(true);
    setLogin(true);
  };

  console.log(isLogin);
  return (
    <>
      <Wrapper>
        <Heading>장바구니</Heading>
        <KeepForm>
          <FormTop>
            <li>
              <input
                type="checkbox"
                checked={cartItem.length > 0 ? allChecked : false}
                onChange={(e) => handleAllCheck(e.target.checked)}
              />
              <label className="a11y-hidden">
                장바구니 아이템 전체 체크 박스
              </label>
            </li>
            <li>상품정보</li>
            <li>수량</li>
            <li>상품금액</li>
          </FormTop>
          {isLogin ? (
            cartItem.length > 0 ? (
              <>
                <KeepList>
                  {cartItem.map((item: cartItem) => (
                    <li key={item.product_id}>
                      <CartItem
                        product={item}
                        isChecked={item.is_active}
                        onCheckChange={() => handleItemCheck(item.product_id)}
                        FetchKeepList={FetchKeepList}
                        handleDeleteItem={handleDeleteItem}
                      />
                    </li>
                  ))}
                </KeepList>
                <AllDeleteBtn
                  width="s"
                  bgColor="active"
                  onClick={handleAllDelete}
                >
                  전체삭제
                </AllDeleteBtn>
                <ClacPrice>
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
                </ClacPrice>
                <OrderBtn
                  width="l"
                  bgColor="active"
                  onClick={() => handleOrderList()}
                >
                  주문하기
                </OrderBtn>
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
              <LoginBtn width="ms" bgColor="active" onClick={handleLogin}>
                로그인
              </LoginBtn>
            </EmptyKeepList>
          )}
        </KeepForm>
      </Wrapper>
    </>
  );
};
export default KeepPage;
