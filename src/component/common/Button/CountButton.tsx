import React, { ReactNode, FC } from "react";
import styled from "@emotion/styled";
type CountProps = {
  handleMinusItemCount: () => void;
  handlePlusItemCount: () => void;
  children?: ReactNode;
};

const CountButton: FC<CountProps> = ({
  children,
  handleMinusItemCount,
  handlePlusItemCount,
}) => {
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  return (
    <>
      <DecreaseButton
        onClick={handleMinusItemCount}
        disabled={userType === "BUYER" ? false : true}
      >
        -
      </DecreaseButton>
      <div>{children}</div>
      <IncreaseButton
        onClick={handlePlusItemCount}
        disabled={userType === "BUYER" ? false : true}
      >
        +
      </IncreaseButton>
    </>
  );
};
export default CountButton;

export const IncreaseButton = styled.button`
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #c4c4c4;
`;

export const DecreaseButton = styled.button`
  border-radius: 5px 0 0 5px;
  border-right: 1px solid #c4c4c4;
`;
