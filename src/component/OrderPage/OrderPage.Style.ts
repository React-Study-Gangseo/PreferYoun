import styled from "@emotion/styled";
import { OutlinedInput, Radio, FormControlLabel } from "@mui/material";

export const OrderPageTitle = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 3.25rem 0;
`;
export const Wrapper = styled.main`
  width: 100%;
  height: auto;
  margin: 0 auto 22.375rem;
`;
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OrderList = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
  & thead {
    background: #f2f2f2;
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
  & td:nth-of-type(1) {
    display: flex;
    gap: 2.25rem;
    padding: 1.25rem 0 1.125rem 0.5rem;
    @media (max-width: 500px) {
      flex-direction: column;
      gap: 1rem;
    }
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
    object-fit: cover;
    /* @media (max-width: ) {
    } */
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
  & tfoot td:nth-of-type(3) {
    text-align: end;
  }
`;
export const Input = styled(OutlinedInput)``;
export const OrdererInfoForm = styled.form`
  margin-top: 6rem;
`;
export const ProductInfo = styled.div`
  margin: auto 0;
  text-align: left;
  & span {
    color: #767676;
    margin-bottom: 0.375rem;
    font-size: 14px;
    font-weight: 400;
  }
  & h3 {
    margin: 0.375rem 0 0.625rem 0;
  }
`;

export const TotalPrice = styled.strong`
  color: #eb5757;
  font-size: 24px;
  font-weight: 700;
  margin-left: 0.625rem;
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

export const HeadInfoTitle = styled(InfoTitle)`
  border-bottom: 2px solid #c4c4c4;
  padding-bottom: 1.125rem;
  margin-bottom: 1.125rem;
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid #c4c4c4;
  padding-bottom: 0.5rem;
  margin: 2.5rem 0 0 0;
`;

export const AddressInfo = styled.div`
  position: relative;
`;
export const FormControlLabelStyle = styled(FormControlLabel)`
  position: absolute;
  left: 170px;
  top: -11px;
`;
export const OrderInfo = styled.section`
  width: 100%;
  & input {
    width: 334px;
    height: 40px;
    border: 1px solid #c4c4c4;
    display: flex;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  & ul {
    margin: 0;
  }
  & ul li {
    border-bottom: 1px solid #c4c4c4;
    padding: 0.5rem 0;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
  & ul label {
    flex-shrink: 0;
    line-height: 40px;
    width: 10.625rem;
  }
`;
export const Phone = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  width: 100%;
  & input {
    max-width: 6.25rem;
  }
  & input:first-of-type {
    width: 5rem;
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  & input {
    width: 100%;
  }
  & div {
    /* width: 100%; */
    margin-right: auto;
    display: flex;
    gap: 12px;
    flex-direction: row-reverse;
    & input {
      width: 10.625rem;
      flex-grow: 1;
    }
  }
`;
export const Message = styled.div`
  flex-grow: 1;
  width: 100%;
  & input {
    width: 100%;
  }
`;

export const PayInfo = styled.section`
  width: 47.5rem;
  padding-bottom: 1.125rem;
  border-bottom: 2px solid #c4c4c4;
  margin-top: 4.375rem;
  float: left;
  @media (max-width: 896px) {
    display: none;
  }
`;
export const MobilePayInfo = styled.section`
  width: 100%;
  padding-bottom: 1.125rem;
  border-bottom: 2px solid #c4c4c4;
  margin-top: 4.375rem;
  @media (min-width: 897px) {
    display: none;
  }
`;

export const PayCheck = styled(Radio)``;
export const FinallyPay = styled.section`
  margin-top: 4.375rem;
  float: right;
`;
export const FinallyPayWrapper = styled.article`
  border: 3px solid #21bf48;
  max-width: 30rem;
  width: 100%;
  min-height: 25rem;
  margin: 1.125rem 0 200px;
  border-radius: 10px;
  background: #f2f2f2;

  & ul {
    margin: 0;
    padding: 34px 30px 25px 30px;
    border-radius: 10px 10px 0 0;
    background: white;
  }
  & li {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    height: auto;
    font-weight: 400;
    line-height: 20.03px;
    padding-left: 13px;
    margin-bottom: 0.9375rem;
    position: relative;
  }
  & li::before {
    content: "-";
    position: absolute;
    top: 0;
    left: -5px;
  }
  & li:nth-of-type(3) {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 19px;
  }
  & li:last-of-type {
    margin-top: 1.5rem;
  }
  & strong {
    font-size: 18px;
    font-weight: 700;
  }
  & li:last-of-type strong {
    margin-top: -5px;
    font-size: 24px;
    font-weight: 700;
    color: red;
  }
`;
export const LastCheck = styled.div`
  padding: 24px 30px;
  text-align: center;
  & div {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  & div label {
    font-size: 16px;
    font-weight: 400;
    margin-left: 0.625rem;
    line-height: 100%;
    align-self: center;
  }
`;
// export const PayBtn = styled(ButtonStyle)`
//   width: 13.75rem;
//   height: 4.25rem;
//   color: white;
//   font-size: 24px;
//   font-weight: 700;
//   margin: 1.875rem auto 0 auto;
// `;

export const RowLarge = styled.tr`
  @media (max-width: 500px) {
    display: none;
  }
`;
export const RowSmall = styled.tr`
  white-space: nowrap;
  @media (min-width: 501px) {
    display: none;
  }
`;
