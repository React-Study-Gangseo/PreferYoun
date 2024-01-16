import React, { ReactNode } from "react";
import { Button, SxProps } from "@mui/material";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "outlined" | "contained";
  size?: "ms";
  color?: "primary";
  type?: "button";
  padding?: string;
  fontSize?: string;
  margin?: string;
  value?: string;
  className?: string;
}

ShippingButton.defaultProps = {
  variant: "outlined",
  type: "button",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, SxProps> = {
  ms: { width: 154, height: 60 },
};
export default function ShippingButton({
  children,
  onClick,
  variant,
  size = "ms",
  color,
  type,
  padding,
  fontSize,
  margin,
  value,
  className,
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
      }}
      value={value}
      className={className}
    >
      {children}
    </Button>
  );
}
