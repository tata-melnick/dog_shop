import React from "react";
import cn from "classnames";
import styles from "./form.module.scss";

interface IFormProps {
  children?: React.ReactNode;
  submitForm(): void;
}

const Form: React.FC<IFormProps> = ({ children, submitForm }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: "onSubmit" });
  //
  // const textRegister = register("review", {
  //   required: "review обязателен",
  // });

  return (
    <form onSubmit={submitForm} className={cn("form", styles.container)}>
      <h1 className="title">Оставьте ваш отзыв</h1>
      {children}
    </form>
  );
};

export default Form;
