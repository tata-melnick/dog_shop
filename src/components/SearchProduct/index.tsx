import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styles from "./searchProduct.module.scss";
import Button from "../Button";
import { CloseIcon } from "../../icons";
import CardContext from "../../context/cardContext";
import { API, ProductsType } from "../../api";
import useDebounce from "../../helpers/debounce";

const SearchProduct: React.FC = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce<string>(value, 2000);
  const { setCards, setAmount, setSearchValue, setIsLoad } = useContext(CardContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const delValue = () => setValue("");

  const search = async () => {
    setIsLoad(true);
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
    setIsLoad(false);
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
        <Button onClick={delValue} link="#" className={styles.btnClose}>
          <CloseIcon />
        </Button>
      )}
    </label>
  );
};

export default SearchProduct;
