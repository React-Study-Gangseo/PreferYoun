import React, { useEffect } from "react";
import SearchAddressModal from "./SearchAddress/SearchAddress";
import { useSelector } from "react-redux";
import { closeModal, selectModal } from "redux/Modal";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import Close from "../../../assets/images/close-r.svg";
import { useDispatch } from "react-redux";

const MODAL_TYPES = {
  LoginModal: "LoginModal",
  SignupModal: "SignupModal",
  SearchAddressModal: "SearchAddressModal",
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.SearchAddressModal,
    component: <SearchAddressModal />,
  },
];

export default function GlobalModal() {
  const { modalType, isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  console.log("Current modal state:", { modalType, isOpen });
  const modalRoot = document.getElementById("modal");
  useEffect(() => {
    if (!modalRoot) return;

    if (isOpen) {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  }, [modalRoot, isOpen]);

  if (!modalRoot) {
    return null;
  }
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  console.log(isOpen);
  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });
  console.log("Selected modal component:", findModal);
  const renderModal = () => {
    return findModal?.component;
  };
  if (!isOpen) return null;

  return createPortal(
    <ModalWrapper>
      <StyledModalContainer
        isSearchAddress={modalType === MODAL_TYPES.SearchAddressModal}
      >
        {renderModal()}
        <CloseBtn onClick={handleModalClose}>
          <img src={Close} alt="모달닫힘버튼" aria-label="모달닫힘버튼" />
        </CloseBtn>
      </StyledModalContainer>
    </ModalWrapper>,
    modalRoot
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
`;

const StyledModalContainer = styled.article<{ isSearchAddress: boolean }>`
  background-color: white;
  position: relative;
  width: ${({ isSearchAddress }) => (isSearchAddress ? "500px" : "800px")};
  height: ${({ isSearchAddress }) => (isSearchAddress ? "500px" : "auto")};
  padding: ${({ isSearchAddress }) => (isSearchAddress ? "30px 0 0" : "0")};
  margin: 3.125rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

// const StyledModalContainer = styled.article`
//   background-color: white;
//   position: relative;
//   width: 800px;
//   margin: 3.125rem auto;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   overflow: hidden;
// `;
const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
