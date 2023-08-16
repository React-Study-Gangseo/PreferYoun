import styled from "@emotion/styled";

export const LoginSection = styled.section`
  background: white;
  max-width: 34.375rem;
  height: auto;
  margin: 2.5rem auto;
  border: 1px solid #c4c4c4;
  border-radius: 0.625rem;
`;
export const LogoImg = styled.img`
  display: block;
  margin: 1.25rem auto 4.375rem auto;
`;
export const BtnGroup = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  border-radius: 10px 10px 0 0;
`;
const Button = styled.button`
  display: block;
  text-decoration: none;
  padding: 0.9375rem;
  font-size: 1.25rem;
  width: 50%;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
`;

export const BuyerBtn = styled(Button)`
  border-radius: 10px 0 0 0;
  border-right: 1px solid #c4c4c4;
  width: 50%;
`;

export const SellerBtn = styled(Button)`
  border-radius: 0 10px 0 0;
  width: 50%;
`;

export const Form = styled.form`
  padding: 14px 35px 36px 35px;
`;
export const Input = styled.input`
  width: 100%;
  height: 3.75rem;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 6px;
`;
export const JoinBtn = styled(Button)`
  width: 100%;
  margin: 2.25rem auto 0;
  background-color: #21bf48;
  color: white;
  border-radius: 10px;
`;
export const LinkGroup = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1.25rem;
`;
export const SignUp = styled.a`
  &::after {
    content: "";
    border-right: 1px solid #c4c4c4;
    margin: 0 0.875rem;
  }
`;
export const FindPw = styled.a``;
