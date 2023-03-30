import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { API } from "../../api";
import { TOKEN } from "../../constants/storage";
import { CloseModalIcon } from "../../icons";
import { Button, Modal, Input } from "../../components";
import { setUserData } from "../../store/user/actions";
import { setModalAuth, setModalRecover, setModalRegistration } from "../../store/modals/actions";
import styles from "./authModal.module.scss";

const AuthModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { auth } = useAppSelector((state) => state.modals);

  const closeModal = () => {
    dispatch(setModalAuth(false));
    setEmail("");
    setPassword("");
  };
  const openRecover = () => {
    closeModal();
    dispatch(setModalRecover(true));
  };
  const openRegistration = () => {
    closeModal();
    dispatch(setModalRegistration(true));
  };
  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSignIn = async () => {
    const response = await API.SignIn({ email, password });
    if (response?.token) {
      dispatch(setUserData(response));
      window.sessionStorage.setItem(TOKEN, response.token);
      closeModal();
    }
  };

  return (
    <Modal open={auth} onClose={closeModal}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Авторизация</h1>
        <Button onClick={closeModal} className={styles.close}>
          <CloseModalIcon />
        </Button>
      </div>
      <Input value={email} onChange={handleSetEmail} type="email" placeholder="Email" />
      <Input value={password} onChange={handleSetPassword} type="password" placeholder="Пароль" />
      <div className={styles.btn}>
        <Button type="text" className={styles.btnText} onClick={openRecover}>
          Восстановить пароль
        </Button>
      </div>
      <Button type="filled" disabled={!email || !password} onClick={handleSignIn}>
        Войти
      </Button>
      <Button type="outline" onClick={openRegistration}>
        Регистрация
      </Button>
    </Modal>
  );
};

export default AuthModal;
