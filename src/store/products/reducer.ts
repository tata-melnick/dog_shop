import {
  ADD_BASKET_ITEM,
  DELETE_BASKET_ITEM,
  IS_AMOUNT_PRODUCTS,
  REMOVE_BASKET_ITEM,
  SET_ALL_PRODUCTS,
  SET_FAVORITES_PRODUCTS,
  SET_LIKES_PRODUCTS,
  SET_PRODUCT,
  SET_SORT_OPTION,
  SortValues,
} from "./actions";
import { ProductsType, ProductType } from "../../api";

type BasketItemType = { amount: number; product: ProductType };

interface IInitialState {
  all: ProductsType;
  favorites: ProductsType;
  amount: number;
  likes: ProductsType;
  product: ProductType;
  basket: Array<BasketItemType>;
  sortOption: SortValues;
}

const initialState: IInitialState = {
  all: [],
  favorites: [],
  likes: [],
  amount: null,
  product: null,
  basket: [],
  sortOption: null,
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

    case SET_PRODUCT:
      return { ...state, product: action.payload };

    case ADD_BASKET_ITEM: {
      const basket = [...state.basket];
      const id = action.payload._id;
      const index = basket.findIndex((el) => el.product._id === id);
      if (index >= 0) {
        const item = basket[index];
        basket.splice(index, 1, { ...item, amount: item.amount + 1 });
        return { ...state, basket };
      }
      return { ...state, basket: [...state.basket, { product: action.payload, amount: 1 }] };
    }

    case REMOVE_BASKET_ITEM: {
      const basket = [...state.basket];
      const index = basket.findIndex((el) => el.product._id === action.payload);
      const item = basket[index];
      if (item.amount > 1) {
        basket.splice(index, 1, { ...item, amount: item.amount - 1 });
        return { ...state, basket };
      }
      return { ...state, basket: state.basket.filter((el) => el.product._id !== action.payload) };
    }

    case DELETE_BASKET_ITEM: {
      return { ...state, basket: state.basket.filter((el) => el.product._id !== action.payload) };
    }

    case SET_SORT_OPTION: {
      return { ...state, sortOption: action.payload };
    }
    default:
      return state;
  }
}

export default productReducer;
