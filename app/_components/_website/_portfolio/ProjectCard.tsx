"use client";
import React, { useEffect, useState } from "react";
import Img from "../../_global/Img";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import { Project } from "./ProjectsPortfolio";
import { useRouter } from "next/navigation";
import { formatTitle } from "@/app/helpers/helpers";
import ShareButton from "./ShareButton";

interface props {
  project: Project;
  local: "en" | "ar";
  index: number;
}

export default function ProjectCard({ project, local, index }: props) {
  const router = useRouter();
  const [mainurl, setMainurl] = useState("");

  useEffect(() => {
    let currentUrl = window.location.href;

    if (!currentUrl.includes("/portfolio")) {
      if (currentUrl.endsWith("/")) {
        currentUrl += "portfolio";
      } else {
        currentUrl += "/portfolio";
      }
    }

    setMainurl(currentUrl);
  }, []);

  const goToProject = () => {
    router.push(
      `/${local}/portfolio/${formatTitle(project.title[local])}?projectId=${
        project.id
      }`
    );
  };
  return (
    <>
      <motion.div
        key={project.id}
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl shadow-lg  group cursor-pointer"
      >
        {/* Project Image */}
        <div className="relative z-[99]">
          <div className="h-48  overflow-hidden">
            <Img
              src={project.imgSrc}
              alt={project.title[local]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              onClick={goToProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
            >
              <FiEye className="w-5 h-5 text-gray-800" />
            </motion.button>
            <ShareButton
              link={`${mainurl}/${formatTitle(
                project.title[local]
              )}?projectId=${project.id}`}
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-sky-400/50 text-primary-blue rounded-full text-sm font-medium">
              {project.category[local]}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
            {project.title[local]}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.description[local]}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                +{project.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
