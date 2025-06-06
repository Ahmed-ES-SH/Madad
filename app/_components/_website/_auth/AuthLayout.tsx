"use client";
import React from "react";
import { motion } from "framer-motion";

interface propsType {
  children: React.ReactNode;
}

function AuthLayout(props: propsType) {
  const { children } = props;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 z-[999999]">
      <div className="xl:w-1/2 lg:w-[70%] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl lg:p-8 p-3 border border-gray-100"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default AuthLayout;
