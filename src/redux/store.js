import { configureStore } from '@reduxjs/toolkit';
import teas from "./teaSlice";
import cart from "./cartSlice";

export const store = configureStore({
  reducer: {
    teas,
    cart
  },
})