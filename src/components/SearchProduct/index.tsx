import React, { ChangeEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
} from "../../store/products/actions";
import { setInputValue, setIsLoad, setIsSearchValue } from "../../store/settings/actions";
import Input from "../Input";

const SearchProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { inputValue } = useAppSelector((state) => state.settings);
  const { data, token } = useAppSelector((state) => state.user);
  const debounceValue = useDebounce<string>(inputValue, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setInputValue(e.target.value));
  const delValue = () => dispatch(setInputValue(""));

  const search = async () => {
    if (!token) return;
    dispatch(setIsLoad(true));
    let newCards: ProductsType;
    let newFavorites: ProductsType;
    if (debounceValue) {
      newCards = await API.SearchProducts(debounceValue);
      dispatch(setIsAmountProducts(newCards.length));
      navigate("/");
    } else {
      const { products, total } = await API.GetProducts();
      newCards = products;
      dispatch(setIsAmountProducts(total));
      newFavorites = newCards.filter((el) => el.likes.includes(data?._id));
      // newFavorites = favorites?.filter((el) =>
      //   el.name.toLowerCase().includes(debounceValue.toLowerCase())
      // );
      dispatch(setFavoritesProducts(newFavorites));
    }
    dispatch(setAllProducts(newCards));
    dispatch(setIsSearchValue(inputValue));
    dispatch(setIsLoad(false));
  };

  useEffect(() => {
    search().catch((e) => console.error(e));
  }, [debounceValue, token, data, pathname]);

  return (
    <div className={styles.searchLb}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        id="close"
        placeholder="Поиск"
        place="search"
      />
      {!!inputValue && (
        <Button onClick={delValue} link="#" className={styles.btnClose}>
          <CloseIcon />
        </Button>
      )}
    </div>
  );
};

export default SearchProduct;
