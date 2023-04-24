import React, { PropsWithChildren } from "react";
import styles from "./bubble.module.scss";

const Bubble: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.bubble}>{children && children}</div>;
};

export default Bubble;
