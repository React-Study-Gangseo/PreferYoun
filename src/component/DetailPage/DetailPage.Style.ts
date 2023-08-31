import styled from "@emotion/styled";
import Button from "component/common/Button/Button";
export const DetailPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  gap: 3.125rem;
  margin-top: 5rem;
`;
export const ProductImg = styled.img`
  width: 37.5rem;
  height: 37.5rem;
`;
export const ProductInfoSection = styled.section`
  width: 39.375rem;
  & > span {
    color: #767676;
    font-size: 1.125rem;
  }
  & > h3 {
    font-size: 2.25rem;
    margin: 1rem 0 1.25rem;
  }
`;

export const Price = styled.p`
  margin-bottom: 11rem;
  & > strong {
    font-size: 36px;
    font-weight: 700;
  }
  & + span {
    display: block;
    width: 100%;
    font-size: 1rem;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 1.25rem;
  }
`;

export const CountWrap = styled.div`
  display: flex;
  width: 9.375rem;
  height: 3.125rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin: 1.875rem 0;
  & > div,
  & > button {
    flex: 1 1 33%;
    text-align: center;
    line-height: 3.125rem;
  }
`;

export const IncreaseButton = styled.button`
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #c4c4c4;
`;

export const DecreaseButton = styled.button`
  border-radius: 5px 0 0 5px;
  border-right: 1px solid #c4c4c4;
`;

export const TotalPriceWrap = styled.div`
  width: 100%;
  border-top: 1px solid #c4c4c4;
  padding-top: 2rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.375rem;

  & > p:first-of-type {
    font-size: 18px;
    font-weight: bold;
    margin: 0 20rem 0 0;
  }

  & > span::after {
    content: "";
    border-left: 1px solid #c4c4c4;
    height: 100%;
    margin: 0 11px 0 12px;
  }

  & > span > strong,
  & > p:last-child {
    color: #21bf48;
    font-size: 1.125rem;
  }

  & > p > strong {
    font-size: 36px;
    font-weight: 700;
  }
`;

export const BuyButton = styled(Button)`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const KeepButton = styled(Button)`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const MoreInfo = styled.div`
  margin-top: 8.75rem;
  font-size: 1.125rem;
  font-weight: 500;
  & > ul {
    display: flex;
    height: 60px;
  }
  & > ul > li {
    flex: 1 1 25%;
    border-bottom: 6px solid #e0e0e0;
    text-align: center;
    line-height: 3.75rem;
  }
  & button {
    width: 100%;
    height: 100%;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 14px;
`;
