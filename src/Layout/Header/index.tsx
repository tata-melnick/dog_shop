import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { LogoIcon, FavoritesIcon, BasketIcon, ProfileIcon } from "../../icons";
import { Search, Button, Bubble } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";
import { setModalAuth } from "../../store/modals/actions";
import RouterNames from "../../constants/routes";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favorites } = useAppSelector((store) => store.products);

  const goToFavorites = () => navigate(RouterNames.favorites);
  const openAuthModal = () => dispatch(setModalAuth(true));

  return (
    <div className={styles.container}>
      <Button link="#">
        <LogoIcon />
      </Button>
      <Search />
      <div className={styles.icon}>
        <Button onClick={goToFavorites} className={styles.iconMargin}>
          {favorites.length !== 0 && <Bubble>{favorites.length}</Bubble>}
          <FavoritesIcon />
        </Button>
        <Button type="link" className={styles.iconMargin}>
          <Bubble>10</Bubble>
          <BasketIcon />
        </Button>
        <Button type="link" onClick={openAuthModal}>
          <ProfileIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
