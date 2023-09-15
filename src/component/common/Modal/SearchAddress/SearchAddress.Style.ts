import styled from "@emotion/styled";

export const ModalWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
`;

export const StyledModalContainer = styled.article`
  position: relative;
  background-color: white;
  width: 500px;
  height: 500px;
  margin: 1.25rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  padding: 30px 0 0;
`;
export const Title = styled.h2`
  padding-left: 30px;
  font-size: 24px;
`;
export const ModalBody = styled.div`
  padding: 15px;
  &::after {
    content: "";
    width: 100%;
    height: 20px;
    position: absolute;
    background-color: white;
    bottom: 0;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
