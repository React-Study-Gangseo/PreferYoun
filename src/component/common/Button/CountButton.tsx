import React, { ReactNode, FC } from "react";
import styled from "@emotion/styled";
type CountProps = {
  handleMinusItemCount: () => void;
  handlePlusItemCount: () => void;
  children?: ReactNode;
};

const CountButton: FC<CountProps> = ({ children, handleMinusItemCount, handlePlusItemCount}) => {
  return (
    <CountWrap>
      <DecreaseButton onClick={handleMinusItemCount}>
        -
      </DecreaseButton>
      <div>{children}</div>
      <IncreaseButton onClick={handlePlusItemCount}>
        +
      </IncreaseButton>
    </CountWrap>
  );
};
export default CountButton;
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
