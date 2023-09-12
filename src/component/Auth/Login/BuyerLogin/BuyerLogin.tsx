import React from "react";
import { LoginSection, JoinBtn, Form } from "../Login.Style";
import { useForm, Controller } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputWrap } from "component/Auth/Join/Join.Style";
import { LoginData } from "../../../../types/type";

const BuyerLogin: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginData>({ mode: "onChange" });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <LoginSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <Controller
              control={control}
              name="id"
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[A-Za-z0-9]{1,20}$/,
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="아이디"
                  error={error !== undefined}
                />
              )}
            />
          </InputWrap>
          <InputWrap>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*\d).{8,}$/,
                  message: "비밀번호 형식이 올바르지 않습니다",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  InputProps={{
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
                  }}
                  label="비밀번호"
                  error={error !== undefined}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </InputWrap>
          <JoinBtn type="submit">로그인</JoinBtn>
        </Form>
      </LoginSection>
    </>
  );
};

export default BuyerLogin;
