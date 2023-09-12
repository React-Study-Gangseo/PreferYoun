import { configureStore, combineReducers } from "@reduxjs/toolkit";
import totalPriceReducer from "./TotalPrice";
import CartOrderReducer from "./CartOrder";
import searchReducer from "./Search";
import UserInfoReducer from "./Auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ModalReducer from "./Modal";
const rootReducer = combineReducers({
  UserInfo: UserInfoReducer,
  totalPrice: totalPriceReducer,
  cartOrder: CartOrderReducer,
  search: searchReducer,
  modal: ModalReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["totalPrice"],
};
const persistConfigUserInfo = {
  key: "UserInfo",
  storage,
  whitelist: ["UserInfo"],
};
const persistedReducerTotalPrice = persistReducer(persistConfig, rootReducer);
const persistedReducerUserInfo = persistReducer(
  persistConfigUserInfo,
  rootReducer
);

const store = configureStore({
  reducer: combineReducers({
    totalPrice: persistedReducerTotalPrice,
    UserInfo: persistedReducerUserInfo,
    cartOrder: CartOrderReducer,
    search: searchReducer,
    modal: ModalReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
  devTools: true,
});

export default store;
