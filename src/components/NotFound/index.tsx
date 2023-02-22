import React from "react";
import Button from "../Button";
import NotFoundIcon from "../../icons/NotFoundIcon";
import styles from "./notFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <NotFoundIcon />
        <div className={styles.margin}>
          Простите, по вашему запросу <br />
          товаров не надено.
        </div>
        <Button type="outline">На главную</Button>
      </div>
    </div>
  );
};

export default NotFound;
