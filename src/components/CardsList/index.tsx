import React, { useContext } from "react";
import Card from "../Card";
import style from "./cardsList.module.scss";
import CardContext from "../../context/cardContext";

interface ICardsListProps {
  product?: string;
  onProductLike?: string;
  setCounter?(count: string): void;
  handleProductLike?(): void;
}

const CardsList: React.FC<ICardsListProps> = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className={style.cards}>
      {cards && cards.map((item) => <Card {...item} key={item._id} />)}
    </div>
  );
};

export default CardsList;
