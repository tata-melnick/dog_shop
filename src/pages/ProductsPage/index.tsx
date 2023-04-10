import React from "react";
import CardsList from "../../components/CardsList";
import styles from "./productsPage.module.scss";
import getIssues from "../../helpers/getIssue";
import { Loader, SortOptions, NotFound, NotAuth } from "../../components";
import { useAppSelector } from "../../store";

const ProductsPage: React.FC = () => {
  const { all, amount } = useAppSelector((store) => store.products);
  const { isLoad, searchValue } = useAppSelector((store) => store.settings);
  const { token } = useAppSelector((store) => store.user);

  return (
    <div className={styles.container}>
      {!isLoad && !token && <NotAuth />}
      {isLoad && <Loader />}
      {token && !isLoad && (
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
