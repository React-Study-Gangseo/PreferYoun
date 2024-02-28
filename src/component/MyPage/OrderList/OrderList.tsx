import React, { useEffect, useState } from "react";
import { Main, Heading, OrderListSection } from "./OrderList.Style";
import { GetOrderList } from "../../../API/OrderAPI";
import { OrderedData } from "types/type";
import OrderedItem from "../../../component/Item/OrderedItem/OrderedItem";
import Button from "../../common/Button/Button";
import { ModalSetting } from "../../../component/common/Modal/ConfirmModal/ModalSetting";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../redux/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { Logout } from "../../../API/AuthAPI";

export default function OrderList() {
  const [orderedItem, setOrderedItem] = useState<OrderedData[]>([]);
  const storedData = localStorage.getItem("UserInfo");
  const dispatch = useDispatch();
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const modals = useSelector((state: any) => state.modal.modals);
  const currentModalChoice =
    modals.length > 0 ? modals[modals.length - 1].modalChoice : undefined;
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

  useEffect(() => {
    if (currentModalChoice) {
      handleAgree();
    } else {
      dispatch(closeModal());
    }
  }, [currentModalChoice]);

  const handleLogOut = () => {
    dispatch(
      openModal({
        modalType: "ConfirmModal",
        modalProps: ModalSetting.LogOutModal,
      })
    );
  };
  const handleAgree = async () => {
    if (path === "/mypage") {
      const response = await Logout();
      if (response.status === 200) {
        localStorage.removeItem("UserInfo");
        navigate("/");
      } else {
        console.log("통신에러");
      }
    } else if (path.startsWith("/detailProduct")) {
      navigate("/cart");
      if (!storedData) {
        navigate("/login");
      }
    }
    dispatch(closeModal());
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
