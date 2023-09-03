import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  JoinSection,
  InputWrap,
  PhoneWrap,
  Form,
  EmailWrap,
  CheckPw,
  NameWrap,
  StyledError,
} from "./Join.Style";
import Button from "../../common/Button/Button";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CheckId, Join } from "API/AuthAPI";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

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

const BuyerJoin: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const {
    watch,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onChange" });
  const navigate = useNavigate();
  const passwordValue = watch("password", "");

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

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        </Form>
      </JoinSection>
    </>
  );
};

export default BuyerJoin;
