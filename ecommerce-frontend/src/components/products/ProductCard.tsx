import { Product } from "@/types/product";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductViewModal } from "./ProductViewModal";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [openProductViewModal, setOpenProductViewModal] =
    useState<boolean>(false);
  const btnLoader: boolean = false;
  const [selectedViewProduct, setSelectedViewProduct] =
    useState<Product | null>(null);
  const isAvailable: boolean =
    product.quantity && Number(product.quantity) > 0 ? true : false;

  const handleProductView = (product: Product) => {
    setSelectedViewProduct(product);
    setOpenProductViewModal(true);
  };
  return (
    <div className="overflow-hidden rounded-lg border shadow-xl transition-shadow duration-300">
      <div
        onClick={() => {
          handleProductView(product);
        }}
        className="aspect-[3/2] w-full overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.productName}
          className="h-full w-full transform cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2
          onClick={() => {
            handleProductView(product);
          }}
          className="mb-2 cursor-pointer text-lg font-semibold"
        >
          {product.productName}
        </h2>
        <div className="max-h-20 min-h-20 overflow-hidden">
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          {product.specialPrice ? (
            <div className="flex flex-col">
              <span className="text-gray-700 line-through">
                {Number(product.price).toFixed(3)} VND
              </span>
              <span className="text-xl font-bold text-slate-700">
                {Number(product.specialPrice).toFixed(3)} VND
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold text-slate-700">
              {" "}
              {Number(product.price).toFixed(3)} VND
            </span>
          )}

          <button
            disabled={!isAvailable}
            onClick={() => {
              handleProductView(product);
            }}
            className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"} flex w-36 items-center justify-center rounded-lg px-3 py-2 text-white transition duration-300 ease-in-out`}
          >
            <FaShoppingCart className="mr-2" />
            {isAvailable ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
      <ProductViewModal
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedViewProduct}
        isAvailable={isAvailable}
      />
    </div>
  );
};
