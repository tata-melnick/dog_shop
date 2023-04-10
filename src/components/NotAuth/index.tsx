import React from "react";
import Button from "../Button";
import NotFoundIcon from "../../icons/NotFoundIcon";
import styles from "./notAuth.module.scss";
import { setModalAuth } from "../../store/modals/actions";
import { useAppDispatch } from "../../store";

const NotAuth: React.FC = () => {
  const dispatch = useAppDispatch();
  const goToAuth = () => dispatch(setModalAuth(true));

  return (
    <div className={styles.container}>
      <div className={styles.notAuth}>
        <NotFoundIcon />
        <div className={styles.title}>
          Авторизуйтесь, чтобы воспользоваться услугами нашего магазина.
        </div>
        <Button type="outline" onClick={goToAuth}>
          К авторизации
        </Button>
      </div>
    </div>
  );
};

export default NotAuth;
