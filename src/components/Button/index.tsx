import React, { SyntheticEvent } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  type?: "filled" | "text" | "outline" | "link";
  submit?: boolean;
  link?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  className,
  type = "text",
  link,
  disabled,
  submit,
}) => {
  const handleClickLink = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick();
  };
  if (link || type === "link")
    return (
      <a
        onClick={onClick ? handleClickLink : undefined}
        href={link}
        className={cn(styles.link, className)}
      >
        {children && children}
      </a>
    );
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={cn([
        styles.btn,
        { [styles.btnText]: type === "text" },
        { [styles.btnFilled]: type === "filled" },
        { [styles.btnOutline]: type === "outline" },
        { [styles.btnOff]: disabled },
        className,
      ])}
    >
      {children && children}
    </button>
  );
};

export default Button;
