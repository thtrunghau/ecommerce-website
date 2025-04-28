// productThunk.ts
import { AppDispatch } from "@/store/store"; 
import { api } from "../../api/api";
import { Product } from "@/types/product";
import { fetchProducts, setPagination } from "../features/ProductSlice";
import { setError, setLoading } from "../features/ErrorSlice";

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
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await api.get<ProductResponse>("/public/products");

      dispatch(fetchProducts(response.data.content));
      dispatch(
        setPagination({
          pageNumber: response.data.pageNumber,
          pageSize: response.data.pageSize,
          totalPage: response.data.totalPage,
          totalElements: response.data.totalElements,
          lastPage: response.data.lastPage,
        }),
      );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: string | any  ) {
      dispatch(setError(error.response?.data?.message ||"Failed to fetch products."));
      console.error("Error fetching products:", error);
    }finally{
      dispatch(setLoading(false));
    }
  };
};
