import { Category } from "@/types/category";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface FilterProps {
  categories: Category[];
}

export const Filter: React.FC<FilterProps> = ({ categories }) => {
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [category, setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const currentCategory = searchParams.get("category") || "all";
    const currentSortOrder = searchParams.get("sortby") || "asc";
    const currentSearchTerm = searchParams.get("keyword") || "";

    setCategory(currentCategory);
    setSortOrder(currentSortOrder);
    setSearchTerm(currentSearchTerm);
  }, [searchParams]);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    navigate(`${pathname}?${params.toString()}`);
    setCategory(event.target.value);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const newParams = new URLSearchParams(params);
    newParams.set("sortby", newSortOrder);
    navigate(`${pathname}?${newParams.toString()}`);
  };

  const handleClearFilter = () => {
    navigate({ pathname: window.location.pathname });
    setCategory("all");
    setSortOrder("asc");
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        searchParams.set("keyword", searchTerm);
      } else {
        searchParams.delete("keyword");
      }
      navigate(`${pathname}?${searchParams.toString()}`);
    }, 800);
    return () => clearTimeout(handler);
  }, [searchParams, searchTerm, navigate, pathname]);

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-4 px-4 lg:flex-row lg:justify-between">
      <div className="relative flex w-full items-center sm:w-[420px] 2xl:w-[450px]">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Products"
          className="w-full rounded-md border border-gray-400 py-2 pl-10 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <FiSearch size={20} className="absolute left-3 text-slate-800" />
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <FormControl
          variant="outlined"
          size="small"
          className="border border-slate-700 text-slate-800"
        >
          <InputLabel>Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            className="min-w-[130px] text-slate-800"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.categoryId} value={category.categoryName}>
                {category.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Tooltip
          title={`Sort by Price: ${sortOrder === "asc" ? "Ascending" : "Descending"}`}
        >
          <Button
            onClick={toggleSortOrder}
            variant="contained"
            color="primary"
            className="flex h-10 items-center gap-2"
          >
            Sort by
            {sortOrder === "asc" ? (
              <FiArrowUp size={20} />
            ) : (
              <FiArrowDown size={20} />
            )}
          </Button>
        </Tooltip>

        <button
          onClick={handleClearFilter}
          className="flex items-center gap-2 rounded-md bg-rose-700 px-3 py-2 text-white hover:bg-rose-800"
        >
          <FiRefreshCw size={20} />
          Clear Filter
        </button>
      </div>
    </div>
  );
};