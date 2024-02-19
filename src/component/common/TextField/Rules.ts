export const RuleSettings = {
  IDRule: { required: true, pattern: /^[A-Za-z0-9]{1,20}$/ },
  PasswordRule: {
    required: true,
    pattern: {
      value: /^(?=.*[a-z])(?=.*\d).{8,}$/,
      message: "비밀번호 형식이 올바르지 않습니다",
    },
  },
  // PasswordCheckRule: {
  //   required: "비밀번호 중복 확인은 필수 입니다.",
  //   validate: (value) =>
  //     value === passwordValue || "비밀번호가 일치 하지 않습니다.",
  // },
  PhoneNumberRule: {
    required: "필수 항목입니다",
    pattern: {
      value: /^[0-9]{3}[0-9]{4}[0-9]{4}$/,
      message: "전화번호 형식이 올바르지 않습니다 (000-0000-0000)",
    },
  },
  NameRule: { required: "필수 항목 입니다." },
  CRNRule: {
    required: "사업자 등록 번호는 필수 입력값 입니다.",
    pattern: {
      value: /^\d{10}$/,
      message: "사업자 등록 번호는 10자리 숫자입니다.",
    },
  },
  StoreRule: { required: "스토어 이름은 필수 입력값입니다." },
};
