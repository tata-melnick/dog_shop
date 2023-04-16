import {
  IS_AMOUNT_PRODUCTS,
  SET_ALL_PRODUCTS,
  SET_FAVORITES_PRODUCTS,
  SET_LIKES_PRODUCTS,
  // SET_BASKET,
  SET_PRODUCT_DETAIL,
} from "./actions";
import { ProductsType, ProductType } from "../../api";

interface IInitialState {
  all: ProductsType;
  favorites: ProductsType;
  amount: number;
  likes: ProductsType;
  product: ProductType;
  // basket: string;
}

const initialState: IInitialState = {
  all: [],
  favorites: [],
  likes: [],
  amount: null,
  product: null,
  // basket: "",
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return { ...state, all: action.payload };
    case SET_FAVORITES_PRODUCTS:
      return { ...state, favorites: action.payload };
    case SET_LIKES_PRODUCTS:
      return { ...state, likes: action.payload };
    case IS_AMOUNT_PRODUCTS:
      return { ...state, amount: action.payload };
    case SET_PRODUCT_DETAIL:
      return { ...state, product: action.payload };
    // case SET_BASKET:
    //   return { ...state, basket: action.payload };
    default:
      return state;
  }
}

export default productReducer;
