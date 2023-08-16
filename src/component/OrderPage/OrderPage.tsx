import React from "react";
import Dummy from "../../assets/images/dummy.jpg";
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
const Order: React.FC = () => {
  return (
    <main className="wrapper">
      <OrderPageTitle>주문/결제하기</OrderPageTitle>
      <OrderList>
        <thead>
          <th>상품정보</th>
          <th>할인</th>
          <th>배송비</th>
          <th>주문금액</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={Dummy} alt="상품이미지" />
              <ProductInfo>
                <span>백엔드글로벌</span>
                <h3>딥러닝 개발자 무릎 담요</h3>
                <span>수량: 1개</span>
              </ProductInfo>
            </td>
            <td>-</td>
            <td>무료배송</td>
            <td>17,500원</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td />
            <td />
            <td>
              총 주문금액 <TotalPrice>46,500원</TotalPrice>
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
                <p>- 상품금액</p>
                <p>
                  <strong>46500</strong>원
                </p>
              </li>
              <li>
                <p>- 할인금액</p>
                <p>
                  <strong>46500</strong>원
                </p>
              </li>
              <li>
                <p>- 배송비</p>
                <p>
                  <strong>46500</strong>원
                </p>
              </li>
              <li>
                <p>- 결제금액</p>
                <p>
                  <strong>46500</strong>원
                </p>
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

export default Order;
