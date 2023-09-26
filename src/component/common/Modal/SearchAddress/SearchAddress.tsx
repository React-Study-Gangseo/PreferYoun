import React, { useState, useEffect } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { ModalBody, Title, CloseBtn } from "./SearchAddress.Style";
import { closeModal } from "redux/Modal";
import { useDispatch } from "react-redux";
import { removeAddress, saveAddress } from "redux/Address";
import Close from "../../../../assets/images/close-r.svg";

const SearchAddress: React.FC = () => {
  const dispatch = useDispatch();
  const handleComplete = (data: Address) => {
    dispatch(removeAddress());
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress);

    dispatch(
      saveAddress({
        address: fullAddress,
        postCode: data.zonecode,
        additional: "",
      })
    );
  };
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Title>주소검색</Title>
      <ModalBody>
        <DaumPostcodeEmbed
          onComplete={handleComplete}
          style={{
            height: "500px",
            borderRadius: "15px",
            overflow: "hidden",
            scrollbarWidth: "thin",
            scrollbarColor: "#217af4 rgba(33, 122, 244, .1)",
          }}
          onClose={() => dispatch(closeModal())}
        />
      </ModalBody>
      <CloseBtn onClick={handleModalClose}>
        <img src={Close} alt="모달닫힘버튼" aria-label="모달닫힘버튼" />
      </CloseBtn>
    </>
  );
};

export default SearchAddress;
