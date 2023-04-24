import React, { useState } from "react";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { API, ProductsType, ProductType } from "../../../../../api";
import { setFavoritesProducts } from "../../../../../store/products/actions";
import { BasketButton, Delivery, Like } from "../../../../../components";
import styles from "./infoProduct.module.scss";

interface IInfoProductProps {
  product: ProductType;
}

const InfoProduct: React.FC<IInfoProductProps> = ({ product }) => {
  const { price, discount, likes: initLikes, _id } = product;
  const dispatch = useAppDispatch();
  const { all, favorites } = useAppSelector((state) => state.products);
  const { data } = useAppSelector((state) => state.user);
  const [likes, setLikes] = useState<Array<string>>(initLikes);

  const handleLike = async () => {
    const response = await API.ChangeLikeProductStatus(_id, !likes.includes(data?._id));
    setLikes(response.likes);

    let newFavorites: ProductsType;
    if (response.likes?.includes(data?._id))
      newFavorites = [...favorites, all.find((el) => el._id === response._id)];
    else newFavorites = favorites.filter((el) => el._id !== response._id);
    dispatch(setFavoritesProducts(newFavorites));
  };

  return (
    <div className={styles.container}>
      <div className={cn([styles.price, { [styles.priceOld]: !!discount }])}>{price} ₽</div>
      {!!discount && (
        <div className={cn(styles.price, styles.discount)}>
          {price && discount && Math.round(price - price * (discount / 100))} ₽
        </div>
      )}
      <BasketButton product={product} className={styles.btn} />
      <Like
        isLiked={likes && likes.includes(data?._id)}
        onClick={handleLike}
        outerClass={`${styles.sticky}`}
      >
        <span className={styles.favorites}>
          {likes && likes.includes(data?._id) ? "В избранном" : "В избранное"}
        </span>
      </Like>
      <Delivery withGuarantee />
    </div>
  );
};

export default InfoProduct;
