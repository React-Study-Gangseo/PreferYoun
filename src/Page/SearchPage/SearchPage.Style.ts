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
  right: 13px;
  top: 12px;
`;

export const MyIconButton = styled(IconButton)`
  width: 42px;
  height: 42px;
  padding: 10px;
  margin-top: 25px;
  & img {
    height: 36px;
    width: 36px;
  }
`;
export const SearchListWrapper = styled.ul`
  border: 1px solid #747474;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  max-height: 80vh;
  overflow-y: auto;
`;
export const SearchList = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
`;
