import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TextField from "@mui/material/TextField";
import {
  ModalWrapper,
  ModalBody,
  StyledModalContainer,
  CloseBtn,
} from "./SearchAddress.Style";
import Close from "../../../../assets/images/close-r.svg";
interface ModalProps {
  closeModal: () => void;
}
const SearchAddress: React.FC<ModalProps> = ({ closeModal }) => {
  const modalRoot = document.getElementById("modal");
  useEffect(() => {
    if (!modalRoot) return;

    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [modalRoot]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalWrapper>
      <StyledModalContainer>
        <ModalBody>
          <form>
            <label>주소검색</label>
            <TextField
              fullWidth
              id="standard-helperText"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </form>
        </ModalBody>
        <CloseBtn onClick={closeModal}>
          <img src={Close} alt="모달닫힘버튼" aria-label="모달닫힘버튼" />
        </CloseBtn>
      </StyledModalContainer>
    </ModalWrapper>,
    modalRoot
  );
};

export default SearchAddress;
