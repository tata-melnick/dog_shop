import { SET_REVIEWS_LIST, SET_REVIEWS_DETAIL } from "./actions";
import { ReviewType } from "../../api";

interface IInitialState {
  list: Array<ReviewType>;
  detail: ReviewType;
}

const initialState: IInitialState = {
  list: [],
  detail: null,
};

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REVIEWS_LIST:
      return { ...state, list: action.payload };
    case SET_REVIEWS_DETAIL:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
}

export default reviewsReducer;
