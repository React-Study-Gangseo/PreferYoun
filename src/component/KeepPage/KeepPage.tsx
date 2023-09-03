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
  shippingFee: 0,
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
  const [allItem, setAllItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );
  // const [selectedItemInfo,setSelectedItemInfo] = useState<Record<string,
  // Record<K, T>는 TypeScript의 유틸리티 타입 중 하나로, 모든 속성의 키가 K 타입이고 값이 T 타입인 객체
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
    const checkedObj = cartItem.reduce<Record<string, boolean>>((acc, item) => {
      acc[item.product_id] = false; // 초기값을 false로 설정합니다. 필요에 따라 true로 변경할 수 있습니다.
      return acc;
    }, {});

    setSelectedItems(checkedObj);
  }, [cartItem]);
  console.log(selectedItems);
  useEffect(() => {
    cartData.map((data: cartData) =>
      data.results ? setCartItem(data.results) : null
    );
  }, [cartData]);

  const handleAllCheck = (checked: boolean) => {
    setSelectedItems((prevState) => {
      const newState = { ...prevState };
      for (let key in newState) {
        newState[key] = checked;
      }
      return newState;
    });
  };
  const allChecked = Object.values(selectedItems).every((value) => value);
  const handleItemCheck = (id: number) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [id.toString()]: !prevState[id.toString()],
    }));
  };
  console.log(price, count, shippingFee);
  const CalcTotalPrice = () => {};
  return (
    <MyContext.Provider
      value={{
        count: count,
        shippingFee: shippingFee,
        price: price,
        setCount: setCount,
        setShippingFee: setShippingFee,
        setPrice: setPrice,
      }}
    >
      <Wrapper>
        <Heading>장바구니</Heading>
        <KeepForm>
          <FormTop>
            <li>
              <input
                type="checkbox"
                checked={allChecked}
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
          <KeepList>
            {cartItem.map((item: cartItem) => (
              <li key={item.product_id}>
                <CartItem
                  product={item}
                  allCheck={allItem}
                  index={item.product_id}
                  isChecked={selectedItems[item.product_id]} // 추가된 prop
                  onCheckChange={() => handleItemCheck(item.product_id)} // 추가된 prop
                />
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
