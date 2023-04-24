export const SET_MODAL_AUTH = "SET_MODAL_AUTH";
export const SET_MODAL_REGISTRATION = "SET_MODAL_REGISTRATION";
export const SET_MODAL_RECOVER = "SET_MODAL_RECOVER";
export const SET_MODAL_IMAGE = "SET_MODAL_IMAGE";
export const SET_MODAL_EDIT = "SET_MODAL_EDIT";

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

export const setEditModal = (payload: boolean) => ({
  type: SET_MODAL_EDIT,
  payload,
});

export type SetImagePayload = { url: string; name: string };
export const setModalImage = (payload: SetImagePayload) => ({
  type: SET_MODAL_IMAGE,
  payload,
});
