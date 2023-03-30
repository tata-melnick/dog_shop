import { SET_USERS_DATA } from "./actions";
import { UserType } from "../../api";
import { TOKEN } from "../../constants/storage";

interface IInitialState {
  data: UserType;
  token: string;
}

const initialState: IInitialState = {
  data: null,
  token: window.sessionStorage.getItem(TOKEN) || null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
