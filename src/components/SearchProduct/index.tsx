import React, { ChangeEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./searchProduct.module.scss";
import Button from "../Button";
import { CloseIcon } from "../../icons";
import { API, ProductsType } from "../../api";
import useDebounce from "../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { setAllProducts, setIsAmountProducts } from "../../store/products/actions";
import { setInputValue, setIsLoad, setIsSearchValue } from "../../store/settings/actions";
import Input from "../Input";

const SearchProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { inputValue } = useAppSelector((state) => state.settings);
  const { token } = useAppSelector((state) => state.user);
  const debounceValue = useDebounce<string>(inputValue, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setInputValue(e.target.value));
  const delValue = () => dispatch(setInputValue(""));
  const search = async () => {
    dispatch(setIsLoad(true));
    let newCards: ProductsType;
    if (debounceValue) {
      newCards = await API.SearchProducts(debounceValue);
      dispatch(setIsAmountProducts(newCards.length));
    } else {
      const { products, total } = await API.GetProducts();
      newCards = products;
      dispatch(setIsAmountProducts(total));
    }
    dispatch(setAllProducts(newCards));
    dispatch(setIsSearchValue(inputValue));
    dispatch(setIsLoad(false));
  };

  useEffect(() => {
    if (pathname !== "/" && debounceValue) navigate("/");
  }, [debounceValue]);

  useEffect(() => {
    if (pathname === "/" && token) search().catch((e) => console.error(e));
  }, [debounceValue, token, pathname]);

  return (
    <div className={styles.searchLb}>
      {token && (
        <>
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
        </>
      )}
    </div>
  );
};

export default SearchProduct;
