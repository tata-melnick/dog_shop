import React from "react";
import { LeftFooter, CenterFooter, RightFooter } from "./components";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </div>
  );
};

export default Footer;
