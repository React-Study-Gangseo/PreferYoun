import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
  CheckJoin,
  CheckTerms,
  Terms,
  JoinBtn,
} from "./Join.Style";
import Button from "../../common/Button/Button";
import { TextField, IconButton, InputAdornment, Checkbox } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CheckCRN, CheckId } from "API/AuthAPI";
import { AxiosError } from "axios";
import { FormValue } from "types/type";
import Swal from "sweetalert2";

const label = {
  inputProps: {
    "aria-label": "동의 체크",
  },
};

const SellerJoin: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const {
    watch,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onChange" });
  const [checked, setChecked] = useState(false);
  const passwordValue = watch("password", "");

  const CRNVaild = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (watch("company_registration_number")) {
      const checkCRN: string | undefined = getValues(
        "company_registration_number"
      );
      if (typeof checkCRN === "string") {
        try {
          const response = await CheckCRN(checkCRN);

          if (response?.data.Success === "사용 가능한 사업자등록번호입니다.") {
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
  };
  const IdVaild = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (watch("id")) {
      const checkId: string | undefined = getValues("id");
      console.log(checkId);
      if (typeof checkId === "string") {
        // checkId가 문자열인지 확인
        try {
          const response = await CheckId(checkId);

          if (response?.data.Success === "멋진 아이디네요 :)") {
            Swal.fire({
              title: "Success",
              text: "멋진아이디네요:)",
              icon: "success",
              confirmButtonColor: "#21bf48",
              confirmButtonAriaLabel: "확인버튼",
              customClass: {
                icon: "my-icon",
              },
            });
            clearErrors();
          }
        } catch (error) {
          const axiosError = error as AxiosError;
          const responseData = axiosError?.response?.data as any;
          console.log("아이디 체크 실패", responseData.FAIL_Message);
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
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = () => {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <JoinSection>
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
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  label="비밀번호"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="비밀번호 확인 아이콘"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="비밀번호 확인 아이콘"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
                  label="전화번호"
                  fullWidth
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </PhoneWrap>
          <CRNumber>
            <Controller
              control={control}
              name="company_registration_number"
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
            {errors.company_registration_number && (
              <StyledError role="alert">
                {errors.company_registration_number.message}
              </StyledError>
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
        </JoinSection>
        <CheckJoin>
          <Checkbox
            required
            size="small"
            {...label}
            checked={checked}
            onChange={handleChange}
          />
          <Terms>
            호두샵의 <CheckTerms>이용약관</CheckTerms> 및
            <CheckTerms> 개인정보처리방침</CheckTerms>에 대한 내용을 확인 하였고
            <br />
            동의합니다.
          </Terms>
        </CheckJoin>
        <JoinBtn
          width="l"
          bgColor="active"
          type="submit"
          disabled={checked ? true : false}
        >
          가입하기
        </JoinBtn>
      </Form>
    </>
  );
};

export default SellerJoin;
