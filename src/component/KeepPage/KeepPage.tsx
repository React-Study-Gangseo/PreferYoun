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
} from "./KeepPage.Style";
import { KeepProductList } from "API/KeepAPI";
import { cartData, cartItem } from "types/type";
import CartItem from "component/CartItem/CartItem";
import { TotalPriceState } from "redux/TotalPrice";
import { useNavigate } from "react-router-dom";

const KeepPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<cartData[]>([]);
  const [cartItem, setCartItem] = useState<cartItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );
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
  const handleAllCheck = (checked: boolean) => {
    for (let key in selectedItems) {
      if (selectedItems[key] !== checked) {
        handleItemCheck(Number(key));
      }
    }
  };
  console.log(totalPrice, totalShippingFee);
  const handleItemCheck = (id: number) => {
    setSelectedItems((prevState) => {
      const wasChecked = prevState[id.toString()];
      const isChecked = !wasChecked;

      return {
        ...prevState,
        [id.toString()]: isChecked,
      };
    });
  };
  const handleOrderList = () => {
    const order_kind: string = "cart_order";
    navigate("/orderpage", {
      state: {
        productInfo: cartItem,
        order_kind: order_kind,
        // count: ,
      },
    });
  };
  return (
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
        )}
      </KeepForm>
    </Wrapper>
  );
};
export default KeepPage;
