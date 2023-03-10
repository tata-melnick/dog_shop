import React from "react";
import styles from "./productImagesSelector.module.scss";
import { ProductType } from "../../../../../../api";

interface IProductCenterProps {
  pictures: ProductType["pictures"];
}

const ProductImagesSelector: React.FC<IProductCenterProps> = ({ pictures }) => {
  return <img className={styles.imageBtn} src={pictures} alt="img" />;
};

export default ProductImagesSelector;
