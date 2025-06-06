"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { ReactNode } from "react";

interface SubmitButtonProps {
  isLoading: boolean;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function SubmitButton(props: SubmitButtonProps) {
  const { isLoading, children, onClick } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full flex items-center mt-3 justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl duration-200`}
      aria-label="Create account"
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <span>{children}</span>
          <FiArrowRight className="ml-2" />
        </>
      )}
    </motion.button>
  );
}

export default SubmitButton;
