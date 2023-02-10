import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./layout.module.scss";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = () => {
  return (
    <>
      <Header />
      <div className={styles.content} />
      <Footer />
    </>
  );
};

export default Layout;
