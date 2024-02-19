import React, { useEffect, useRef } from "react";
import { css, keyframes } from "@emotion/react";
import SearchAddressModal from "./SearchAddress/SearchAddress";
import MobileModal from "../Modal/MobileModal/MobileModal";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import PriceModal from "../Modal/MobileModal/MobileCartModal";
import { useSelector } from "react-redux";
import { selectModal } from "../../../redux/Modal";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import dialogPolyfill from "dialog-polyfill";

type ModalType = string;

const MODAL_TYPES: Record<ModalType, string> = {
  MobileModal: "MobileModal",
  SearchAddressModal: "SearchAddressModal",
  ConfirmModal: "ConfirmModal",
  PriceModal: "PriceModal",
};

export default function GlobalModal() {
  const modals = useSelector(selectModal);
  const modalRoot = document.getElementById("modal");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollY = useRef(0);

  const MODAL_COMPONENTS = {
    [MODAL_TYPES.SearchAddressModal]: SearchAddressModal,
    [MODAL_TYPES.MobileModal]: MobileModal,
    [MODAL_TYPES.ConfirmModal]: (
      props: React.ComponentProps<typeof ConfirmModal>
    ) => <ConfirmModal {...props} />,
    [MODAL_TYPES.PriceModal]: PriceModal,
  };

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.showModal) {
      dialogPolyfill.registerDialog(dialogRef.current);
    }
  }, []);

  useEffect(() => {
    if (!modalRoot) return;

    if (modals.length > 0) {
      scrollY.current = window.scrollY;
      document.body.style.cssText = `
      position: fixed;
      top: -${scrollY.current}px;
      overflow-y: scroll;
      width: 100%;`;
    } else {
      document.body.style.cssText = "";
      window.scrollTo(0, scrollY.current);
    }
  }, [modalRoot, modals]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    modals.map((modal: any, index: number) => {
      const ModalComponent = MODAL_COMPONENTS[modal.modalType];
      return (
        <ModalWrapper key={index} modalType={modal.modalType}>
          <StyledDialog open={true} ref={dialogRef} modalType={modal.modalType}>
            {ModalComponent ? <ModalComponent {...modal.modalProps} /> : null}
          </StyledDialog>
        </ModalWrapper>
      );
    }),
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

const ModalWrapper = styled.div<{ modalType: string }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: ${(props) => {
    switch (props.modalType) {
      case MODAL_TYPES.PriceModal:
        return "99";
      default:
        return "999";
    }
  }};
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
`;

const getModalStyles = (modalType: string) => {
  switch (modalType) {
    case MODAL_TYPES.SearchAddressModal:
      return {
        position: "relative",
        maxWidth: "500px",
        width: "90%",
        height: "auto",
        padding: "30px 0 0",
        borderRadius: "5px",
      };
    case MODAL_TYPES.MobileModal:
      return {
        position: "absolute",
        bottom: "-50px",
        width: "100%",
        padding: "16px 26px 10px",
        transform: "translateY(100%)",
        transition: "transform 1s ease",
        boxSizing: "border-box",
        borderRadius: "15px 15px 0px 0px",
      };
    case MODAL_TYPES.PriceModal:
      return {
        position: "absolute",
        bottom: "-50px",
        width: "100%",
        padding: "40px 26px 10px",
        transform: "translateY(100%)",
        transition: "transform 1s ease",
        boxSizing: "border-box",
        borderRadius: "15px 15px 0px 0px",
      };
    case MODAL_TYPES.ConfirmModal:
      return {
        position: "relative",
        width: "400px",
        height: "auto",
        padding: "30px 0 30px",
        borderRadius: "5px",
      };
    default:
      return {};
  }
};

const StyledDialog = styled("dialog", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "modalType",
})<{ modalType: string }>`
  display: block;
  background-color: white;
  ${({ modalType }) => {
    const modalStyles = getModalStyles(modalType);
    return `
      position: ${modalStyles.position};
      bottom: ${modalStyles.bottom};
      width: ${modalStyles.width};
      height: ${modalStyles.height};
      padding: ${modalStyles.padding};
      box-sizing: ${modalStyles.boxSizing};
      border-radius: ${modalStyles.borderRadius};
      max-width: ${modalStyles.maxWidth};
    `;
  }};
  top: ${(props) => {
    switch (props.modalType) {
      case MODAL_TYPES.SearchAddressModal:
        return "15%";
      case MODAL_TYPES.ConfirmModal:
        return "40%";
      default:
        return "auto";
    }
  }};
  bottom: ${(props) => {
    switch (props.modalType) {
      case MODAL_TYPES.MobileModal:
        return "0";
      case MODAL_TYPES.PriceModal:
        return "60px";
      default:
        return "auto";
    }
  }};
  /* z-index: ${(props) => {
    switch (props.modalType) {
      case MODAL_TYPES.PriceModal:
        return "90";
      default:
        return "9999";
    }
  }}; */
  z-index: 9999;
  margin: 3.125rem auto 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: none;
  animation: ${({ modalType }) =>
    modalType === MODAL_TYPES.MobileModal
      ? css`
          ${slideUp} 0.5s ease
        `
      : "none"};
`;
