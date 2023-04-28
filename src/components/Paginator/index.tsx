import React, { useEffect, useState } from "react";
import cn from "classnames";
import { BackIcon } from "../../icons";
import styles from "./paginator.module.scss";
import rndStr from "../../helpers/randomStr";

export interface IPaginatorProps {
  page: number;
  onChange(page: number): void;
  count: number;
}

const Paginator: React.FC<IPaginatorProps> = ({ page, count, onChange }) => {
  const [pages, setPages] = useState<Array<number>>([]);
  const [renderPages, setRenderPages] = useState<Array<number>>(null);

  const prevPage = () => onChange(page - 1);
  const nextPage = () => onChange(page + 1);

  const handleSetRenderPages = (array: Array<number>) => {
    if (count <= 10) {
      setRenderPages(array);
    } else {
      if (page < 3) setRenderPages([...array.slice(0, 4), null, count - 1]);
      if (page === 3) setRenderPages([...array.slice(0, page + 3), null, count - 1]);
      if (page > 3 && page < count - 4)
        setRenderPages([0, null, ...array.slice(page - 2, page + 3), null, count - 1]);
      if (page === count - 1) setRenderPages([0, null, ...array.slice(page - 3, count)]);
      if (page === count - 2) setRenderPages([0, null, ...array.slice(page - 2, count)]);
      if (page === count - 3) setRenderPages([0, null, ...array.slice(page - 1, count)]);
      if (page === count - 4) setRenderPages([0, null, ...array.slice(page - 2, count)]);
    }
  };

  useEffect(() => {
    const newPages = [];
    for (let i = 0; i < count; i++) newPages.push(i);
    handleSetRenderPages(newPages);
    setPages(newPages);
  }, []);

  useEffect(() => {
    if (pages.length) handleSetRenderPages(pages);
  }, [page, count]);

  if (!count || count <= 1) return null;

  return (
    <div className={styles.container}>
      <span
        className={cn([styles.button, { [styles.chevronButtonDisabled]: page === 0 }])}
        onClick={prevPage}
      >
        <BackIcon />
      </span>
      {renderPages &&
        renderPages.map((el) => (
          <span
            className={cn([
              styles.button,
              { [styles.buttonActive]: el === page },
              { [styles.delimiter]: el === null },
            ])}
            key={`page-${el || rndStr()}`}
            onClick={el !== null ? () => onChange(el) : undefined}
          >
            {el !== null ? el + 1 : "..."}
          </span>
        ))}
      <span
        className={cn([
          styles.button,
          styles.chevronButtonReverse,
          { [styles.chevronButtonDisabled]: page === count - 1 },
        ])}
        onClick={nextPage}
      >
        <BackIcon />
      </span>
    </div>
  );
};

export default Paginator;
