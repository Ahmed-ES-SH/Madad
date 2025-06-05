"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { getTranslations } from "@/app/helpers/helpers";

interface BenefitsListProps {
  benefits: {
    en: string[];
    ar: string[];
  };
  local: "en" | "ar";
}

export default function BenefitsList({ benefits, local }: BenefitsListProps) {
  const { servicePage } = getTranslations(local);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold text-primary-text mb-4">
        {servicePage.benefits}
      </h3>
      <ul className="space-y-3">
        {benefits[local].map((benefit, index) => (
          <li key={index} className="flex gap-3 items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span className="text-primary-text">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
