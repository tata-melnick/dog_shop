import React from "react";
import Button from "../../../../components/Button";
import { LogoIcon } from "../../../../icons";
import styles from "./leftFooter.module.scss";

const LeftFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button link="#">
        <LogoIcon />
      </Button>
      <div className={styles.copyright}>© «Интернет-магазин DogFood.ru»</div>
    </div>
  );
};

export default LeftFooter;
