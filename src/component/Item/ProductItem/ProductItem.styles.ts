import styled from "@emotion/styled";

export const ProductItemWrapper = styled.article`
  overflow: hidden;
  position: relative;
  @media (max-width: 896px) {
    min-width: 350px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #c4c4c4;
  }
`;

export const ProductImage = styled.img`
  width: 23.75rem;
  height: 23.75rem;
  aspect-ratio: 1/1;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 1rem;
  object-fit: cover;
  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
  }
  @media (max-width: 896px) {
    width: 150px;
    height: 150px;
  }
`;
export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
export const ProductInfo = styled.span`
  color: #767676;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;
export const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 22px;
  word-break: keep-all;
`;
export const ProductPrice = styled.strong`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const ProductPriceUnit = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
export const SoldOutImg = styled.img`
  position: absolute;
  width: 23.75rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  z-index: 9;
  @media (max-width: 896px) {
    width: 150px;
    height: 150px;
  }
`;
