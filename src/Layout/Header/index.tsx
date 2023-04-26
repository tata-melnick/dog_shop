import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { LogoIcon, FavoritesIcon, BasketIcon, ProfileIcon, GoOutIcon } from "../../icons";
import { Search, Button } from "../../components";
import Bubble from "./Bubble";
import { useAppDispatch, useAppSelector } from "../../store";
import { setModalAuth } from "../../store/modals/actions";
import RouterNames from "../../constants/routes";
import { setUserData } from "../../store/user/actions";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favorites, basket } = useAppSelector((store) => store.products);
  const { token } = useAppSelector((store) => store.user);
  const basketAmount: any =
    basket.length !== 0 && basket.reduce((sum: any, el) => sum + el.amount, 0 as any);

  const goToProducts = () => navigate("/");
  const goToFavorites = () => navigate(RouterNames.favorites);
  const goToProfile = () => navigate(RouterNames.profile);
  const goToBasket = () => navigate(RouterNames.basket);
  const openAuthModal = () => dispatch(setModalAuth(true));
  const logout = () => {
    dispatch(setUserData({ token: null, data: null }));
    window.sessionStorage.clear();
  };

  return (
    <div className={styles.container}>
      <Button onClick={goToProducts}>
        <LogoIcon />
      </Button>
      <Search />
      <div className={styles.icons}>
        {!!token && (
          <>
            <Button onClick={goToFavorites} className={styles.icon}>
              {favorites.length !== 0 && <Bubble>{favorites.length}</Bubble>}
              <FavoritesIcon />
            </Button>
            <Button className={styles.icon} onClick={goToBasket}>
              {basket.length !== 0 && <Bubble>{basketAmount}</Bubble>}
              <BasketIcon />
            </Button>
            <Button className={styles.icon} onClick={token ? goToProfile : openAuthModal}>
              <ProfileIcon />
            </Button>
            <Button className={styles.icon} onClick={logout}>
              <GoOutIcon />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
