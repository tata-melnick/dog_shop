import React from "react";
import styles from "./listReviews.module.scss";
// import { ProductType } from "../../../../../../api";
// import { Rating } from "../../../../../../components";

// interface IReviewsListProps {
//   reviews: ProductType["reviews"];
// }

const ListReviews: React.FC = () => {
  // console.log(reviews);
  // const [users, setUsers] = useState([]);
  // const [reviewsProduct, setReviewsProduct] = useState() (reviews ?? []);

  return (
    <div className={styles.reviews}>
      {/* {users && */}
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
