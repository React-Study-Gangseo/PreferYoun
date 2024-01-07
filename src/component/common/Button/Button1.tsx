import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "text" | "outlined" | "contained";
  size?: "l" | "m" | "ms" | "s";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  disabled?: boolean;
}

Button1.defaultProps = {
  variant: "contained",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, SxProps> = {
  m: { width: 480, height: 60 },
  l: { width: 220, height: 68 },
  ms: { width: 168, height: 54 },
  s: { width: 80, heigth: 40 },
};
export default function Button1({
  children,
  onClick,
  variant,
  size = "m",
  color,
  disabled,
}: ButtonProps) {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      sx={{
        ...sizeStyles[size],
        ...(disabled ? { backgroundColor: "#C4C4C4" } : {}),
      }}
    >
      {children}
    </Button>
  );
}
