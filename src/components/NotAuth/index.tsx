import React from "react";
import Button from "../Button";
import styles from "./notAuth.module.scss";
import { setModalAuth } from "../../store/modals/actions";
import { useAppDispatch } from "../../store";
import { DogIcon } from "../../icons";

const NotAuth: React.FC = () => {
  const dispatch = useAppDispatch();
  const goToAuth = () => dispatch(setModalAuth(true));

  return (
    <div className={styles.container}>
      <div className={styles.notAuth}>
        <DogIcon />
        <div className={styles.title}>
          Авторизуйтесь, чтобы воспользоваться услугами нашего магазина.
        </div>
        <Button type="outline" onClick={goToAuth}>
          Авторизоваться
        </Button>
      </div>
    </div>
  );
};

export default NotAuth;
