import { createContext } from "react";
import { ProductsType } from "../api";

interface ICardContext {
  cards: ProductsType;
  amount: number;
  searchValue: string;
  isLoad: boolean;
  setCards(cards: ProductsType): void;
  setAmount(value: number): void;
  setSearchValue(value: string): void;
  setIsLoad(value: boolean): void;
}

const CardContext = createContext<ICardContext>(null);

export default CardContext;
