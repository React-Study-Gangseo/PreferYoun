import React from "react";
import Dummy from "../../assets/images/dummy.jpg";
import {
  Wrapper,
  Heading,
  KeepForm,
  KeepList,
  KeepProduct,
  KeepProductImg,
  KeepProductInfo,
  FormTop,
  CountWrap,
  IncreaseButton,
  DecreaseButton,
  Total,
  ClacPrice,
  TotalPrice,
  OrderBtn,
  OrderBtnS,
} from "./KeepPage.Style";
import Header from "component/Header/Header";
const KeepPage: React.FC = () => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Heading>장바구니</Heading>
      <KeepForm>
        <FormTop>
          <li>
            <input type="checkbox" />
            <label className="a11y-hidden">
              장바구니 아이템 전체 체크 박스
            </label>
          </li>
          <li>상품정보</li>
          <li>수량</li>
          <li>상품금액</li>
        </FormTop>
        <KeepList>
          <li>
            <KeepProduct>
              <input type="checkbox" />
              <label className="a11y-hidden">장바구니 아이템 체크박스</label>
              <KeepProductImg src={Dummy} alt="장바구나 상품 이미지" />
              <KeepProductInfo>
                <span>백엔드 글로벌</span>
                <h3>딥러닝 개발자 무릎 담요</h3>
                <p>
                  <strong>17,500</strong>원
                </p>
                <span>택배배송 / 무료배송</span>
              </KeepProductInfo>
              <CountWrap>
                <DecreaseButton>-</DecreaseButton>
                <div>1</div>
                <IncreaseButton>+</IncreaseButton>
              </CountWrap>
              <Total>
                <TotalPrice>17,500원</TotalPrice>
                <OrderBtnS>주문하기</OrderBtnS>
              </Total>
            </KeepProduct>
          </li>
          <li>
            <KeepProduct>
              <input type="checkbox" />
              <label className="a11y-hidden">장바구니 아이템 체크박스</label>
              <KeepProductImg src={Dummy} alt="장바구나 상품 이미지" />
              <KeepProductInfo>
                <span>백엔드 글로벌</span>
                <h3>딥러닝 개발자 무릎 담요</h3>
                <p>
                  <strong>17,500</strong>원
                </p>
                <span>택배배송 / 무료배송</span>
              </KeepProductInfo>
              <CountWrap>
                <DecreaseButton>-</DecreaseButton>
                <div>1</div>
                <IncreaseButton>+</IncreaseButton>
              </CountWrap>
              <Total>
                <TotalPrice>17,500원</TotalPrice>
                <OrderBtnS>주문하기</OrderBtnS>
              </Total>
            </KeepProduct>
          </li>
        </KeepList>
        <ClacPrice>
          <li>
            총상품금액
            <strong>
              46,500<span>원</span>
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
              0<span>원</span>
            </strong>
          </li>
          <li>
            결제 예정 금액
            <strong>
              46,500<span>원</span>
            </strong>
          </li>
        </ClacPrice>
        <OrderBtn>주문하기</OrderBtn>
      </KeepForm>
    </Wrapper>
  );
};
export default KeepPage;
