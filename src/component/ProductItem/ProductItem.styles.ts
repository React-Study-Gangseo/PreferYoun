import styled from "@emotion/styled";

export const ProductItemWrapper = styled.article`
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 23.75rem;
  height: 23.75rem;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 1rem;
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
`;
export const ProductPrice = styled.strong`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const ProductPriceUnit = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;