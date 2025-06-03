"use client";
import React from "react";
import Img from "../../_global/Img";
import { motion } from "framer-motion";

export interface projectType {
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

interface props {
  project: projectType;
  local: "en" | "ar";
}

export default function ProjectCard({ project, local }: props) {
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="border cursor-pointer border-gray-300 w-full  relative group overflow-hidden rounded-lg shadow-lg"
    >
      <div className="h-[280px] w-full overflow-hidden rounded-t-lg">
        <Img
          src={project.imgSrc}
          className="w-full h-full object-cover  group-hover:scale-[115%] group-hover:rotate-1 duration-300"
        />
      </div>
      <div className="content h-[25vh] pb-12 pt-6 px-3 flex flex-col items-start gap-3">
        <h3 className="text-2xl  leading-tight text-primary-yellow group-hover:underline duration-300">
          {project.title[local]}
        </h3>
        <p className="text-lg font-normal text-gray-500 ">
          {project.description[local]}
        </p>
      </div>
      <div className="skills absolute duration-300 group-hover:bottom-4 -bottom-48 left-0 w-full flex items-center gap-1 flex-wrap px-2">
        {project.skills &&
          project.skills.map((skill, index) => (
            <div
              key={index}
              className="px-2 py-1 text-center text-[14px] rounded-md shadow-md"
            >
              #{skill}
            </div>
          ))}
      </div>
    </motion.div>
  );
}
