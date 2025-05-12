import { AppDispatch } from "@/store/store";
import { fetchCategoriesThunk, fetchProductsThunk } from "@/store/actions/ProductThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const useProductFilter = () => {
  const [searchParams] = useSearchParams();
  const distpatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const params = new URLSearchParams();

    const currentPage = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    params.set("pageNumber", (currentPage - 1).toString());

    const sortOrder = searchParams.get("sortby") || "asc";

    const categoryParams = searchParams.get("category") || null;

    const keyword = searchParams.get("keyword") || null;

    params.set("sortBy", "price");

    params.set("sortOrder", sortOrder);

    if(categoryParams) {
      params.set("category", categoryParams);
    }
    if(keyword){
        params.set("keyword", keyword);
    }

    const queryString = params.toString();
    distpatch(fetchProductsThunk(queryString));
    distpatch(fetchCategoriesThunk());
  }, [distpatch,searchParams]);
};
