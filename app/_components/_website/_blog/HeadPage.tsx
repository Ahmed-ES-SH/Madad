// Header Component
"use client";

import { motion } from "framer-motion";

export default function HeadPage() {
  // const { local } = useVariables();
  // const { blogPage } = getTranslations(local);
  return (
    <motion.header
      className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="inline-block text-sm text-blue-600 font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          HONYE BLOG
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          IDEAS <span className="text-gray-400">THAT</span> INS
          <span className="relative">
            <span className="text-blue-600">P</span>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <span className="text-sm font-bold">💡</span>
            </motion.div>
          </span>
          IRE
        </motion.h1>
      </div>
    </motion.header>
  );
}
