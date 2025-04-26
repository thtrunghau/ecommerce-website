// store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice"; // nhớ đúng path của bạn nhé

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Type hỗ trợ cho useDispatch và useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
