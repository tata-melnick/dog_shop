import React, { useRef } from "react";
import cn from "classnames";
import styles from "./modal.module.scss";

interface IModalProps {
  open: boolean;
  onClose(): void;
  size?: "default" | "largest";
  children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ children, open, onClose, size = "default" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const missClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) onClose();
  };

  if (!open) return null;
  return (
    <div onClick={missClick} className={styles.wrapper}>
      <div ref={ref} className={cn([styles.modal, { [styles.modalLargest]: size === "largest" }])}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
