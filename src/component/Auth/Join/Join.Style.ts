import styled from "@emotion/styled";

export const JoinSection = styled.section`
  background: white;
  padding: 1.875rem 2.1875rem 1.25rem 2.1875rem;
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
  @media (max-width: 897px) {
    width: 200px;
  }
`;

export const Form = styled.form`
  max-width: 34.5rem;
  margin: 0 auto;
`;

export const CheckTerms = styled.a`
  font-weight: bold;
  text-decoration: underline;
`;
export const CheckJoin = styled.div`
  max-width: 30rem;
  margin: 0 auto 0.625rem;
  display: flex;
  /* justify-content: space-around; */
  gap: 20px;
`;
export const CheckBox = styled.input`
  margin-right: 0.3rem;
`;
export const Terms = styled.p`
  display: block;
  float: right;
  line-height: normal;
  width: 90%;
  word-break: keep-all;
  white-space: break-spaces;
`;

interface MainProps {
  userType: "SELLER" | "BUYER";
}

export const Main = styled.main<MainProps>`
  width: 100%;
  margin-top: ${({ userType }) => (userType === "SELLER" ? "30px" : "80px")};
`;
