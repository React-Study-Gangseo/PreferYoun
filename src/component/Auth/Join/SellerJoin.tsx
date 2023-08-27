import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import {
  JoinSection,
  InputWrap,
  PhoneWrap,
  Form,
  EmailWrap,
  CheckPw,
  NameWrap,
  CRNumber,
  StyledError,
} from "./Join.Style";
import Button from "../../common/Button/Button";
import { CheckCRN, CheckId, SellerJoin } from "API/AuthAPI";
import { AxiosError } from "axios";

export interface FormValue {
  id: string;
  password: string;
  password2: string;
  name: string;
  CRNumber: string;
  Phone: string;
  StoreName: string;
  phoneCode: string;
  firstNumber: string;
  secondNumber: string;
}

const Join: React.FC = () => {
  const {
    watch,
    handleSubmit,
    setError,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onChange" });
  const passwordValue = watch("password", "");
  const onSubmit = async (data: FormValue) => {
    try {
      const response = await SellerJoin(data);
      if (response && response.status === 201) {
        console.log("회원가입 성공");
        // 회원가입 성공 시 다른 작업들을 수행
      }
    } catch (error) {
      console.log("회원가입 실패", error);
    }
  };
  const CRNVaild = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const checkCRN = getValues("CRNumber");
    console.log(checkCRN);
    try {
      const response = await CheckCRN(checkCRN);

      if (response?.data.Success === "사용 가능한 사업자등록번호입니다.") {
        alert("사용 가능한 사업자등록번호입니다.");
      }
    } catch (error) {
      console.log("check");
      const axiosError = error as AxiosError; // 타입 단언
      const responseData = axiosError?.response?.data as any;
      console.log("사업자등록번호 체크 실패", responseData);
      if (responseData.FAIL_Message === "이미 등록된 사업자등록번호입니다.") {
        setError("CRNumber", {
          type: "manual",
          message: "* 이미 등록된 사업자등록번호입니다.",
        });
      }
    }
  };
  const IdVaild = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const checkId = getValues("id");
    console.log(checkId);
    try {
      const response = await CheckId(checkId);

      if (response?.data.Success === "멋진 아이디네요 :)") {
        alert("Success: '멋진 아이디네요 :)");
      }
    } catch (error) {
      // error is the exception thrown from CheckId function
      const axiosError = error as AxiosError; // 타입 단언
      const responseData = axiosError?.response?.data as any;
      console.log("아이디 체크 실패", responseData.FAIL_Message);
      if (responseData.FAIL_Message === "이미 사용 중인 아이디입니다.") {
        setError("id", {
          type: "manual",
          message: "* 이미 가입된 아이디 입니다.",
        });
      }
      // 이미 가입된 아이디인 경우 에러 처리...
    }
  };

  return (
    <>
      <JoinSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <EmailWrap>
            <Controller
              control={control}
              name="id"
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[A-Za-z0-9]{1,20}$/,
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="아이디"
                  error={error !== undefined}
                />
              )}
            />
            <Button
              width="ms"
              bgColor="active"
              onClick={(event) => {
                IdVaild(event);
              }}
            >
              중복체크
            </Button>
            {errors.id && (
              <StyledError role="alert">{errors.id.message}</StyledError>
            )}
          </EmailWrap>
          <InputWrap>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*\d).{8,}$/,
                  message: "비밀번호 형식이 올바르지 않습니다",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="password"
                  fullWidth
                  label="비밀번호"
                  error={error !== undefined}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </InputWrap>
          <CheckPw>
            <Controller
              control={control}
              name="password2"
              defaultValue=""
              rules={{
                required: "비밀번호 중복 확인은 필수 입니다.",
                validate: (value) =>
                  value === passwordValue || "비밀번호가 일치 하지 않습니다.",
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="password"
                  fullWidth
                  label="비밀번호 중복 확인"
                  error={error !== undefined}
                />
              )}
            />
          </CheckPw>
          <NameWrap>
            <Controller
              control={control}
              name="name"
              defaultValue=""
              rules={{
                required: "필수 항목 입니다.",
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="이름"
                  error={error !== undefined}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </NameWrap>
          <PhoneWrap>
            <Controller
              name="Phone"
              control={control}
              defaultValue=""
              rules={{
                required: "필수 항목입니다",
                pattern: {
                  value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
                  message: "전화번호 형식이 올바르지 않습니다 (000-0000-0000)",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </PhoneWrap>
          <CRNumber>
            <Controller
              control={control}
              name="CRNumber"
              defaultValue=""
              rules={{
                required: "사업자 등록 번호는 필수 입력값 입니다.",
                pattern: {
                  value: /^\d{6}$/,
                  message: "사업자 등록 번호는 10자리 숫자입니다.",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="사업자등록번호"
                  error={error !== undefined}
                  helperText={error ? error.message : null}
                />
              )}
            />
            {errors.CRNumber && (
              <StyledError role="alert">{errors.CRNumber.message}</StyledError>
            )}
            <Button
              width="ms"
              bgColor="active"
              onClick={(event) => {
                CRNVaild(event);
              }}
            >
              인증
            </Button>
          </CRNumber>
          <div>
            <Controller
              control={control}
              name="StoreName"
              defaultValue=""
              rules={{
                required: "스토어 이름은 필수 입력값입니다.",
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  type="text"
                  fullWidth
                  label="스토어 이름"
                  error={error !== undefined}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </div>
        </Form>
      </JoinSection>
    </>
  );
};

export default Join;
