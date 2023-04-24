import React from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Button, Delivery, BasketButton } from "../../components";
import { TrashBinIcon, BackIcon } from "../../icons";
import RouterNames from "../../constants/routes";
import { deleteBasketItem } from "../../store/products/actions";
import { useAppDispatch, useAppSelector } from "../../store";
import styles from "./basketPage.module.scss";

const BasketPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { basket } = useAppSelector((state) => state.products);

  const goBack = () => navigate(-1);
  const goToProduct = (id: string) => navigate(`${RouterNames.detail}?id=${id}`);

  const basketAmount: any =
    basket.length !== 0 && basket.reduce((sum: any, el) => sum + el.amount, 0 as any);

  const getStr = (num: number): string => {
    const lastNum = num % 10;
    if (!num) return "пусто";
    if (lastNum > 4 || (num >= 10 && num <= 20)) return `${num} товаров`;
    if (lastNum > 1 && lastNum < 5) return `${num} товара`;
    if (lastNum === 1) return `${num} товар`;
    if (lastNum === 1) return `${num} товар`;
    return "";
  };

  const costGoods: any = basket.reduce(
    (sum: any, el) => sum + el.product.price * el.amount,
    0 as any
  );
  const total: any = basket.reduce(
    (sum: any, el) =>
      sum +
      Math.round((el.product.price - el.product.price * (el.product.discount / 100)) * el.amount),
    0 as any
  );
  const totalDiscount = costGoods - total;

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <BackIcon />
        <Button onClick={goBack} className={styles.btn}>
          Назад
        </Button>
      </div>
      <h2 className={styles.title}>
        В корзине <b>{getStr(basketAmount)}</b>
      </h2>
      <div className={styles.colLeft}>
        <div className={styles.products}>
          {basket.map(({ product }) => (
            <div key={`product-${product._id}`}>
              <div className={styles.product}>
                <Button className={styles.left} onClick={() => goToProduct(product._id)}>
                  <img className={styles.image} src={product?.pictures} alt="card__image" />
                  <div>
                    <p className={styles.name}>{product?.name}</p>
                    <div className={styles.wight}>{product?.wight}</div>
                  </div>
                </Button>
                <div className={styles.center}>
                  <div className={cn([styles.price, { [styles.priceOld]: !!product?.discount }])}>
                    {product?.price} ₽
                  </div>
                  {!!product.discount && (
                    <div className={cn(styles.price, styles.discount)}>
                      {Math.round(product.price - product.price * (product.discount / 100))} ₽
                    </div>
                  )}
                </div>
                <div className={styles.right}>
                  <BasketButton product={product} single className={styles.counter} />
                  <Button
                    className={styles.btnDel}
                    onClick={() => dispatch(deleteBasketItem(product._id))}
                  >
                    <TrashBinIcon />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.colRight}>
          <div className={styles.yourBasket}>
            <h2 className={styles.titleBasket}>Ваша корзина</h2>
            <div className={styles.info}>
              <div className={styles.position}>
                <p>Товары {getStr(basketAmount)}</p>
                <p>Скидка</p>
              </div>
              <div className={styles.sum}>
                <p>{costGoods} ₽</p>
                <p className={styles.sumDiscount}>
                  {totalDiscount > 0 && "-"} {totalDiscount} ₽
                </p>
              </div>
            </div>
            <div className={styles.total}>
              <p>Общая стоимость</p>
              <p className={styles.totalCost}>{total} ₽</p>
            </div>
            <Button type="filled">Оформить заказ</Button>
          </div>
          <Delivery />
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
