import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi";

export const Filter = () => {
  const [category, setCategory] = useState<string>("all");

  const categories = [
    { categoryId: 1, categoryName: "Electronics" },
    { categoryId: 2, categoryName: "Books" },
    { categoryId: 3, categoryName: "Clothing" },
    { categoryId: 4, categoryName: "Home Appliances" },
    { categoryId: 5, categoryName: "Toys" },
  ];

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-4 px-4 lg:flex-row lg:justify-between">
      {/* Seacrch bar */}
      <div className="relative flex w-full items-center sm:w-[420px] 2xl:w-[450px]">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full rounded-md border border-gray-400 py-2 pl-10 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <FiSearch size={20} className="absolute left-3 text-slate-800" />
      </div>

      {/* Category Selection */}
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

        {/* Sort button and clear filter */}
        {/* Sort */}
        <Tooltip title="Sort by Price: asc">
          <Button
            variant="contained"
            color="primary"
            className="flex h-10 items-center gap-2"
          >
            Sort by
            <FiArrowUp size={20} />
          </Button>
        </Tooltip>

        {/* Clear filter */}
        <button className="flex items-center gap-2 rounded-md bg-rose-700 px-3 py-2 text-white hover:bg-rose-800">
          <FiRefreshCw size={20} />
          Clear Filter
        </button>
      </div>
    </div>
  );
};
