import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Rating } from "../../../../../components";
import styles from "./addReview.module.scss";
import { API, ProductType } from "../../../../../api";
import { useAppDispatch } from "../../../../../store";
import { addNotify } from "../../../../../store/notifications/actions";

interface IAddReviewProps {
  productId: string;
  setData(product: ProductType): void;
}

const AddReview: React.FC<IAddReviewProps> = ({ productId, setData }) => {
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);
  const [rate, setRate] = useState<number>(1);

  const { register, handleSubmit, reset } = useForm({ mode: "onSubmit" });
  const textRegister = register("review", {
    required: "review обязателен",
  });

  const toggleForm = () => {
    setShowForm(!showForm);
    setRate(1);
  };

  const sendReview = async (data) => {
    const review = await API.AddReview(productId, { text: data.review, rating: rate });
    if ("error" in review || "err" in review)
      dispatch(addNotify({ text: "Ваш отзыв отправить не удалось", type: "error" }));
    else {
      setShowForm(false);
      setData(review);
      setRate(1);
      reset();
      dispatch(addNotify({ text: "Ваш отзыв успешно отправлен", type: "success" }));
    }
  };

  useEffect(() => {
    if (!showForm) reset();
  }, [showForm]);

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
