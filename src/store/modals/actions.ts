export const SET_MODAL_AUTH = "SET_MODAL_AUTH";
export const SET_MODAL_REGISTRATION = "SET_MODAL_REGISTRATION";
export const SET_MODAL_RECOVER = "SET_MODAL_RECOVER";
export const SET_MODAL_IMAGES = "SET_MODAL_IMAGES";

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
export const setModalImages = (payload: boolean) => ({
  type: SET_MODAL_IMAGES,
  payload,
});
