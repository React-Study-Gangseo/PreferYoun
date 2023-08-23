import React from "react";
import {
  LoginSection,
  JoinBtn,
  Form,
  Input,
  LinkGroup,
  SignUp,
  FindPw,
} from "../SellerLogin.Style";
import { useForm } from "react-hook-form";
import { Login } from "API/AuthAPI";
export interface LoginData {
  id: string;
  password: string;
  user_type: string;
}
const SellerLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
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
          <div>
            <label className="a11y-hidden">이메일 입력</label>
            <Input
              type="id"
              id="id"
              autoComplete="off"
              {...register("id", {
                required: "아이디는 필수 입력입니다.",
              })}
            />
          </div>
          <div>
            <label className="a11y-hidden">비밀번호 입력</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              id="password"
              autoComplete="off"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
              })}
            />
          </div>
          <JoinBtn type="submit">로그인</JoinBtn>
        </Form>
      </LoginSection>
      <LinkGroup>
        <SignUp>회원가입</SignUp>
        <FindPw>비밀번호찾기</FindPw>
      </LinkGroup>
    </>
  );
};

export default SellerLogin;
