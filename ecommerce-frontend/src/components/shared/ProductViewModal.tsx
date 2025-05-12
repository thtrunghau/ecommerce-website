import { Product } from "@/types/product";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Divider } from "@mui/material";
import { Dispatch } from "react";
import { MdClose, MdDone } from "react-icons/md";
import { Status } from "./Status";

interface ProductViewModalProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  product: Product | null;
  isAvailable: boolean;
}

export const ProductViewModal: React.FC<ProductViewModalProps> = ({
  open,
  setOpen,
  product,
  isAvailable,
}) => {
  if (!product) return null;

  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="relative z-10"
        onClose={() => setOpen(false)}
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="sm:my relative w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:min-w-[620px] md:max-w-[620px]"
            >
              {product.image && (
                <div className="flex aspect-[3/2] w-full justify-center overflow-hidden">
                  <img src={product.image} alt={product.productName} />
                </div>
              )}
              <div className="px-6 pb-2 pt-10">
                <DialogTitle
                  as="h1"
                  className="text-xl font-semibold leading-6 text-gray-800 sm:text-2xl lg:text-3xl"
                >
                  {product.productName}
                </DialogTitle>

                <div className="mt-3 space-y-2 pb-4 text-sm text-gray-700">
                  <div className="flex items-center justify-between gap-2">
                    {product.specialPrice ? (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">
                          {Number(product.price).toFixed(3)} VND
                        </span>
                        <span className="text-sm font-bold text-slate-700 sm:text-xl">
                          {Number(product.specialPrice).toFixed(3)} VND
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-slate-700">
                        {" "}
                        {Number(product.price).toFixed(3)} VND
                      </span>
                    )}

                    {isAvailable ? (
                     
                      <Status
                      text = "Instock"
                      icon={MdDone}
                      bg="bg-teal-200"
                      color="text-teal 900"/>
                    ) : (
                      <Status
                      text = "Out of stock"
                      icon={MdClose}
                      bg="bg-rose-200"
                      color="text-teal 900"/>
                    )}
                  </div>
                  <Divider />

                  <p>{product.description}</p>
                </div>
                <div className="flex justify-end gap-4 px-6 py-4">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
