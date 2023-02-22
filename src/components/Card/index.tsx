import React, { useState } from "react";
import cn from "classnames";
import Button from "../Button";
import { API, ProductType } from "../../api";
import styles from "./card.module.scss";
import Badge from "../Badge";
import Like from "../Like";
import data from "../../data.json";

const Card: React.FC<ProductType> = ({
  pictures,
  _id,
  price,
  name,
  discount,
  tags,
  likes: initLikes,
}) => {
  const [likes, setLikes] = useState<Array<string>>(initLikes);

  const handleLike = async () => {
    const response = await API.ChangeLikeProductStatus(_id, !likes.includes(data.id));
    setLikes(response.likes);
  };

  return (
    <div className={styles.card}>
      <div className={cn(styles.sticky, styles.stickyLeft)}>
        {tags.includes("new") && <Badge label="new" color="violet" />}
        {!!discount && <Badge label={`${discount}%`} color="yellow" />}
      </div>
      <Like
        isLiked={likes.includes(data.id)}
        onClick={handleLike}
        outerClass={`${styles.sticky} ${styles.stickyRight}`}
      />
      <Button link="#" className={styles.link}>
        <img
          className={cn([styles.image, { [styles.imageMb]: !discount }])}
          src={pictures}
          alt="card__image"
        />
        <div className={cn([styles.price, { [styles.priceOld]: !!discount }])}>{price} ₽</div>
        {!!discount && (
          <div className={cn(styles.price, styles.discount)}>
            {Math.round(price - price * (discount / 100))} ₽
          </div>
        )}
        <div className={styles.wight}>1шт</div>
        <p className={styles.name}>{name}</p>
      </Button>
      <Button type="filled">В корзину</Button>
    </div>
  );
};

export default Card;
