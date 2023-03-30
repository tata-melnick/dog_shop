import React from "react";
// import cn from "classnames";
// import { useForm } from "react-hook-form";
import { Button } from "../../../../../../components";
import styles from "./review.module.scss";
// import { ProductType } from "../../../../../../api";

// interface IReviewsHeadLineProps {
//   reviews: ProductType["reviews"];
// }

const Review: React.FC = () => {
  // const [showForm, setShowForm] = useState<boolean>(false);
  // const [reviewsProduct, setReviewsProduct] = useState(reviews ?? []);
  //
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: "onSubmit" });
  //
  // const sendReview = async (data) => {
  //   const newProduct = await API.AddNewReview(product, { text: data.review });
  //   onSendReview(newProduct);
  //   setReviewsProduct((state) => [...newProduct.reviews]);
  //   setShowForm(false);
  //   console.log({ data });
  // };
  //
  // const textRegister = register("review", {
  //   required: "review обязателен",
  // });

  return (
    <div className={styles.headLine}>
      <h1 className={styles.title}>Отзывы</h1>
      <Button type="outline" className={styles.btn}>
        Написать отзыв
      </Button>
      {/* {showForm && ( */}
      {/* <div>/!*<Form />*!/</div> */}
      {/* )} */}
      {/* <div className={styles.images}> */}
      {/*  <h3 className={cn(styles.images, styles.title)}>Фотографии наших покупателей</h3> */}
      {/*  <div className={styles.images} /> */}
      {/* </div> */}
    </div>
  );
};

export default Review;
