import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { fetchProductsThunk } from "../../store/actions/productThunk";

export const Products = () => {
  console.log("Products component rendered");
  const isLoading: boolean = false;
  const errorMessage: string | null = null;
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: RootState) => state.product.products);
  console.log("Products from store:", products);
  useEffect(() => {
    dispatch(fetchProductsThunk()); // fetch trang 1 size 10 khi load component
  }, [dispatch]);

  return (
    <div className="px-4 py-14 sm:px-8 lg:px-14 2xl:mx-auto 2xl:w-[90%]">
      {isLoading && <div className="text-center">Loading...</div>}
      {errorMessage && (
        <div className="flex h-[200px] items-center justify-center">
          <FaExclamationTriangle className="mr-2 text-3xl text-slate-800" />
          <span className="text-lg font-medium text-slate-800">
            {errorMessage}
          </span>
        </div>
      )}

      <div className="min-h-[700px]">
        <div className="grid gap-6 pb-6 pt-14 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products &&
            products.map((product) => {
              console.log(product);
              return <ProductCard key={product.productId} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};
