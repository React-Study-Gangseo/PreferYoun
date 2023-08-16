import React, { ReactNode, FC } from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  width?: "s" | "ms" | "m" | "l" | "tab" | "tabMenu";
  bgColor?: "active" | "inactive" | "dark" | "tabActive";
  border?: "active" | "none";
  color?: "black" | "default";
  type?: "button" | "submit";
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonStyle = styled.button<ButtonProps>`
  display: block;
  border-radius: 0.3125rem;
  width: ${(props) =>
    props.width === "s"
      ? "5rem"
      : props.width === "ms"
      ? "7.625rem"
      : props.width === "m"
      ? "30rem"
      : props.width === "tab"
      ? "20rem"
      : props.width === "tabMenu"
      ? "15.625rem"
      : "13.75rem"};
  padding: ${(props) =>
    props.width === "s"
      ? "10px 25px"
      : props.width === "ms"
      ? "10px 30px"
      : props.width === "m"
      ? "19px 223px"
      : props.width === "tab"
      ? "16px 142px"
      : props.width === "tabMenu"
      ? "15px 15px 15px 20px"
      : "19px 87px"};
  background-color: ${(props) =>
    props.bgColor === "active"
      ? "#21BF48"
      : props.bgColor === "inactive"
      ? "#C4C4C4"
      : props.bgColor === "dark"
      ? "#767676"
      : props.bgColor === "tabActive"
      ? "#ffffff"
      : "#fff"};
  border: ${(props) =>
    props.border === "active" ? "1px solid #DBDBDB" : null};
  color: ${(props) => (props.color === "black" ? "#767676" : "#ffffff")};
  border-bottom: ${(props) =>
    props.width === "tab" && props.bgColor === "tabActive"
      ? "6px solid #21bf48"
      : props.width === "tab"
      ? "6px solid #E0E0E0"
      : "none"};
  &:hover {
    background-color: ${(props) =>
      props.width === "tabMenu"
        ? "#EFFFF3"
        : props.bgColor === "active"
        ? "#21BF48"
        : props.bgColor === "inactive"
        ? "#C4C4C4"
        : props.bgColor === "dark"
        ? "#767676"
        : "#ffffff"};
    border: ${(props) =>
      (props.width === "s" || props.width === "ms") &&
      props.bgColor !== "active" &&
      props.bgColor !== "inactive" &&
      props.bgColor !== "dark"
        ? "1px solid #767676"
        : "inherit"};
    border-bottom: ${(props) =>
      props.width === "tab" ? "6px solid #E0E0E0" : "inherit"};
  }
  font-size: 1rem;
  height: 3.375rem;
`;

const Button: FC<ButtonProps> = ({
  type,
  children,
  width,
  bgColor,
  color,
  border,
  disabled,
  onClick,
}) => {
  return (
    <ButtonStyle
      type={type || "button"}
      width={width}
      bgColor={bgColor}
      color={color}
      border={border}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
