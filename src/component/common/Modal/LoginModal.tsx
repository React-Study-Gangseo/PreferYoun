import React from "react";
import styled from "@emotion/styled";
import SellerLogin from "component/Auth/Login/SellerLogin/SellerLogin";

const StyledModalContainer = styled.div`
  background-color: white;
  width: 800px;
  margin: 3.125rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const ModalBody = styled.div`
  padding: 15px;
`;

const LoginModal: React.FC = () => {
  return (
    <StyledModalContainer>
      <ModalBody>
        <SellerLogin />
      </ModalBody>
    </StyledModalContainer>
  );
};

export default LoginModal;
