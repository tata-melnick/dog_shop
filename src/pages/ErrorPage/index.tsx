import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./error.module.scss";
import NotFoundIcon from "../../icons/NotFoundIcon";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/");

  return (
    <div className={styles.container}>
      <NotFoundIcon />
      <h1 className={styles.title}>Страница не найдена</h1>
      <Button type="outline" onClick={goToProducts}>
        На главную
      </Button>
    </div>
  );
};

export default NotFoundPage;
