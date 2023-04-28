import { ProductsType, ProductType } from "../../api";

export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_FAVORITES_PRODUCTS = "SET_FAVORITES_PRODUCTS";
export const SET_LIKES_PRODUCTS = "SET_LIKES_PRODUCTS";
export const IS_AMOUNT_PRODUCTS = "IS_AMOUNT_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";
export const ADD_BASKET_ITEM = "ADD_BASKET_ITEM";
export const REMOVE_BASKET_ITEM = "REMOVE_BASKET_ITEM";
export const DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM";
export const SET_SORT_OPTION = "SET_SORT_OPTION";
export const SET_CHART = "SET_CHART";

export const setAllProducts = (payload: ProductsType) => ({
  type: SET_ALL_PRODUCTS,
  payload,
});
export const setFavoritesProducts = (payload: ProductsType) => ({
  type: SET_FAVORITES_PRODUCTS,
  payload,
});
export const setLikesProducts = (payload: ProductType) => ({
  type: SET_LIKES_PRODUCTS,
  payload,
});
export const setIsAmountProducts = (payload: number) => ({
  type: IS_AMOUNT_PRODUCTS,
  payload,
});
export const setProduct = (payload: ProductType) => ({
  type: SET_PRODUCT,
  payload,
});
export const addBasketItem = (payload: ProductType) => ({
  type: ADD_BASKET_ITEM,
  payload,
});
export const removeBasketItem = (payload: string) => ({
  type: REMOVE_BASKET_ITEM,
  payload,
});
export const deleteBasketItem = (payload: string) => ({
  type: DELETE_BASKET_ITEM,
  payload,
});

export type SortValues = "popular" | "new" | "cheapFirst" | "dearFirst" | "rating" | "discount";
export const setSortOption = (payload: SortValues) => ({
  type: SET_SORT_OPTION,
  payload,
});

export const setChart = (payload: ProductsType) => ({
  type: SET_CHART,
  payload,
});
