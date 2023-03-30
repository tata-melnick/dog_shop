import {
  IS_AMOUNT_PRODUCTS,
  // SET_BASKET,
  IS_LOAD_PRODUCTS,
  IS_SEARCH_VALUE,
  SET_ALL_PRODUCTS,
  // SET_REVIEWS_PRODUCT,
  SET_FAVORITES_PRODUCTS,
} from "./actions";
import { ProductsType } from "../../api";

interface IInitialState {
  all: ProductsType;
  favorites: ProductsType;
  isLoad: boolean;
  amount: number;
  searchValue: string;
  // basket: string;
  // reviews: ProductsType;
}

const initialState: IInitialState = {
  all: [],
  favorites: [],
  isLoad: true,
  amount: null,
  searchValue: "",
  // basket: "",
  // reviews: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return { ...state, all: action.payload };
    case SET_FAVORITES_PRODUCTS:
      return { ...state, favorites: action.payload };
    case IS_LOAD_PRODUCTS:
      return { ...state, isLoad: action.payload };
    case IS_AMOUNT_PRODUCTS:
      return { ...state, amount: action.payload };
    case IS_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    // case SET_BASKET:
    //   return { ...state, basket: action.payload };
    // case SET_REVIEWS_PRODUCT:
    //   return { ...state, reviews: action.payload };
    default:
      return state;
  }
}

export default productReducer;
