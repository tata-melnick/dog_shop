import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./listReviews.module.scss";
import { API, ProductType, ReviewType, UserType } from "../../../../../api";
import { Button, Rating } from "../../../../../components";
import { TrashBinIcon } from "../../../../../icons";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { addNotify } from "../../../../../store/notifications/actions";

interface IListReviewsProps {
  setData(product: ProductType): void;
  reviews: Array<ReviewType>;
}

const ListReviews: React.FC<IListReviewsProps> = ({ setData, reviews }) => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { data } = useAppSelector((store) => store.user);
  const productId = search.split("=")[1];
  const [users, setUsers] = useState<Array<UserType>>(null);
  const [isReviews, setIsReviews] = useState<boolean>(false);
  const [reviewsProduct, setReviewsProduct] = useState([]);

  const deleteReview = async (commentId: string) => {
    try {
      const review = await API.DeleteReview(productId, commentId);
      setData(review);
      dispatch(addNotify({ text: "Ваш отзыв удалён", type: "success" }));
    } catch (error) {
      dispatch(addNotify({ text: "Ваш отзыв удалить не удалось", type: "error" }));
    }
  };

  const hideReviews = () => {
    setIsReviews(false);
    setReviewsProduct(() => [...reviews.slice(0, 5)]);
  };

  const showMore = () => {
    setIsReviews(true);
    setReviewsProduct([...reviews]);
  };

  useEffect(() => {
    API.GetUsers().then((resp) => setUsers(resp));
  }, []);

  useEffect(() => {
    if (reviews && reviews.length < 6) setReviewsProduct(reviews);
    else if (reviews && reviews.length > 5) setReviewsProduct([...reviews.slice(0, 5)]);
  }, [reviews]);

  if (!users || !users.length) return null;

  return (
    <div className={styles.container}>
      {users &&
        reviewsProduct &&
        reviewsProduct?.map((r) => (
          <div key={`r-${r?._id}`} className={styles.review}>
            <div className={styles.author}>
              <img className={styles.avatar} src={r?.author?.avatar} alt="avatar" />
              <div className={styles.info}>
                <div>{r?.author?.name}</div>
                <div className={styles.data}>
                  {new Date(r?.created_at).toLocaleString("ru", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
            <Rating rating={r?.rating} />
            <div className={styles.text}>{r?.text}</div>
            {data?._id === r?.author?._id && (
              <Button type="text" onClick={() => deleteReview(r?._id)} className={styles.btn}>
                <TrashBinIcon />
              </Button>
            )}
          </div>
        ))}
      {reviews?.length > 5 && (
        <Button type="filled" onClick={isReviews ? hideReviews : showMore}>
          {isReviews ? "Скрыть отзывы" : "Ещё отзывы"}
        </Button>
      )}
    </div>
  );
};

export default ListReviews;
