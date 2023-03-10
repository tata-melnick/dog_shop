import React from "react";
import cn from "classnames";
import styles from "./productImage.module.scss";
import { ProductType } from "../../../../../../api";
import Badge from "../../../../../../components/Badge";
import { Button } from "../../../../../../components";

interface IProductLeftProps {
  tags: ProductType["tags"];
  discount: ProductType["discount"];
  pictures: ProductType["pictures"];
}

const ProductImage: React.FC<IProductLeftProps> = ({ tags, pictures, discount }) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.sticky, styles.stickyLeft)}>
        {tags && tags.includes("new") && <Badge label="new" color="violet" />}
        {!!discount && <Badge label={`${discount}%`} color="yellow" />}
      </div>
      <Button link="#">
        <img className={styles.image} src={pictures} alt="img" />
      </Button>
    </div>
  );
};

export default ProductImage;
