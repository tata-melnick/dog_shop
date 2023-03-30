import { UserType } from "../../api";

export const SET_USERS_DATA = "SET_USERS_DATA";

export const setUserData = (payload: { data: UserType; token: string }) => ({
  type: SET_USERS_DATA,
  payload,
});
