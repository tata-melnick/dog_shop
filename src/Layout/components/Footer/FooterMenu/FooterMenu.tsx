import React from "react";
import Button from "../../../../components/Button/Button";
import styles from "./footerMenu.module.scss";

const FooterMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button link="#" className={styles.aHv}>
        Каталог
      </Button>
      <Button link="#" className={styles.aHv}>
        Оплата и доставка
      </Button>
      <Button link="#" className={styles.aHv}>
        Акции
      </Button>
      <Button link="#" className={styles.aHv}>
        Часто спрашивают
      </Button>
      <Button link="#" className={styles.aHv}>
        Новости
      </Button>
      <Button link="#" className={styles.aHv}>
        Обратная связь
      </Button>
      <Button link="#" className={styles.aHv}>
        Отзывы
      </Button>
      <Button link="#" className={styles.aHv}>
        Контакты
      </Button>
    </div>
  );
};

export default FooterMenu;
