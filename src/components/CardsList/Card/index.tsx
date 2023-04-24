import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import Button from "../../Button";
import { API, ProductType, ProductsType } from "../../../api";
import styles from "./card.module.scss";
import Badge from "../../Badge";
import Like from "../../Like";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setFavoritesProducts } from "../../../store/products/actions";
import RouterNames from "../../../constants/routes";
import BasketButton from "../../BasketButton";

const Card: React.FC<ProductType> = (props) => {
  const { pictures, _id, price, name, discount, tags, likes: initLikes, wight } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { all, favorites } = useAppSelector((state) => state.products);
  const { data } = useAppSelector((state) => state.user);
  const [likes, setLikes] = useState<Array<string>>(initLikes);
  const [isNew, setIsNew] = useState<boolean>(false);

  const goToProduct = () => navigate(`${RouterNames.detail}?id=${_id}`);

  const handleLike = async () => {
    const response = await API.ChangeLikeProductStatus(_id, !likes.includes(data._id));
    setLikes(response.likes);

    let newFavorites: ProductsType;
    if (response.likes.includes(data._id))
      newFavorites = [...favorites, all.find((el) => el._id === response._id)];
    else newFavorites = favorites.filter((el) => el._id !== response._id);
    dispatch(setFavoritesProducts(newFavorites));
  };

  useEffect(() => {
    if (tags)
      tags.forEach((tag) => {
        if (tag.toLowerCase() === "new") setIsNew(true);
      });
  }, []);

  return (
    <div className={styles.card}>
      <div className={cn(styles.sticky, styles.stickyLeft)}>
        {isNew && <Badge label="new" color="violet" />}
        {!!discount && <Badge label={`-${discount}%`} color="yellow" />}
      </div>
      <Like
        isLiked={likes.includes(data?._id)}
        onClick={handleLike}
        outerClass={`${styles.sticky} ${styles.stickyRight}`}
      />
      <Button onClick={goToProduct} className={styles.link}>
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
        <div className={styles.wight}>{wight}</div>
        <p className={styles.name}>{name}</p>
      </Button>
      <BasketButton product={props} single className={styles.btn} />
    </div>
  );
};

export default Card;
