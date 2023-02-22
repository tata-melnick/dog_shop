import React, { SyntheticEvent } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  type?: "filled" | "text" | "outline";
  link?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?(): void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, className, type = "text", link }) => {
  const handleClickLink = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick();
  };
  if (link)
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
      type="button"
      className={cn([
        styles.btn,
        { [styles.btnText]: type === "text" },
        { [styles.btnFilled]: type === "filled" },
        { [styles.btnOutline]: type === "outline" },
        className,
      ])}
    >
      {children && children}
    </button>
  );
};

export default Button;
