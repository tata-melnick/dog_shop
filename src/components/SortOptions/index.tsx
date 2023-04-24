import React, { useEffect } from "react";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../store";
import { ProductsType } from "../../api";
import Button from "../Button";
import { setAllProducts, setSortOption, SortValues } from "../../store/products/actions";
import styles from "./sortOptions.module.scss";

type SortOptionsType = Array<{ name: string; value: SortValues }>;

const options: SortOptionsType = [
  { name: "Популярные", value: "popular" },
  { name: "Новинки", value: "new" },
  { name: "Сначала дешёвые", value: "cheapFirst" },
  { name: "Сначала дорогие", value: "dearFirst" },
  { name: "По рейтингу", value: "rating" },
  { name: "По скидке", value: "discount" },
];

const SortOptions: React.FC = () => {
  const dispatch = useAppDispatch();
  const { all, sortOption } = useAppSelector((state) => state.products);

  const setCards = (cards: ProductsType) => dispatch(setAllProducts(cards));

  const sort = (value: SortValues) => {
    dispatch(setSortOption(value));
    switch (value) {
      case "popular": {
        setCards([...all.sort((a, b) => b.likes.length - a.likes.length)]);
        break;
      }
      case "new": {
        setCards([
          ...all.sort(
            (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          ),
        ]);
        break;
      }
      case "cheapFirst": {
        setCards([
          ...all.sort((a, b) => {
            const aD = Math.round(a.price - a.price * (a.discount / 100));
            const bD = Math.round(b.price - b.price * (b.discount / 100));
            return aD - bD;
          }),
        ]);
        break;
      }
      case "dearFirst": {
        setCards([
          ...all.sort((a, b) => {
            const aD = Math.round(a.price - a.price * (a.discount / 100));
            const bD = Math.round(b.price - b.price * (b.discount / 100));
            return bD - aD;
          }),
        ]);
        break;
      }
      case "rating": {
        setCards([
          ...all.sort((a, b) => {
            const aR = a.reviews.length
              ? a.reviews.reduce((sum, el) => sum + el.rating, 0) / a.reviews.length
              : 0;
            const bR = b.reviews.length
              ? b.reviews.reduce((sum, el) => sum + el.rating, 0) / b.reviews.length
              : 0;
            return bR - aR;
          }),
        ]);
        break;
      }
      case "discount": {
        setCards([...all.sort((a, b) => b.discount - a.discount)]);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    if (sortOption) sort(sortOption);
  }, []);

  return (
    <div className={styles.sort}>
      {options.map((el) => (
        <Button
          type="text"
          className={cn([styles.btn, { [styles.btnActive]: el.value === sortOption }])}
          key={el.value}
          onClick={() => sort(el.value)}
        >
          {el.name}
        </Button>
      ))}
    </div>
  );
};

export default SortOptions;
