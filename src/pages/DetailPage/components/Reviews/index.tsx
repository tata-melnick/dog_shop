import React, { useState } from "react";
import { AddReview, ListReviews } from "./components";
import { useAppDispatch } from "../../../../store";
import { ProductType, ReviewType } from "../../../../api";
import { setProduct } from "../../../../store/products/actions";

interface IReviewsProps {
  productId: string;
  initReviews: Array<ReviewType>;
}

const Reviews: React.FC<IReviewsProps> = ({ productId, initReviews }) => {
  const dispatch = useAppDispatch();
  const [reviews, setReviews] = useState<Array<ReviewType>>([...initReviews].reverse() || null);
  const [text, setText] = useState<string>("");

  const setData = (product: ProductType) => {
    if (text) setText("");
    dispatch(setProduct(product));
    setReviews([...product.reviews].reverse());
  };

  return (
    <>
      <AddReview productId={productId} setData={setData} />
      <ListReviews reviews={reviews} setData={setData} />
    </>
  );
};

export default Reviews;
