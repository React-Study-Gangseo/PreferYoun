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

const BuyerLogin: React.FC = () => {
  return (
    <>
      <LoginSection>
        <Form>
          <div>
            <label className="a11y-hidden">이메일 입력</label>
            <Input type="email" placeholder="아이디를 입력하세요" />
          </div>
          <div>
            <label className="a11y-hidden">비밀번호 입력</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
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

export default BuyerLogin;
