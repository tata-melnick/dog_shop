import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Rating } from "../../../../../../components";
import styles from "./addReview.module.scss";
import { API } from "../../../../../../api";

interface IAddReviewProps {
  productId: string;
}

const AddReview: React.FC<IAddReviewProps> = ({ productId }) => {
  const [showForm, setShowForm] = useState(false);
  const [rate, setRate] = useState<number>(0);

  const { register, handleSubmit, reset } = useForm({ mode: "onSubmit" });
  const textRegister = register("review", {
    required: "review обязателен",
  });

  const sendReview = async (data) => {
    try {
      await API.AddNewReview(productId, { text: data.review, rating: rate });
      setShowForm(false);
      reset();
      // eslint-disable-next-line no-alert
      alert("Ваш отзыв успешно отправлен");
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert("Ваш отзыв отправить не удалось");
    }
  };

  return (
    <div className={styles.headLine}>
      <h1 className={styles.title}>Отзывы</h1>
      <Button type="outline" className={styles.btn} onClick={() => setShowForm(true)}>
        Написать отзыв
      </Button>
      {showForm && (
        <Form submitForm={handleSubmit(sendReview)}>
          <Rating rating={rate} setRating={setRate} />
          <textarea placeholder="Ваш отзыв" className={styles.text} {...textRegister} />
          <Button submit type="filled">
            Отправить
          </Button>
        </Form>
      )}
      {/* <div className={styles.showMore}> */}
      {/*  <span onClick={showMore}>Еще отзывы</span> */}
      {/*  <span onClick={hideReviews}>Скрыть отзывы</span> */}
      {/* </div> */}
      {/* <div className={styles.images}> */}
      {/*  <h3 className={cn(styles.images, styles.title)}>Фотографии наших покупателей</h3> */}
      {/*  <div className={styles.images} /> */}
      {/* </div> */}
    </div>
  );
};

export default AddReview;
