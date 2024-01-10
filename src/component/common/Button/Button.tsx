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
  margin?: string;
}

myButton.defaultProps = {
  variant: "contained",
  type: "button",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, SxProps> = {
  m: { width: 480, height: 60 },
  l: { width: 220, height: 68 },
  ms: { width: 154, height: 60},
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
  margin,
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
        margin: margin,
        ...(disabled ? { backgroundColor: "#C4C4C4" } : {}),
      }}
    >
      {children}
    </Button>
  );
}
