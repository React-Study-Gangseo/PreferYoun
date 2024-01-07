import styled from "@emotion/styled";

export const JoinSection = styled.section`
  background: white;
  padding: 1.875rem 2.1875rem 2.25rem 2.1875rem;
  width: 100%;
  height: auto;
  border-radius: 0 0 0.625rem 0.625rem;
  border: 1px solid #767676;
  border-top: none;
  margin-bottom: 1.5rem;
`;
export const LogoImg = styled.img`
  display: block;
  margin: 1.25rem auto 2.5rem auto;
`;
export const ButtonGroup = styled.div`
  max-width: 34.5rem;
  margin: 0 auto;
  padding: 0;
  display: flex;
  border-radius: 10px 10px 0 0;
  border: 1px solid #767676;
  border-bottom: none;
`;
const Button = styled.button`
  display: block;
  text-decoration: none;
  padding: 15px;
  font-size: 20px;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;
export const BuyerBtn = styled(Button)`
  border-radius: 10px 0 0 0;
  border-right: 1px solid #767676;
  width: 49.9%;
  margin-left: auto;
`;
export const SellerBtn = styled(Button)`
  border-radius: 0 10px 0 0;
  width: 49.9%;
  margin-right: auto;
`;

export const Form = styled.form`
  max-width: 34.5rem;
  margin: 0 auto;
`;

export const InputWrap = styled.div`
  margin-bottom: 1.4rem;
`;
export const EmailWrap = styled(InputWrap)`
  position: relative;
  display: flex;
  gap: 0.75rem;
  & button {
    margin-top: auto;
    padding: 10px;
  }
`;
export const CheckPw = styled(InputWrap)`
  margin-bottom: 1.25rem;
`;
export const NameWrap = styled(InputWrap)``;
export const PhoneWrap = styled(InputWrap)`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  flex: 1;
  margin: 0.75rem 0 0.75rem 0;

  & > select,
  & > input {
    flex: 1 1 33%;
    height: 3.375rem;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
  }
  & > select {
    font-size: 1.125rem;
    height: 3.375rem;
    /* flex-grow: 1; */
  }
  & > select > option {
    text-align: center;
  }
`;
export const CRNumber = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 0.75rem;
  & button {
    margin-bottom: auto;
  }
`;
export const StyledError = styled.small`
  font-size: 12px;
  color: red;
  position: absolute;
  bottom: -18px;
  left: 5px;
`;
export const CheckTerms = styled.a`
  font-weight: bold;
  text-decoration: underline;
`;
export const CheckJoin = styled.div`
  width: 30rem;
  margin: 0 auto 0.625rem;
  display: flex;
`;
export const CheckBox = styled.input`
  margin-right: 0.3rem;
`;
export const Terms = styled.p`
  display: block;
  float: right;
  line-height: normal;
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 80px;
`;
