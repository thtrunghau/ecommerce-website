import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";
import { RootState } from "@/store/store";
import { Filter } from "./Filter";
import { useProductFilter } from "../../hooks/useProductFIlter";
import { Loader } from "./Loader";


export const Products = () => {
  const { error, loading } = useSelector((state: RootState) => state.error);
  
  useProductFilter();

  const products = useSelector((state: RootState) => state.product.products);
  console.log("Products from store:", products);

  const categories = useSelector(
    (state: RootState) => state.product.categories,
  );

  console.log("Categories from store:", categories);


  return (
    <div className="px-4 py-14 sm:px-8 lg:px-14 2xl:mx-auto 2xl:w-[90%]">
      
      <Filter categories = { categories ? categories : []}/>
      
      {loading && <Loader text = {"Loading Product..."}/>}
      {error && (
        <div className="flex h-[200px] items-center justify-center">
          <FaExclamationTriangle className="mr-2 text-3xl text-slate-800" />
          <span className="text-lg font-medium text-slate-800">{error}</span>
        </div>
      )}

      <div className="min-h-[700px]">
        <div className="grid gap-6 pb-6 pt-14 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products &&
            products.map((product) => {
              // console.log(product);
              return <ProductCard key={product.productId} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};
