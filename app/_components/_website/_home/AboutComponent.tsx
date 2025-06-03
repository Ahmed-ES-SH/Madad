"use client";
import React from "react";
import Link from "next/link";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

export default function AboutComponent() {
  const { local } = useVariables();
  const { aboutSection } = getTranslations(local);
  return (
    <>
      <section id="about" dir={directionMap[local]} className=" relative">
        <div className=" c-container py-8 sm:px-6 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <Img
              src="/madad-hero-2.png"
              className="lg:w-[650px] w-[550px] max-lg:mx-auto object-cover"
            />

            <div className="lg:py-24">
              <h2 className="text-xl ml-1 underline underline-primary-blue my-3  font-bold text-primary-red">
                {aboutSection.sectionTitleSmall}
              </h2>
              <h2 className="text-3xl text-primary-text  font-bold sm:text-4xl">
                {aboutSection.sectionTitleLarge}
              </h2>
              <p className="mt-4 w-full lg:w-3/4 lg:text-lg text-[17px] text-second-text">
                {aboutSection.description}
              </p>

              <Link href="/about" className="primary-btn group">
                {aboutSection.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
