import type { LoginValues } from "@/components/ui/form";
import * as yup from "yup";

export const schema: yup.ObjectSchema<LoginValues> = yup.object({
  email: yup
    .string()
    .trim()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 올바르지 않아요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 8자 이상이어야 해요."),
});
