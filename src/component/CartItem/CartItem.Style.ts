import styled from "@emotion/styled";

export const KeepProduct = styled.article`
  width: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 0.625rem;
  display: flex;
  padding: 1.25rem 6.25rem 1.25rem 1.875rem;
  position: relative;
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
  width: 9.375rem;
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

export const OrderBtnS = styled(Button)`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  background: #21bf48;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 12px;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;
