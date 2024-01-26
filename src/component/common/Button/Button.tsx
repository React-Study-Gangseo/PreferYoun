import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "text" | "outlined" | "contained";
  size?: "l" | "m" | "ms" | "s" | "ss" | "ll" | "login";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  disabled?: boolean;
  type?: "submit" | "button";
  padding?: string;
  fontSize?: string;
  margin?: string;
  startIcon?: ReactNode;
}

myButton.defaultProps = {
  variant: "contained",
  type: "button",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, SxProps> = {
  m: { width: 480, height: 60 },
  l: { width: 220, height: 60 },
  ms: { width: 154, height: 60 },
  s: { width: 80, heigth: 40 },
  ss: { width: 154, heigth: 40 },
  ll: { width: 300, height: 50 },
  login: { width: "100%", height: 60 },
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
  margin,
  startIcon,
}: ButtonProps) {
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        ...sizeStyles[size],
        padding: padding,
        fontSize: fontSize,
        margin: margin,
        ...(disabled ? { backgroundColor: "#C4C4C4" } : {}),
      }}
    >
      {children}
    </Button>
  );
}
