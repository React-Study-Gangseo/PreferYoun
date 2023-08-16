import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  display: flex;
  background-color: #f2f2f2;
  width: 100vw;
  flex-direction: column;
  padding: 3.75rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
export const FooterTop = styled.section`
  width: 80rem;
  margin: 0 auto;
`;
export const InfoList = styled.ul`
  float: left;
  display: flex;
  gap: 1.125rem;
  line-height: 2rem;
`;
export const InfoItem = styled.li`
  &:not(:last-child)::after {
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
  width: 80rem;
  margin: 3.8125rem auto 0;
`;
