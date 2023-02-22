import React from "react";
import Button from "../../components/Button";
import styles from "./error.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 no found</h1>
      <Button type="outline">На главную</Button>
    </div>
  );
};

export default NotFoundPage;
