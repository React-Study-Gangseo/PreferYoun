import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../redux/Search";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "../../assets/images/search.svg";
import { SearchAPI } from "../../API/ProductAPI";
import { Main, Form, SearchBtn } from "./SearchPage.Style";
import { TextField } from "@mui/material";
type Props = {};

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const search = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      try {
        const res = await SearchAPI(inputValue);
        dispatch(setSearchData({ value: res.data.results }));
        navigate("/");
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  };
  const handleIconClick = (e: React.MouseEvent) => {
    search({ key: "Enter" } as React.KeyboardEvent);
  };
  return (
    <Main>
      <Form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="standard-basic"
          variant="standard"
          type="text"
          placeholder="키워드를 검색하세요"
          value={inputValue}
          onInput={handleData}
          onKeyDown={search}
          fullWidth
          style={{ height: "30px", fontSize: "20px" }}
        />
        <label className="a11y-hidden">상품검색</label>
        <SearchBtn onClick={(e) => handleIconClick(e)} type="submit">
          <img src={Search} alt="검색창 아이콘" />
        </SearchBtn>
      </Form>
    </Main>
  );
}
