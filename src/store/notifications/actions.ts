export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export type NotifyType = {
  text: string;
  type: "error" | "success";
};

export const addNotify = (payload: NotifyType) => ({ type: ADD_NOTIFICATION, payload });
export const removeNotify = () => ({ type: REMOVE_NOTIFICATION });
