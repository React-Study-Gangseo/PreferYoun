import React, { useEffect } from "react";
import Logo from "../../assets/images/Logo-hodu.png";
import Dummy from "../../assets/images/dummy.jpg";
import {
  HeaderSection,
  Wrapper,
  MainSection,
  AsideSection,
  SellerProduct,
  MainContent,
  ProductInfo,
  OrderList,
} from "./SellerCenterPage.Style";
import Button from "../common/Button/Button";
export interface SellerCenterPageProps {}

const SellerCenterPage: React.FC = () => {
  return (
    <>
      <h1 className="a11y-hidden">판매자 센터</h1>
      <Wrapper>
        <HeaderSection>
          <a href="#">
            <img alt="호두 로고 이미지" src={Logo} />
          </a>
          <h2>판매자 센터</h2>
        </HeaderSection>
        <MainSection>
          <h2>
            대시보드<span>백엔드글로벌</span>
          </h2>
          <Button width="ms" bgColor="active">
            상품 업로드
          </Button>
          <MainContent>
            <AsideSection>
              <ul>
                <li>
                  <Button width="tabMenu" color="black" bgColor="inactive">
                    판매중인 상품
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black" bgColor="inactive">
                    주문/배송
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black" bgColor="inactive">
                    문의/리뷰
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black" bgColor="inactive">
                    통계
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black" bgColor="inactive">
                    스토어 설정
                  </Button>
                </li>
              </ul>
            </AsideSection>
            <SellerProduct>
              <OrderList>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>판매가격</th>
                    <th>수정</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ProductInfo>
                        <img src={Dummy} alt="상품이미지" />
                        <h3>딥러닝 개발자 무릎 담요</h3>
                        <span>재고 : 370개</span>
                      </ProductInfo>
                    </td>
                    <td>17.500원</td>
                    <td>
                      <Button width="s" bgColor="active">
                        수정
                      </Button>
                    </td>
                    <td>
                      <Button
                        width="s"
                        bgColor="tabActive"
                        color="black"
                        border="active"
                      >
                        삭제
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </OrderList>
            </SellerProduct>
          </MainContent>
        </MainSection>
      </Wrapper>
    </>
  );
};

export default SellerCenterPage;
