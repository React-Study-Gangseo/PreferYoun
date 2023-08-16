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
import dummyImage from "../../assets/images/dummy.jpg";
type ProductItemProps = {
  // 필요한 props 타입 정의.
};
const ProductItem: React.FC<ProductItemProps> = () => {
  return (
    <ProductItemWrapper>
      <ProductImage src={dummyImage} alt="상품 더미 이미지" />
      <ProductInfoContainer>
        <ProductInfo>우당탕탕 라이캣의 실험실</ProductInfo>
        <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
        <ProductPriceUnit>
          <ProductPrice>29,000</ProductPrice>원
        </ProductPriceUnit>
      </ProductInfoContainer>
    </ProductItemWrapper>
  );
};

export default ProductItem;
