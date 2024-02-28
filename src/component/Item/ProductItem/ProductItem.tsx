import React, { useCallback, memo, useEffect, useRef, useState } from "react";
import {
  ProductItemWrapper,
  ProductImage,
  ProductPrice,
  ProductPriceUnit,
  ProductInfo,
  ProductInfoContainer,
  ProductName,
  SoldOutImg,
} from "./ProductItem.styles";
import { Products } from "types/type";
import { useNavigate } from "react-router-dom";
import SoldOut from "../../../assets/images/sold-out.png";
type ProductItemProps = {
  product: Products;
};

const defaultOption = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

const numberFormat = new Intl.NumberFormat("ko-KR");

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

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
  useEffect(() => {
    const checkIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLImageElement;
        target.setAttribute("src", product.image || "");
        if (isLoaded) {
          setLoading(false);
        }
        io.unobserve(target);
      }
    };

    const io = new IntersectionObserver(checkIntersect, {
      ...defaultOption,
    });
    if (imgRef.current) {
      io.observe(imgRef.current);
    }

    return () => io && io.disconnect();
  }, [imgRef, isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (!loading) {
      setLoading(false);
    }
  };

  return (
    <ProductItemWrapper onClick={() => handleProductDetail(product)}>
      {product.stock === 0 && (
        <>
          <SoldOutImg src={SoldOut} alt="sold-out" />
        </>
      )}
      <ProductImage
        ref={imgRef}
        data-src={product.image}
        alt={`상품 이미지-${product.product_name}`}
        onLoad={handleLoad}
        className={loading ? "loading" : "loaded"}
      />
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
