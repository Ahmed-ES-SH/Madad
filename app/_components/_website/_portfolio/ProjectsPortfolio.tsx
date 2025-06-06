"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import SidebarFilter from "./SidebarFilter";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import ServicesSlider from "./ServicesSlider";
import { directionMap } from "@/app/constants/constants";
import { projectsData } from "@/app/constants/projects";

export interface Project {
  id: number;
  imgSrc: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  skills: string[];
}

export default function ProjectsPortfolio() {
  const { local } = useVariables();
  const { portfolioPage } = getTranslations(local);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const projectsPerPage = 6;

  const projects = useMemo<Project[]>(() => projectsData, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;

    const matched = projects.filter(
      (project) => project.category.en === selectedCategory
    );

    const unmatched = projects.filter(
      (project) => project.category.en !== selectedCategory
    );

    return [...matched, ...unmatched];
  }, [projects, selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div
      dir={directionMap[local]}
      className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm border-b  border-b-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:w-1/2 w-full  mx-auto px-6 py-8">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {portfolioPage.projectsTitle}
                <span className="underline text-primary-red">
                  {portfolioPage.projectsTitleHighlight}
                </span>
              </h1>
              <p className="text-gray-600">
                {portfolioPage.projectsDescription}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="c-container py-4 mb-8">
        <div className=" py-12 flex gap-8">
          <SidebarFilter
            projects={projects}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600">
                Showing {startIndex + 1}-
                {Math.min(
                  startIndex + projectsPerPage,
                  filteredProjects.length
                )}{" "}
                of {filteredProjects.length} projects
                {selectedCategory !== "All" && (
                  <span className="ml-2 px-3 py-1 bg-sky-300/50 text-primary-blue rounded-full text-sm">
                    {selectedCategory}
                  </span>
                )}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
              layout
            >
              <AnimatePresence mode="sync">
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    local={local}
                    index={index}
                    project={project}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
        <ServicesSlider />
      </div>
    </div>
  );
}
