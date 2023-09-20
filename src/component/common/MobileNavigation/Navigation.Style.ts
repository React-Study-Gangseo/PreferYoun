import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 896px;
  min-width: 390px;
  z-index: 100;
  /* margin: 0 auto; */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
`;

const NavList = styled.ul`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MoreLi = styled.li`
  margin: 200px 0 50px;
`;
const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #767676;

  &.active {
    color: #286140;
  }
`;

const StyledNavText = styled.p`
  margin-top: 4px;
  font-size: 10px;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: -58px;
  right: 0;
`;
const ScrollButton = styled.button`
  position: sticky;
  top: 88%;
  left: 85%;
  background-color: #629678;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  margin-right: 12px;
`;

const TopIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const HeaderRightBtn = styled.button`
  border: 0;
  padding: 10px;
  padding-right: 0;
  background-color: transparent;
`;
const HeaderTitle = styled(Link)`
  font-size: 30px;
  font-style: italic;
  font-weight: 600;
  padding: 30px 0 0 5px;
`;

const LogoGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const HeaderSearchInp = styled.input`
  width: 300px;
  background-color: #f2f2f2;
  border: 0;
  border-radius: 32px;
  padding: 7px 16px;
  font-size: 14px;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;
export {
  NavWrapper,
  NavList,
  NavLink,
  StyledNavText,
  ScrollButton,
  TopIcon,
  ButtonContainer,
  HeaderRightBtn,
  HeaderTitle,
  LogoGroup,
  HeaderSearchInp,
  MoreLi,
};
