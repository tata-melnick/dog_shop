import React, { ChangeEvent } from "react";
import styles from "./input.module.scss";

interface IInputProps {
  type: string;
  id?: string;
  placeholder?: string;
  value: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  withoutAutocomplete?: boolean;
}

const Input: React.FC<IInputProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  withoutAutocomplete,
}) => {
  const settings = { autoComplete: "new-password" };

  return (
    <label htmlFor="close" className={styles.searchLb}>
      <div />
      <input
        type={type}
        id={id}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...(withoutAutocomplete ? settings : {})}
      />
    </label>
  );
};

export default Input;
