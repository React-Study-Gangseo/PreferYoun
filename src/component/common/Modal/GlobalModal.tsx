import React, { useEffect, useRef } from "react";
import { css, keyframes } from "@emotion/react";
import SearchAddressModal from "./SearchAddress/SearchAddress";
import MobileModal from "../Modal/MobileModal/MobileModal";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import { useSelector } from "react-redux";
import { selectModal } from "../../../redux/Modal";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import dialogPolyfill from "dialog-polyfill";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/Modal";
import { Logout } from "API/AuthAPI";
type ModalType = keyof typeof MODAL_TYPES;

const MODAL_TYPES = {
  MobileModal: "MobileModal",
  SearchAddressModal: "SearchAddressModal",
  ConfirmModal: "ConfirmModal",
};

export default function GlobalModal() {
  const { modalType, isOpen }: { modalType: ModalType; isOpen: boolean } =
    useSelector(selectModal);
  const modalRoot = document.getElementById("modal");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const storedData = localStorage.getItem("UserInfo");
  const dispatch = useDispatch();

  const MODAL_COMPONENTS = {
    [MODAL_TYPES.SearchAddressModal]: SearchAddressModal,
    [MODAL_TYPES.MobileModal]: MobileModal,
    [MODAL_TYPES.ConfirmModal]: (
      props: React.ComponentProps<typeof ConfirmModal>
    ) => <ConfirmModal {...props} handleAgree={handleAgree} />,
  };
  const handleAgree = async () => {
    if (path === "/mypage") {
      const response = await Logout();
      if (response.status === 200) {
        localStorage.removeItem("UserInfo");
        navigate("/");
      } else {
        console.log("통신에러");
      }
    } else if (path.startsWith("/detailProduct")) {
      navigate("/cart");
      if (!storedData) {
        navigate("/login");
      }
    }
    dispatch(closeModal());
  };

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.showModal) {
      dialogPolyfill.registerDialog(dialogRef.current);
    }
  }, []);

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

  const ModalComponent = MODAL_COMPONENTS[modalType];

  if (!isOpen) return null;

  return createPortal(
    <ModalWrapper>
      <StyledDialog open={isOpen} ref={dialogRef} modalType={modalType}>
        {ModalComponent ? <ModalComponent /> : null}
      </StyledDialog>
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

const getModalStyles = (modalType: string) => {
  switch (modalType) {
    case MODAL_TYPES.SearchAddressModal:
      return {
        position: "relative",
        width: "500px",
        height: "auto",
        padding: "30px 0 0",
      };
    case MODAL_TYPES.MobileModal:
      return {
        position: "absolute",
        bottom: "-50px",
        width: "100%",
        padding: "16px 26px 10px",
        transform: "translateY(100%)",
        transition: "transform 1s ease",
      };
    case MODAL_TYPES.ConfirmModal:
      return {
        position: "relative",
        width: "400px",
        height: "auto",
        padding: "30px 0 30px",
      };
    default:
      return {};
  }
};

const StyledDialog = styled("dialog", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "modalType",
})<{ modalType: string }>`
  display: block;
  z-index: 9999;
  background-color: white;
  ${({ modalType }) => {
    const modalStyles = getModalStyles(modalType);
    return `
      position: ${modalStyles.position};
      bottom: ${modalStyles.bottom};
      width: ${modalStyles.width};
      height: ${modalStyles.height};
      padding: ${modalStyles.padding};
    `;
  }};
  top: ${(props) => {
    switch (props.modalType) {
      case MODAL_TYPES.SearchAddressModal:
        return "15%";
      case MODAL_TYPES.MobileModal:
        return "50%";
      case MODAL_TYPES.ConfirmModal:
        return "40%";
      default:
        return "50%";
    }
  }};
  margin: 3.125rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  border: none;
  animation: ${({ modalType }) =>
    modalType === MODAL_TYPES.MobileModal
      ? css`
          ${slideUp} 0.5s ease
        `
      : "none"};
`;
