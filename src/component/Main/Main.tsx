import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { MainSection, ProductList, Banner, ProductSection } from "./Main.Style";
import LeftBanner from "../../assets/images/icon-swiper-1.svg";
import RightBanner from "../../assets/images/icon-swiper-2.svg";
const Main: React.FC = () => {
  return (
    <MainSection>
      <Banner>
        <button aria-label="배너 좌측으로 넘기기">
          <img src={LeftBanner} alt="좌측 화살표 이미지" />
        </button>
        <button aria-label="배너 우측으로 넘기기">
          <img src={RightBanner} alt="우측 화살표 이미지" />
        </button>
      </Banner>
      <ProductSection>
        <ProductList>
          {/* <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li> */}
        </ProductList>
      </ProductSection>
    </MainSection>
  );
};

export default Main;
