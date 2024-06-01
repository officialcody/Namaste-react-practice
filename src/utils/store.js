import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CounterSlice from "./slices/CounterSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    counter: CounterSlice,
  },
});

export default store;
