import React, { ReactNode } from "react";
import Button from "component/common/Button/Button";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "../../../../redux/Modal";

export interface ConfirmModalProps {
  YesChildren?: ReactNode;
  NoChildren?: ReactNode;
  ConfirmChildren?: ReactNode;
  content?: ReactNode;
  handleDisagree?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleAgree?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  YesChildren,
  NoChildren,
  ConfirmChildren,
  content,
  handleAgree,
}) => {
  const dispatch = useDispatch();
  const { modalProps } = useSelector(selectModal);
  console.log("🚀 ~ modalProps:", modalProps);
  const handleDisagree = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <ModalContent>{content} </ModalContent>
      <ButtonMenu>
        {ConfirmChildren ? (
          <Button
            size="s"
            variant="contained"
            padding="10px 10px"
            onClick={handleDisagree}
            fontSize="18px"
          >
            {ConfirmChildren}
          </Button>
        ) : (
          <>
            <Button
              size="s"
              variant="outlined"
              padding="10px 10px"
              onClick={handleDisagree}
              fontSize="18px"
            >
              {NoChildren}
            </Button>
            <Button
              size="s"
              variant="contained"
              padding="10px 20px"
              onClick={handleAgree}
              fontSize="18px"
            >
              {YesChildren}
            </Button>
          </>
        )}
      </ButtonMenu>
    </>
  );
};

export default ConfirmModal;

const ModalContent = styled.p`
  margin: 10px auto;
  text-align: center;
  width: 300px;
  line-height: 1.5;
  font-size: 20px;
  word-break: keep-all;
  white-space: break-spaces;
`;

export const ButtonMenu = styled.menu`
  display: flex;
  margin-top: 15px;
  gap: 10px;
  justify-content: center;
`;
