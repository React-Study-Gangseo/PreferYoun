import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
const ModalDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  /* z-index: 999; */
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 390px;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalWrapArticle = styled.article`
  border-radius: 10px 10px 0 0;
  padding: 16px 26px 10px;
  background-color: white;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  animation: ${slideUp} 0.5s ease;
  box-shadow: inset 0 0 10px 0 red;
`;

const ModalLineSpan = styled.span`
  display: block;
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background-color: #dbdbdb;
  margin: 0 auto 16px;
`;
const CountWrap = styled.div`
  display: flex;
  width: 9.375rem;
  height: 3.125rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin: 1.875rem 0;
  & > div,
  & > button {
    flex: 1 1 33%;
    text-align: center;
    line-height: 3.125rem;
  }
`;
const TotalPriceWrap = styled.div`
  width: 100%;
  border-top: 1px solid #c4c4c4;
  padding-top: 2rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.375rem;
  white-space: nowrap;

  & > p:first-of-type {
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto 0 0;
  }

  & > span::after {
    content: "";
    border-left: 1px solid #c4c4c4;
    height: 100%;
    margin: 0 11px 0 12px;
  }

  & > span > strong,
  & > p:last-child {
    color: #21bf48;
    font-size: 1.125rem;
  }

  & > p > strong {
    font-size: 36px;
    font-weight: 700;
  }
`;
const IncreaseButton = styled.button`
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #c4c4c4;
`;

const DecreaseButton = styled.button`
  border-radius: 5px 0 0 5px;
  border-right: 1px solid #c4c4c4;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 14px;
`;
export {
  ModalDiv,
  ModalWrapArticle,
  ModalLineSpan,
  CountWrap,
  TotalPriceWrap,
  IncreaseButton,
  DecreaseButton,
  BtnGroup,
};
