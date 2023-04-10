import React, { ChangeEvent } from "react";
import cn from "classnames";
import styles from "./input.module.scss";

interface IInputProps {
  type: string;
  id?: string;
  placeholder?: string;
  value: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  withoutAutocomplete?: boolean;
  place: "search" | "modal";
}

const Input: React.FC<IInputProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  withoutAutocomplete,
  place,
}) => {
  return (
    <label htmlFor="close" className={styles.searchLb}>
      <div />
      <input
        type={type}
        id={id}
        className={cn([
          styles.input,
          { [styles.search]: place === "search" },
          { [styles.modal]: place === "modal" },
        ])}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={withoutAutocomplete ? "new-password" : ""}
      />
    </label>
  );
};

export default Input;
