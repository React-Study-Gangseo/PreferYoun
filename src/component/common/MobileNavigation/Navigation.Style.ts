import styled from "@emotion/styled";

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
  width: 100%;
  & li {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    & img {
      width: 28px;
      height: 28px;
    }
    & span {
      font-size: 14px;
      margin-top: 3px;
    }
  }
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

const Center = styled.div`
  background-color: #26b744;
  width: 50px;
  min-height: 48px;
  margin: 0 auto;
  border-radius: 10px;
  & a {
    color: white;
  }
  & span {
    color: #fff;
    margin-top: 3px;
  }
`;

const BuyBtnLi = styled.li`
  flex-grow: 0.5;
  margin-right: 15px;
`;
const CartBuy = styled.li`
  & div {
    width: 90%;
    margin: 0 auto;
  }
  flex: 2;
`;
const PriceLi = styled.li`
  flex: 1;
  & div {
    display: flex;
    padding-left: 5px;
    justify-content: end;
    align-items: center;
    gap: 3px;
  }
  & p {
    line-height: normal;
    font-size: 13px;
    white-space: break-spaces;
    word-break: keep-all;
  }
  & button {
    width: 22px;
    height: 22px;
  }
  & button img {
    width: 22px;
    height: 22px;
  }
`;

export {
  NavWrapper,
  NavList,
  ScrollButton,
  TopIcon,
  ButtonContainer,
  CenterImg,
  Center,
  BuyBtnLi,
  CartBuy,
  PriceLi,
};
