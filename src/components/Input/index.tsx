import React, { ChangeEvent, forwardRef } from "react";
import cn from "classnames";
import styles from "./input.module.scss";

interface IInputProps {
  type: string;
  id?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  withoutAutocomplete?: boolean;
  place?: "search" | "modal";
  error?: boolean;
  notChange?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      type,
      label,
      id,
      placeholder,
      value,
      onChange,
      withoutAutocomplete,
      place,
      error,
      notChange,
      ...props
    },
    ref
  ) => (
    <label htmlFor="close" className={styles.searchLb}>
      {label && <span>{label}</span>}
      <input
        ref={ref}
        type={type}
        id={id}
        readOnly={!onChange}
        className={cn([
          styles.input,
          { [styles.search]: place === "search" },
          { [styles.modal]: place === "modal" },
          { [styles.error]: error },
          { [styles.notChange]: notChange },
        ])}
        placeholder={label || placeholder}
        value={value}
        onChange={onChange}
        autoComplete={withoutAutocomplete ? "new-password" : ""}
        {...props}
      />
    </label>
  )
);

export default Input;
