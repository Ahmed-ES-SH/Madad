"use client";

import { directionMap } from "@/app/constants/constants";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import {
  FaBriefcase,
  FaGlobe,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

type StatItem = {
  icon: JSX.Element;
  label: { en: string; ar: string };
  targetNumber: number;
  colorClass: string;
  suffix?: string;
};

export default function CompanyStats() {
  const { local } = useVariables();
  const { companyStats } = getTranslations(local);
  const stats: StatItem[] = [
    {
      icon: <FaUsers size={40} />,
      label: {
        en: "Satisfied Clients",
        ar: "عملاء راضون",
      },
      targetNumber: 1200,
      colorClass: "text-blue-600",
      suffix: "+",
    },
    {
      icon: <FaBriefcase size={40} />,
      label: {
        en: "Completed Projects",
        ar: "مشاريع مكتملة",
      },
      targetNumber: 240,
      colorClass: "text-red-600",
      suffix: "+",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      label: {
        en: "Success Partners",
        ar: "شركاء النجاح",
      },
      targetNumber: 18,
      colorClass: "text-yellow-500",
      suffix: "",
    },
    {
      icon: <FaGlobe size={40} />,
      label: {
        en: "Countries Worldwide",
        ar: "دولة حول العالم",
      },
      targetNumber: 12,
      colorClass: "text-green-600",
      suffix: "",
    },
  ];

  function AnimatedCounter({
    targetNumber,
    start,
    suffix = "",
  }: {
    targetNumber: number;
    start: boolean;
    suffix?: string;
  }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let frame: number;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * targetNumber);
        setCount(current);

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [start, targetNumber]);

    return (
      <span className="text-4xl font-bold">
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      dir={directionMap[local]}
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-500 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {companyStats.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {companyStats.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map(
            ({ icon, label, targetNumber, colorClass, suffix }, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: 0.2 * idx,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div
                      className={`mb-6 mx-auto w-fit p-4 rounded-full bg-gray-50 group-hover:bg-white transition-colors duration-300 ${colorClass}`}
                    >
                      {icon}
                    </div>

                    <div className="mb-4">
                      <AnimatedCounter
                        targetNumber={targetNumber}
                        start={inView}
                        suffix={suffix}
                      />
                    </div>

                    <p className="text-gray-600 font-semibold text-lg">
                      {label[local]}
                    </p>

                    {/* Decorative line */}
                    <div
                      className={`w-12 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r ${
                        colorClass.includes("blue")
                          ? "from-blue-400 to-blue-600"
                          : colorClass.includes("red")
                          ? "from-red-400 to-red-600"
                          : colorClass.includes("yellow")
                          ? "from-yellow-400 to-yellow-600"
                          : "from-green-400 to-green-600"
                      }`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
