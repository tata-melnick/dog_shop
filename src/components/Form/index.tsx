import React from "react";
// import { useForm } from "react-hook-form";
import styles from "./form.module.scss";
//
// interface IFormProps {
//   children?: React.ReactNode;
//   // submitForm: React.FormEvent;
// }

const Form: React.FC = () => {
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
    <div className={styles.container}>
      {/* <form className="form"> */}
      {/*  <h1 className="form__title">Оставьте ваш отзыв</h1> */}
      {/*  <textarea>{...textRegister}</textarea> */}
      {/*  <Button></Button> */}
      {/* </form> */}
    </div>
  );
};

export default Form;
