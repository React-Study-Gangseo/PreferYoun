import React, { useState, useEffect } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { ModalBody, Title } from "./SearchAddress.Style";
import { closeModal } from "redux/Modal";
import { useDispatch } from "react-redux";
import { saveAddress } from "redux/Address";

interface AddressState {
  address: string;
  postCode: string;
  additional: string;
}

const SearchAddress: React.FC = () => {
  const [address, setAddress] = useState<AddressState[]>([]);
  const dispatch = useDispatch();
  const handleComplete = (data: Address) => {
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

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddress((prevAddress) => [
      ...prevAddress,
      {
        address: fullAddress,
        postCode: data.zonecode,
        additional: "",
      },
    ]);
    dispatch(
      saveAddress({
        address: fullAddress,
        postCode: data.zonecode,
        additional: "",
      })
    );
  };
  useEffect(() => {
    console.log(address);
  }, [address]);
  console.log(address);
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
    </>
  );
};

export default SearchAddress;
