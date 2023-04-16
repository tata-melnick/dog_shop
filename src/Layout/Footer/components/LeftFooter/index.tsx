import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import { LogoIcon } from "../../../../icons";
import styles from "./leftFooter.module.scss";

const LeftFooter: React.FC = () => {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/");

  return (
    <div className={styles.container}>
      <Button onClick={goToProducts}>
        <LogoIcon />
      </Button>
      <div className={styles.copyright}>© «Интернет-магазин DogFood.ru»</div>
    </div>
  );
};

export default LeftFooter;
