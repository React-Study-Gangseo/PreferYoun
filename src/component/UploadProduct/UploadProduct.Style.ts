import styled from "@emotion/styled";

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
  padding: 1.25rem;
  background: #ffefe8;
  flex-shrink: 0;
  max-height: 21.625rem;
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
  width: 100%;
  & div {
    margin-bottom: 1rem;
    height: 5.25rem;
  }
  & div:not(:first-child, :nth-child(3)) {
    width: 220px;
  }
`;

export const UploadProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.375rem;
  border: 1px solid #c4c4c4;
  margin-top: 0.75rem;
  border-radius: 0.3125rem;
`;

export const ButtonGroup = styled.div`
  margin: 10px 0 8.5rem auto;
`;
