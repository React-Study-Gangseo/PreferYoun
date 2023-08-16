import React from "react";
import {
  DetailPageWrapper,
  Price,
  ProductImg,
  ProductInfoSection,
  CountWrap,
  BuyButton,
  KeepButton,
  DecreaseButton,
  IncreaseButton,
  TotalPriceWrap,
  MoreInfo,
} from "./DetailPage.Style";
import Dummy from "../../assets/images/dummy.jpg";
import Header from "component/Header/Header";
const DetailPage: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <DetailPageWrapper>
        <ProductImg src={Dummy} alt="상품 사진" />
        <ProductInfoSection>
          <span>백엔드 글로벌</span>
          <h3>딥러닝 개발자 무릎 담요</h3>
          <Price>
            <strong>17,500</strong>원
          </Price>
          <span>택배배송 / 무료배송</span>
          <CountWrap>
            <DecreaseButton>-</DecreaseButton>
            <div>1</div>
            <IncreaseButton>+</IncreaseButton>
          </CountWrap>
          <TotalPriceWrap>
            <p>총 상품 금액</p>
            <span>
              총 수량 <strong>1</strong>개
            </span>
            <p>
              <strong>17,500</strong>원
            </p>
          </TotalPriceWrap>
          <BuyButton>바로구매</BuyButton>
          <KeepButton>장바구나</KeepButton>
        </ProductInfoSection>
      </DetailPageWrapper>
      <MoreInfo>
        <ul>
          <li>
            <button>상세보기</button>
          </li>
          <li>
            <button>리뷰</button>
          </li>
          <li>
            <button>Q & A</button>
          </li>
          <li>
            <button>반품/교환정보</button>
          </li>
        </ul>
      </MoreInfo>
    </>
  );
};

export default DetailPage;
