import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./error.module.scss";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 not found</h1>
      <Button type="outline" onClick={goToProducts}>
        На главную
      </Button>
    </div>
  );
};

export default NotFoundPage;
