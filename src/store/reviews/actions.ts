import { ProductsType } from "../../api";

export const SET_REVIEWS = "SET_REVIEWS";

export const setReviewProduct = (payload: ProductsType) => ({
  type: SET_REVIEWS,
  payload,
});
