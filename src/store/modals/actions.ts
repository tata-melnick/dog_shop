export const SET_MODAL_AUTH = "SET_MODAL_AUTH";
export const SET_MODAL_REGISTRATION = "SET_MODAL_REGISTRATION";
export const SET_MODAL_RECOVER = "SET_MODAL_RECOVER";
// export const SET_MODAL_EDIT_ = "IS_SEARCH_VALUE";

export const setModalAuth = (payload: boolean) => ({
  type: SET_MODAL_AUTH,
  payload,
});
export const setModalRegistration = (payload: boolean) => ({
  type: SET_MODAL_REGISTRATION,
  payload,
});
export const setModalRecover = (payload: boolean) => ({
  type: SET_MODAL_RECOVER,
  payload,
});