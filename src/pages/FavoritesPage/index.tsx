import React from "react";
import styles from "./favoritesPage.module.scss";
import { CardsList, Loader, NotFound } from "../../components";
import { useAppSelector } from "../../store";
import Button from "../../components/Button";
import BackIcon from "../../icons/BackIcon";

const FavoritesPage: React.FC = () => {
  const { favorites, isLoad } = useAppSelector((store) => store.products);

  return (
    <div className={styles.container}>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className={styles.wrap}>
            <BackIcon />
            <Button link="products" className={styles.btn}>
              Назад
            </Button>
          </div>
          <h1 className={styles.title}>Избранное</h1>
          {favorites.length ? (
            <CardsList cards={favorites} />
          ) : (
            <NotFound
              title="В Избранном пока ничего нет"
              paragraph="Добавляйте товары в Избранное с помощью ❤️️"
            />
          )}
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
