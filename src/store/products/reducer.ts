import {
  IS_AMOUNT_PRODUCTS,
  IS_LOAD_PRODUCTS,
  IS_SEARCH_VALUE,
  SET_ALL_PRODUCTS,
  SET_FAVORITES_PRODUCTS,
} from "./actions";
import { ProductsType } from "../../api";

interface IInitialState {
  all: ProductsType;
  favorites: ProductsType;
  isLoad: boolean;
  amount: number;
  searchValue: string;
}

const initialState: IInitialState = {
  all: [],
  favorites: [],
  isLoad: true,
  amount: null,
  searchValue: "",
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
    default:
      return state;
  }
}

export default productReducer;
