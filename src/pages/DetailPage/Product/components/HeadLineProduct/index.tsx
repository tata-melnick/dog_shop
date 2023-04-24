import React from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { API, ProductType } from "../../../../../api";
import { BackIcon } from "../../../../../icons";
import { Button, Rating } from "../../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { setEditModal } from "../../../../../store/modals/actions";
import styles from "./headLineProduct.module.scss";

interface IHeadLineProductProps {
  name: ProductType["name"];
  reviews: ProductType["reviews"];
}

const HeadLineProduct: React.FC<IHeadLineProductProps> = ({ name, reviews }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.products);
  const { data } = useAppSelector((state) => state.user);
  const averageRating = reviews
    ? reviews.reduce((sum, el) => sum + el.rating, 0) / reviews.length
    : 0;

  const goBack = () => navigate(-1);
  const goToEdit = () => dispatch(setEditModal(true));
  const getStr = (num: number): string => {
    const lastNum = num % 10;
    if (lastNum > 4 || !num || (num > 10 && num < 20)) return `${num} отзывов`;
    if (lastNum > 1 && lastNum < 5) return `${num} отзыва`;
    if (lastNum === 1) return `${num} отзыв`;
    return "";
  };
  const deleteProduct = async () => {
    const resp = await API.DeleteProduct(product._id);
    if (!("err" in resp)) goBack();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <BackIcon />
        <Button onClick={goBack} className={styles.back}>
          Назад
        </Button>
        {product?.author?._id === data?._id && (
          <>
            <Button onClick={goToEdit} className={cn(styles.btn, styles.editBtn)}>
              Редактировать
            </Button>
            <Button onClick={deleteProduct} className={styles.btn}>
              Удалить
            </Button>
          </>
        )}
      </div>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.rateInfo}>
        <div className={styles.art}>
          Артикул: <b>2388907</b>
        </div>
        <Rating rating={averageRating} />
        <Button className={styles.reviews} link="#reviews">
          {getStr(reviews?.length)}
        </Button>
      </div>
    </div>
  );
};

export default HeadLineProduct;
