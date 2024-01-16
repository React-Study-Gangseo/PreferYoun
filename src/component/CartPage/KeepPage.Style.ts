import styled from "@emotion/styled";
import PlusIcon from "../../assets/images/icon-plus-line.svg";
import MinusIcon from "../../assets/images/icon-minus-line.svg";

export const Wrapper = styled.main`
  width: 100%;
  max-width: 80rem;
  margin: 3.375rem auto 10rem;
  @media (max-width: 896px) {
    margin-top: 10px;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  @media (max-width: 896px) {
    display: none;
  }
`;

export const KeepForm = styled.section`
  margin-top: 1.0625rem;
  width: 100%;
`;
export const CartTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  & thead {
    background: #f2f2f2;
    height: 3.75rem;
    @media (max-width: 896px) {
      display: none;
    }
  }
  & thead th {
    vertical-align: middle;
    font-size: 1.125rem;
  }
  & tbody tr {
    height: 25px;
  }
`;
export const FormTop = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 1.1875rem 8.1875rem 1.125rem 1.875rem;
  margin-bottom: 2.1875rem;
  font-size: 1.125rem;
  & li:nth-of-type(2) {
    margin-right: 80px;
  }
`;

export const KeepList = styled.ul`
  margin-bottom: 5rem;

  & li {
    margin-bottom: 0.625rem;
  }
`;

export const KeepProduct = styled.article`
  width: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 0.625rem;
  display: flex;
  padding: 1.25rem 6.25rem 1.25rem 1.875rem;
`;

export const KeepProductImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.625rem;
  margin: 0 2.25rem 0 2.5rem;
`;

export const KeepProductInfo = styled.div`
  width: 26.125rem;
  padding-top: 0.3125rem;
  & > span {
    font-size: 14px;
    font-weight: 400;
    color: #767676;
  }

  & h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 0.625rem 0 0.625rem 0;
  }

  & p {
    margin: 0 0 3.5rem 0;
    font-size: 1rem;
    font-weight: 700;
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
  max-width: 9.375rem;
  height: 3.125rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin: auto 0;
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

export const Total = styled.div`
  margin: auto 0 auto auto;
`;

export const ClacPrice = styled.ul`
  background: #f2f2f2;
  display: flex;
  width: 100%;
  max-height: 9.375rem;
  min-height: 100px;
  align-items: center;

  & li {
    text-align: center;
    flex: 1 1 25%;
    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
  & li strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.75rem;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  & li strong > span {
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  & li:first-of-type,
  & li:nth-of-type(2) {
    position: relative;
  }

  & li:first-of-type::after,
  & li:nth-of-type(2)::after {
    content: "";
    display: block;
    max-width: 2.125rem;
    min-width: 25px;
    aspect-ratio: 1 / 1;
    background-color: #fff;
    position: absolute;
    border-radius: 100%;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    @media (max-width: 896px) {
      display: none;
    }
  }
  & li:first-of-type::after {
    background-image: url(${MinusIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  & li:nth-of-type(2)::after {
    background-image: url(${PlusIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 896px) {
    flex-direction: column;
    padding: 10px;
    & li {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 5px;
      & strong {
        margin: 0;
      }
    }
    & li:nth-of-type(3) {
      border-bottom: 1px solid #767676;
      margin-bottom: 5px;
      padding-bottom: 5px;
    }
  }
`;

export const EmptyKeepList = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  text-align: center;
  padding-top: 200px;
  & h5 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 17px;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const AllSection = styled.section`
  display: flex;
  padding-left: 10px;
  & div {
    @media (min-width: 897px) {
      display: none;
    }
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
  }
`;
