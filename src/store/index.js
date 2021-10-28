import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/login";
import todoSlice from "../reducer";

export const store = configureStore({
  reducer: {
    LOGIN: loginSlice,
    TODO: todoSlice,
  },
});