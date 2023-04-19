import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./headLineProduct.module.scss";
import { ProductType } from "../../../../../../api";
import BackIcon from "../../../../../../icons/BackIcon";
import { Button, Rating } from "../../../../../../components";

interface IHeadLineProductProps {
  name: ProductType["name"];
  reviews: ProductType["reviews"];
}

const HeadLineProduct: React.FC<IHeadLineProductProps> = ({ name, reviews }) => {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/");
  const averageRating = reviews
    ? reviews.reduce((sum, el) => sum + el.rating, 0) / reviews.length
    : 0;
  const getStr = (num: number): string => {
    const lastNum = num % 10;
    if (lastNum > 4 || !num || (num > 10 && num < 20)) return `${num} отзывов`;
    if (lastNum > 1 && lastNum < 5) return `${num} отзыва`;
    if (lastNum === 1) return `${num} отзыв`;
    return "";
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <BackIcon />
        <Button onClick={goToProducts} className={styles.btn}>
          Назад
        </Button>
      </div>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.rateInfo}>
        <div className={styles.art}>
          Артикул: <b>2388907</b>
        </div>
        <Rating rating={averageRating} />
        <Button link="#reviews" className={styles.reviews}>
          {getStr(reviews?.length)}
        </Button>
      </div>
    </div>
  );
};

export default HeadLineProduct;
