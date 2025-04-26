import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";

export const Products = () => {
  const isLoading: boolean = false; // This would typically come from a state or prop
  const errorMessage: string | null = null; // This would typically come from a state or prop
  const products: Product[] = [
    {
      productId: 652,
      productName: "Iphone Xs max",
      image: "https://placehold.co/600x400",
      description:
        "Experience the latest in mobile technology with advanced cameras, powerful processing, and an all-day battery.",
      quantity: 1,
      price: 1450.0,
      discount: 10.0,
      specialPrice: 1305.0,
    },
    {
      productId: 654,
      productName: "MacBook Air M2s",
      image: "https://placehold.co/600x400",
      description:
        "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
      quantity: 0,
      price: 2550.0,
      discount: 20.0,
      specialPrice: 2342.0,
    },
  ]; // This would typically come from a state or prop
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
            products.map((prduct, index) => (
                <ProductCard key={index} product={prduct} />
            ))}
        </div>
      </div>
    </div>
  );
};
