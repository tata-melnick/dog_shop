import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Product, Reviews } from "./components";
import styles from "./detailPage.module.scss";
import { API } from "../../api";
import { Loader } from "../../components";
import { ImagesModal } from "../../Modals";
import { useAppDispatch, useAppSelector } from "../../store";
import { setProductDetail } from "../../store/products/actions";

const DetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const productId = search.split("=")[1];
  const { product } = useAppSelector((state) => state.products);

  useEffect(() => {
    API.GetProductById(productId).then((resp) => {
      dispatch(setProductDetail(resp));
    });
    return () => {
      dispatch(setProductDetail(null));
    };
  }, []);

  return (
    <div className={styles.container}>
      {!product ? (
        <Loader />
      ) : (
        <>
          <Product product={product} />
          <Reviews productId={product?._id} initReviews={product.reviews} />
          <ImagesModal />
        </>
      )}
    </div>
  );
};

export default DetailPage;
