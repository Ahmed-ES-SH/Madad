"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiCaretDoubleDownDuotone } from "react-icons/pi";
import { directionMap, socialIcons } from "@/app/constants/constants";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import LocalLink from "../../_global/LocalLink";

export default function Hero_section() {
  const { local } = useVariables();
  const { hero } = getTranslations(local);

  const imageVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const waveVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      dir={directionMap[local]}
      className="overflow-hidden w-full h-screen flex items-center justify-center"
    >
      <div className="flex items-center overflow-hidden justify-between  w-[90%] mx-auto   px-2  max-lg:flex-col max-lg:items-center">
        <motion.div
          className="content mt-10 max-lg:pt-20 flex flex-col gap-6 z-[99]"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="flex items-center gap-4 mb-6">
            {socialIcons.map((box, index) => (
              <LocalLink
                key={index}
                href={box.link}
                className="group hover:scale-[115%] duration-300 cursor-pointer relative overflow-hidden w-[34px] h-[34px] flex items-center justify-center rounded-md bg-slate-200/80 shadow-sm"
              >
                <box.icon className="size-6 z-[10] group-hover:text-white duration-300" />
                <div className="group-hover:w-full left absolute left-0 top-0 bg-primary-orange w-0 duration-300  h-[500px]"></div>
              </LocalLink>
            ))}
          </div>
          <h1 className="text-6xl max-lg:text-4xl font-semibold my-1 text-primary-text">
            {hero.title1}
          </h1>
          <h1 className="text-6xl max-lg:text-4xl font-semibold my-1 text-primary-text">
            <span className="text-primary-red">{hero.solutions}</span>{" "}
            {hero.forYour}
          </h1>
          <h1 className="text-5xl max-lg:text-3xl font-semibold text-primary-red">
            {hero.success}
          </h1>
          <p className="my-2 w-[70%]  max-lg:w-full">{hero.description}</p>
          <LocalLink
            href={"/signup"}
            className="px-4 block w-fit h-fit shadow-md group overflow-hidden  relative py-2 rounded-full bg-primary-blue"
          >
            <p className="z-[999] relative group-hover:text-black text-white duration-300">
              {hero.join}
            </p>
            <div className="group-hover:w-full left absolute right-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
            <div className="group-hover:w-full right absolute left-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
          </LocalLink>
        </motion.div>

        <motion.div
          className="z-[99] img-animate"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Img
            src="/image-3-copyright.svg"
            className=" w-[1130px] max-sm:w-[450px] max-lg:w-[600px]  self-center z-[999] relative rounded-md"
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 z-0 w-full"
        initial="hidden"
        animate="visible"
        variants={waveVariants}
      >
        <Img
          src="/big-wave.png"
          className="w-full  h-[300px] max-lg:h-full z-[9]"
        />
      </motion.div>
      <LocalLink
        className="up-down-2 z-[99]  absolute  bottom-[10%] max-lg:bottom-4 left-1/2 -translate-x-1/2 text-center m-auto w-fit cursor-pointer"
        href={"#about"}
      >
        <PiCaretDoubleDownDuotone size={33} className="" />
      </LocalLink>
    </div>
  );
}
