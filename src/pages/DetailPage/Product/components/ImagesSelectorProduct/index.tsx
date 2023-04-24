import React from "react";
import styles from "./imagesSelectorProduct.module.scss";
import { ProductType } from "../../../../../api";

interface IImagesSelectorProductProps {
  pictures: ProductType["pictures"];
}

const ImagesSelectorProduct: React.FC<IImagesSelectorProductProps> = ({ pictures }) => {
  return <img className={styles.imageBtn} src={pictures} alt="img" />;
};

export default ImagesSelectorProduct;
