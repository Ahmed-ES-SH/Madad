"use client";
import { useState } from "react";
import React from "react";
import {
  directionMap,
  projectCategories,
  projects,
} from "@/app/constants/constants";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import LocalLink from "../../_global/LocalLink";

export default function PortfolioSection() {
  const { local } = useVariables();
  const { portfolioSection } = getTranslations(local);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // filter logic
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category[local] === selectedCategory)
    : projects;

  return (
    <section
      dir={directionMap[local]}
      className="bg-white my-4 antialiased w-full"
    >
      <div className="c-container py-6 sm:py-16 lg:py-16">
        <div className="w-fit mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-red sm:text-4xl underline">
            {portfolioSection.title}
          </h2>
          <p className="mt-4 lg:w-3/4 w-full mx-auto text-base font-normal text-gray-500 sm:text-xl">
            {portfolioSection.description}
          </p>
        </div>

        {/* Filter section */}
        <div className="mt-8 flex justify-center">
          <div className="space-x-4 flex items-center justify-center flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === null
                  ? "bg-primary-blue text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              {portfolioSection.all}
            </button>
            {projectCategories.slice(0, 5).map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category[local]
                    ? "bg-primary-blue text-white"
                    : "bg-gray-200 whitespace-nowrap text-gray-800"
                }`}
                onClick={() => setSelectedCategory(category[local])}
              >
                {category[local]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects with animation */}
        <motion.div
          layout
          className={`grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 justify-items-center gap-4 w-full mt-6`}
        >
          <AnimatePresence mode="sync">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} local={local} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <LocalLink
          href="/portfolio"
          className="primary-btn w-fit mx-auto group mt-8 block"
        >
          {portfolioSection.showMore}
        </LocalLink>
      </div>
    </section>
  );
}
