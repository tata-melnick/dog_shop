import React from "react";
import Button from "../Button";
import NotFoundIcon from "../../icons/NotFoundIcon";
import styles from "./notFound.module.scss";

interface INotFoundProps {
  title: string;
  paragraph: string;
}

const NotFound: React.FC<INotFoundProps> = ({ title, paragraph }) => {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <NotFoundIcon />
        <div className={styles.title}>{title}</div>
        <div className={styles.paragraph}>{paragraph}</div>
        <Button type="outline">На главную</Button>
      </div>
    </div>
  );
};

export default NotFound;
