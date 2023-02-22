import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styles from "./search.module.scss";
import Button from "../Button";
import { CloseIcon } from "../../icons";
import stylesBtn from "../Button/button.module.scss";
import CardContext from "../../context/cardContext";
import { API, ProductsType } from "../../api";
import useDebounce from "../../helpers/debounce";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce<string>(value, 2000);
  const { setCards, setAmount, setSearchValue } = useContext(CardContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const delValue = () => setValue("");

  const search = async () => {
    let newCards: ProductsType;
    if (debounceValue) {
      newCards = await API.SearchProducts(debounceValue);
      setAmount(newCards.length);
    } else {
      const { products, total } = await API.GetProducts();
      newCards = products;
      setAmount(total);
    }
    setSearchValue(value);
    setCards(newCards);
  };

  useEffect(() => {
    search().catch((e) => console.error(e));
  }, [debounceValue]);

  return (
    <label htmlFor="close" className={styles.searchLb}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        id="close"
        className={styles.input}
        placeholder="Поиск"
      />
      {!!value && (
        <Button onClick={delValue} link="#" className={stylesBtn.btnClose}>
          <CloseIcon />
        </Button>
      )}
    </label>
  );
};

export default Search;
