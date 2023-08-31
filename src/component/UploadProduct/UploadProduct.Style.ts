import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";
export const Wrapper = styled.div`
  width: calc(100vw - 12.5rem);
  margin: 0 auto;
`;

export const HeaderSection = styled.section`
  padding-left: 6.25rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 5.625rem;
  box-shadow: 0px 4px 5px 0px #0000001a;
  & img {
    width: 5rem;
  }
  & h2 {
    display: inline-block;
    margin: 0;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Warning = styled.aside`
  margin-top: 10px;
  width: 20rem;
  flex-shrink: 0;
  max-height: 21.625rem;
  & article {
    background: #ffefe8;
    margin-top: 10px;
    padding: 1.25rem;
  }
  & li {
    list-style-type: "-";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }
`;
export const MainSection = styled.main`
  padding-top: 2.75rem;
  margin-bottom: 96px;
  & h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 2.625rem;
  }
  & small {
    color: #eb5757;
    font-size: 16px;
    font-weight: 500;
  }
`;
export const FormSection = styled.form`
  float: right;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
  & > div {
    display: flex;
    gap: 40px;
  }
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
`;

export const UploadImg = styled.div`
  width: 28.375rem;
  height: 30.25rem;
  aspect-ratio: 1/1;
  background: #c4c4c4;
`;

export const UploadProductInfo = styled.div`
  color: #767676;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  & div:not(:nth-of-type(3)) {
    margin-bottom: 0.5625rem;
  }
  & div:not(:nth-of-type(1), :nth-of-type(3)) {
    width: 220px;
  }
  & h5 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }
`;

export const UploadProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    width: 100%;
  }
`;

export const Input = styled(OutlinedInput)`
  width: 100%;
  margin-top: 0.625rem;
  border-radius: 0.3125rem;
`;

export const ButtonGroup = styled.div`
  margin: 10px 0 8.5rem auto;
  display: flex;
  gap: 14px;
  & button:not(:nth-of-type(2)) {
    border: 1px solid #c4c4c4;
    &:hover:not(:nth-of-type(2)) {
      border: 1px solid #c4c4c4;
    }
  }
`;
export const ProductImgInput = styled.input`
  display: none;
`;
export const ProductImg = styled.img`
  width: 28.375rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
`;
export const EmptyBox = styled.div`
  margin-top: 5px;
  width: 454px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #c4c4c4;
`;
export const ProductImgWrapper = styled.div`
  width: 28.375rem;
  aspect-ratio: 1/1;
  margin-bottom: 10px;
  position: relative;
  & h5 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }
`;
export const ImgWrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background: #c4c4c4;
`;
export const ProductIconWrapper = styled.label`
  display: inline-block;
  cursor: pointer;
  position: absolute;
`;
export const ProductImgIcon = styled.img`
  object-fit: contain;
  border-radius: 10px;
  position: absolute;
  top: 210px;
  right: -245px;
`;
export const ShippingBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  height: 3.375rem;
  margin-bottom: 1rem;
  & button {
    border: 1px solid #c4c4c4;
    &:hover {
      border: 1px solid #c4c4c4;
    }
  }
`;
