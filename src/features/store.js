import { configureStore } from "@reduxjs/toolkit";
import juiceSlice from "./juice/juiceSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    juice: juiceSlice,
    cart: cartSlice,
  },
});

export default store;
