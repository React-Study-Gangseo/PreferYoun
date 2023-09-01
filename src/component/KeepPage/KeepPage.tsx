import React, { useEffect, useState, createContext } from "react";
import {
  Wrapper,
  Heading,
  KeepForm,
  KeepList,
  FormTop,
  ClacPrice,
  OrderBtn,
} from "./KeepPage.Style";
import { KeepProductList } from "API/KeepAPI";
import { cartData, cartItem, totalPrice } from "types/type";
import CartItem from "component/CartItem/CartItem";

export const MyContext = createContext<totalPrice>({
  count: 0,
  shipping_fee: 0,
  price: 0,
  setCount: (value: number) => {},
  setShippingFee: (value: number) => {},
  setPrice: (value: number) => {},
});

const KeepPage: React.FC = () => {
  const [cartData, setCartData] = useState<cartData[]>([]);
  const [cartItem, setCartItem] = useState<cartItem[]>([]);
  const [count, setCount] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [price, setPrice] = useState(0);

  const FetchKeepList = async () => {
    try {
      const storedData = localStorage.getItem("UserInfo");
      const userInfo = storedData ? JSON.parse(storedData) : null;
      const token = userInfo ? userInfo.token : null;
      const keepList = await KeepProductList(token);
      setCartData([keepList.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchKeepList();
  }, []);

  useEffect(() => {
    cartData.map((data: cartData) =>
      data.results ? setCartItem(data.results) : null
    );
  }, [cartData]);

  console.log("cart", cartData);
  return (
    <MyContext.Provider
      value={{
        count: count,
        shipping_fee: shippingFee,
        price: price,
        setCount: setCount,
        setShippingFee: setShippingFee,
        setPrice: setPrice,
      }}
    >
      <Wrapper>
        {/* <Header /> */}
        <Heading>장바구니</Heading>
        <KeepForm>
          <FormTop>
            <li>
              <input type="checkbox" />
              <label className="a11y-hidden">
                장바구니 아이템 전체 체크 박스
              </label>
            </li>
            <li>상품정보</li>
            <li>수량</li>
            <li>상품금액</li>
          </FormTop>
          <KeepList>
            {cartItem.map((item: cartItem, itemIndex: number) => (
              <li key={itemIndex}>
                <CartItem product={item} />
              </li>
            ))}
          </KeepList>
          <ClacPrice>
            <li>
              총상품금액
              <strong>
                {new Intl.NumberFormat("ko-KR").format(price * count)}
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
                {new Intl.NumberFormat("ko-KR").format(shippingFee)}
                <span>원</span>
              </strong>
            </li>
            <li>
              결제 예정 금액
              <strong>
                {new Intl.NumberFormat("ko-KR").format(
                  price * count + shippingFee
                )}
                <span>원</span>
              </strong>
            </li>
          </ClacPrice>
          <OrderBtn>주문하기</OrderBtn>
        </KeepForm>
      </Wrapper>
    </MyContext.Provider>
  );
};
export default KeepPage;
