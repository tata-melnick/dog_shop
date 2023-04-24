import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./favoritesPage.module.scss";
import { CardsList, Loader, NotFound } from "../../components";
import { useAppSelector } from "../../store";
import Button from "../../components/Button";
import BackIcon from "../../icons/BackIcon";

const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();
  const { favorites } = useAppSelector((store) => store.products);
  const { isLoad } = useAppSelector((store) => store.settings);

  const goBack = () => navigate(-1);

  return (
    <div className={styles.container}>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className={styles.wrap}>
            <BackIcon />
            <Button onClick={goBack} className={styles.btn}>
              Назад
            </Button>
          </div>
          <h1 className={styles.title}>Избранное</h1>
          {favorites.length ? (
            <CardsList products={favorites} />
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
