import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./product.module.scss";
import { Loader } from "../../../../components";
import { useAppSelector } from "../../../../store";
import { API, ProductType } from "../../../../api";
import {
  ProductImage,
  ProductImagesSelector,
  ProductInfo,
  ProductDescription,
  ProductHeading,
} from "./components";

const Product: React.FC = () => {
  const { search } = useLocation();
  // const dispatch = useAppDispatch();
  const { all } = useAppSelector((state) => state.products);
  const id = search.split("=")[1];
  // const [product, setProduct] = useState<ProductType>(null);
  const [product, setProduct] = useState<ProductType>(all.find((el) => el.id === id));
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    API.GetProductById(id).then((resp) => {
      setProduct(resp);
      setIsLoad(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <ProductHeading name={product?.name} />
          <div className={styles.productWrap}>
            <ProductImage
              tags={product?.tags}
              pictures={product?.pictures}
              discount={product?.discount}
            />
            <ProductImagesSelector pictures={product?.pictures} />
            <ProductInfo
              price={product?.price}
              discount={product?.discount}
              likes={product?.likes}
              id={product?._id}
            />
          </div>
          <ProductDescription description={product?.description} />
        </>
      )}
    </div>
  );
};

export default Product;
