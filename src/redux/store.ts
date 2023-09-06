import { configureStore } from "@reduxjs/toolkit";
import totalPriceReducer from "./TotalPrice";
import CartOrderReducer from "./CartOrder";
export default configureStore({
  reducer: {
    totalPrice: totalPriceReducer,
    cartOrder: CartOrderReducer,
  },
});
