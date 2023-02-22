import React, { useContext } from "react";
import CardsList from "../../components/CardsList";
import styles from "./mainPage.module.scss";
import SortOptions from "../../components/SortOptions";
import CardContext from "../../context/cardContext";
import getIssues from "../../helpers/getIssue";
import NotFound from "../../components/NotFound";

const MainPage: React.FC = () => {
  const { amount, searchValue } = useContext(CardContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        По запросу <b>{searchValue}</b> {getIssues(amount, true)} {amount} {getIssues(amount)}
      </h1>
      {amount ? (
        <>
          <SortOptions />
          <CardsList />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default MainPage;
