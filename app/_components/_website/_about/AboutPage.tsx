"use client";
import React from "react";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

export default function AboutPage() {
  const { local } = useVariables();
  const { aboutPage } = getTranslations(local);
  return (
    <>
      <section
        dir={directionMap[local]}
        className="c-container h-fit flex items-center justify-end relative bg-gray-50 max-md:pt-32 pt-24"
      >
        <div className="w-full px-4 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-3xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            {aboutPage.hero_title}
            <span className="text-primary-red">{aboutPage.smartTool}</span>
          </h1>
          <p className="lg:max-w-sm max-md:text-[13px] mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            {aboutPage.hero_description}
          </p>
        </div>
      </section>

      <section className="c-container my-4 relative">
        <div className="mx-auto w-full relative ">
          <div className="flex items-center justify-between max-xl:flex-col max-xl:items-start w-full gap-8 xl:gap-12">
            <div className="w-[500px] max-md:w-full mx-auto flex-1">
              <Img
                src="/madad-about.png"
                className="w-[550px] max-md:w-full rounded-md  object-cover"
              />
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <h2 className="font-bold text-4xl lg:text-5xl text-primary-red underline mb-9  relative">
                  {aboutPage.about_us_title}
                </h2>
                <p className="max-md:text-[15px] text-lg xl:text-xl xl:leading-8 text-second-text max-w-3xl block">
                  {aboutPage.about_us_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="c-container my-4 py-8 relative">
        <div className="relative">
          <div className="flex items-center justify-between max-xl:flex-col-reverse max-xl:items-start w-full gap-8 xl:gap-12">
            <div className="flex items-center">
              <div className="w-full">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary-red underline mb-9 whitespace-nowrap  relative">
                  {aboutPage.creative_title}
                </h2>
                <p className="max-md:text-[15px] text-lg lg:text-xl lg:leading-8 text-second-text max-w-2xl">
                  {aboutPage.creative_description}
                </p>
              </div>
            </div>
            <div className="max-xl:mx-auto flex-1">
              <Img
                src="/madad-removebg-preview.png"
                className="w-[550px] max-md:w-full block ml-auto rounded-md  object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
