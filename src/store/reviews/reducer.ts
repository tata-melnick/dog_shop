import { SET_REVIEWS } from "./actions";
import { ProductsType } from "../../api";

interface IInitialState {
  reviews: ProductsType;
}

const initialState: IInitialState = {
  reviews: [],
};

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
}

export default reviewsReducer;
