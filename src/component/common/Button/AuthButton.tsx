import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

interface UserTypeBtnProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleUserType?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userType?: "BUYER" | "SELLER";
  style?: React.CSSProperties;
  idList?: string[];
  id?: string;
}

function UserTypeBtn({
  onClick,
  children,
  userType,
  style,
  id,
}: UserTypeBtnProps) {
  return (
    <TypeBtn
      id={id}
      onClick={onClick}
      style={{
        backgroundColor: userType === id ? "#fff" : "#F2F2F2",
        borderBottom: userType === id ? "none" : "1px solid #767676",
        color: "black",
        ...style,
      }}
    >
      {children}
    </TypeBtn>
  );
}

export default function AuthButton({
  userType,
  handleUserType,
}: UserTypeBtnProps) {
  return (
    <ButtonGroup>
      <UserTypeBtn id="BUYER" onClick={handleUserType} userType={userType}>
        구매자로그인
      </UserTypeBtn>
      <UserTypeBtn id="SELLER" onClick={handleUserType} userType={userType}>
        판매자로그인
      </UserTypeBtn>
    </ButtonGroup>
  );
}

export const ButtonGroup = styled.div`
  max-width: 34.5rem;
  margin: 0 auto;
  padding: 0;
  display: flex;
  border-radius: 10px 10px 0 0;
  border-bottom: none;
`;

export const TypeBtn = styled(Button)`
  ${({ id }) =>
    id === "BUYER" &&
    `
    border-radius: 10px 10px 0 0;
  `}
  ${({ id }) =>
    id === "SELLER" &&
    `
    border-radius: 10px 10px 0 0;
  `}
  border: 1px solid #767676;
  width: 49.9%;
  margin-left: auto;
  padding: 15px;
  font-size: 20px;
`;
