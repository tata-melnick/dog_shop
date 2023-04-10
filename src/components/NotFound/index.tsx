import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import NotFoundIcon from "../../icons/NotFoundIcon";
import styles from "./notFound.module.scss";
import { useAppDispatch } from "../../store";
import { setInputValue } from "../../store/settings/actions";
// import { useAppDispatch } from "../../store";
// import { setInputValue } from "../../store/products/actions";

interface INotFoundProps {
  title: string;
  paragraph: string;
}

const NotFound: React.FC<INotFoundProps> = ({ title, paragraph }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToProducts = () => {
    dispatch(setInputValue(""));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <NotFoundIcon />
        <div className={styles.title}>{title}</div>
        <div className={styles.paragraph}>{paragraph}</div>
        <Button type="outline" onClick={goToProducts}>
          На главную
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
