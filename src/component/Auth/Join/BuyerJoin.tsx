import React from "react";
import {
  JoinSection,
  Input,
  InputWrap,
  VaildBtn,
  PhoneWrap,
  Form,
  EmailWrap,
  CheckPw,
  NameWrap,
} from "./Join.Style";
import Button from "../../common/Button/Button";

const Join: React.FC = () => {
  return (
    <>
      <JoinSection>
        <Form>
          <label>아이디</label>
          <EmailWrap>
            <Input type="email" />
            {/* <Button
              width="ms"
              bgColor="active"
              // onClick={(event) => {
              //   IdVaild(event);
              // }}
            >
              중복체크
            </Button> */}
          </EmailWrap>
          <InputWrap>
            <label>비밀번호</label>
            <Input type="password" />
          </InputWrap>
          <CheckPw>
            <label>비밀번호 재확인</label>
            <Input type="password" />
          </CheckPw>
          <NameWrap>
            <label>이름</label>
            <Input type="text" />
          </NameWrap>
          <label>휴대폰번호</label>
          <PhoneWrap>
            <select>
              <option>010</option>
              <option>011</option>
              <option>017</option>
            </select>
            <input type="text" />
            <input type="text" />
          </PhoneWrap>
        </Form>
      </JoinSection>
    </>
  );
};

export default Join;
