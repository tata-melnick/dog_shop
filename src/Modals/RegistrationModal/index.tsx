import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { API } from "../../api";
import useValidate from "../../hooks/useValidate";
import { Button, Input, Modal } from "../../components";
import { CloseModalIcon } from "../../icons";
import { setModalAuth, setModalRegistration } from "../../store/modals/actions";
import styles from "./registrationModal.module.scss";

const RegistrationModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const { invalidEmail, passValidInfo } = useValidate({
    email,
    passwords: { mainPass: password, verifyPass: verifyPassword },
  });
  const { registration } = useAppSelector((state) => state.modals);

  const closeModal = () => {
    dispatch(setModalRegistration(false));
    setVerifyPassword("");
    setEmail("");
    setPassword("");
  };

  const goBack = () => {
    closeModal();
    dispatch(setModalAuth(true));
  };
  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSetVerifyPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setVerifyPassword(e.target.value);

  const handleSignUp = async () => {
    const response = await API.SignUp({ email, password, group: "group-10" });
    // eslint-disable-next-line no-underscore-dangle
    if (response?._id) goBack();
  };

  return (
    <Modal open={registration} onClose={closeModal}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Регистрация</h1>
        <Button onClick={closeModal}>
          <CloseModalIcon />
        </Button>
      </div>
      <Input
        withoutAutocomplete
        value={email}
        onChange={handleSetEmail}
        type="email"
        placeholder="Email"
        place="modal"
      />
      <Input
        withoutAutocomplete
        value={password}
        onChange={handleSetPassword}
        type="password"
        placeholder="Пароль"
        place="modal"
      />
      <Input
        withoutAutocomplete
        value={verifyPassword}
        onChange={handleSetVerifyPassword}
        type="password"
        placeholder="Пароль"
        place="modal"
      />
      <p className={styles.paragraph}>
        Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и
        соглашаетесь на информационную рассылку.
      </p>
      <Button
        type="filled"
        disabled={
          invalidEmail ||
          passValidInfo.mainPass.invalid ||
          passValidInfo.verifyPass.invalid ||
          !email ||
          !password
        }
        onClick={handleSignUp}
      >
        Зарегистрироваться
      </Button>
      <Button type="outline" onClick={goBack}>
        Назад
      </Button>
    </Modal>
  );
};

export default RegistrationModal;
