import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "../Button/Button";
import styled from "@emotion/styled";

type InputWrapProps = {
  control: Control;
  name: string;
  defaultValue?: "";
  rules: Object;
  label: string;
  showPassword?: boolean;
  handleClickShowPassword?: () => void;
  handleMouseDownPassword?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  error: FieldError | undefined;
  isValid?: boolean;
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type StyledDivProps = {
  isValid: boolean;
};

const InputWrapper: React.FC<InputWrapProps> = ({
  control,
  name,
  defaultValue,
  rules,
  label,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  isValid = false,
  onButtonClick,
  error,
}) => {
  return (
    <StyledDiv isValid={isValid}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            type={
              name === "password" || name === "password2"
                ? showPassword
                  ? "text"
                  : "password"
                : "text"
            }
            fullWidth
            label={label}
            InputProps={
              name === "password" || name === "password2"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="비밀번호 확인 아이콘"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
            error={error !== undefined}
            helperText={error ? error.message : null}
          />
        )}
      />
      {isValid && (
        <Button
          size="ms"
          color="primary"
          variant="contained"
          onClick={onButtonClick}
        >
          인증
        </Button>
      )}
    </StyledDiv>
  );
};

export default InputWrapper;

const StyledDiv = styled.div<StyledDivProps>`
  ${({ isValid }) =>
    isValid &&
    `
    width: 100%;
    display: flex;
    gap: 12px;
    margin-bottom: 0.75rem;

    & button {
      margin-bottom: auto;
    }
  `}
  margin-bottom: 1.25rem;
`;
