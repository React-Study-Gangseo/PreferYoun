import React, { useEffect, useState } from "react";
import {
  Main,
  Heading,
  OrderListSection,
  LogOutBtn,
  OrderedList,
} from "./OrderList.Style";
import { GetOrderList } from "API/OrderAPI";
import { OrderedData } from "types/type";
import OrderedItem from "component/MyPage/OrderedItem/OrderedItem";

export default function OrderList() {
  const [orderedItem, setOrderedItem] = useState<OrderedData[]>([]);

  const FetchOrderList = async () => {
    try {
      const res = await GetOrderList();
      setOrderedItem(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchOrderList();
  }, []);
  // useEffect(() => {
  //   // if (orderedItem) {
  //   // const totalQuantity = orderedItem.order_quantity.reduce((acc, cur) => (acc += cur), 0);
  //   console.log(orderedItem);
  // }, [orderedItem]);

  console.log(orderedItem);
  return (
    <Main>
      <Heading>주문 목록</Heading>
      <OrderListSection>
        <OrderedList>
          <thead>
            <tr>
              <th>주문번호</th>
              <th>주문일시</th>
              <th>주문상세</th>
              <th>수령인</th>
              <th>주소</th>
              <th>결제금액</th>
            </tr>
          </thead>
          <tbody>
            {orderedItem?.map((item, index) => (
              <OrderedItem index={index} ListItem={item} />
            ))}
          </tbody>
        </OrderedList>
      </OrderListSection>
      <LogOutBtn width="ms" bgColor="active">
        로그아웃
      </LogOutBtn>
    </Main>
  );
}
