import React from "react";
// import { useLocation } from "react-router-dom";
import { Review, ListReviews } from "./components";
// import { API, ProductType } from "../../../../api";
// import { useAppSelector } from "../../../../store";

// interface IReviewsProps {
//   onSendReview(): void;
//   reviews: ProductType["reviews"];
//   product: ProductType["product"];
// }

const Reviews: React.FC = () => {
  // const { search } = useLocation();
  // const dispatch = useAppDispatch();
  // const { all, reviews } = useAppSelector((state) => state.products);
  // const id = search.split("=")[1];
  // const [product, setProduct] = useState<ProductType>(null);
  // const [allReviews, setAllReviews] = useState<ProductType>(all.find((el) => el.id === id));
  //
  // useEffect(() => {
  //   API.AddNewReview(reviews, { text: reviews }).then((resp) => {
  //     setAllReviews(resp);
  //   });
  // }, []);

  // const [showForm, setShowForm] = useState<boolean>(false);
  // const [reviewsProduct, setReviewsProduct] = useState(reviews ?? []);
  //
  // const sendReview = async (data) => {
  //   const newReview = await API.AddNewReview(reviews, { text: data.review });
  //   onSendReview(newReview);
  //   setReviewsProduct((state) => [...newProduct.reviews]);
  //   setShowForm(false);
  //   console.log({ data });
  // };
  //
  // const textRegister = register("review", {
  //   required: "review обязателен",
  // });

  return (
    <>
      <Review />
      <ListReviews />
    </>
  );
};

export default Reviews;
