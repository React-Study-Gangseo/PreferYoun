import { IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const Main = styled.main`
  width: 100%;
  & div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
export const Form = styled.form`
  width: 80%;
  margin: 30px auto;
  position: relative;
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 0px;
`;

export const MyIconButton = styled(IconButton)`
  width: 42px;
  height: 42px;
  padding: 10px;
  & img {
    height: 36px;
    width: 36px;
  }
`;
