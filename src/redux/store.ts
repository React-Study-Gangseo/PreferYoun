import { configureStore } from "@reduxjs/toolkit";
import totalPriceReducer from "./TotalPrice";

export default configureStore({
  reducer: {
    totalPrice: totalPriceReducer,
  },
});
