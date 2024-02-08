import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const MainSection = styled.main`
  width: 100%;
  max-width: 80rem;
  height: auto;
  min-height: 100%;
  padding-bottom: 11.25rem;
`;
export const DetailPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  gap: 3.125rem;
  margin-top: 5rem;
  @media (max-width: 896px) {
    margin: 1.25rem auto 0;
    gap: 3rem;
    flex-direction: column;
    flex-shrink: 1;
  }
`;
export const ImgBox = styled.div`
  width: 37.5rem;
  aspect-ratio: 1 / 1;
  flex-basis: 100%;
  @media (max-width: 896px) {
    width: 100%;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  @media (max-width: 896px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    margin: 0 auto;
  }
`;
export const ProductInfoSection = styled.section`
  width: 100%;
  flex-basis: 100%;
  width: 100%;
  position: relative;
  & > span {
    color: #767676;
    font-size: 1.125rem;
  }
  & > h3 {
    font-size: 2.25rem;
    margin: 1rem 0 1.25rem;
  }
  @media (max-width: 896px) {
    width: 100%;
  }
`;
export const ShareBtn = styled(IconButton)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 100%;
  @media (max-width: 896px) {
    display: none;
  }
`;
export const Price = styled.p`
  margin-bottom: 11rem;
  & > strong {
    font-size: 36px;
    font-weight: 700;
  }
  & + span {
    display: block;
    width: 100%;
    font-size: 1rem;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 1.25rem;
  }
  @media (max-width: 1421px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 896px) {
    margin-bottom: 1.25rem;
  }
`;

export const CountWrap = styled.div`
  display: flex;
  width: 9.375rem;
  height: 3.125rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin: 1.875rem 0;
  float: left;
  & > div,
  & > button {
    flex: 1 1 33%;
    text-align: center;
    line-height: 3.125rem;
  }
  @media (max-width: 896px) {
    display: none;
  }
`;

export const TotalPriceWrap = styled.div`
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
  @media (max-width: 896px) {
    display: none;
  }
`;

export const DesktopMoreInfo = styled.div`
  width: 100%;
  display: none;
  @media (min-width: 897px) {
    display: block;
    margin-top: 8.75rem;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;
export const MobileMoreInfo = styled.div`
  display: none;
  @media (max-width: 896px) {
    display: block;
    margin: 4.75rem 0 300px;
    font-size: 1.125rem;
    font-weight: 500;
    & > ul {
      display: flex;
      flex-direction: column;
      height: 60px;
    }
    & > ul > li {
      flex: 1 1 25%;
      text-align: center;
      line-height: 3.75rem;
    }
    & button {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 14px;
  @media (max-width: 896px) {
    display: none;
  }
`;

export const MoreInfoSecion = styled.section`
  margin: 10px 0 400px;
  width: 100%;
  height: 500px;
  border: 2px solid #e0e0e0;
  padding: 20px;
`;

export const MobileMoreInfoSection = styled.section<{ isOpen: boolean }>`
  background: rgba(255, 255, 255, 0.5);
  margin-top: -1px;
  overflow: hidden;
  border: 1px solid #c4c4c4;
  /* isOpen prop에 따라 height 값을 조정합니다 */
  height: ${({ isOpen }) => (isOpen ? "180px" : "0")};

  position: relative;
  z-index: 10;
  transition: height 0.3s ease-in-out, box-shadow 0.6s linear;

  /* isOpen prop이 true일 때만 box-shadow 속성을 적용합니다 */
  ${({ isOpen }) =>
    isOpen &&
    `
    transition: height 0.5s ease-in-out, box-shadow .1s linear; 
    box-shadow :0px; 
    padding-bottom :20px;
    height: 230px;`}
`;

export const MobileTabButton = styled.button<{ active: boolean }>`
  width: 320px;
  border-bottom: 6px solid ${({ active }) => (active ? "#21bf48" : "#767676")};
  color: black;
  font-size: 1.4rem;
`;
