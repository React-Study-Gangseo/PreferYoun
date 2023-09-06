import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  display: flex;
  background-color: #f2f2f2;
  width: 100vw;
  flex-direction: column;
  padding: 3.75rem 0;
  position: relative;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  margin-top: 50px;
`;
export const FooterTop = styled.section`
  width: 85vw;
  margin: 0 auto;
`;
export const InfoList = styled.ul`
  float: left;
  display: flex;
  gap: 1.125rem;
  line-height: 2rem;
`;
export const InfoItem = styled.li`
  &:not(:last-of-type)::after {
    content: "";
    border-right: 1px solid black;
    margin-left: 0.875rem;
  }
`;
export const Nav = styled.nav`
  float: right;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 0.875rem;
`;
export const Address = styled.address`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  width: 85vw;
  margin: 3.8125rem auto 0;
`;
