import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const ModalTitle = styled.h2`
  font-size: 22px;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const CalcPrice = styled.ul`
  background: #fff;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-height: 9.375rem;
  min-height: 100px;
  align-items: center;
  position: relative;
  & li {
    text-align: center;
    flex: 1 1 25%;
    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
  & li strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.75rem;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  & li strong > span {
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 896px) {
    flex-direction: column;
    padding: 10px;
    & li {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 5px;
      & strong {
        margin: 0;
      }
    }
    & li:nth-of-type(3) {
      border-bottom: 1px solid #767676;
      margin-bottom: 5px;
      padding-bottom: 5px;
    }
  }
`;
export const DeleteBtn = styled(IconButton)`
  position: absolute;
  top: 3px;
  right: 3px;
  & img {
    width: 20px;
    aspect-ratio: 1/1;
  }
`;
