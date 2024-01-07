import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export const FooterSection = styled.footer`
  display: flex;
  background-color: #f2f2f2;
  width: 100vw;
  flex-direction: column;
  padding: 3.75rem 0 6rem 0;
  position: relative;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  margin-top: 50px;
`;
export const FooterTop = styled.section`
  width: 85vw;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const InfoList = styled.ul`
  width: 100%;
  display: flex;
  gap: 1.125rem;
  line-height: 3rem;
  & li:not(:last-of-type)::after {
    content: "";
    border-right: 1px solid black;
    margin-left: 0.875rem;
  }
  @media (max-width: 896px) {
    width: 50%;
    white-space: nowrap;
    flex-wrap: wrap;
  }
`;
export const InfoItem = styled(Link)``;
export const Nav = styled.nav``;
export const NavList = styled.ul`
  display: flex;
  gap: 0.875rem;
  & img {
    width: 32px;
    height: 32px;
  }
`;
export const Address = styled.address`
  display: flex;
  max-width: 80rem;
  gap: 0.75rem;
  flex-direction: column;
  width: 85vw;
  margin: 3.8125rem auto 0;
`;

export const SocialBtn = styled(IconButton)`
  & img:hover {
    transform: scale(1.1);
  }
`;
