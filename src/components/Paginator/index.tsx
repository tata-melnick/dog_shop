import React, { useEffect, useState } from "react";
import cn from "classnames";
import { BackIcon } from "../../icons";
import styles from "./paginator.module.scss";

export interface IPaginatorProps {
  page: number;
  onChange(page: number): void;
  count: number;
}

const Paginator: React.FC<IPaginatorProps> = ({ page, count, onChange }) => {
  const [pages, setPages] = useState<Array<number>>([]);

  const prevPage = () => onChange(page - 1);
  const nextPage = () => onChange(page + 1);

  useEffect(() => {
    const newPages = [];
    for (let i = 0; i < count; i++) newPages.push(i);
    setPages(newPages);
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
      {pages &&
        pages.map((el) => (
          <span
            className={cn([styles.button, { [styles.buttonActive]: el === page }])}
            key={`page-${el}`}
            onClick={() => onChange(el)}
          >
            {el + 1}
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
