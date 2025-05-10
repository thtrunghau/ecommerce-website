// ProductSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { Pagination } from "@/types/pagination";
import { ProductState } from "@/types/productSate";
import { Category } from "@/types/category";

const initialState: ProductState = {
  products: null,
  categories: null,
  pagination: {
    pageNumber: 1,
    pageSize: 10,
    totalPage: 0,
    totalElements: 0,
    lastPage: false,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    fetchCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    setPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = action.payload;
    },
    resetProducts(state) {
      state.products = null;
    },
  },
});

export const { fetchProducts, fetchCategories, setPagination, resetProducts } =
  productSlice.actions;
export default productSlice.reducer;
