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
import { useNavigate } from "react-router-dom";
type ProductItemProps = {
  product: Products;
};
const ProductItem: React.FC<ProductItemProps> = (product) => {
  const navigate = useNavigate();
  const handleProductDetail = ({ product_id }: Products) => {
    console.log(product_id);
    navigate(`/detailProduct/${product_id}`, {
      state: {
        product: product_id,
      },
    });
  };
  return (
    <ProductItemWrapper
      onClick={() => {
        handleProductDetail(product.product);
      }}
    >
      <ProductImage src={product.product.image} alt="상품 이미지" />
      <ProductInfoContainer>
        <ProductInfo>{product.product.store_name}</ProductInfo>
        <ProductName>{product.product.product_name}</ProductName>
        <ProductPriceUnit>
          <ProductPrice>{`${new Intl.NumberFormat("ko-KR").format(
            product.product.price || 0
          )}`}</ProductPrice>
          원
        </ProductPriceUnit>
      </ProductInfoContainer>
    </ProductItemWrapper>
  );
};

export default ProductItem;
