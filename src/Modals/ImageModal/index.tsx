import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { CloseModalIcon } from "../../icons";
import { Button, Modal } from "../../components";
import { setModalImage } from "../../store/modals/actions";
import styles from "./imagesModal.module.scss";

const ImagesModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { image } = useAppSelector((state) => state.modals);

  const closeModal = () => dispatch(setModalImage(null));

  return (
    <Modal open={!!image} onClose={closeModal} size="largest">
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{image?.name}</h1>
        <Button onClick={closeModal} className={styles.close}>
          <CloseModalIcon />
        </Button>
      </div>
      <img className={styles.image} src={image?.url} alt="img" />
    </Modal>
  );
};

export default ImagesModal;
