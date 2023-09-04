import React, { useEffect, useState, createContext } from "react";
import {
  Wrapper,
  Heading,
  KeepForm,
  KeepList,
  FormTop,
  ClacPrice,
  OrderBtn,
  EmptyKeepList,
} from "./KeepPage.Style";
import { KeepProductList } from "API/KeepAPI";
import { DetailProduct } from "API/ProductAPI";
import { cartData, cartItem, totalPrice } from "types/type";
import CartItem from "component/CartItem/CartItem";

export const MyContext = createContext<totalPrice>({
  count: 1,
  setCount: (value: number) => {},
});

const KeepPage: React.FC = () => {
  const [cartData, setCartData] = useState<cartData[]>([]);
  const [cartItem, setCartItem] = useState<cartItem[]>([]);
  const [count, setCount] = useState(1);
  const [shippingFee, setShippingFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );
  const allChecked = Object.values(selectedItems).every((value) => value);
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

  useEffect(() => {
    cartData.map((data: cartData) =>
      data.results ? setCartItem(data.results) : null
    );
  }, [cartData]);
  console.log(count);
  const handleAllCheck = (checked: boolean) => {
    // 모든 아이템에 대해 handleItemCheck 호출
    for (let key in selectedItems) {
      if (selectedItems[key] !== checked) {
        // 체크 상태가 변경되는 경우만 처리
        handleItemCheck(Number(key));
      }
    }
  };
  const handleItemCheck = (id: number) => {
    setSelectedItems((prevState) => {
      const wasChecked = prevState[id.toString()];
      const isChecked = !wasChecked;

      return {
        ...prevState,
        [id.toString()]: isChecked,
      };
    });
    // const quantity = cartItem.find((item) => item.product_id === id)?.quantity;
    // console.log(quantity);
    // if (quantity) {
    //   setItemQuantity(quantity);
    // }
    KeepProductDetail(id, !selectedItems[id.toString()]);
  };

  const KeepProductDetail = async (product_id: number, calc: boolean) => {
    try {
      const keepItem = await DetailProduct(product_id);
      if (calc) {
        CalcTotalPrice(count, keepItem.data.shipping_fee);
      } else {
        SubtractFromTotal(count, keepItem.data.shipping_fee);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const CalcTotalPrice = (price: number, shipping_fee: number) => {
    console.log(price, shipping_fee, itemQuantity);
    setShippingFee((prevFee) => prevFee + shipping_fee);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + count);
  };
  const SubtractFromTotal = (price: number, shipping_fee: number) => {
    setShippingFee((prevFee) => prevFee - shipping_fee);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - count);
  };

  return (
    <MyContext.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
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
          {cartItem.length > 0 ? (
            <>
              <KeepList>
                {cartItem.map((item: cartItem) => (
                  <li key={item.product_id}>
                    <CartItem
                      product={item}
                      isChecked={selectedItems[item.product_id]}
                      onCheckChange={() => handleItemCheck(item.product_id)}
                      FetchKeepList={FetchKeepList}
                      itemQuantity={itemQuantity}
                      setItemQuantity={setItemQuantity}
                    />
                  </li>
                ))}
              </KeepList>
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
                    {new Intl.NumberFormat("ko-KR").format(shippingFee)}
                    <span>원</span>
                  </strong>
                </li>
                <li>
                  결제 예정 금액
                  <strong>
                    {new Intl.NumberFormat("ko-KR").format(
                      totalPrice + shippingFee
                    )}
                    <span>원</span>
                  </strong>
                </li>
              </ClacPrice>
              <OrderBtn>주문하기</OrderBtn>
            </>
          ) : (
            <EmptyKeepList>
              <h5>장바구니에 담긴 상품이 없습니다.</h5>
              <p> 원하는 상품을 장바구니에 담아보세요!</p>
            </EmptyKeepList>
          )}
        </KeepForm>
      </Wrapper>
    </MyContext.Provider>
  );
};
export default KeepPage;
