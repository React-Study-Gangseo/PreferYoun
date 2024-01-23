import React, { useState } from "react";
import { List, ListWrapper, Button } from "./ProductSortList.Style";

export interface ProductSortListProps {
  onSort: (type: string) => void;
}

const ProductSortList: React.FC<ProductSortListProps> = ({ onSort }) => {
  const [selectedSortType, setSelectedSortType] = useState("latest");

  const handleSort = (type: string) => () => {
    setSelectedSortType(type);
    onSort(type);
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
    </ListWrapper>
  );
};

export default ProductSortList;
