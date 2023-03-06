import React from "react";
import CardsList from "../../components/CardsList";
import styles from "./productsPage.module.scss";
import getIssues from "../../helpers/getIssue";
import { Loader, SortOptions, NotFound } from "../../components";
import { useAppSelector } from "../../store";

const ProductsPage: React.FC = () => {
  const { all, isLoad, amount, searchValue } = useAppSelector((store) => store.products);

  return (
    <div className={styles.container}>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          {searchValue && (
            <h1 className={styles.title}>
              По запросу <b>{searchValue}</b> {getIssues(amount, true)} {amount} {getIssues(amount)}
            </h1>
          )}
          {amount ? (
            <>
              <SortOptions />
              <CardsList cards={all} />
            </>
          ) : (
            <NotFound title="Простите, по вашему запросу товаров не надено." paragraph="" />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
