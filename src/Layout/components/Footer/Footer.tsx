import React from "react";
import styles from "./footer.module.scss";
import FooterLogo from "./FooterLogo/FooterLogo";
import Contacts from "./Contacts/Contacts";
import FooterMenu from "./FooterMenu/FooterMenu";

interface IFooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div className={styles.container}>
      <FooterLogo />
      <FooterMenu />
      <Contacts />
    </div>
  );
};

export default Footer;
