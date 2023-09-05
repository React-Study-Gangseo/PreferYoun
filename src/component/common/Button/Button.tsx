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

export const ButtonStyle = styled.button<ButtonProps>`
  display: block;
  border-radius: 0.3125rem;
  width: ${(props) =>
    props.width === "s"
      ? "5rem"
      : props.width === "ms"
      ? "10.375rem"
      : props.width === "m"
      ? "30rem"
      : props.width === "tab"
      ? "20rem"
      : props.width === "tabMenu"
      ? "15.625rem"
      : "13.75rem"};
  padding: ${(props) =>
    props.width === "s"
      ? "0px 25px"
      : props.width === "ms"
      ? "10px 20px"
      : props.width === "m"
      ? "19px 223px"
      : props.width === "tab"
      ? "16px 142px"
      : props.width === "tabMenu"
      ? "15px 15px 15px 20px"
      : "19px 50px"};
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
  color: ${(props) => (props.color === "black" ? "#000" : "#ffffff")};
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
  /* text-align: center; */
  line-height: 2.1875rem;
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

// import React from "react";
// import { Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import Plus from "../../../assets/images/icon-plus.svg";

// interface ButtonProps {
//   width?: "s" | "ms" | "m" | "l" | "tab" | "tabMenu";
//   bgColor?: "active" | "inactive" | "dark" | "tabActive";
//   border?: "active" | "none";
//   color?: "black" | "default";
//   type?: "button" | "submit";
//   children?: React.ReactNode;
//   disabled?: boolean;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }
// export const useStyles = makeStyles({
//   customButton: (props: any) => ({
//     display: "block",
//     borderRadius: "0.3125rem",
//     fontSize: "1rem",
//     height: "3.375rem",
//     backgroundColor:
//       props.bgColor === "active"
//         ? "#21BF48"
//         : props.bgColor === "inactive"
//         ? "#C4C4C4"
//         : props.bgColor === "dark"
//         ? "#767676"
//         : props.bgColor === "tabActive"
//         ? "#ffffff"
//         : "#fff", // 버튼 배경색 설정
//     color: props.color === "black" ? "#000" : "#ffffff",
//     width:
//       props.width === "s"
//         ? "5rem"
//         : props.width === "ms"
//         ? "7.625rem"
//         : props.width === "m"
//         ? "30rem"
//         : props.width === "tab"
//         ? "20rem"
//         : props.width === "tabMenu"
//         ? "15.625rem"
//         : "13.75rem",
//     padding:
//       props.width === "s"
//         ? "10px 25px"
//         : props.width === "ms"
//         ? "10px 30px"
//         : props.width === "m"
//         ? "19px 223px"
//         : props.width === "tab"
//         ? "16px 142px"
//         : props.width === "tabMenu"
//         ? "15px 15px 15px 20px"
//         : "19px 87px",
//     border: props.border === "active" ? `1px solid #DBDBDB` : "none",
//     borderBottom:
//       props.width === "tab" && props.bgColor === "tabActive"
//         ? "6px solid #21bf48"
//         : props.width === "tab"
//         ? "6px solid #E0E0E0"
//         : "none",
//     "&:hover": {
//       backgroundColor:
//         props.width === "tabMenu"
//           ? "#EFFFF3"
//           : props.bgColor === "active"
//           ? "#21BF48"
//           : props.bgColor === "inactive"
//           ? "#C4C4C4"
//           : props.bgColor === "dark"
//           ? "#767676"
//           : "#ffffff",
//       border:
//         (props.width === "s" || props.width === "ms") &&
//         props.bgColor !== "active" &&
//         props.bgColor !== "inactive" &&
//         props.bgColor !== "dark"
//           ? "1px solid #767676"
//           : "inherit",
//       borderBottom: props.width === "tab" ? "6px solid #E0E0E0" : "inherit",
//     },
//   }),
// });

// const BasicButton = ({
//   width,
//   bgColor,
//   border,
//   color,
//   type,
//   children,
//   disabled,
//   onClick,
// }: ButtonProps) => {
//   const classes = useStyles({
//     width,
//     bgColor,
//     color,
//     border,
//     type,
//     disabled,
//     onClick,
//   });

//   return (
//     <Button
//       className={classes.customButton}
//       variant="contained"
//       // startIcon={<img src={Plus} alt="더하기 아이콘" />}
//     >
//       {children}
//     </Button>
//   );
// };

// export default BasicButton;
