import React from "react";
import { AddReview, ListReviews } from "./components";

interface IReviewsProps {
  productId: string;
}

const Reviews: React.FC<IReviewsProps> = ({ productId }) => {
  return (
    <>
      <AddReview productId={productId} />
      <ListReviews />
    </>
  );
};

export default Reviews;
