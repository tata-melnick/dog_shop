import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
// import { API } from "../../api";
import { CloseModalIcon } from "../../icons";
import { Button, Modal } from "../../components";
import { setModalImages } from "../../store/modals/actions";
import styles from "./imagesModal.module.scss";

const ImagesModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { all } = useAppSelector((state) => state.products);
  const { images } = useAppSelector((state) => state.modals);

  const closeModal = () => {
    dispatch(setModalImages(false));
  };
  //
  // const handleSignIn = async () => {
  //   const response = await API.SignIn({ email, password });
  //   if (response?.token) {
  //     dispatch(setUserData(response));
  //     window.sessionStorage.setItem(TOKEN, response.token);
  //     closeModal();
  //   }
  // };

  return (
    <Modal open={images} onClose={closeModal}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{all.name}</h1>
        <Button onClick={closeModal} className={styles.close}>
          <CloseModalIcon />
        </Button>
      </div>
    </Modal>
  );
};

export default ImagesModal;
