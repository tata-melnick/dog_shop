import {
  SET_MODAL_AUTH,
  SET_MODAL_IMAGE,
  SET_MODAL_RECOVER,
  SET_MODAL_REGISTRATION,
  SetImagePayload,
} from "./actions";

interface IInitialState {
  auth: boolean;
  registration: boolean;
  recover: boolean;
  image: SetImagePayload;
}

const initialState: IInitialState = {
  auth: false,
  registration: false,
  recover: false,
  image: null,
};

function modalsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_AUTH:
      return { ...state, auth: action.payload };

    case SET_MODAL_REGISTRATION:
      return { ...state, registration: action.payload };

    case SET_MODAL_RECOVER:
      return { ...state, recover: action.payload };

    case SET_MODAL_IMAGE:
      return { ...state, image: action.payload };

    default:
      return state;
  }
}

export default modalsReducer;
