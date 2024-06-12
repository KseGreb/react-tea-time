import { configureStore } from '@reduxjs/toolkit';
import teas from "./teaSlice"

export const store = configureStore({
  reducer: {
    teas
  },
})