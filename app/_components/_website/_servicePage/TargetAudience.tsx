"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { getTranslations } from "@/app/helpers/helpers";

interface TargetAudienceProps {
  audience: {
    en: string;
    ar: string;
  };

  local: "en" | "ar";
}

export default function TargetAudience({
  audience,
  local,
}: TargetAudienceProps) {
  const { servicePage } = getTranslations(local);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center gap-3 mb-4">
        <FaUsers className="text-purple-500 mr-3 text-xl" />
        <h3 className="text-xl font-semibold text-primary-text">
          {servicePage.targetAudience}
        </h3>
      </div>
      <p className="text-primary-text pl-9">{audience.en}</p>
    </motion.div>
  );
}
