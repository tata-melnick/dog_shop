import React, { useEffect } from "react";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../store";
import styles from "./notifications.module.scss";
import { removeNotify } from "../../store/notifications/actions";

const Notifications: React.FC = () => {
  const dispatch = useAppDispatch();
  const { notify } = useAppSelector((state) => state);

  const clear = () => dispatch(removeNotify());

  useEffect(() => {
    let timerId;
    if (notify)
      timerId = setTimeout(() => {
        clear();
      }, 1500);
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [notify]);

  if (!notify) return null;

  return (
    <div
      onClick={clear}
      className={cn([
        styles.container,
        { [styles.success]: notify.type === "success" },
        { [styles.error]: notify.type === "error" },
      ])}
    >
      {notify.text}
    </div>
  );
};

export default Notifications;
