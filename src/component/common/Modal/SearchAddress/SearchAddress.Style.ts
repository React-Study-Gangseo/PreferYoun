import styled from "@emotion/styled";

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
