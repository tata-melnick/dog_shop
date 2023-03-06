import React from "react";
import Card from "./Card";
import style from "./cardsList.module.scss";
import { ProductsType } from "../../api";

interface ICardsListProps {
  cards: ProductsType;
}

const CardsList: React.FC<ICardsListProps> = ({ cards }) => {
  return (
    <div className={style.cards}>
      {cards && cards.map((item) => <Card {...item} key={item._id} />)}
    </div>
  );
};

export default CardsList;
