import React from "react";
import styles from "./productHeading.module.scss";
import { ProductType } from "../../../../../../api";
import BackIcon from "../../../../../../icons/BackIcon";
import Button from "../../../../../../components/Button";

interface IProductHeadingProps {
  name: ProductType["name"];
}

const ProductHeading: React.FC<IProductHeadingProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <BackIcon />
        <Button link="products" className={styles.btn}>
          Назад
        </Button>
      </div>
      <h1 className={styles.title}>{name}</h1>
      <div>stars</div>
    </div>
  );
};

export default ProductHeading;
