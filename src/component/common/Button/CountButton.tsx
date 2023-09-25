import React, { ReactNode, FC } from "react";
import styled from "@emotion/styled";
type CountProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
};

const CountButton: FC<CountProps> = ({ children, onClick, disabled }) => {
  return (
    <CountWrap>
      <DecreaseButton
      // onClick={handleMinusCount}
      // disabled={userType === "BUYER" ? false : true}
      >
        -
      </DecreaseButton>
      <div>{children}</div>
      <IncreaseButton
      //   onClick={handlePlusCount}
      //   disabled={userType === "BUYER" ? false : true}
      >
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
