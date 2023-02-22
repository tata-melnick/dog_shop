import React from "react";
import cn from "classnames";
import styles from "./badge.module.scss";

interface IBadgeProps {
  label: string;
  color?: "yellow" | "violet";
}

const Badge: React.FC<IBadgeProps> = ({ label, color = "yellow" }) => {
  return (
    <div
      className={cn([
        styles.tag,
        { [styles.sale]: color === "yellow" },
        { [styles.new]: color === "violet" },
      ])}
    >
      {label}
    </div>
  );
};

export default Badge;
