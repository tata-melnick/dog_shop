import { ProductsType } from "../../api";

export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_FAVORITES_PRODUCTS = "SET_FAVORITES_PRODUCTS";
export const IS_LOAD_PRODUCTS = "IS_LOAD_PRODUCTS";
export const IS_AMOUNT_PRODUCTS = "IS_AMOUNT_PRODUCTS";
export const IS_SEARCH_VALUE = "IS_SEARCH_VALUE";
// export const SET_BASKET = "SET_BASKET";
// export const SET_REVIEWS_PRODUCT = "SET_REVIEWS_PRODUCT";

export const setAllProducts = (payload: ProductsType) => ({
  type: SET_ALL_PRODUCTS,
  payload,
});
export const setFavoritesProducts = (payload: ProductsType) => ({
  type: SET_FAVORITES_PRODUCTS,
  payload,
});
export const setIsLoadProducts = (payload: boolean) => ({
  type: IS_LOAD_PRODUCTS,
  payload,
});
export const setIsAmountProducts = (payload: number) => ({
  type: IS_AMOUNT_PRODUCTS,
  payload,
});
// export const setIsBasket = (payload: {id:string,  } ) => ({
//   type: SET_BASKET,
//   payload,
// });
// export const setReviewProduct = (payload: ProductsType) => ({
//   type: SET_REVIEWS_PRODUCT,
//   payload,
// });
export const setIsSearchValue = (payload: string) => ({
  type: IS_SEARCH_VALUE,
  payload,
});
