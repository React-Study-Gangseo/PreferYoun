import React, { useEffect } from "react";
import { css, keyframes } from "@emotion/react";
import SearchAddressModal from "./SearchAddress/SearchAddress";
import MobileModal from "../Modal/MobileModal/MobileModal";
import { useSelector } from "react-redux";
import { selectModal } from "../../../redux/Modal";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

const MODAL_TYPES = {
  MobileModal: "MobileModal",
  SearchAddressModal: "SearchAddressModal",
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.SearchAddressModal,
    component: <SearchAddressModal />,
  },
  {
    type: MODAL_TYPES.MobileModal,
    component: <MobileModal />,
  },
];

export default function GlobalModal() {
  const { modalType, isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
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

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });
  const renderModal = () => {
    return findModal?.component;
  };
  if (!isOpen) return null;

  return createPortal(
    <ModalWrapper>
      <StyledModalContainer
        isSearchAddress={modalType === MODAL_TYPES.SearchAddressModal}
        isMobileModal={modalType === MODAL_TYPES.MobileModal}
      >
        {renderModal()}
      </StyledModalContainer>
    </ModalWrapper>,
    modalRoot
  );
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
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

const StyledModalContainer = styled.article<{
  isSearchAddress: boolean;
  isMobileModal: boolean;
}>`
  z-index: 9999;
  background-color: white;
  position: ${({ isMobileModal }) => (isMobileModal ? "absolute" : "relative")};
  bottom: ${({ isMobileModal }) => (isMobileModal ? "-50px" : "0")};
  width: ${({ isSearchAddress }) => (isSearchAddress ? "500px" : "800px")};
  width: ${({ isMobileModal }) => (isMobileModal ? "100%" : "500px")};
  height: ${({ isSearchAddress }) => (isSearchAddress ? "500px" : "auto")};
  padding: ${({ isSearchAddress }) =>
    isSearchAddress ? "30px 0 0" : "16px 26px 10px"};
  padding: ${({ isMobileModal }) =>
    isMobileModal ? "16px 26px 10px" : "30px 0 0"};
  margin: 3.125rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  animation: ${({ isMobileModal }) =>
    isMobileModal
      ? css`
          ${slideUp} 0.5s ease
        `
      : "none"};
  /* transform: ${({ isMobileModal }) =>
    isMobileModal ? "translateY(0)" : "translateY(100%)"};
  transition: transform 1s ease; */
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
