import styled from "@emotion/styled";

export const JoinSection = styled.section`
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
  width: 100%;
  padding: 1.25rem 2.1875rem 2.25rem 2.1875rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.375rem;
  border: 1px solid #c4c4c4;
  margin-top: 0.75rem;
  border-radius: 0.3125rem;
`;

export const JoinBtn = styled(Button)`
  width: 100%;
  margin: 2.25rem auto 0;
  background-color: #21bf48;
  color: white;
  border-radius: 10px;
`;
export const VaildBtn = styled(Button)`
  width: 7.625rem;
  height: 3.6rem;
  font-size: 1rem;
  border-radius: 5px;
  background-color: #21bf48;
  color: white;
  border-radius: 10px;
  margin-top: auto;
`;
export const InputWrap = styled.div`
  margin-bottom: 0.75rem;
`;
export const EmailWrap = styled(InputWrap)`
  display: flex;
  gap: 0.75rem;
  & button {
    margin-top: auto;
    padding: 10px;
  }
  /* margin-top: 0.75rem; */
`;
export const CheckPw = styled(InputWrap)`
  margin-bottom: 3.125rem;
`;
export const NameWrap = styled(InputWrap)`
  margin-bottom: 1rem;
`;
export const PhoneWrap = styled(InputWrap)`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  flex: 1;
  margin: 0.75rem 0 3.125rem 0;

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
  margin-bottom: 1rem;
  & button {
    margin-top: auto;
  }
`;
