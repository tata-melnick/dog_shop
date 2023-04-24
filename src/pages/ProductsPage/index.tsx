import React from "react";
import CardsList from "../../components/CardsList";
import styles from "./productsPage.module.scss";
import { Loader, SortOptions, NotFound, NotAuth, Button } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";
import { setEditModal } from "../../store/modals/actions";

const ProductsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { all, amount } = useAppSelector((store) => store.products);
  const { isLoad, searchValue } = useAppSelector((store) => store.settings);
  const { token } = useAppSelector((store) => store.user);

  const openEditModal = () => dispatch(setEditModal(true));

  const getIssues = (num: number, isSearch?: boolean): string => {
    const lastNum = num % 10;
    if (isSearch && lastNum === 1) return "найден";
    if (isSearch && lastNum !== 1) return "найдено";
    if (lastNum === 1) return "товар";
    if (lastNum > 1 && lastNum < 5) return "товара";
    if (lastNum > 4 || !num || (num > 10 && num < 20)) return "товаров";
    return "";
  };

  return (
    <div className={styles.container}>
      {!isLoad && !token && <NotAuth />}
      {isLoad && <Loader />}
      {token && !isLoad && (
        <>
          {searchValue && (
            <h1 className={styles.title}>
              По запросу <b>{searchValue}</b> {getIssues(amount, true)} {amount} {getIssues(amount)}
            </h1>
          )}
          {amount ? (
            <>
              <div className={styles.headline}>
                <SortOptions />
                <Button type="filled" onClick={openEditModal}>
                  Новый продукт
                </Button>
              </div>
              <CardsList products={all} />
            </>
          ) : (
            <NotFound title="Простите, по вашему запросу товаров не надено." paragraph="" />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
