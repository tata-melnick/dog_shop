import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product, Reviews } from "./components";
import styles from "./detailPage.module.scss";
import { API, ProductType } from "../../api";
import { Loader } from "../../components";
import { ImagesModal } from "../../Modals";

const DetailPage: React.FC = () => {
  const { search } = useLocation();
  const id = search.split("=")[1];
  const [product, setProduct] = useState<ProductType>(null);
  // const [reviews, setReviews] = useState<ProductType>(null);

  useEffect(() => {
    API.GetProductById(id).then((resp) => setProduct(resp));
  }, []);
  return (
    <div className={styles.container}>
      {!product ? (
        <Loader />
      ) : (
        <>
          <Product product={product} />
          <Reviews productId={product._id} />
          <ImagesModal />
        </>
      )}
    </div>
  );
};

export default DetailPage;
