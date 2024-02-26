import React, { useCallback } from "react";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { ModalSetting } from "../component/common/Modal/ConfirmModal/ModalSetting";
import { openModal } from "../redux/Modal";
import { CheckId, CheckCRN } from "../API/AuthAPI";
import {
  FieldValues,
  UseFormWatch,
  UseFormGetValues,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";
interface IUseFormReturn<TFieldValues extends FieldValues = FieldValues> {
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
}
export const useIdValidation = ({
  watch,
  getValues,
  clearErrors,
  setError,
}: IUseFormReturn) => {
  const dispatch = useDispatch();
  const IdValid = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (watch("id")) {
        const checkId = getValues("id");
        if (typeof checkId === "string" && checkId.trim() !== "") {
          try {
            const response = await CheckId(checkId);

            if (response?.data.Success === "멋진 아이디네요 :)") {
              dispatch(
                openModal({
                  modalType: "ComfirmModal",
                  modalProps: ModalSetting.IDValidModal,
                })
              );
              clearErrors();
            }
          } catch (error) {
            const axiosError = error as AxiosError;
            const responseData = axiosError?.response?.data as any;
            if (responseData.FAIL_Message === "이미 사용 중인 아이디입니다.") {
              setError("id", {
                type: "manual",
                message: "* 이미 가입된 아이디 입니다.",
              });
            }
          }
        } else {
          console.log("checkID is not defined");
        }
      }
    },
    [watch, getValues, clearErrors, setError]
  );

  return {
    IdValid,
  };
};

export const useCRNValidation = ({
  watch,
  getValues,
  clearErrors,
  setError,
}: IUseFormReturn) => {
  const CRNValid = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (watch("company_registration_number")) {
        const checkCRN = getValues("company_registration_number");
        if (typeof checkCRN === "string" && checkCRN.trim() !== "") {
          try {
            const response = await CheckCRN(checkCRN);

            if (
              response?.data.Success === "사용 가능한 사업자등록번호입니다."
            ) {
              alert("사용 가능한 사업자등록번호입니다.");
              clearErrors();
            }
          } catch (error) {
            console.log("check");
            const axiosError = error as AxiosError; // 타입 단언
            const responseData = axiosError?.response?.data as any;
            console.log("사업자등록번호 체크 실패", responseData);
            if (
              responseData.FAIL_Message === "이미 등록된 사업자등록번호입니다."
            ) {
              setError("company_registration_number", {
                type: "manual",
                message: "* 이미 등록된 사업자등록번호입니다.",
              });
            }
          }
        } else {
          console.log("checkCRN is not defined");
        }
      }
    },
    [watch, getValues, clearErrors, setError]
  );
  return {
    CRNValid,
  };
};
