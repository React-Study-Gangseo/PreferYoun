import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { JoinSection, Form, CheckJoin, CheckTerms, Terms } from "./Join.Style";
import { Checkbox } from "@mui/material";
import { FormValue } from "types/type";
import Button from "../../../component/common/Button/Button";
import InputWrapper from "../../../component/common/TextField/AuthInput";
import { RuleSettings } from "../../../component/common/TextField/Rules";
import { useIdValidation, useCRNValidation } from "../../../CustomHook/Valid";
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
  const [showPassword, setShowPassword] = useState(false);
  const { IdValid } = useIdValidation({
    watch,
    getValues,
    clearErrors,
    setError,
  });
  const { CRNValid } = useCRNValidation({
    watch,
    getValues,
    clearErrors,
    setError,
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <JoinSection>
          <InputWrapper
            control={control}
            name="id"
            defaultValue=""
            rules={RuleSettings.IDRule}
            label="아이디"
            error={errors.id}
            isValid={true}
            onButtonClick={(event) => IdValid(event)}
          />
          <InputWrapper
            control={control}
            name="password"
            defaultValue=""
            rules={RuleSettings.PasswordRule}
            label="비밀번호"
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            error={errors.password}
          />
          <InputWrapper
            control={control}
            name="password2"
            defaultValue=""
            rules={{
              required: "비밀번호 중복 확인은 필수 입니다.",
              validate: (value: string) =>
                value === passwordValue || "비밀번호가 일치 하지 않습니다.",
            }}
            label="비밀번호 중복 확인"
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            error={errors.password2}
          />
          <InputWrapper
            control={control}
            name="name"
            defaultValue=""
            rules={RuleSettings.NameRule}
            label="이름"
            error={errors.name}
          />
          <InputWrapper
            control={control}
            name="Phone"
            defaultValue=""
            rules={RuleSettings.PhoneNumberRule}
            label="전화번호"
            error={errors.Phone}
          />
          <InputWrapper
            control={control}
            name="company_registration_number"
            defaultValue=""
            rules={RuleSettings.CRNRule}
            label="사업자등록번호"
            error={errors.company_registration_number}
            isValid={true}
            onButtonClick={(event) => CRNValid(event)}
          />
          <InputWrapper
            control={control}
            name="StoreName"
            defaultValue=""
            rules={RuleSettings.StoreRule}
            label="스토어 이름"
            error={errors.StoreName}
          />
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
            동의합니다.
          </Terms>
        </CheckJoin>
        <Button
          size="l"
          color="primary"
          variant="contained"
          type="submit"
          disabled={!checked}
          margin="10px auto"
        >
          가입하기
        </Button>
      </Form>
    </>
  );
};

export default SellerJoin;
