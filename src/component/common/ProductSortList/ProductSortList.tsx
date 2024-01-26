import React, { useState } from "react";
import {
  List,
  ListWrapper,
  Button,
  FormControlStyle,
} from "./ProductSortList.Style";
import { InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

export interface ProductSortListProps {
  onSort: (type: string) => void;
}
const options = [
  { value: "latest", label: "최신순" },
  { value: "alphabetical", label: "가나다순" },
  { value: "highPrice", label: "높은가격순" },
  { value: "lowPrice", label: "낮은가격순" },
];

const ProductSortList: React.FC<ProductSortListProps> = ({ onSort }) => {
  const [selectedSortType, setSelectedSortType] = useState("latest");

  const handleSort = (type: string) => () => {
    setSelectedSortType(type);
    onSort(type);
  };
  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    setSelectedSortType(event.target.value as string);
    onSort(event.target.value as string);
  };
  return (
    <ListWrapper>
      <List>
        <li>
          <Button
            onClick={handleSort("latest")}
            selected={selectedSortType === "latest"}
          >
            최신순
          </Button>
        </li>
        <li>
          <Button
            onClick={handleSort("alphabetical")}
            selected={selectedSortType === "alphabetical"}
          >
            가나다순
          </Button>
        </li>
        <li>
          <Button
            onClick={handleSort("highPrice")}
            selected={selectedSortType === "highPrice"}
          >
            높은가격순
          </Button>
        </li>
        <li>
          <Button
            onClick={handleSort("lowPrice")}
            selected={selectedSortType === "lowPrice"}
          >
            낮은가격순
          </Button>
        </li>
      </List>
      <div>
        <FormControlStyle sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">정렬</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedSortType}
            label="정렬"
            onChange={handleDropdownChange}
          >
            <MenuItem value="latest">최신순</MenuItem>
            <MenuItem value="alphabetical">가나다순</MenuItem>
            <MenuItem value="highPrice">높은가격순</MenuItem>
            <MenuItem value="lowPrice">낮은가격순</MenuItem>
          </Select>
        </FormControlStyle>
      </div>
    </ListWrapper>
  );
};

export default ProductSortList;
