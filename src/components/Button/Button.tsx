import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  type?: "filled" | "text";
  link?: string;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, className, type = "text", link }) => {
  if (link)
    return (
      <a href={link} className={cn(styles.link, className)}>
        {children && children}
      </a>
    );
  return (
    <button
      type="button"
      className={cn([
        styles.btn,
        { [styles.btnText]: type === "text" },
        { [styles.btnFilled]: type === "filled" },
        className,
      ])}
    >
      {children && children}
    </button>
  );
};

export default Button;
