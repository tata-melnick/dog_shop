import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import styles from "./chartPage.module.scss";
import BackIcon from "../../icons/BackIcon";
import Button from "../../components/Button";
import { useAppSelector } from "../../store";

const ChartPage = () => {
  const navigate = useNavigate();
  const { isLoad } = useAppSelector((store) => store.settings);
  const { chart } = useAppSelector((state) => state.products);
  const ref = useRef<HTMLDivElement>(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    if (ref.current && chart && chart.length) {
      const option = {
        series: [
          {
            type: "pie",
            data: chart.map((el) => ({ name: el.name, value: el.likes.length })),
            label: {
              fontSize: 15,
            },
            color: [
              "#FF75A8",
              "#FF8F75",
              "#FFC842",
              "#BEE63E",
              "#4CB337",
              "#489FE8",
              "#5D8AFF",
              "#484BE8",
              "#5B35CC",
              "#8E69FF",
            ],
          },
        ],
      };
      const myChart = echarts.init(ref.current, option);
      myChart.setOption(option);
    }
  }, [ref.current, chart]);

  return (
    <div>
      {isLoad ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.wrap}>
            <BackIcon />
            <Button onClick={goBack} className={styles.btn}>
              Назад
            </Button>
          </div>
          <h1 className={styles.title}>10 самых популярных товаров</h1>
          <div className={styles.chart} ref={ref} />
        </div>
      )}
    </div>
  );
};

export default ChartPage;
