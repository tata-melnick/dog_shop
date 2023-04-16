import { ReviewType } from "../../api";

export const SET_REVIEWS_LIST = "SET_REVIEWS_LIST";
export const SET_REVIEWS_DETAIL = "SET_REVIEWS_DETAIL";

export const setReviewList = (payload: Array<ReviewType>) => ({
  type: SET_REVIEWS_LIST,
  payload,
});

export const setReviewDetail = (payload: ReviewType) => ({
  type: SET_REVIEWS_LIST,
  payload,
});
