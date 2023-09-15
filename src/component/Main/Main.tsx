import React, { useEffect, useState, useRef } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { MainSection, ProductList, ProductSection } from "./Main.Style";
import { GetFullProduct } from "API/ProductAPI";
import { Products } from "types/type";
import useInfiniteScroll from "CustomHook/InfiniteScroll";
import { searchData } from "redux/Search";
import { useSelector } from "react-redux";
import BannerSection from "./Banner/Banner";
const Main: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [searchProducts, setSearchProducts] = useState<Products[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const target = useRef(null);
  const [observe, unobserve] = useInfiniteScroll(() => {
    setPage((page) => page + 1);
  });
  const keyword = useSelector(
    (state: { search: searchData }) => state.search.value
  );
  const fetchProduct = async (page: number) => {
    try {
      console.log(page);
      const response = await GetFullProduct(page);
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
    setSearchProducts(keyword);
  }, [keyword]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProduct(page);
    };

    fetchData();
  }, [page]);
  console.log(products);
  return (
    <MainSection>
      <ProductSection>
        <BannerSection />
        <ProductList>
          {(searchProducts?.length > 0 ? searchProducts : products)?.map(
            (item) => (
              <li key={Number(item.product_id)}>
                <ProductItem product={item} />
              </li>
            )
          )}
        </ProductList>
      </ProductSection>
      <div ref={target} style={{ width: "100%", height: 30 }} />
    </MainSection>
  );
};

export default Main;
