import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../redux/Search";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/images/search.svg";
import { SearchAPI } from "../../API/ProductAPI";
import {
  Main,
  Form,
  SearchBtn,
  MyIconButton,
  SearchList,
  SearchListWrapper,
} from "./SearchPage.Style";
import { TextField } from "@mui/material";
import leftArrow from "../../assets/images/chevron-left.svg";
import { debounce } from "lodash";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { product_name: string; product_id: number }[]
  >([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = debounce(async (value: string, page: number = 1) => {
    try {
      const res = await SearchAPI(value, page);

      setSearchResults((prevResults) =>
        page > 1 ? [...prevResults, ...res.data.results] : [...res.data.results]
      );
      dispatch(setSearchData({ value: res.data.results }));

      if (res.data.next) {
        search(value, page + 1);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, 500);

  useEffect(() => {
    setSearchResults([]);
  }, [inputValue]);

  const handleDetail = (product_id: number) => {
    navigate(`/detailProduct/${product_id}`);
    dispatch(setSearchData({ value: [] }));
  };

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  const onClickHome = () => {
    dispatch(setSearchData({ value: [] }));
    navigate("/");
  };

  return (
    <Main>
      <div>
        <MyIconButton onClick={() => onClickHome()} aria-label="뒤로가기 버튼">
          <img src={leftArrow} alt="뒤로가기" />
        </MyIconButton>
        <Form onSubmit={(e) => e.preventDefault()} id="search-form">
          <TextField
            id="standard-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            fullWidth
            style={{ height: "30px", fontSize: "20px" }}
            aria-label="상품검색"
          />
          <SearchBtn type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
      </div>
      {searchResults.length > 0 ? (
        <SearchListWrapper>
          {searchResults.map((result, index) => (
            <SearchList
              key={index}
              onClick={() => handleDetail(result.product_id)}
            >
              {result.product_name}
            </SearchList>
          ))}
        </SearchListWrapper>
      ) : null}
    </Main>
  );
}
