import React, { ChangeEvent, useEffect, useState } from "react";
import cn from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store";
import { CloseModalIcon } from "../../icons";
import { Button, Input, Modal } from "../../components";
import { setEditModal } from "../../store/modals/actions";
import { API, NewProductType, ProductType } from "../../api";
import inputStyles from "../../components/Input/input.module.scss";
import styles from "./editModal.module.scss";
import { setAllProducts, setProduct } from "../../store/products/actions";

const EditModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { edit } = useAppSelector((state) => state.modals);
  const { product, all } = useAppSelector((state) => state.products);
  const [pictures, setPictures] = useState<string>("");
  const { register, handleSubmit, formState, reset } = useForm<Omit<NewProductType, "pictures">>({
    mode: "onSubmit",
    values: {
      available: true,
      name: product?.name || "",
      discount: product ? product.discount : null,
      price: product ? product.price : null,
      wight: product?.wight || "",
      description: product?.description || "",
      stock: product ? product.stock : null,
    },
  });

  const closeModal = () => {
    dispatch(setEditModal(false));
    reset();
    setPictures("");
  };
  const handleSetPictures = (e: ChangeEvent<HTMLInputElement>) => setPictures(e.target.value);

  const submit: SubmitHandler<NewProductType> = async (data) => {
    let resp: ProductType;
    const newAll: Array<ProductType> = [...all];
    if (!product) {
      resp = await API.AddNewProduct({ ...data, pictures, tags: ["NEW"] });
      newAll.unshift(resp);
    } else {
      resp = await API.EditProduct(product._id, { ...data, pictures });
      const index = all.findIndex((el) => el._id === product._id);
      newAll.splice(index, 1, resp);
    }
    if (!("error" in resp || "err" in resp)) {
      dispatch(setAllProducts(newAll));
      dispatch(setProduct(resp));
      closeModal();
    }
  };

  useEffect(() => {
    if (product && edit) setPictures(product.pictures);
  }, [product, edit]);

  return (
    <Modal open={edit} onClose={closeModal} size="medium">
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{product ? product.name : "Добавление нового товара"}</h1>
        <Button onClick={closeModal} className={styles.close}>
          <CloseModalIcon />
        </Button>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
          <img
            src={
              pictures ||
              "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
            }
            alt="Product"
            className={styles.image}
          />
          <div className={styles.inputs}>
            <Input
              place="modal"
              type="text"
              label="Название"
              {...register("name", { required: true })}
            />
            <Input
              place="modal"
              type="text"
              label="Изображение"
              value={pictures}
              onChange={handleSetPictures}
            />
            <div>
              <span>Описание</span>
              <textarea
                className={cn(inputStyles.input, inputStyles.modal)}
                placeholder="Описание"
                {...register("description", { required: true })}
              />
            </div>
            <div className={styles.row}>
              <Input
                place="modal"
                type="number"
                label="Цена (₽)"
                {...register("price", { required: true })}
              />
              <Input
                place="modal"
                type="number"
                label="Размер скидки"
                {...register("discount", { required: true })}
              />
            </div>
            <div className={styles.row}>
              <Input
                place="modal"
                type="number"
                label="Количество"
                {...register("stock", { required: true })}
              />
              <Input
                place="modal"
                type="text"
                label="Вес товара"
                {...register("wight", { required: true })}
              />
            </div>
            <Button type="filled" submit>
              {product ? "Сохранить изменения" : "Добавить товар"}
            </Button>
            {Object.values(formState.errors).length > 0 && (
              <div className={styles.error}>Все поля должны быть заполненеы</div>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
