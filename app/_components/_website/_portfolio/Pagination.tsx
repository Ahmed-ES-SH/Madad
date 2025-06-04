"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface props {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}: props) {
  return (
    <>
      {totalPages > 1 && (
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-3 rounded-xl transition-colors ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-xl transition-colors ${
                currentPage === page
                  ? "bg-primary-blue text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-xl transition-colors ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </>
  );
}
