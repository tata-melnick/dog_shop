import React from "react";
import styles from "./delivery.module.scss";
import { GuaranteeIcon, TruckIcon } from "../../icons";

interface IDeliveryProps {
  withGuarantee?: boolean;
}

const Delivery: React.FC<IDeliveryProps> = ({ withGuarantee }) => {
  return (
    <div>
      <div className={styles.delivery}>
        <TruckIcon />
        <div className={styles.conditions}>
          <h3 className={styles.title}>Доставка по всему Миру!</h3>
          <p className={styles.text}>
            Доставка курьером — <span className={styles.bold}>от 399 ₽</span>
          </p>
          <p className={styles.text}>
            Доставка в пункт выдачи — <span className={styles.bold}>от 199 ₽</span>
          </p>
        </div>
      </div>
      {withGuarantee && (
        <div className={styles.delivery}>
          <GuaranteeIcon />
          <div className={styles.conditions}>
            <h3 className={styles.title}>Гарантия качества</h3>
            <p className={styles.text}>
              Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все
              возможное, чтобы удовлетворить ваши нужды.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
