import React from "react";
import { useNavigate } from "react-router-dom";
import dataFaq from "./dataFaq";
import Accordion from "../../components/Accordion";
import rndStr from "../../helpers/randomStr";
import { useAppSelector } from "../../store";
import { Loader } from "../../components";
import styles from "../FavoritesPage/favoritesPage.module.scss";
import BackIcon from "../../icons/BackIcon";
import Button from "../../components/Button";

const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const { isLoad } = useAppSelector((store) => store.settings);

  const goToProducts = () => navigate("/");

  return (
    <div className={styles.container}>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className={styles.wrap}>
            <BackIcon />
            <Button onClick={goToProducts} className={styles.btn}>
              Назад
            </Button>
          </div>
          <h1 className={styles.title}>Часто спрашивают</h1>
          {dataFaq.map((e) => (
            <Accordion key={`el-${rndStr()}`} title={e.title}>
              {e.content}
            </Accordion>
          ))}
        </>
      )}
    </div>
  );
};

export default FAQ;
