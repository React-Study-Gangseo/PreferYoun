import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../Button/Button";
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
const CenterImg = styled.img`
  margin-top: 9px;
  width: 2rem;
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
  top: -68px;
  right: 20px;
`;
const ScrollButton = styled.button`
  position: sticky;
  top: 88%;
  left: 85%;
  background-color: #21bf48;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  margin-right: 12px;
`;

const TopIcon = styled.img`
  width: 30px;
  height: 30px;
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
const Center = styled.div`
  background-color: #26b744;
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
  & a {
    color: white;
    line-height: 50px;
  }
`;
const BuyBtn = styled(ButtonStyle)`
  min-width: 300px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
`;
const BuyBtnLi = styled.li`
  flex-grow: 0.5;
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
  CenterImg,
  Center,
  BuyBtn,
  BuyBtnLi,
};
