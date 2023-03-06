import React from "react";
import Button from "../Button";
import styles from "./sortOptions.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { ProductsType } from "../../api";
import { setAllProducts } from "../../store/products/actions";

type SortValues = "popular" | "new" | "cheapFirst" | "dearFirst" | "rating" | "discount";
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
  const { all } = useAppSelector((state) => state.products);

  const setCards = (cards: ProductsType) => dispatch(setAllProducts(cards));

  const sort = (value: SortValues) => {
    switch (value) {
      case "popular": {
        setCards([...all.sort((a, b) => b.likes.length - a.likes.length)]);
        break;
      }
      case "new": {
        setCards([
          ...all.sort(
            (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          ),
        ]);
        break;
      }
      case "cheapFirst": {
        setCards([...all.sort((a, b) => a.price - b.price)]);
        break;
      }
      case "dearFirst": {
        setCards([...all.sort((a, b) => b.price - a.price)]);
        break;
      }
      case "rating": {
        setCards([
          ...all.sort((a, b) => {
            const aR = a.reviews.reduce((sum, el) => sum + el.rating, 0) / a.reviews.length;
            const bR = b.reviews.reduce((sum, el) => sum + el.rating, 0) / b.reviews.length;
            return aR - bR;
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

  return (
    <div className={styles.sort}>
      {options.map((el) => (
        <Button type="text" className={styles.btn} key={el.value} onClick={() => sort(el.value)}>
          {el.name}
        </Button>
      ))}
    </div>
  );
};

export default SortOptions;
