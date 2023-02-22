import React from "react";
import styles from "./header.module.scss";
import { LogoIcon, FavoritesIcon, BasketIcon, ProfileIcon } from "../../icons";
import Search from "../../components/Search/Search";
import Button from "../../components/Button";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button link="#">
        <LogoIcon />
      </Button>
      <Search />
      <div>
        <Button link="#" className={styles.iconMargin}>
          <FavoritesIcon />
        </Button>
        <Button link="#" className={styles.iconMargin}>
          <BasketIcon />
        </Button>
        <Button link="#">
          <ProfileIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
