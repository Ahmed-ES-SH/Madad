"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

export default function Contact() {
  const { local } = useVariables();
  const { contactAbout } = getTranslations(local);
  return (
    <>
      {/* Contact CTA Section */}
      <section
        dir={directionMap[local]}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-6 lg:text-center">
          <AnimatedSection>
            <h2 className="lg:text-4xl text-xl font-bold mb-6">
              {contactAbout.title}
            </h2>
            <p className="text-[14px]  mb-8 opacity-90 max-w-2xl mx-auto">
              {contactAbout.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <FaEnvelope />
                {contactAbout.getFreeQuote}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400  text-white hover:bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <FaPhone />
                {contactAbout.scheduleCall}
              </motion.button>
            </div>

            <div className="flex justify-center flex-wrap max-md:items-start max-lg:flex-col gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                info@madad.tech
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                +20 100 123 4567
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Cairo, Egypt
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
