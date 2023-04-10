import React from "react";
// import { useNavigate } from "react-router-dom";
import cn from "classnames";
import styles from "./imageProduct.module.scss";
import { ProductType } from "../../../../../../api";
import Badge from "../../../../../../components/Badge";
import { Button } from "../../../../../../components";
import { setModalImages } from "../../../../../../store/modals/actions";
import { useAppDispatch } from "../../../../../../store";

interface IImageProductProps {
  tags: ProductType["tags"];
  discount: ProductType["discount"];
  pictures: ProductType["pictures"];
}

const ImageProduct: React.FC<IImageProductProps> = ({ tags, pictures, discount }) => {
  const dispatch = useAppDispatch();
  const openImagesModal = () => dispatch(setModalImages(true));

  return (
    <div className={styles.container}>
      <div className={cn(styles.sticky, styles.stickyLeft)}>
        {tags && tags.includes("new") && <Badge label="new" color="violet" />}
        {!!discount && <Badge label={`${discount}%`} color="yellow" />}
      </div>
      <Button onClick={openImagesModal}>
        <img className={styles.image} src={pictures} alt="img" />
      </Button>
    </div>
  );
};

export default ImageProduct;
