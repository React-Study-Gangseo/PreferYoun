import React, { useEffect, useState } from "react";
import { Main, Heading, OrderListSection } from "./OrderList.Style";
import { GetOrderList } from "API/OrderAPI";
import { OrderedData } from "types/type";
import OrderedItem from "component/Item/OrderedItem/OrderedItem";
import Button from "../../common/Button/Button";
import { ModalSetting } from "component/common/Modal/ConfirmModal/ModalSetting";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/Modal";

export default function OrderList() {
  const [orderedItem, setOrderedItem] = useState<OrderedData[]>([]);
  const storedData = localStorage.getItem("UserInfo");
  const dispatch = useDispatch();
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;

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
    dispatch(
      openModal({
        modalType: "ConfirmModal",
        isOpen: true,
        modalProps: ModalSetting.LogOutModal,
      })
    );
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
      <Button
        size="l"
        color="primary"
        variant="contained"
        onClick={handleLogOut}
        padding="0px 20px"
        fontSize="30px"
        margin="20px auto"
      >
        로그아웃
      </Button>
    </Main>
  );
}
