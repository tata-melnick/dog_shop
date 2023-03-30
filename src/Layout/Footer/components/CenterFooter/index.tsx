import React from "react";
import { Button } from "../../../../components";
import styles from "./centerFooter.module.scss";

const CenterFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button link="#">Каталог</Button>
      <Button link="#">Оплата и доставка</Button>
      <Button link="#">Акции</Button>
      <Button link="#">Часто спрашивают</Button>
      <Button link="#">Новости</Button>
      <Button link="#">Обратная связь</Button>
      <Button link="#">Отзывы</Button>
      <Button link="#">Контакты</Button>
    </div>
  );
};

export default CenterFooter;
