import React, {
  useEffect,
  useState,
  useRef,
  Suspense,
  useReducer,
} from "react";
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
import { ScrollRestoration, useMatches, Location } from "react-router-dom";
import ProductSortList from "component/common/ProductSortList/ProductSortList";
// 매직 넘버 제거
const SCROLL_Y_THRESHOLD = 800;
const TARGET_HEIGHT = 30;

type State = {
  products: Products[];
  searchProducts: Products[];
  count: number;
  sortType: string;
};

// 액션에 대한 타입 지정
type Action =
  | { type: "SET_PRODUCTS"; payload: Products[] }
  | { type: "SET_SEARCH_PRODUCTS"; payload: Products[] }
  | { type: "SET_COUNT"; payload: number }
  | { type: "SET_SORT_TYPE"; payload: string };

// 상태 관리를 위한 reducer 함수
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: [...state.products, ...action.payload] };
    case "SET_SEARCH_PRODUCTS":
      return { ...state, searchProducts: action.payload };
    case "SET_COUNT":
      return { ...state, count: action.payload };
    case "SET_SORT_TYPE":
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
}

const Main: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    searchProducts: [],
    count: 0,
    sortType: "latest",
  });
  const [page, setPage] = useState(1);

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
      dispatch({ type: "SET_PRODUCTS", payload: response.data.results });
      dispatch({ type: "SET_COUNT", payload: response.data.count });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (page === 1) observe(target.current);

    const N = state.products.length;
    const totalCount = state.count;

    if (0 === N || totalCount <= N) {
      unobserve(target.current);
    }
  }, [state.products]);

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_PRODUCTS", payload: keyword });
  }, [keyword]);

  useEffect(() => {
    fetchProduct(page);
  }, [page]);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const showButtonClick = () => {
      if (window.scrollY > SCROLL_Y_THRESHOLD) {
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

  // let getKey = React.useCallback(
  //   (location: Location, matches: ReturnType<typeof useMatches>) => {
  //     let match = matches.find((m) => (m.handle as any)?.scrollMode);
  //     if ((match?.handle as any)?.scrollMode === "pathname") {
  //       return location.pathname;
  //     }

  //     return location.key;
  //   },
  //   []
  // );

  const handleSort = (type: string) => {
    dispatch({ type: "SET_SORT_TYPE", payload: type });
  };

  // useEffect(() => {
  //   // sortType에 따른 상품 목록 정렬 로직
  //   // ...
  // }, [sortType]);
  const getSortedProducts = () => {
    const compare = (a: any, b: any) => {
      if (state.sortType === "latest") {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      } else if (state.sortType === "highPrice") {
        return b.price - a.price;
      } else if (state.sortType === "alphabetical") {
        return a.product_name.localeCompare(b.product_name);
      } else {
        return a.price - b.price;
      }
    };

    const sortedList = [...state.products].sort(compare);

    return sortedList;
  };

  return (
    <MainSection>
      <BannerSection />
      <ProductSection>
        <ProductSortList onSort={handleSort} />
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList>
            {/* {(state.searchProducts?.length > 0
              ? state.searchProducts
              : state.products
            )?.map((item) => (
              <li key={Number(item.product_id)}>
                <ProductItem product={item} />
              </li>
            ))} */}
            {getSortedProducts().map((item) => (
              <li key={Number(item.product_id)}>
                <ProductItem product={item} />
              </li>
            ))}
          </ProductList>
          {/* <ScrollRestoration getKey={getKey} /> */}
        </Suspense>
        <ButtonContainer>
          {showButton && (
            <ScrollButton onClick={scrollToTop}>
              <TopIcon src={TopBtnIcon} alt="Top" />
            </ScrollButton>
          )}
        </ButtonContainer>
      </ProductSection>
      <div ref={target} style={{ width: "100%", height: TARGET_HEIGHT }} />
    </MainSection>
  );
};

export default Main;
