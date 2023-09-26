import React, { useEffect, useState, useRef, Suspense } from "react";
import ProductItem from "../Item/ProductItem/ProductItem";
import {
  MainSection,
  ProductList,
  ProductSection,
  ButtonContainer,
  TopIcon,
  ScrollButton,
} from "./Main.Style";
import { GetFullProduct } from "API/ProductAPI";
import { Products } from "types/type";
import useInfiniteScroll from "CustomHook/InfiniteScroll";
import { searchData } from "redux/Search";
import { useSelector } from "react-redux";
import BannerSection from "./Banner/Banner";
import TopBtnIcon from "../../assets/images/arrow_top.svg";
const Main: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
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
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const showButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", showButtonClick);
    return () => {
      window.removeEventListener("scroll", showButtonClick);
    };
  }, []);
  return (
    <MainSection>
      <BannerSection />
      <ProductSection>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList>
            {(searchProducts?.length > 0 ? searchProducts : products)?.map(
              (item) => (
                <li key={Number(item.product_id)}>
                  <ProductItem product={item} />
                </li>
              )
            )}
          </ProductList>
        </Suspense>
        <ButtonContainer>
          {showButton && (
            <ScrollButton onClick={scrollToTop}>
              <TopIcon src={TopBtnIcon} alt="Top" />
            </ScrollButton>
          )}
        </ButtonContainer>
      </ProductSection>
      <div ref={target} style={{ width: "100%", height: 30 }} />
    </MainSection>
  );
};

export default Main;
