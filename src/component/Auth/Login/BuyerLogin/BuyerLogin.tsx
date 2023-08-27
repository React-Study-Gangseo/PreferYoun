import React from "react";
import { LoginSection, JoinBtn, Form } from "../Login.Style";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Login } from "API/AuthAPI";
import { InputWrap } from "component/Auth/Join/Join.Style";

export interface LoginData {
  id: string;
  password: string;
  user_type: string;
}
const BuyerLogin: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginData>({ mode: "onChange" });

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await Login(data);
      console.log(response);
      if (response && response.status === 201) {
        console.log("로그인성공", response);
      }
    } catch (error) {
      console.log("로그인실패", error);
    }
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
                  type="password"
                  fullWidth
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
