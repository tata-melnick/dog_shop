import { ADD_NOTIFICATION, REMOVE_NOTIFICATION, NotifyType } from "./actions";

const initialState: NotifyType = null;

function notifyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return action.payload;
    case REMOVE_NOTIFICATION:
      return null;
    default:
      return state;
  }
}

export default notifyReducer;
