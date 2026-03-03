import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export type SignUpValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

export type TextFieldProps<TFieldValues extends FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name"
> & {
  /** RHF name (타입 안전) */
  name: Path<TFieldValues>;
  label: string;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
};

export type PasswordFieldProps<TFieldValues extends FieldValues> = {
  id: string;
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  autoComplete?: string;

  register: UseFormRegister<TFieldValues>;
  watch: UseFormWatch<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;

  error?: FieldError;
};
