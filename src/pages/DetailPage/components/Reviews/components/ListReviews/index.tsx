import React from "react";
// import { ProductType } from "../../../../../../api";
import styles from "./listReviews.module.scss";
// import { Rating } from "../../../../../../components";

// interface IListReviewsProps {
//   reviews: ProductType["reviews"];
// }

const ListReviews: React.FC = () => {
  // console.log(reviews);
  // const [user, setUser] = useState([]);
  // const [reviewsProduct, setReviewsProduct] = useState()(reviews ?? []);

  return (
    <div className={styles.reviews}>
      {/* {user && */}
      {/*  reviewsProduct.map((r) => ( */}
      {/*    <div key={r._id}> */}
      {/*      <div> */}
      {/*        <div> */}
      {/*          <span>{getUser(r.author)}</span> */}
      {/*          <span>{new Date(r.created_at).toLocaleString("ru", options)}</span> */}
      {/*        </div> */}
      {/*        <Rating rating={r.rating} /> */}
      {/*      </div> */}
      {/*      <div className={styles.text}> */}
      {/*        <span>{r.text}</span> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*  ))} */}
    </div>
  );
};

export default ListReviews;
