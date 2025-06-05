"use client";
import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFilter } from "react-icons/fi";
import { Project } from "./ProjectsPortfolio";
import { FaTimes } from "react-icons/fa";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";

interface props {
  projects: Project[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

export default function SidebarFilter({
  projects,
  selectedCategory,
  setSelectedCategory,
  setCurrentPage,
  setIsSidebarOpen,
  isSidebarOpen,
}: props) {
  const { width, local } = useVariables();
  const { portfolioPage } = getTranslations(local);
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map((project) => project.category.en))
    );
    return ["All", ...uniqueCategories];
  }, [projects]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (width < 1024) setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (width > 1024) {
      setIsSidebarOpen(true);
    }
  }, [setIsSidebarOpen, width]);

  return (
    <>
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden bg-primary-blue text-white p-3 rounded-xl border border-transparent duration-300 fixed bottom-4 right-4 hover:text-black hover:scale-110 hover:bg-white hover:border-primary-blue z-[99999]"
        >
          <FiFilter className="size-7" />
        </button>
      )}
      {/* Sidebar - Desktop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="max-lg:fixed max-lg:h-screen max-lg:w-[340px] top-0 left-0 max-lg:z-[9999] block w-80 flex-shrink-0"
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="bg-white max-lg:h-full max-lg:w-full lg:rounded-2xl shadow-lg p-6 lg:sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiFilter className="w-5 h-5 text-primary-blue" />
                {portfolioPage.filter}
              </h3>
              <FaTimes
                onClick={() => setIsSidebarOpen(false)}
                className={`absolute top-4 ${
                  local == "ar" ? "left-4" : "right-4"
                } cursor-pointer hover:scale-125 hover:text-red-500 duration-300 text-red-300 lg:hidden`}
              />
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 block hover:scale-110 ${
                      selectedCategory === category
                        ? "bg-primary-blue text-white shadow-lg"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category}
                    <span className="float-right text-sm opacity-70 duration-200">
                      (
                      {category === "All"
                        ? projects.length
                        : projects.filter((p) => p.category.en === category)
                            .length}
                      )
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
