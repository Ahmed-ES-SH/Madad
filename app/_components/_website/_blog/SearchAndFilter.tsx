// Search and Filter Component
"use client";
interface props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalResults: number;
  isLoading: boolean;
}

import { FiChevronDown, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";

export default function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  totalResults,
  isLoading,
}: props) {
  const { local } = useVariables();
  const { blogPage } = getTranslations(local);
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {blogPage.showing}{" "}
          <span className="font-semibold">
            {totalResults} {blogPage.Results}
          </span>
        </span>
      </div>

      <div className="flex items-center max-md:flex-col max-md:items-start max-md:w-full gap-4">
        <div className="relative max-md:w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full md:w-[320px] xl:w-[550px] pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="relative max-md:w-full">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            disabled={isLoading}
            className="appearance-none max-md:w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="recent">{blogPage.sortBy.recent}</option>
            <option value="popular">{blogPage.sortBy.popular}</option>
            <option value="oldest">{blogPage.sortBy.oldest}</option>
          </select>
          <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
