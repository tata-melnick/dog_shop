import React from "react";
import styles from "./bubble.module.scss";

interface IBubbleProps {
  children?: React.ReactNode;
}

const Bubble: React.FC<IBubbleProps> = ({ children }) => {
  return <div className={styles.bubble}>{children && children}</div>;
};

export default Bubble;
