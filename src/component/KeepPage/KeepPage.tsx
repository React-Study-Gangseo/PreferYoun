import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  Heading,
  KeepForm,
  CartTable,
  ClacPrice,
  OrderBtn,
  EmptyKeepList,
  AllDeleteBtn,
  LoginBtn,
  AllSection,
} from "./KeepPage.Style";
import { DeleteCartItem, DeleteAllCart, KeepProductList } from "API/KeepAPI";
import { cartData, cartItem } from "types/type";
import CartItem from "component/Item/CartItem/CartItem";
import { calcPrice, resetPrice } from "redux/TotalPrice";
import { removeOrderProduct } from "redux/CartOrder";
import { useDispatch } from "react-redux";
import { TotalPriceState } from "redux/TotalPrice";
import { CartOrderState } from "redux/CartOrder";
import { useNavigate } from "react-router-dom";

const KeepPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<cartData[]>([]);
  const [cartItem, setCartItem] = useState<cartItem[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
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
  console.log(allChecked);
  // Record<K, T>는 TypeScript의 유틸리티 타입 중 하나로, 모든 속성의 키가 K 타입이고 값이 T 타입인 객체
  const FetchKeepList = async () => {
    try {
      const keepList = await KeepProductList();
      setCartData([keepList.data]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cartItem);
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
  const handleDeleteItem = async (cart_item_id: number) => {
    try {
      const res = await DeleteCartItem(cart_item_id);
      if (res.status === 204) {
        FetchKeepList();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Wrapper>
        <Heading>장바구니</Heading>
        <KeepForm>
          <CartTable>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={cartItem.length > 0 ? allChecked : false}
                    onChange={(e) => handleAllCheck(e.target.checked)}
                  />
                  <label className="a11y-hidden">
                    장바구니 아이템 전체 체크 박스
                  </label>
                </th>
                <th>상품정보</th>
                <th>수량</th>
                <th>상품금액</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
              {cartItem.map((item: cartItem) => (
                <CartItem
                  key={item.product_id}
                  product={item}
                  isChecked={item.is_active}
                  onCheckChange={() => handleItemCheck(item.product_id)}
                  FetchKeepList={FetchKeepList}
                  handleDeleteItem={handleDeleteItem}
                />
              ))}
              <tr></tr>
            </tbody>
          </CartTable>
          {isLogin ? (
            cartItem.length > 0 ? (
              <>
                <AllSection>
                  <div>
                    <input
                      type="checkbox"
                      checked={cartItem.length > 0 ? allChecked : false}
                      onChange={(e) => handleAllCheck(e.target.checked)}
                    />
                    <label className="a11y-hidden">
                      장바구니 아이템 전체 체크 박스
                    </label>
                  </div>
                  <AllDeleteBtn
                    width="s"
                    bgColor="active"
                    onClick={handleAllDelete}
                  >
                    전체삭제
                  </AllDeleteBtn>
                </AllSection>
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
