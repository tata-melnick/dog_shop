import React, { useState } from "react";
import cn from "classnames";
import styles from "./infoProduct.module.scss";
import Button from "../../../../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../../../../store";
import { API, ProductsType, ProductType } from "../../../../../../api";
import Like from "../../../../../../components/Like";
import { setFavoritesProducts } from "../../../../../../store/products/actions";
import { MinusIcon, PlusIcon, TruckIcon, QualityIcon } from "../../../../../../icons";

interface IInfoProductProps {
  price: ProductType["price"];
  discount: ProductType["discount"];
  likes: ProductType["likes"];
  id: ProductType["_id"];
}

const InfoProduct: React.FC<IInfoProductProps> = ({ price, discount, likes: initLikes, id }) => {
  const dispatch = useAppDispatch();
  const { all, favorites } = useAppSelector((state) => state.products);
  const { data } = useAppSelector((state) => state.user);
  const [likes, setLikes] = useState<Array<string>>(initLikes);
  const [amount, setAmount] = useState<number>(0);

  const amountMinus = () => setAmount(() => amount - 1);
  const amountPlus = () => setAmount(() => amount + 1);

  const handleLike = async () => {
    const response = await API.ChangeLikeProductStatus(id, !likes.includes(data?._id));
    setLikes(response.likes);

    let newFavorites: ProductsType;
    if (response.likes.includes(data?._id))
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
      <div className={styles.btns}>
        <div className={styles.controls}>
          <Button type="text" onClick={amountMinus} className={styles.btn} disabled={amount === 0}>
            <MinusIcon disabled={amount === 0} />
          </Button>
          <span className={styles.num}>{amount}</span>
          <Button type="text" onClick={amountPlus}>
            <PlusIcon />
          </Button>
        </div>
        <Button type="filled" className={styles.btn}>
          В корзину
        </Button>
      </div>
      <Like
        isLiked={likes && likes.includes(data?._id)}
        onClick={handleLike}
        outerClass={`${styles.sticky}`}
      >
        <span className={styles.favorites}>
          {likes && likes.includes(data?._id) ? "В избранном" : "В избранное"}
        </span>
      </Like>
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
      <div className={styles.delivery}>
        <QualityIcon />
        <div className={styles.conditions}>
          <h3 className={styles.title}>Гарантия качества</h3>
          <p className={styles.text}>
            Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все
            возможное, чтобы удовлетворить ваши нужды.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
