import React, { useState } from "react";
import cn from "classnames";
import styles from "./accordion.module.scss";
import Button from "../Button";

interface IAccordionProps {
  children: React.ReactNode;
  title: string;
}

const Accordion: React.FC<IAccordionProps> = ({ children, title }) => {
  const [selected, setSelected] = useState(false);

  const toggleState = () => {
    setSelected((state) => !state);
  };
  return (
    <div className={cn(styles.accordion, { [styles.active]: selected })}>
      <Button className={styles.accordionBtn} onClick={() => toggleState()}>
        <p className={styles.title}>{title}</p>
      </Button>
      <div className={styles.content}>
        <p className={styles.text}>{children}</p>
      </div>
    </div>
  );
};

export default Accordion;
