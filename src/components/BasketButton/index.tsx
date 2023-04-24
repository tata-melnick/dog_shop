import React from "react";
import cn from "classnames";
import { MinusIcon, PlusIcon } from "../../icons";
import Button from "../Button";
import styles from "./basketButton.module.scss";
import { ProductType } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
import { addBasketItem, removeBasketItem } from "../../store/products/actions";

interface IBasketButtonProps {
  product: ProductType;
  single?: boolean;
  className?: string;
}

const BasketButton: React.FC<IBasketButtonProps> = ({ product, single, className }) => {
  const dispatch = useAppDispatch();
  const { basket } = useAppSelector((state) => state.products);
  const amount = basket.find((el) => el.product._id === product._id)?.amount || 0;

  const add = () => dispatch(addBasketItem(product));
  const remove = () => dispatch(removeBasketItem(product._id));

  return (
    <div className={cn(styles.btns, className)}>
      {(!single || (single && amount > 0)) && (
        <div className={styles.controls}>
          <Button type="text" onClick={remove} disabled={amount === 0}>
            <MinusIcon disabled={amount === 0} />
          </Button>
          <span className={styles.num}>{amount}</span>
          <Button type="text" onClick={add}>
            <PlusIcon />
          </Button>
        </div>
      )}
      {(!single || (single && !amount)) && (
        <Button type="filled" className={styles.btn} onClick={add} disabled={amount > 0}>
          {amount > 0 ? "В корзине" : "В корзину"}
        </Button>
      )}
    </div>
  );
};

export default BasketButton;
