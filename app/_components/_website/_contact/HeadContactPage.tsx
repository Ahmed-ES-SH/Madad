// Header Component
"use client";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { motion } from "framer-motion";

export default function HeadContactPage() {
  const { local } = useVariables();
  const { contactPage } = getTranslations(local);
  return (
    <motion.header
      className="text-center py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {contactPage.contactTitle}
        </motion.h1>
        <motion.p
          className="text-xl text-blue-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {contactPage.contactDescription}
        </motion.p>
      </div>
    </motion.header>
  );
}
