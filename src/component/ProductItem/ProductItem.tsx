import React from "react";
import {
  ProductItemWrapper,
  ProductImage,
  ProductPrice,
  ProductPriceUnit,
  ProductInfo,
  ProductName,
  ProductInfoContainer,
} from "./ProductItem.styles";
import { Products } from "types/type";
type ProductItemProps = {
  product: Products;
};
const ProductItem: React.FC<ProductItemProps> = (product) => {
  return (
    <ProductItemWrapper>
      <ProductImage src={product.product.image} alt="상품 이미지" />
      <ProductInfoContainer>
        <ProductInfo>{product.product.store_name}</ProductInfo>
        <ProductName>{product.product.product_name}</ProductName>
        <ProductPriceUnit>
          <ProductPrice>{product.product.price}</ProductPrice>원
        </ProductPriceUnit>
      </ProductInfoContainer>
    </ProductItemWrapper>
  );
};

export default ProductItem;
