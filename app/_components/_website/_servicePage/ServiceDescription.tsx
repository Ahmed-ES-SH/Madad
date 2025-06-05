"use client";
import React from "react";
import { motion } from "framer-motion";

interface ServiceDescriptionProps {
  smallDesc: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  local: "en" | "ar";
}

export default function ServiceDescription({
  smallDesc,
  description,
  local,
}: ServiceDescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <p className="text-primary-text text-lg mb-4">{smallDesc[local]}</p>
      <p className="text-primary-text/90">{description[local]}</p>
    </motion.div>
  );
}
