"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceHeaderProps {
  title: {
    en: string;
    ar: string;
  };
  image: string;
  local: "en" | "ar";
}

export default function ServiceHeader({
  title,
  image,
  local,
}: ServiceHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-64 md:h-80 w-full relative">
        <Image
          src={image}
          alt={title.en}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-bold  text-center"
            suppressHydrationWarning
          >
            {title[local]}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
