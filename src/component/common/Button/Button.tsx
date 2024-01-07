// import React, { ReactNode, FC } from "react";
// import styled from "@emotion/styled";
// // import { Button } from "@mui/material";

// interface ButtonProps {
//   width?: "s" | "ms" | "m" | "l" | "tab" | "tabMenu";
//   bgColor?: "active" | "inactive" | "dark" | "tabActive";
//   border?: "active" | "none";
//   color?: "black" | "default";
//   type?: "button" | "submit";
//   children?: ReactNode;
//   disabled?: boolean;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// export const ButtonStyle = styled.button<ButtonProps>`
//   display: block;
//   border-radius: ${(props) => (props.width === "tab" ? "0rem" : "0.3125rem")};
//   width: ${(props) =>
//     props.width === "s"
//       ? "5rem"
//       : props.width === "ms"
//       ? "10.375rem"
//       : props.width === "m"
//       ? "30rem"
//       : props.width === "tab"
//       ? "20rem"
//       : props.width === "tabMenu"
//       ? "15.625rem"
//       : "13.75rem"};
//   padding: ${(props) =>
//     props.width === "s"
//       ? "0px 25px"
//       : props.width === "ms"
//       ? "10px 20px"
//       : props.width === "m"
//       ? "19px 223px"
//       : props.width === "tab"
//       ? "16px 20px"
//       : props.width === "tabMenu"
//       ? "15px 15px 15px 20px"
//       : "19px 50px"};
//   background-color: ${(props) =>
//     props.bgColor === "active"
//       ? "#26b744"
//       : props.bgColor === "inactive"
//       ? "#C4C4C4"
//       : props.bgColor === "dark"
//       ? "#767676"
//       : props.bgColor === "tabActive"
//       ? "#ffffff"
//       : "#fff"};
//   border: ${(props) =>
//     props.border === "active" ? "1px solid #DBDBDB" : null};
//   color: ${(props) => (props.color === "black" ? "#000" : "#ffffff")};
//   border-bottom: ${(props) =>
//     props.width === "tab" && props.bgColor === "tabActive"
//       ? "6px solid #21bf48"
//       : props.width === "tab"
//       ? "6px solid #E0E0E0"
//       : "none"};
//   &:hover {
//     background-color: ${(props) =>
//       props.width === "tabMenu"
//         ? "#EFFFF3"
//         : props.bgColor === "active"
//         ? "#21BF48"
//         : props.bgColor === "inactive"
//         ? "#C4C4C4"
//         : props.bgColor === "dark"
//         ? "#767676"
//         : "#ffffff"};
//     border: ${(props) =>
//       (props.width === "s" || props.width === "ms") &&
//       props.bgColor !== "active" &&
//       props.bgColor !== "inactive" &&
//       props.bgColor !== "dark"
//         ? "1px solid #767676"
//         : "inherit"};
//     border-bottom: ${(props) =>
//       props.width === "tab" ? "6px solid #21BF48" : "inherit"};
//   }
//   font-size: 1rem;
//   height: 3.375rem;
//   /* text-align: center; */
//   line-height: 2.1875rem;
// `;

// const Button: FC<ButtonProps> = ({
//   type,
//   children,
//   width,
//   bgColor,
//   color,
//   border,
//   disabled,
//   onClick,
// }) => {
//   return (
//     <ButtonStyle
//       type={type || "button"}
//       width={width}
//       bgColor={bgColor}
//       color={color}
//       border={border}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </ButtonStyle>
//   );
// };

// export default Button;

import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "text" | "outlined" | "contained";
  size?: "l" | "m" | "ms" | "s";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  disabled?: boolean;
  type?: "submit" | "button";
  padding?: string;
  fontSize?: string;
}

myButton.defaultProps = {
  variant: "contained",
  type: "button",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, SxProps> = {
  m: { width: 480, height: 60, padding: "19px 170px" },
  l: { width: 220, height: 68 },
  ms: { width: 154, height: 40, padding: "30px 50px" },
  s: { width: 80, heigth: 40 },
};
export default function myButton({
  children,
  onClick,
  variant,
  size = "m",
  color,
  disabled,
  type,
  padding,
  fontSize,
}: ButtonProps) {
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      onClick={onClick}
      sx={{
        ...sizeStyles[size],
        padding: padding,
        fontSize: fontSize,
        ...(disabled ? { backgroundColor: "#C4C4C4" } : {}),
      }}
    >
      {children}
    </Button>
  );
}
