import React from "react";
import Button from "../../../../components/Button/Button";
import Logo from "../../../../icons/Logo";
import styles from "./footerLogo.module.scss";

const FooterLogo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button link="#">
        <Logo />
      </Button>
      <div className={styles.copyright}>© «Интернет-магазин DogFood.ru»</div>
    </div>
  );
};

export default FooterLogo;
