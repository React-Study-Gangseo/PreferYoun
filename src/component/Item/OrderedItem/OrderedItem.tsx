import React, { useState, useEffect } from "react";
import { OrderedData, Products, orderdata } from "types/type";
import { DetailProduct } from "API/ProductAPI";
import {
  OrderedIItemWrapper,
  OrderedDate,
  BtnGroup,
  KeepBtn,
  DetailBtn,
  MoreInfoSection,
  TotalPrice,
  OrderNumber,
} from "./OrderedItem.Style";
import Swal from "sweetalert2";
import { AddKeepProduct } from "API/KeepAPI";
import { useNavigate } from "react-router-dom";
const OrderedItem: React.FC<{
  ListItem: OrderedData;
}> = ({ ListItem }) => {
  const [orderedItems, setOrderedItems] = useState<Products[]>([]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const navigate = useNavigate();
  const [postCartData, setPostCartData] = useState<orderdata>({
    product_id: 0,
    quantity: 1,
    check: true,
  });
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
  console.log(orderedItems);
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
        console.log(postCartData);
        const res = await AddKeepProduct(postCartData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      // navigate("/cart");
    } else if (storedData) {
      Swal.fire({
        text: "해당 상품은 현재 품절 상태 입니다.",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "확인버튼",
        customClass: {
          icon: "my-icon",
        },
      });
    } else {
      Swal.fire({
        title: "로그인 후 이용 가능한 기능입니다.",
        text: "로그인 하시겠습니까?",
        icon: "warning",
        confirmButtonColor: "#21bf48",
        confirmButtonAriaLabel: "로그인하러가기",
        confirmButtonText: "로그인하러가기",
        customClass: { icon: "my-icon" },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  // const handleKeepProduct = async (index: number) => {
  //   console.log(index, orderedItems[index].product_id);
  //   setPostCartData((prevState) => ({
  //     ...prevState,
  //     product_id: orderedItems[index].product_id,
  //   }));

  //   await checkStockAndAddToCart(index);
  // };
  const handleKeepProduct = async (index: number) => {
    console.log(index, orderedItems[index].product_id);
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
        <OrderedIItemWrapper key={index}>
          <div>
            <img src={item?.image} alt="주문한 상품 대표 이미지" />
            <div>
              <p>{item?.product_name}</p>
              <span>{item.price}원 </span>
              {order_quantity && <span> {order_quantity[index] || 0}개</span>}
            </div>
          </div>
          <BtnGroup>
            <DetailBtn
              color="black"
              width="s"
              onClick={() => handleTabClick()}
              style={{ borderBottom: "1px solid #767676" }}
            >
              상세보기
            </DetailBtn>
            <KeepBtn
              width="s"
              bgColor="active"
              onClick={() => handleKeepProduct(index)}
            >
              장바구니 담기
            </KeepBtn>
          </BtnGroup>
        </OrderedIItemWrapper>
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
