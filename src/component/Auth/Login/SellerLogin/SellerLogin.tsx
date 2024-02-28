import React from "react";
import { LoginSection, Form } from "../Login.Style";
import { useForm } from "react-hook-form";
import { LoginData } from "../../../../types/type";
import Button from "../../../common/Button/Button";
import InputWrapper from "../../../../component/common/TextField/AuthInput";
import { RuleSettings } from "../../../../component/common/TextField/Rules";
const SellerLogin: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>({ mode: "onChange" });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <LoginSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper
            control={control}
            name="id"
            defaultValue=""
            rules={RuleSettings.IDRule}
            label="아이디"
            error={errors.id}
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
          <Button
            size="login"
            variant="contained"
            type="submit"
            fontSize="22px"
          >
            로그인
          </Button>
        </Form>
      </LoginSection>
    </>
  );
};

export default SellerLogin;
