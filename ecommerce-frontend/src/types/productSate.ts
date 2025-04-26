import { Category } from "./category";
import { Pagination } from "./pagination";
import { Product } from "./product";

export interface ProductState {
  products: Product[] | null;
  categories: Category[] | null;
  pagination: Pagination;
}
