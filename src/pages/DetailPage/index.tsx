import React from "react";
import { Product, Reviews } from "./components";
import styles from "./detailPage.module.scss";

const DetailPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Product />
      <Reviews />
    </div>
  );
};

export default DetailPage;
