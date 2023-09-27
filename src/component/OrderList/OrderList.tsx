import React, { useEffect, useState } from "react";
import { Main, Heading, OrderListSection, LogOutBtn } from "./OrderList.Style";
import { GetOrderList } from "API/OrderAPI";
import { OrderedData } from "types/type";
import OrderedItem from "component/Item/OrderedItem/OrderedItem";
import { Logout } from "API/AuthAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function OrderList() {
  const [orderedItem, setOrderedItem] = useState<OrderedData[]>([]);
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const navigate = useNavigate();
  const FetchOrderList = async () => {
    try {
      const res = await GetOrderList();
      setOrderedItem(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userType === "BUYER") FetchOrderList();
  }, []);

  const handleLogOut = () => {
    Swal.fire({
      text: "로그아웃 하시겠습니까?",
      icon: "success",
      confirmButtonColor: "#21bf48",
      confirmButtonAriaLabel: "확인버튼",
      customClass: {
        icon: "my-icon",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await Logout();
        if (response.status === 200) {
          localStorage.removeItem("UserInfo");
          navigate("/");
        } else {
          console.log("통신에러");
        }
      }
    });
  };

  return (
    <Main>
      <Heading>주문 목록</Heading>
      <OrderListSection>
        <ul>
          {orderedItem?.map((item, index) => (
            <li key={index}>
              <OrderedItem ListItem={item} />
            </li>
          ))}
        </ul>
      </OrderListSection>
      <LogOutBtn width="ms" bgColor="active" onClick={handleLogOut}>
        로그아웃
      </LogOutBtn>
    </Main>
  );
}
