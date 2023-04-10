import { IS_LOAD, IS_SEARCH_VALUE, INPUT_VALUE } from "./actions";

interface IInitialState {
  isLoad: boolean;
  searchValue: string;
  inputValue: string;
}

const initialState: IInitialState = {
  isLoad: false,
  searchValue: "",
  inputValue: "",
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOAD:
      return { ...state, isLoad: action.payload };
    case IS_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}

export default settingsReducer;
