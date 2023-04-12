import React from "react";
import styles from "./product.module.scss";

import {
  DescriptionProduct,
  HeadLineProduct,
  ImageProduct,
  ImagesSelectorProduct,
  InfoProduct,
} from "./components";
import { ProductType } from "../../../../api";

interface IProductProps {
  product: ProductType;
}

const Product: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className={styles.container}>
      <HeadLineProduct name={product?.name} reviews={product?.reviews} />
      <div className={styles.productWrap}>
        <ImageProduct
          name={product?.name}
          tags={product?.tags}
          pictures={product?.pictures}
          discount={product?.discount}
        />
        <ImagesSelectorProduct pictures={product?.pictures} />
        <InfoProduct
          price={product?.price}
          discount={product?.discount}
          likes={product?.likes}
          id={product?._id}
        />
      </div>
      <DescriptionProduct description={product?.description} />
    </div>
  );
};

export default Product;
