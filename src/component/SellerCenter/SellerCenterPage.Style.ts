import styled from "@emotion/styled";

export const MainSection = styled.main`
  max-width: 110%;
  margin: 0 auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 110%;
  padding-top: 2.375rem;
  /* padding: 2.375rem 76.737px 0; */
  margin-bottom: 96px;
  & h2 {
    padding-top: 0.375rem;
    float: left;
    font-size: 36px;
    font-weight: 700;
    & span {
      color: #21bf48;
      margin-left: 1rem;
    }
  }
  & > button {
    position: relative;
    float: right;
    margin-bottom: 2.375rem;
    display: flex;
  }
  @media (max-width: 1653px) and (min-width: 897px) {
    width: 98%;
  }
  @media (max-width: 896px) {
    padding: 2.375rem 10px 0;
    & h2 {
      margin-bottom: 50px;
    }
    & > button {
      display: none;
    }
  }
`;

export const AsideSection = styled.aside`
  width: 15.625rem;
  @media (max-width: 896px) {
    width: 100%;
    & ul {
      width: 100%;
      display: flex;
      gap: 0;
      & li {
        width: 100%;
      }
    }
  }
`;

export const MainContent = styled.section`
  width: 100%;
  display: flex;
  gap: 1.875rem;
  height: 55.25rem;
  @media (max-width: 896px) {
    flex-direction: column;
  }
`;
export const SellerProduct = styled.section`
  width: 100%;
  background: #f2f2f2;
  border: 1px solid #c4c4c4;
  & table {
    width: 100%;
    background: white;
  }
`;

export const OrderList = styled.table`
  width: 100%;
  border-collapse: collapse;
  & thead {
    height: 3.75rem;
  }
  & th:nth-of-type(1) {
    width: calc(100% * 3 / 6);
    vertical-align: middle;
  }
  & th:not(:nth-of-type(1)) {
    width: calc(100% * 1 / 6);
    vertical-align: middle;
  }
  & tr:not(tfoot tr) {
    border-bottom: 1px solid #c4c4c4;
  }
  & tbody td {
    height: 6.4375rem;
  }
  & td:not(:nth-of-type(1)) {
    text-align: center;
    line-height: 100%;
    vertical-align: middle;
  }
  & td > img {
    width: 104px;
    height: 104px;
    border-radius: 10px;
  }
  & td:not(:nth-of-type(1)):not(:nth-of-type(4)) {
    color: #767676;
    word-break: keep-all;
  }
  & td:last-of-type {
    font-size: 18px;
    font-weight: 700;
  }
  & tfoot td {
    padding-top: 1.875rem;
    text-align: right;
    font-size: 18px;
    font-weight: 500;
  }
  & button {
    height: 2.5rem;
    margin: 0 auto;
    border: 1px solid #dbdbdb;
    &:hover {
      border: 1px solid #dbdbdb;
    }
  }

  @media (min-width: 897px) {
    & thead:last-of-type {
      display: none;
    }
  }
  @media (max-width: 896px) {
    & thead:first-of-type {
      display: none;
    }
  }
  & td:last-of-type {
    padding-right: 8px;
  }
`;

export const ProductInfo = styled.article`
  height: 100%;
  padding: 16px 0 17px 30px;
  & > div {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 100px;
    float: left;
    margin-right: 30px;
    overflow: hidden;
    & > img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  & span {
    margin-left: 0;
    color: #767676;
    margin-bottom: 0.375rem;
    font-size: 14px;
    font-weight: 400;
  }
  & h3 {
    margin: 0.625rem 0;
  }
  @media (max-width: 896px) {
    & > div {
      float: none;
    }
  }
`;
