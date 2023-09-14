import { configureStore, combineReducers } from "@reduxjs/toolkit";
import totalPriceReducer, { TotalPriceState } from "./TotalPrice";
import CartOrderReducer, { CartOrderState } from "./CartOrder";
import searchReducer, { searchData } from "./Search";
import AddressReducer, { AddressState } from "./Address";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ModalReducer, { ModalState } from "./Modal";

export type RootState = {
  totalPrice: TotalPriceState; // 이 부분은 실제 totalPriceReducer의 상태타입으로 변경해주세요.
  cartOrder: CartOrderState; // 이 부분은 실제 cartOrderReducer의 상태타입으로 변경해주세요.
  Address: AddressState;
  search: searchData; // 이 부분은 실제 searchReducer의 상태타입으로 변경해주세요.
  modal: ModalState; // 이 부분은 실제 ModalReducer의 상태타입으로 변경해주세요.
};
const rootReducer = combineReducers({
  totalPrice: totalPriceReducer,
  cartOrder: CartOrderReducer,
  Address: AddressReducer,
  search: searchReducer,
  modal: ModalReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["totalPrice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
  devTools: true,
});

export default store;
