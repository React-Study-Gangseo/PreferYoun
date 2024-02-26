import React, { useState, useEffect } from "react";
import { OrderedData, Products, orderdata } from "types/type";
import { DetailProduct } from "../../../API/ProductAPI";
import {
  OrderedItemWrapper,
  OrderedDate,
  BtnGroup,
  MoreInfoSection,
  TotalPrice,
  OrderNumber,
} from "./OrderedItem.Style";
import { AddKeepProduct } from "../../../API/KeepAPI";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/common/Button/Button";
import { ModalSetting } from "../../../component/common/Modal/ConfirmModal/ModalSetting";
import { openModal } from "../../../redux/Modal";
import { useDispatch, useSelector } from "react-redux";

const OrderedItem: React.FC<{
  ListItem: OrderedData;
}> = ({ ListItem }) => {
  const [orderedItems, setOrderedItems] = useState<Products[]>([]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postCartData, setPostCartData] = useState<orderdata>({
    product_id: 0,
    quantity: 1,
    check: true,
  });
  const modals = useSelector((state: any) => state.modal.modals);
  const handleTabClick = () => {
    if (!showMoreInfo) {
      setShowMoreInfo(true);
    } else {
      setShowMoreInfo(false);
    }
  };
  const {
    order_number,
    created_at,
    address,
    receiver,
    total_price,
    order_items,
    order_quantity,
  } = ListItem;

  useEffect(() => {
    const fetchOrderedItems = async () => {
      if (order_items && order_items.length > 0) {
        const orderedItemData = await Promise.all(
          order_items.map((item) => OrderedProductDetail(item))
        );
        setOrderedItems(orderedItemData);
      }
    };

    fetchOrderedItems();
  }, [order_items]);

  const checkStockAndAddToCart = async (index: number, postCartData: any) => {
    const storedData = localStorage.getItem("UserInfo");
    if (storedData && orderedItems[index]?.stock) {
      try {
        const storedCart = localStorage.getItem("userCart");
        const userCart = storedCart ? JSON.parse(storedCart) : null;
        userCart.forEach((item: any) => {
          if (item.product_id === orderedItems[index]) {
            setPostCartData((prevState) => ({ ...prevState, check: false }));
          }
        });
        await AddKeepProduct(postCartData);
      } catch (error) {
        console.log(error);
      }
    } else if (storedData) {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.SoldOutModal,
        })
      );
    } else {
      dispatch(
        openModal({
          modalType: "ConfirmModal",
          modalProps: ModalSetting.LoginModal,
        })
      );
    }
  };
  useEffect(() => {
    const currentModalChoice =
      modals.length > 0 ? modals[modals.length - 1].modalChoice : undefined;

    if (currentModalChoice) {
      navigate("/login");
    }
  }, [modals]);

  const handleKeepProduct = async (index: number) => {
    const updatedPostCartData = {
      ...postCartData,
      product_id: orderedItems[index].product_id,
    };
    setPostCartData(updatedPostCartData);

    await checkStockAndAddToCart(index, updatedPostCartData);
  };
  const OrderedProductDetail = async (product_id: number) => {
    try {
      const keepItem = await DetailProduct(product_id);
      return keepItem.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return (
    <>
      <OrderedDate>{created_at?.replace("T", " ").slice(0, -16)}</OrderedDate>
      {order_number && <OrderNumber>주문번호: {order_number}</OrderNumber>}
      {orderedItems.map((item, index) => (
        <OrderedItemWrapper key={index}>
          <div>
            <img src={item?.image} alt="주문한 상품 대표 이미지" />
            <div>
              <p>{item?.product_name}</p>
              <span>{item.price}원 </span>
              {order_quantity && <span> {order_quantity[index] || 0}개</span>}
            </div>
          </div>
          <BtnGroup>
            <Button
              variant="outlined"
              size="ms"
              onClick={() => handleTabClick()}
              fontSize="1rem"
            >
              상세보기
            </Button>
            <Button
              size="ms"
              color="primary"
              variant="contained"
              onClick={() => handleKeepProduct(index)}
              padding="0px 20px"
            >
              장바구니 담기
            </Button>
          </BtnGroup>
        </OrderedItemWrapper>
      ))}
      {orderedItems.length > 1 && (
        <TotalPrice>전체 금액: {total_price}</TotalPrice>
      )}
      {showMoreInfo && (
        <MoreInfoSection>
          <p>수령인 : {receiver}</p>
          <p>배송 주소: {address}</p>
        </MoreInfoSection>
      )}
    </>
  );
};

export default OrderedItem;
