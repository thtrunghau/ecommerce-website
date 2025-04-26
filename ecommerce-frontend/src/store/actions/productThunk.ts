// productThunk.ts
import { AppDispatch } from "@/store/store"; // tí nữa mình sẽ tạo store.ts
import { api } from "../../api/api";
import { Product } from "@/types/product";
import { fetchProducts, setPagination } from "../features/ProductSlice";

interface ProductResponse {
  content: Product[];
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalElements: number;
  lastPage: boolean;
}

export const fetchProductsThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api.get<ProductResponse>("/public/products");

      console.log("API response:", response);
      dispatch(fetchProducts(response.data.content));
      dispatch(
        setPagination({
          pageNumber: response.data.pageNumber,
          pageSize: response.data.pageSize,
          totalPage: response.data.totalPage,
          totalElements: response.data.totalElements,
          lastPage: response.data.lastPage,
        })
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
