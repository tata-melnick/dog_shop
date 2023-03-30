import React from "react";
import styles from "./descriptionProduct.module.scss";
import { ProductType } from "../../../../../../api";

interface IDescriptionProductProps {
  description: ProductType["description"];
}

const DescriptionProduct: React.FC<IDescriptionProductProps> = ({ description }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Описание</h2>
      <div className={styles.mB}>{description}</div>
      <h2 className={styles.title}>Характеристики</h2>
      <div className={styles.grid}>
        <div className={styles.naming}>Вес</div>
        <div className={styles.description}>1 шт 120-200 грамм</div>
        <div className={styles.naming}>Цена</div>
        <div className={styles.description}>490 ₽ за 100 грамм</div>
        <div className={styles.naming}>Польза</div>
        <div className={styles.description}>
          <p>
            Большое содержание аминокислот и микроэлементов оказывает положительное воздействие на
            общий обмен веществ собаки.
          </p>
          <p>Способствуют укреплению десен и жевательных мышц.</p>
          <p>Развивают зубочелюстной аппарат, отвлекают собаку во время смены зубов.</p>
          <p>
            Имеет цельную волокнистую структуру, при разжевывание получается эффект зубной щетки,
            лучше всего очищает клыки собак.
          </p>
          <p>Следует учесть высокую калорийность продукта.</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionProduct;
