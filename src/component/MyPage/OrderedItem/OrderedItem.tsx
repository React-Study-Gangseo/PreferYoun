import React, { useState, useEffect } from "react";
import { OrderedData, Products } from "types/type";
import { DetailProduct } from "API/ProductAPI";
import { Item } from "component/OrderList/OrderList.Style";

const OrderedItem: React.FC<{
  index: number;
  ListItem: OrderedData;
}> = ({ index, ListItem }) => {
  const [orderedItem, setOrderedItem] = useState<Products>();

  const {
    order_number,
    created_at,
    address,
    receiver,
    total_price,
    order_items,
    order_quantity,
  } = ListItem;

  const totalQuantity = order_quantity?.reduce((acc, cur) => (acc += cur), 0);

  const itemLength = order_items?.length;

  const OrderedProductDetail = async (product_id: number) => {
    try {
      const keepItem = await DetailProduct(product_id);
      setOrderedItem(keepItem.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (order_items && order_items.length > 0) {
      OrderedProductDetail(order_items[0]);
    }
  }, [order_items]);
  return (
    <tr key={index}>
      <td>{order_number}</td>
      <td>{created_at?.replace("T", " ").slice(0, -7)}</td>
      <td>
        <Item>
          <img src={orderedItem?.image} alt="주문한 상품 대표 이미지" />
          <p>
            {orderedItem?.product_name}
            {itemLength && itemLength > 1 ? `외 ${itemLength - 1}건` : null}
          </p>
          <p>총 수량: {totalQuantity}개</p>
        </Item>
      </td>
      <td>{receiver}</td>
      <td>{address}</td>
      <td>{total_price}</td>
    </tr>
  );
};
export default OrderedItem;
