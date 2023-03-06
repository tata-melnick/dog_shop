import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./searchProduct.module.scss";
import Button from "../Button";
import { CloseIcon } from "../../icons";
import { API, ProductsType } from "../../api";
import useDebounce from "../../helpers/debounce";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setAllProducts,
  setFavoritesProducts,
  setIsAmountProducts,
  setIsLoadProducts,
  setIsSearchValue,
} from "../../store/products/actions";
import data from "../../data.json";

const SearchProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.products);
  const [value, setValue] = useState("");
  const debounceValue = useDebounce<string>(value, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const delValue = () => setValue("");

  const search = async () => {
    dispatch(setIsLoadProducts(true));
    let newCards: ProductsType;
    let newFavorites: ProductsType;
    if (debounceValue) {
      newCards = await API.SearchProducts(debounceValue);
      dispatch(setIsAmountProducts(newCards.length));
      newFavorites = favorites.filter((el) =>
        el.name.toLowerCase().includes(debounceValue.toLowerCase())
      );
    } else {
      const { products, total } = await API.GetProducts();
      newCards = products;
      dispatch(setIsAmountProducts(total));
      newFavorites = newCards.filter((el) => el.likes.includes(data.id));
    }
    dispatch(setIsSearchValue(value));
    dispatch(setAllProducts(newCards));
    dispatch(setFavoritesProducts(newFavorites));
    dispatch(setIsLoadProducts(false));
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
