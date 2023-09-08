import styled from "@emotion/styled";
import Search from "../../assets/images/search.svg";
import { Link } from "react-router-dom";
export const HeaderSection = styled.header`
  width: 100vw;
  height: 5.625rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 5px 0px #0000001a;
  & section {
    width: 80rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  width: 7.75rem;
  height: 2.375rem;
  margin-right: 1.875rem;
`;

export const HeaderForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormDiv = styled.div`
  max-width: 25rem;
  width: 100%;
  min-height: 100%;
  display: grid;
  padding: 0.625rem;
  place-items: center;
`;

export const HeaderInput = styled.input`
  position: relative;
  height: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  background-repeat: no-repeat;
  font-size: 1.125rem;
  color: transparent;
  border: 2px solid #21bf48;
  transition: width 300ms;
  overflow: hidden;
  background: url(${Search}) no-repeat transparent;
  background-size: 2.5rem;
  background-position: 45% 50%;
  width: 2.5rem;
  padding: 0.625rem 0.625rem 0.625rem 3.75rem;
  &:hover {
    cursor: pointer;
    border: 2px solid #21bf48;
    background: url(${Search}) no-repeat transparent;
    background-size: 2.5rem;
    background-position: 45% 50%;
  }
  &:focus,
  :not(:placeholder-shown) {
    max-width: 24.375rem;
    width: 100%;
    cursor: text;
    color: #000000;
    margin-left: 1.875rem;
    padding-left: 3.75rem;
    outline: none;
    border: 2px solid #21bf48;
    background-color: transparent;
    background: url(${Search}) no-repeat transparent;
    background-size: 2.5rem;
    background-position: 0.625rem 50%;
    transition: width 500ms;
  }
`;
export const LogoImage = styled.img`
  width: 100%;
`;
export const HeaderNav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 26px;
`;
export const CartBtn = styled.button`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  & img {
    display: block;
    margin: 0 auto;
  }
`;
export const UserBtn = styled.button`
  display: flex;
  flex-direction: column;
  & img {
    display: block;
    margin: 0 auto;
  }
`;
