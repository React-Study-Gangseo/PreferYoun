import styled from "@emotion/styled";
import PlusIcon from "../../assets/images/icon-plus-line.svg";
import MinusIcon from "../../assets/images/icon-minus-line.svg";

export const Wrapper = styled.main`
  width: 100%;
  max-width: 80rem;
  height: auto;
  min-height: 100vh;
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
  /* @media (max-width: 896px) {
    display: none;
  } */
`;

export const CalcPrice = styled.ul`
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
  /* margin-bottom: -40px; */
  & div {
    @media (min-width: 897px) {
      display: none;
    }
  }
`;
