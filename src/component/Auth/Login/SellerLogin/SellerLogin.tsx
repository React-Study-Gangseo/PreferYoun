import React from "react";
import {
  LoginSection,
  BtnGroup,
  BuyerBtn,
  SellerBtn,
  JoinBtn,
  Form,
  Input,
  LogoImg,
  LinkGroup,
  SignUp,
  FindPw,
} from "./SellerLogin.Style";
import Logo from "../../../../assets/images/Logo-hodu.png";
const SellerLogin: React.FC = () => {
  return (
    <>
      <LogoImg src={Logo} alt="Hodu 로고" />
      <LoginSection>
        <BtnGroup>
          <BuyerBtn>구매자로그인</BuyerBtn>
          <SellerBtn>판매자로그인</SellerBtn>
        </BtnGroup>
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

export default SellerLogin;
