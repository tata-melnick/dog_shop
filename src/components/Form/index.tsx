import React from "react";
import styles from "./form.module.scss";

interface IFormProps {
  children?: React.ReactNode;
  title: string;
  // submitForm: React.FormEvent;
}

const Form: React.FC<IFormProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <form className="form">
        <h1 className="form__title">{title}</h1>
        {children}
      </form>
    </div>
  );
};

export default Form;
