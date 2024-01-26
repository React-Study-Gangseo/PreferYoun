import styled from "@emotion/styled";
import Button from "../../common/Button/Button";

export const LoginSection = styled.section`
  background: white;
  max-width: 34.5rem;
  height: auto;
  margin: 0 auto 2.125rem;
  border: 1px solid #767676;
  border-top: none;
  border-radius: 0 0 0.625rem 0.625rem;
`;
export const LogoImg = styled.img`
  display: block;
  margin: 1.25rem auto 4.375rem auto;
  @media (max-width: 897px) {
    width: 200px;
  }
`;

export const Form = styled.form`
  padding: 34px 35px 36px 35px;
`;

export const LinkGroup = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  & button {
    font-size: 1rem;
    font-weight: 400;
  }
`;
export const SignUp = styled.button`
  &::after {
    content: "";
    border-right: 1px solid #c4c4c4;
    margin: 0 0.875rem;
  }
`;
export const FindPw = styled.button``;

export const Main = styled.main`
  width: 100%;
  margin-top: 80px;
`;

// export const LoginButton = styled(Button)`
//   @media (max-width: 897px) {
//     width: 100%;
//   }
// `;
