import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./listReviews.module.scss";
import { API, ProductType, ReviewType, UserType } from "../../../../../../api";
import { Button, Rating } from "../../../../../../components";
import { TrashBinIcon } from "../../../../../../icons";
import { useAppSelector } from "../../../../../../store";

interface IListReviewsProps {
  setData(post: ProductType): void;
  reviews: Array<ReviewType>;
}

const ListReviews: React.FC<IListReviewsProps> = ({ setData, reviews }) => {
  const { search } = useLocation();
  const { data } = useAppSelector((store) => store.user);
  const productId = search.split("=")[1];

  const [users, setUsers] = useState<Array<UserType>>(null);

  // const getUser = (id): UserType => {
  //   if (!users.length) return null;
  //
  //   const user = users.find((e) => e._id === id);
  //   if (user?.avatar.includes("default-image")) {
  //     return {
  //       ...user,
  //       avatar: "https://thumbs.dreamstime.com/b/road-to-love-trees-shape-heart-58864200.jpg",
  //     };
  //   }
  //   return user;
  // };

  const deleteReview = async (commentId: string) => {
    try {
      const review = await API.DeleteReview(productId, commentId);
      setData(review);
      // eslint-disable-next-line no-alert
      alert("Ваш отзыв далён");
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert("Ваш отзыв отправить не удалось");
    }
  };

  useEffect(() => {
    API.GetUsers().then((resp) => setUsers(resp));
  }, []);

  if (!users || !users.length) return null;

  return (
    <div className={styles.reviews}>
      {users &&
        reviews &&
        reviews?.map((r) => (
          <div key={`r-${r._id}`} className={styles.review}>
            <div className={styles.author}>
              <img className={styles.avatar} src={r.author?.avatar} alt="avatar" />
              <div className={styles.info}>
                <div>{r.author?.name}</div>
                <div className={styles.data}>
                  {new Date(r.created_at).toLocaleString("ru", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
            <Rating rating={r.rating} />
            <div className={styles.text}>{r.text}</div>
            {data._id === r.author._id && (
              <Button type="text" onClick={() => deleteReview(r._id)} className={styles.btn}>
                <TrashBinIcon />
              </Button>
            )}
          </div>
        ))}
    </div>
  );
};

export default ListReviews;
