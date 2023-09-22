import styled from "@emotion/styled";
import Plus from "../../assets/images/icon-plus.svg";

import { ButtonStyle } from "../common/Button/Button";

export const HeaderSection = styled.section`
  padding-left: 6.25rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 5.625rem;
  box-shadow: 0px 4px 5px 0px #0000001a;
  & img {
    width: 5rem;
  }
  & h2 {
    display: inline-block;
    margin: 0;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const MainSection = styled.main`
  max-width: 110%;
  margin: 0 auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding-top: 2.375rem;
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
    display: block;
    margin-bottom: 2.375rem;
    width: 168px;
    height: 54px;
    text-align: right;
    &::before {
      content: "";
      width: 2rem;
      aspect-ratio: 1/1;
      background: url(${Plus}) no-repeat center center;
      display: block;
      position: absolute;
      left: 20px;
      top: 11px;
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
export const TabBtn = styled(ButtonStyle)`
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 20.03px;
  &:active,
  &.active {
    background-color: #21bf48;
    color: white;
  }
  @media (max-width: 896px) {
    width: 100%;
    padding: 5px;
    border: 1px solid #c4c4c4;
    border-radius: 0;
    text-align: center;
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
`;

export const ProductInfo = styled.article`
  height: 100%;
  padding: 16px 0 17px 30px;
  & img {
    width: 4.375rem;
    aspect-ratio: 1/1;
    border-radius: 100px;
    float: left;
    margin-right: 30px;
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
`;

export const UploadBtn = styled(ButtonStyle)``;
