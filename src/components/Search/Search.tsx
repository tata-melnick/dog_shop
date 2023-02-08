import React from "react";
import styles from "./search.module.scss";
import Button from "../Button/Button";
import Close from "../../icons/Close";
import stylesBtn from "../Button/button.module.scss";

interface ISearchProps {
  children?: React.ReactNode;
}

const Search: React.FC<ISearchProps> = () => {
  return (
    <label htmlFor="close" className={styles.searchLb}>
      <input type="text" id="close" className={styles.input} placeholder="Поиск" />
      <Button link="#" className={stylesBtn.btnClose}>
        <Close />
      </Button>
    </label>
  );
};

export default Search;
