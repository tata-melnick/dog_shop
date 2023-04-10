export const IS_LOAD = "IS_LOAD";
export const IS_SEARCH_VALUE = "IS_SEARCH_VALUE";
export const INPUT_VALUE = "INPUT_VALUE";

export const setIsLoad = (payload: boolean) => ({
  type: IS_LOAD,
  payload,
});
export const setIsSearchValue = (payload: string) => ({
  type: IS_SEARCH_VALUE,
  payload,
});
export const setInputValue = (payload: string) => ({
  type: INPUT_VALUE,
  payload,
});
