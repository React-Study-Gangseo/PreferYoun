import styled from "@emotion/styled";
import { ButtonStyle } from "component/common/Button/Button";
export const KeepProduct = styled.tr`
  width: 100%;
  /* position: relative; */
  & td {
    & input[type="checkbox"] {
      appearance: none;
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid #21bf48;
      border-radius: 50%;
      margin: 0 auto;
    }
    & input[type="checkbox"]:checked::before {
      content: "";
      display: block;
      position: absolute;
      top: 2px;
      left: 2.2px;
      width: 12px;
      height: 12px;
      background-color: #21bf48;
      border-radius: 50%;
      box-sizing: border-box;
    }
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
    & input[type="checkbox"] {
      appearance: none;
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid #21bf48;
      border-radius: 50%;
      margin: 0 auto;
    }
    & input[type="checkbox"]:checked::before {
      content: "";
      display: block;
      position: absolute;
      top: 2px;
      left: 2.2px;
      width: 12px;
      height: 12px;
      background-color: #21bf48;
      border-radius: 50%;
      box-sizing: border-box;
    }
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

export const IncreaseButton = styled.button`
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #c4c4c4;
`;

export const DecreaseButton = styled.button`
  border-radius: 5px 0 0 5px;
  border-right: 1px solid #c4c4c4;
`;

export const Total = styled.div`
  margin: 0 auto;
  position: relative;
`;

const Button = styled.button`
  display: block;
  padding: 15px;
  font-size: 20px;
  width: 50%;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
`;

export const OrderBtn = styled(Button)`
  width: 13.75rem;
  height: 4.25rem;
  border-radius: 5px;
  background: #21bf48;
  color: white;
  margin: 2.5rem auto 0;
  font-size: 24px;
  font-weight: 700;
`;

export const OrderBtnS = styled(ButtonStyle)`
  height: 40px;
  width: 8.125rem;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 12px;
  margin: 0 auto;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: -66px;
  right: 4px;
  @media (min-width: 897px) {
    top: -46px;
    right: 10px;
  }
`;
