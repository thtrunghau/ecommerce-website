import { useSelector } from "react-redux";
import { HeroBanner } from "./HeroBanner";
import { AppDispatch, RootState } from "@/store/store";
import { ProductCard } from "../shared/ProductCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductsWithoutQueryThunk } from "@/store/actions/ProductThunk";
import { Loader } from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

export const Home = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const { error, loading } = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsWithoutQueryThunk());
  }, [dispatch]);
  return (
    <div className="px-4 sm:px-8 lg:px-14 2xl:mx-auto">
      <div className="py-6">
        <HeroBanner />
      </div>
      <div className="py-5">
        <div className="flex flex-col items-center justify-between gap-y-2">
          <h1 className="text-3xl font-bold text-slate-800">
            Featured Products
          </h1>
          <span className="text-slate-800">Discover our top-rated items</span>
        </div>
        {loading ? (
          <Loader text={"Loading Product..."} />
        ) : error ? (
          <div className="flex h-[200px] items-center justify-center">
            <FaExclamationTriangle className="mr-2 text-3xl text-slate-800" />
            <span className="text-lg font-medium text-slate-800">{error}</span>
          </div>
        ) : (
          <div className="grid gap-x-6 gap-y-6 pb-6 pt-14 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
            {products &&
              products.slice(0, 8).map((product) => {
                return (
                  <ProductCard key={product.productId} product={product} />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
