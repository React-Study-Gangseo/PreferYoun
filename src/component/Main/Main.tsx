import React, { useEffect, useState, useRef } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { MainSection, ProductList, Banner, ProductSection } from "./Main.Style";
import LeftBanner from "../../assets/images/icon-swiper-1.svg";
import RightBanner from "../../assets/images/icon-swiper-2.svg";
import { GetFullProduct } from "API/ProductAPI";
import { Products } from "types/type";
import useInfiniteScroll from "CustomHook/InfiniteScroll";
const Main: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const target = useRef(null);
  const [observe, unobserve] = useInfiniteScroll(() => {
    setPage((page) => page + 1);
  });
  const fetchProduct = async (page: number) => {
    try {
      console.log(page);
      const response = await GetFullProduct(page);
      console.log("count", response);
      setProducts((prevProducts) => [
        ...prevProducts,
        ...response.data.results,
      ]);
      setCount(response.data.count);
    } catch (error) {}
  };

  useEffect(() => {
    if (page === 1) observe(target.current);

    const N = products.length;
    const totalCount = count;

    if (0 === N || totalCount <= N) {
      unobserve(target.current);
    }
  }, [products]);

  useEffect(() => {
    console.log("!", page);
    fetchProduct(page);
  }, [page]);
  console.log(products);
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
      <div ref={target} style={{ width: "100&", height: 30 }} />
    </MainSection>
  );
};

export default Main;
