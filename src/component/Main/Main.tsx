import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { MainSection, ProductList, Banner, ProductSection } from "./Main.Style";
import LeftBanner from "../../assets/images/icon-swiper-1.svg";
import RightBanner from "../../assets/images/icon-swiper-2.svg";
import { GetFullProduct } from "API/ProductAPI";
import { Products } from "types/type";
const Main: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const fetchProduct = async () => {
    try {
      const response = await GetFullProduct();
      console.log(response);
      setProducts(response.data.results);
    } catch (error) {}
  };
  useEffect(() => {
    fetchProduct();
  }, []);

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
          {products?.map((item) => (
            <ProductItem key={Number(item.product_id)} product={item} />
          ))}
        </ProductList>
      </ProductSection>
    </MainSection>
  );
};

export default Main;
