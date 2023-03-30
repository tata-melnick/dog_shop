import React, { useRef } from "react";
import styles from "./modal.module.scss";

interface IModalProps {
  open: boolean;
  onClose(): void;
  children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ children, open, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const missClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) onClose();
  };

  if (!open) return null;
  return (
    <div onClick={missClick} className={styles.wrapper}>
      <div ref={ref} className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
