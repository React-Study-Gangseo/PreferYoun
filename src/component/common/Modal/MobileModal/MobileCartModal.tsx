import React from "react";
import { CalcPrice, DeleteBtn, ModalTitle } from "./MoblieCartModal.Style";
import { useSelector, useDispatch } from "react-redux";
import { TotalPriceState } from "redux/TotalPrice";
import DeleteIcon from "../../../../assets/images/icon-delete.svg";
import { closeModal } from "../../../../redux/Modal";

export interface MobileCartModalProps {}

const MobileCartModal: React.FC<MobileCartModalProps> = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: { totalPrice: TotalPriceState }) => {
    return state.totalPrice.value.reduce((sum, item) => sum + item.price, 0);
  });
  const totalShippingFee = useSelector(
    (state: { totalPrice: TotalPriceState }) => {
      return state.totalPrice.value.reduce(
        (sum, item) => sum + item.shipping_fee,
        0
      );
    }
  );

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <ModalTitle>주문 예상 금액</ModalTitle>
      <CalcPrice>
        <li>
          총상품금액
          <strong>
            {new Intl.NumberFormat("ko-KR").format(totalPrice)}
            <span>원</span>
          </strong>
        </li>
        <li>
          상품할인
          <strong>
            0<span>원</span>
          </strong>
        </li>
        <li>
          배송비
          <strong>
            {new Intl.NumberFormat("ko-KR").format(totalShippingFee)}
            <span>원</span>
          </strong>
        </li>
        <li>
          결제 예정 금액
          <strong>
            {new Intl.NumberFormat("ko-KR").format(
              totalPrice + totalShippingFee
            )}
            <span>원</span>
          </strong>
        </li>
      </CalcPrice>
      <DeleteBtn onClick={handleModalClose}>
        <img src={DeleteIcon} alt="상품 삭제 버튼" />
      </DeleteBtn>
    </>
  );
};

export default MobileCartModal;
