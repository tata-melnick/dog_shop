import { useEffect, useState } from "react";

type PropsType = {
  email?: string;
  passwords?: {
    mainPass?: string;
    verifyPass?: string;
  };
};

type EmailValidType = {
  invalid: boolean;
  message: string;
};

type PassValidType = {
  invalid: boolean;
  message: string;
};
export type PassValidInfoType = {
  mainPass: PassValidType;
  verifyPass: PassValidType;
};
type ReturnType = {
  emailValidInfo?: EmailValidType;
  passValidInfo?: PassValidInfoType;
};
interface IUseValidate {
  (props: PropsType): ReturnType;
}

const regValidEmail =
  /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
const regUpperCase = /[A-Z]/;
const regLatin = /[a-zA-Z]/;

const useValidate: IUseValidate = ({ email, passwords = {} }) => {
  const [emailValidInfo, setEmailValidInfo] = useState<EmailValidType>({
    invalid: false,
    message: "",
  });
  const [mainPassInfo, setMainPassInfo] = useState<PassValidType>({
    invalid: false,
    message: "",
  });
  const [verifyPassInfo, setVerifyPassInfo] = useState<PassValidType>({
    invalid: false,
    message: "",
  });

  const emailValidate = () => {
    if (email.length === 0) {
      setEmailValidInfo({ invalid: false, message: "" });
      return;
    }
    if (!regValidEmail.test(email)) {
      setEmailValidInfo({
        invalid: true,
        message: "Не правильный email",
      });
    }
  };

  const mainPassValidate = () => {
    if (passwords.mainPass.length === 0) {
      setMainPassInfo({ invalid: false, message: "" });
      return;
    }
    if (!regLatin.test(passwords.mainPass)) {
      setMainPassInfo({
        invalid: true,
        message: "Пароль должен содержать только латинские символы",
      });
      return;
    }
    if (passwords.mainPass.length < 8) {
      setMainPassInfo({ invalid: true, message: "Пароль должен быть не менее 8 символов" });
      return;
    }
    setMainPassInfo((prev) => ({ ...prev, message: "" }));
    if (!regUpperCase.test(passwords.mainPass))
      setMainPassInfo({ invalid: true, message: "Пароль должен содержать заглавные символы" });
    else setMainPassInfo({ invalid: false, message: "" });
  };

  const verifyPassValidate = () => {
    if (passwords.mainPass !== passwords.verifyPass)
      setVerifyPassInfo({ invalid: true, message: "Введеные пароли не совпадают" });
    if (passwords.verifyPass.length === 0 || passwords.mainPass === passwords.verifyPass)
      setVerifyPassInfo({ invalid: false, message: "" });
  };

  useEffect(() => {
    if (passwords?.mainPass || passwords?.mainPass === "") mainPassValidate();
    if (passwords?.verifyPass || passwords?.verifyPass === "") verifyPassValidate();
    if (email || email === "") emailValidate();
  }, [passwords?.verifyPass, passwords?.mainPass, email]);

  return {
    ...(email !== undefined && { emailValidInfo }),
    ...(passwords && { passValidInfo: { mainPass: mainPassInfo, verifyPass: verifyPassInfo } }),
  };
};

export default useValidate;
