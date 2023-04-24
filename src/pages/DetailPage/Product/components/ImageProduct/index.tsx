import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./imageProduct.module.scss";
import { ProductType } from "../../../../../api";
import Badge from "../../../../../components/Badge";
import { Button } from "../../../../../components";
import { setModalImage } from "../../../../../store/modals/actions";
import { useAppDispatch } from "../../../../../store";

interface IImageProductProps {
  tags: ProductType["tags"];
  name: ProductType["name"];
  discount: ProductType["discount"];
  pictures: ProductType["pictures"];
}

const ImageProduct: React.FC<IImageProductProps> = ({ tags, pictures, name, discount }) => {
  const dispatch = useAppDispatch();
  const openImagesModal = () => dispatch(setModalImage({ url: pictures, name }));
  const [isNew, setIsNew] = useState<boolean>(false);

  useEffect(() => {
    if (tags)
      tags.forEach((tag) => {
        if (tag.toLowerCase() === "new") setIsNew(true);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={cn(styles.sticky, styles.stickyLeft)}>
        {isNew && <Badge label="new" color="violet" />}
        {!!discount && <Badge label={`${discount}%`} color="yellow" />}
      </div>
      <Button onClick={openImagesModal}>
        <img className={styles.image} src={pictures} alt="img" />
      </Button>
    </div>
  );
};

export default ImageProduct;
