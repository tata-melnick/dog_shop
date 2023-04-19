import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Rating } from "../../../../../../components";
import styles from "./addReview.module.scss";
import { API, ProductType } from "../../../../../../api";

interface IAddReviewProps {
  productId: string;
  setData(post: ProductType): void;
}

const AddReview: React.FC<IAddReviewProps> = ({ productId, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [rate, setRate] = useState<number>(0);

  const { register, handleSubmit, reset } = useForm({ mode: "onSubmit" });
  const textRegister = register("review", {
    required: "review обязателен",
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const sendReview = async (data) => {
    try {
      const review = await API.AddReview(productId, { text: data.review, rating: rate });
      setShowForm(false);
      setData(review);
      setRate(0);
      reset();
      // eslint-disable-next-line no-alert
      alert("Ваш отзыв успешно отправлен");
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert("Ваш отзыв отправить не удалось");
    }
  };

  return (
    <div id="reviews" className={styles.headLine}>
      <h1 className={styles.title}>Отзывы</h1>
      <Button type="outline" onClick={toggleForm}>
        {showForm ? "Закрыть форму" : "Написать отзыв"}
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
    </div>
  );
};

export default AddReview;
