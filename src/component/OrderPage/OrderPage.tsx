import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  OrderList,
  ProductInfo,
  TotalPrice,
  FinallyPay,
  InfoTitle,
  HeadInfoTitle,
  SectionTitle,
  OrderInfo,
  FinallyPayWrapper,
  Phone,
  Address,
  Message,
  PayInfo,
  LastCheck,
  OrdererInfoForm,
  OrderPageTitle,
} from "./OrderPage.Style";
import { orderdata, Products } from "types/type";

const OrderPage: React.FC = () => {
  const location = useLocation();
  const info = location.state;
  const [orderProducts, setOrderProducts] = useState<Products[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalShippingFee, setTotalShippingFee] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const { order_kind, productInfo, count } = info;
  useEffect(() => {
    if (info) {
      setOrderProducts([productInfo]);
      CalcTotalPrice();
    }
  }, [info]);
  useEffect(() => {
    CalcTotalPrice();
  }, [orderProducts, count]);
  if (!info) {
    return <div>주문 정보가 없습니다.</div>;
  }
  console.log(order_kind, productInfo, count);
  const CalcTotalPrice = () => {
    // orderProducts.map((item: Products) => {
    //   if (item.price && item.stock && item.shipping_fee) {
    //     return setTotalPrice(item.price * count + item.shipping_fee);
    //   }
    // });
    let total = orderProducts.reduce(
      (
        acc: {
          totalPrice: number;
          totalShippingFee: number;
          totalProductPrice: number;
        },
        item: Products
      ) => {
        if (item.price && item.stock && item.shipping_fee) {
          return {
            totalPrice:
              acc.totalPrice + (item.price * count + item.shipping_fee),
            totalShippingFee: acc.totalShippingFee + item.shipping_fee,
            totalProductPrice: acc.totalPrice + item.price * count,
          };
        }
        return acc;
      },
      { totalPrice: 0, totalShippingFee: 0, totalProductPrice: 0 }
    );
    setTotalProductPrice(total.totalProductPrice);
    setTotalShippingFee(total.totalShippingFee);
    setTotalPrice(total.totalPrice);
  };
  return (
    <main className="wrapper">
      <OrderPageTitle>주문/결제하기</OrderPageTitle>
      <OrderList>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>할인</th>
            <th>배송비</th>
            <th>주문금액</th>
          </tr>
        </thead>
        <tbody>
          {orderProducts?.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.image} alt="상품이미지" />
                <ProductInfo>
                  <span>{product.store_name}</span>
                  <h3>{product.product_name}</h3>
                  <span>수량: {count}개</span>
                </ProductInfo>
              </td>
              <td>-</td>
              <td>{product.shipping_fee}</td>
              {product?.price && count && <td>{product.price * count}</td>}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td />
            <td />
            <td>
              총 주문금액 <TotalPrice>{totalPrice}</TotalPrice>
            </td>
          </tr>
        </tfoot>
      </OrderList>
      <OrdererInfoForm>
        <HeadInfoTitle>배송정보</HeadInfoTitle>
        <OrderInfo>
          <SectionTitle>주문자 정보</SectionTitle>
          <ul>
            <li>
              <label>이름</label>
              <input />
            </li>
            <li>
              <label>휴대폰</label>
              <Phone>
                <input placeholder="000" />
                <span>-</span>
                <input placeholder="0000" />
                <span>-</span>
                <input placeholder="0000" />
              </Phone>
            </li>
            <li>
              <label>이메일</label>
              <input />
            </li>
          </ul>
        </OrderInfo>
        <OrderInfo>
          <SectionTitle>배송지 정보</SectionTitle>
          <ul>
            <li>
              <label>수령인</label>
              <input />
            </li>
            <li>
              <label>휴대폰</label>
              <Phone>
                <input placeholder="000" />
                <span>-</span>
                <input placeholder="0000" />
                <span>-</span>
                <input placeholder="0000" />
              </Phone>
            </li>
            <li>
              <label>배송주소</label>
              <Address>
                <button>우편번호 조회</button>
                <input />
                <input />
                <input />
              </Address>
            </li>
            <li>
              <label>배송메세지</label>
              <Message>
                <input />
              </Message>
            </li>
          </ul>
        </OrderInfo>
        <PayInfo>
          <HeadInfoTitle>결제수단</HeadInfoTitle>
          <div>
            <input type="checkbox" />
            <label>신용/체크카드</label>
            <input type="checkbox" />
            <label>무통장 입금</label>
            <input type="checkbox" />
            <label>휴대폰 결제</label>
            <input type="checkbox" />
            <label>네이버페이</label>
            <input type="checkbox" />
            <label>카카오페이</label>
          </div>
        </PayInfo>
        <FinallyPay>
          <InfoTitle>최종결제 정보</InfoTitle>
          <FinallyPayWrapper>
            <ul>
              <li>
                <p>상품금액</p>
                <p>
                  <strong>{totalProductPrice} </strong>원
                </p>
              </li>
              <li>
                <p>할인금액</p>
                <p>
                  <strong>0 </strong>원
                </p>
              </li>
              <li>
                <p>배송비</p>
                <p>
                  <strong>{totalShippingFee} </strong>원
                </p>
              </li>
              <li>
                <p>결제금액</p>
                <strong>{totalPrice} 원</strong>
              </li>
            </ul>
            <LastCheck>
              <div>
                <input type="checkbox" />
                <label>주문 내용을 확인하였으며, 정보 제공에 동의합니다.</label>
              </div>
              <button>결제하기</button>
            </LastCheck>
          </FinallyPayWrapper>
        </FinallyPay>
      </OrdererInfoForm>
    </main>
  );
};

export default OrderPage;
