import { createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReducer from "./products/reducer";
import userReducer from "./user/reducer";
import modalsReducer from "./modals/reducer";
import settingsReducer from "./settings/reducer";
import reviewsReducer from "./reviews/reducer";

export const store = createStore(
  combineReducers({
    products: productReducer,
    modals: modalsReducer,
    user: userReducer,
    settings: settingsReducer,
    reviews: reviewsReducer,
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

type RootState = ReturnType<typeof store.getState>;
type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
