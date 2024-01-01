import React, { useCallback, memo } from "react";
import {
  ProductItemWrapper,
  ProductImage,
  ProductPrice,
  ProductPriceUnit,
  ProductInfo,
  ProductInfoContainer,
  ProductName,
  SoldOutImg,
  SoldOutWrapper,
} from "./ProductItem.styles";
import { Products } from "types/type";
import { useNavigate } from "react-router-dom";
import SoldOut from "../../../assets/images/sold-out.png";
type ProductItemProps = {
  product: Products;
};

const numberFormat = new Intl.NumberFormat("ko-KR");

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductDetail = useCallback(
    (product: Products) => {
      if (product.stock === 0) {
        return;
      } else {
        navigate(`/detailProduct/${product.product_id}`, {
          state: {
            product: product.product_id,
          },
        });
      }
    },
    [navigate]
  );

  return (
    <ProductItemWrapper onClick={() => handleProductDetail(product)}>
      {product.stock === 0 && (
        <>
          <SoldOutWrapper>
            <SoldOutImg src={SoldOut} alt="sold-out" />
          </SoldOutWrapper>
        </>
      )}
      <ProductImage src={product.image} alt="상품 이미지" />
      <ProductInfoContainer>
        <ProductInfo>{product.store_name}</ProductInfo>
        <ProductName>{product.product_name}</ProductName>
        <ProductPriceUnit>
          <ProductPrice>{`${numberFormat.format(
            product.price || 0
          )}`}</ProductPrice>
          원
        </ProductPriceUnit>
      </ProductInfoContainer>
    </ProductItemWrapper>
  );
};

export default memo(ProductItem);
