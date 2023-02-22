import { createContext } from "react";
import { ProductsType } from "../api";

interface ICardContext {
  cards: ProductsType;
  amount: number;
  searchValue: string;
  setCards(cards: ProductsType): void;
  setAmount(value: number): void;
  setSearchValue(value: string): void;
}

const CardContext = createContext<ICardContext>(null);

export default CardContext;
