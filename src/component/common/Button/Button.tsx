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
  m: { maxWidth: 480, height: 60, width: "100%" },
  l: { width: 220, height: 60 },
  ms: { maxWidth: 154, height: 60, width: "100%" },
  s: { width: 80, heigth: 40 },
  ss: { width: 154, heigth: 40 },
  ll: { minWidth: 300, height: 50, width: "100%" },
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
