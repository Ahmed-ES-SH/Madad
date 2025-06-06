"use client";
import React from "react";
import { motion } from "framer-motion";

interface FormHeaderProps {
  title: string;
  subtitle?: string;
}

function FormHeader(props: FormHeaderProps) {
  const { title, subtitle } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-2"
    >
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

export default FormHeader;
