import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const KeepProduct = styled.tr`
  width: 100%;
  & td {
    text-align: center;
    vertical-align: middle;
    padding: 1.25rem 0;
    border-top: 2px solid #e0e0e0;
    border-bottom: 2px solid #e0e0e0;
    &:first-of-type {
      border-left: 2px solid #e0e0e0;
      border-radius: 10px 0 0 10px;
    }
    &:last-of-type {
      border-right: 2px solid #e0e0e0;
      border-radius: 0 10px 10px 0;
    }
  }
  @media (max-width: 896px) {
    display: none;
  }
`;
export const KeepProductMobile = styled.tr`
  width: 100%;
  /* position: relative; */
  & td {
    text-align: center;
    vertical-align: middle;
    padding: 1.25rem 0;
    border-top: 2px solid #e0e0e0;
    border-bottom: 2px solid #e0e0e0;
    &:first-of-type {
      border-left: 2px solid #e0e0e0;
      border-radius: 10px 0 0 10px;
      padding-left: 5px;
    }
    &:last-of-type {
      border-right: 2px solid #e0e0e0;
      border-radius: 0 10px 10px 0;
      padding-right: 5px;
    }
  }
  @media (min-width: 897px) {
    display: none;
  }
`;

export const KeepProductImg = styled.img`
  max-width: 10rem;
  aspect-ratio: 1/1;
  max-height: 10rem;
  border-radius: 0.625rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 896px) {
    max-width: 10rem;
    width: 80%;
    aspect-ratio: 1/1;
    /* max-height: 5rem; */
    object-fit: cover;
  }
`;

export const KeepProductInfo = styled.div`
  width: 100%;
  display: flex;
  margin-left: 10px;
  gap: 20px;
  & div {
    text-align: left;

    & > span {
      font-size: 14px;
      font-weight: 400;
      color: #767676;
    }

    & h3 {
      font-size: 18px;
      font-weight: 400;
      margin: 0.625rem 0 0.625rem 0;
      word-break: keep-all;
    }

    & p {
      margin: 0 0 3.5rem 0;
      font-size: 1rem;
      font-weight: 700;
    }
  }
  @media (max-width: 896px) {
    flex-direction: column;
    gap: 0;
    & div {
      width: 170px;
      margin: 5px auto 0;
      & p {
        margin-bottom: 10px;
      }
    }
  }
`;
export const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #eb5757;
  margin-bottom: 1.625rem;
  text-align: center;
`;

export const Total = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const DeleteBtn = styled(IconButton)`
  position: absolute;
  top: -66px;
  right: 4px;
  @media (min-width: 897px) {
    top: -40px;
    right: 10px;
  }
  & img {
    width: 1.375rem;
    aspect-ratio: 1/1;
  }
`;
export const CountWrap = styled.div`
  display: flex;
  width: 9.375rem;
  height: 3.125rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin: 0 auto;
  & > div,
  & > button {
    flex: 1 1 33%;
    text-align: center;
    line-height: 3.125rem;
  }
  @media (max-width: 896px) {
    width: 70px;
    height: 30px;
    margin-bottom: 15px;
    & > div,
    & > button {
      flex: 1 1 33%;
      text-align: center;
      line-height: 30px;
    }
  }
`;
