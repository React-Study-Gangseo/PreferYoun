import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  JoinSection,
  Input,
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
    register,
    handleSubmit,
    clearErrors,
    setError,
    getValues,
    control,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: "onChange" });

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
      } else {
        alert("중복된 사업자등록번호입니다. 다른 사업자등록번호를 입력하세요.");
      }
      console.log("res", response);
    } catch (error) {
      console.log("사업자 등록번호 체크 실패", error);
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
          <label>아이디</label>
          <EmailWrap>
            <Input
              type="id"
              id="id"
              autoComplete="off"
              {...register("id", {
                required: "아이디는 필수 입력입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]{1,20}$/i,
                  message:
                    "ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.",
                },
              })}
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
            <label>비밀번호</label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message:
                    "비밀번호는 최소 8자 이상, 영소문자를 포함해야 합니다.",
                },
              })}
            />
          </InputWrap>
          <CheckPw>
            <label>비밀번호 재확인</label>
            <Input
              id="password2"
              type="password"
              {...register("password2", {
                required: "비밀번호 확인은 필수 입력입니다.",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return (
                      password === value || "비밀번호가 일치하지 않습니다."
                    );
                  },
                },
              })}
            />
          </CheckPw>
          <NameWrap>
            <label>이름</label>
            <Input
              type="text"
              {...register("name", {
                required: "이름은 필수 입력값 입니다.",
              })}
            />
            {errors.id && (
              <StyledError role="alert">{errors.id.message}</StyledError>
            )}
          </NameWrap>
          <label>휴대폰번호</label>
          <PhoneWrap>
            <Controller
              name="phoneCode"
              control={control}
              defaultValue="010"
              render={({ field }) => (
                <select {...field}>
                  <option>010</option>
                  <option>011</option>
                  <option>017</option>
                </select>
              )}
            />
            <input
              {...register("firstNumber", {
                required: true,
                min: 1000,
                max: 9999,
                pattern: /^[0-9]+$/,
              })}
            />
            <input
              {...register("secondNumber", {
                required: true,
                min: 1000,
                max: 9999,
                pattern: /^[0-9]+$/,
              })}
            />
          </PhoneWrap>
          <label>사업자 등록번호</label>
          <CRNumber>
            <Input
              type="text"
              {...register("CRNumber", {
                required: "사업자등록번호는 필수 입력값 입니다.",
              })}
            />
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
            <label>스토어 이름</label>
            <Input
              type="text"
              {...register("StoreName", {
                required: "스토어 이름은 필수 입력값 입니다.",
              })}
            />
          </div>
        </Form>
      </JoinSection>
    </>
  );
};

export default Join;
