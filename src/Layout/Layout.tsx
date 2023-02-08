import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = () => {
  return (
    <>
      <Header />
      <div />
      <Footer />
    </>
  );
};

export default Layout;
