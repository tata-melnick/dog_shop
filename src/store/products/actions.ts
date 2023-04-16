import { ProductsType, ProductType } from "../../api";

export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_FAVORITES_PRODUCTS = "SET_FAVORITES_PRODUCTS";
export const SET_LIKES_PRODUCTS = "SET_LIKES_PRODUCTS";
export const IS_AMOUNT_PRODUCTS = "IS_AMOUNT_PRODUCTS";
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";
// export const SET_BASKET = "SET_BASKET";

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
export const setProductDetail = (payload: ProductType) => ({
  type: SET_PRODUCT_DETAIL,
  payload,
});

// export const setIsBasket = (payload: {id:string,  } ) => ({
//   type: SET_BASKET,
//   payload,
// });
