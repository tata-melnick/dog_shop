import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { API } from "../../api";
import useValidate from "../../hooks/useValidate";
import { setUserData } from "../../store/user/actions";
import { TOKEN } from "../../constants/storage";
import { Button, Input, Modal } from "../../components";
import { CloseModalIcon } from "../../icons";
import { setModalAuth, setModalRecover } from "../../store/modals/actions";
import styles from "./recoverModal.module.scss";

const RecoverModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const { invalidEmail } = useValidate({ email });
  const { recover } = useAppSelector((state) => state.modals);

  const closeModal = () => {
    dispatch(setModalRecover(false));
    setEmail("");
    setIsConfirm(false);
    setPassword("");
  };

  const goBack = () => {
    closeModal();
    dispatch(setModalAuth(true));
  };
  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSetToken = (e: ChangeEvent<HTMLInputElement>) => setToken(e.target.value);

  const handleRecover = async () => {
    const response = await API.Recover(email);
    // eslint-disable-next-line no-underscore-dangle
    if (response?.message === "Письмо успешно отправлено") setIsConfirm(true);
  };
  const handleConfirm = async () => {
    const response = await API.ResetPass(token, password);
    if (response?.token) {
      dispatch(setUserData(response));
      window.sessionStorage.setItem(TOKEN, response.token);
      closeModal();
    }
  };

  return (
    <Modal open={recover} onClose={closeModal}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Восстановление пароля</h1>
        <Button onClick={closeModal} className={styles.close}>
          <CloseModalIcon />
        </Button>
      </div>
      <p className={styles.paragraph}>
        Для получения временного пароля необходимо ввести email, указанный при регистрации.
      </p>
      {!isConfirm && (
        <Input
          value={email}
          onChange={handleSetEmail}
          type="email"
          placeholder="Email"
          place="modal"
        />
      )}
      {isConfirm && (
        <>
          <Input
            value={token}
            onChange={handleSetToken}
            type="text"
            placeholder="Token"
            place="modal"
          />
          <Input
            value={password}
            onChange={handleSetPassword}
            type="password"
            placeholder="Password"
            place="modal"
          />
        </>
      )}
      <p className={styles.paragraph}>Срок действия временного пароля 24 ч.</p>
      <Button
        type="filled"
        disabled={(!isConfirm && (invalidEmail || !email)) || (isConfirm && !password)}
        onClick={isConfirm ? handleConfirm : handleRecover}
      >
        {isConfirm ? "Установить новый пароль" : "Отправить токен"}
      </Button>
      <Button type="outline" onClick={goBack} className={styles.btn}>
        Назад
      </Button>
    </Modal>
  );
};

export default RecoverModal;
