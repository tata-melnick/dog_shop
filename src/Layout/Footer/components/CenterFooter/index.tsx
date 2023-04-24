import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";
import styles from "./centerFooter.module.scss";
import { useAppSelector } from "../../../../store";

const CenterFooter: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);

  const goToProducts = () => navigate("/");
  const goToFaq = () => {
    !token ? navigate("/") : navigate("/faq");
  };

  return (
    <div className={styles.container}>
      <Button type="text" onClick={goToProducts}>
        Каталог
      </Button>
      <Button type="text">Оплата и доставка</Button>
      <Button type="text">Акции</Button>
      <Button type="text" onClick={goToFaq}>
        Часто спрашивают
      </Button>
      <Button type="text">Новости</Button>
      <Button type="text">Обратная связь</Button>
      <Button type="text">Отзывы</Button>
      <Button type="text">Контакты</Button>
    </div>
  );
};

export default CenterFooter;
