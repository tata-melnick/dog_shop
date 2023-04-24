import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./cardsList.module.scss";
import { ProductsType } from "../../api";
import Paginator from "../Paginator";

interface ICardsListProps {
  products: ProductsType;
}

const count = 12;
const CardsList: React.FC<ICardsListProps> = ({ products }) => {
  const [page, setPage] = useState<number>(0);
  const [cardsOnPage, setCardsOnPage] = useState<ProductsType>([]);

  useEffect(() => {
    setCardsOnPage(products.slice(page * count, page * count + count));
  }, [page, products]);

  return (
    <>
      <div className={style.cards}>
        {cardsOnPage && cardsOnPage.map((item) => <Card {...item} key={item._id} />)}
      </div>
      <Paginator page={page} onChange={setPage} count={Math.ceil(products.length / count)} />
    </>
  );
};

export default CardsList;
