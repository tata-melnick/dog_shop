import React from "react";
import styles from "./header.module.scss";
import Logo from "../../../icons/Logo";
import Search from "../../../components/Search/Search";
import Button from "../../../components/Button/Button";
import Favorites from "../../../icons/Favorites";
import Basket from "../../../icons/Basket";
import Profile from "../../../icons/Profile";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button link="#">
        <Logo />
      </Button>
      <Search />
      <div>
        <Button link="#" className={styles.btnMargin}>
          <Favorites />
        </Button>
        <Button link="#" className={styles.btnMargin}>
          <Basket />
        </Button>
        <Button link="#">
          <Profile />
        </Button>
      </div>
    </div>
  );
};

export default Header;
