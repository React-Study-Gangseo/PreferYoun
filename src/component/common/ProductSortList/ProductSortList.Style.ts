import styled from "@emotion/styled";
import { FormControl } from "@mui/material";

export const ListWrapper = styled.section`
  margin-bottom: 1.25rem;
  @media (max-width: 896px) {
    & div {
      width: 120px;
      margin-left: auto;
    }
    margin-top: -20px;
    margin-bottom: 1.5625rem;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;

  & li:not(:last-of-type)::after {
    content: "";
    border-right: 1px solid #767676;
    margin-left: 8px;
  }
  @media (max-width: 896px) {
    display: none;
  }
`;

export const Button = styled.button<{ selected: boolean }>`
  font-size: 1.2rem;
  color: ${({ selected }) => (selected ? "black" : "#767676")};
`;

export const FormControlStyle = styled(FormControl)`
  display: none;

  @media (max-width: 896px) {
    display: block;
  }
`;
