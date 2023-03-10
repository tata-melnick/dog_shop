import React from "react";
import cn from "classnames";
import { LikeIcon } from "../../icons";
import Button from "../Button";
import styles from "./like.module.scss";

interface ILikeProps {
  isLiked: boolean;
  outerClass?: string;
  onClick(): void;
  children?: React.ReactNode;
}

const Like: React.FC<ILikeProps> = ({ isLiked = false, outerClass, onClick, children }) => {
  return (
    <Button className={cn([styles.like, outerClass])} onClick={onClick}>
      <LikeIcon isLiked={isLiked} />
      {children}
    </Button>
  );
};

export default Like;
