import * as yup from "yup";
import { SignUpValues } from "../types";

export const schema: yup.ObjectSchema<SignUpValues> = yup.object({
  email: yup
    .string()
    .trim()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 올바르지 않아요."),
  nickname: yup
    .string()
    .trim()
    .required("닉네임을 입력해주세요.")
    .min(1, "닉네임은 1자 이상이어야 해요.")
    .max(12, "닉네임은 12자 이하여야 해요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 8자 이상이어야 해요."),
  passwordConfirm: yup
    .string()
    .required("비밀번호 확인을 입력해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않아요."),
});
