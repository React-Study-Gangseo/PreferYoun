import React from "react";
import {
  HeaderSection,
  HeaderNav,
  Logo,
  LogoImage,
  FormDiv,
  HeaderForm,
  HeaderInput,
  CartBtn,
  UserBtn,
} from "./Header.Style";
import HoduLogo from "../../assets/images/Logo-hodu.png";
import Cart from "../../assets/images/icon-shopping-cart.svg";
import User from "../../assets/images/icon-user.svg";

interface HeaderProps {
  handleLogin: () => void;
}
const Header: React.FC<HeaderProps> = ({ handleLogin }) => {
  return (
    <>
      <HeaderSection>
        <Logo>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <FormDiv>
            <label className="a11y-hidden">검색창</label>
            <HeaderInput type="text" placeholder=" " />
          </FormDiv>
        </HeaderForm>
        <HeaderNav>
          <CartBtn>
            <img src={Cart} alt="쇼핑카트 아이콘" />
            장바구니
          </CartBtn>
          <UserBtn onClick={handleLogin}>
            <img src={User} alt="로그인용 유저 아이콘" />
            로그인
          </UserBtn>
        </HeaderNav>
      </HeaderSection>
    </>
  );
};
export default Header;
