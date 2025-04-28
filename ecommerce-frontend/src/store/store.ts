// store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice";
import errorReducer from "./features/ErrorSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    error: errorReducer,
  },
});

// Type hỗ trợ cho useDispatch và useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
