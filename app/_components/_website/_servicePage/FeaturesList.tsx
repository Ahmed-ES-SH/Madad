"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiLayers } from "react-icons/fi";
import { getTranslations } from "@/app/helpers/helpers";

interface FeaturesListProps {
  features: {
    en: string[];
    ar: string[];
  };
  local: "en" | "ar";
}

export default function FeaturesList({ features, local }: FeaturesListProps) {
  const { servicePage } = getTranslations(local);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold text-primary-text mb-4">
        {servicePage.features}
      </h3>
      <ul className="space-y-3">
        {features[local].map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <FiLayers className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
            <span className="text-primary-text">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
