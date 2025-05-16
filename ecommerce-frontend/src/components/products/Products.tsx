import { useSelector } from "react-redux";
import { ProductCard } from "@/components/shared/ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";
import { RootState } from "@/store/store";
import { Filter } from "./Filter";
import { useProductFilter } from "@/hooks/useProductFilter";
import { Loader } from "@/components//shared/Loader";
import { Paginations } from "@/components//shared/Paginations";

export const Products = () => {
  const { error, loading } = useSelector((state: RootState) => state.error);

  useProductFilter();

  const products = useSelector((state: RootState) => state.product.products);
  console.log("Products from store:", products);

  const categories = useSelector(
    (state: RootState) => state.product.categories,
  );

  const paginations = useSelector(
    (state: RootState) => state.product.pagination,
  );

  console.log("total page", paginations.totalPage);

  return (
    <div className="px-4 py-14 sm:px-8 lg:px-14 2xl:mx-auto 2xl:w-[90%]">
      <Filter categories={categories ? categories : []} />

      {loading ? (
        <Loader text={"Loading Product..."} />
      ) : error ? (
        <div className="flex h-[200px] items-center justify-center">
          <FaExclamationTriangle className="mr-2 text-3xl text-slate-800" />
          <span className="text-lg font-medium text-slate-800">{error}</span>
        </div>
      ) : (
        <div className="min-h-[700px]">
          <div className="grid gap-x-6 gap-y-6 pb-6 pt-14 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
            {products &&
              products.map((product) => {
                // console.log(product);
                return (
                  <ProductCard key={product.productId} product={product} />
                );
              })}
          </div>
          <div className="mt-2 flex items-center justify-center">
            <Paginations
              numberOfPage={paginations.totalPage}
              totalOfProduct={paginations.totalElements}
            />
          </div>
        </div>
      )}
    </div>
  );
};
