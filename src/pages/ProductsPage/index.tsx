import React, { useContext } from "react";
import CardsList from "../../components/CardsList";
import styles from "./productsPage.module.scss";
import SortOptions from "../../components/SortOptions";
import CardContext from "../../context/cardContext";
import getIssues from "../../helpers/getIssue";
import NotFound from "../../components/NotFound";
import { Loader } from "../../components";

const ProductsPage: React.FC = () => {
  const { amount, searchValue, isLoad } = useContext(CardContext);

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
              <CardsList />
            </>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
