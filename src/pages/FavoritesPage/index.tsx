import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import styles from "./favoritesPage.module.scss";
import { CardsList, Loader, NotFound } from "../../components";
import { useAppSelector } from "../../store";
import Button from "../../components/Button";
import BackIcon from "../../icons/BackIcon";
import RouterNames from "../../constants/routes";

const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();
  const { favorites } = useAppSelector((store) => store.products);
  const { isLoad } = useAppSelector((store) => store.settings);

  const goBack = () => navigate(-1);
  const goChart = () => navigate(RouterNames.chart);

  return (
    <div className={styles.container}>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className={styles.headline}>
            <div>
              <div className={styles.wrap}>
                <BackIcon />
                <Button onClick={goBack} className={styles.btn}>
                  Назад
                </Button>
              </div>
              <h1 className={styles.title}>Избранное</h1>
            </div>
            <Button onClick={goChart} className={cn(styles.btn, styles.editBtn)}>
              Посмотреть популярные товары
            </Button>
          </div>
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
