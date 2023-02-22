import React from "react";
import cn from "classnames";
import { LikeIcon } from "../../icons";
import Button from "../Button";
import styles from "./like.module.scss";

interface ILikeProps {
  isLiked: boolean;
  outerClass?: string;
  onClick(): void;
}

const Like: React.FC<ILikeProps> = ({ isLiked = false, outerClass, onClick }) => {
  return (
    <Button className={cn([styles.like, outerClass])} onClick={onClick}>
      <LikeIcon isLiked={isLiked} />
    </Button>
  );
};

export default Like;
